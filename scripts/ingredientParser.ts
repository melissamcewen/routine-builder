import { type Ingredient } from '../src/lib/ingredients.js';

// List of ingredients to exclude from parsing
export const EXCLUDED_INGREDIENTS = ['Water', 'Aqua (Water)', 'Aqua/Water/Eau', 'Aqua (Water/Eau)'];

// Map of ingredient synonyms to their primary names
export const INGREDIENT_SYNONYMS: Record<string, string> = {
	'Sodium Hyaluronate': 'Hyaluronic Acid',
	'Hydrolyzed Hyaluronic Acid': 'Hyaluronic Acid',
	'Hyaluronate Sodium': 'Hyaluronic Acid',
	Hyaluronan: 'Hyaluronic Acid',
	'Sodium Hyaluronate Crosspolymer': 'Hyaluronic Acid'
};

export function generateIngredientId(name: string): string {
	// For synonyms, use the primary ingredient name to generate the ID
	const primaryName = INGREDIENT_SYNONYMS[name] || name;
	return primaryName
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export function normalizeIngredientName(name: string): string {
	// Keep original spacing and special characters, just normalize case
	const normalized = name
		.trim()
		.toLowerCase()
		.replace(/(?:^|\s|-|\(|\/)([a-z])/g, (m, p1) => m.replace(p1, p1.toUpperCase()));

	// Return the primary name if this is a synonym
	return INGREDIENT_SYNONYMS[normalized] || normalized;
}

export function parseIngredientString(ingredientString: string): string[] {
	// Special cases that contain commas but are single ingredients
	const specialCases = ['1,2-Hexanediol'];

	let ingredients = ingredientString;

	// Temporarily replace special cases
	specialCases.forEach((specialCase, index) => {
		ingredients = ingredients.replace(specialCase, `SPECIAL_CASE_${index}`);
	});

	// Split and process
	const result = ingredients.split(',').map((ingredient) => {
		let processed = ingredient.trim();

		// Replace back special cases
		specialCases.forEach((specialCase, index) => {
			processed = processed.replace(`SPECIAL_CASE_${index}`, specialCase);
		});

		return processed;
	});

	return result.filter(Boolean); // Remove empty strings
}

export function parseIngredients(
	ingredientsMap: Record<string, { Ingredients?: string; KeyIngredients?: string; id: string }>,
	existingIngredients: Record<string, Ingredient> = {}
): Record<string, Ingredient> {
	const ingredientMap = new Map<string, Ingredient>();

	// First, add all existing ingredients to preserve manual additions
	Object.entries(existingIngredients).forEach(([id, ingredient]) => {
		// Skip excluded ingredients
		if (!EXCLUDED_INGREDIENTS.includes(ingredient.name)) {
			// If this is a synonym, update to use primary name
			const primaryName = INGREDIENT_SYNONYMS[ingredient.name] || ingredient.name;
			const primaryId = generateIngredientId(primaryName);

			if (primaryId !== id) {
				// This is a synonym, merge with primary ingredient if it exists
				const existingPrimary = ingredientMap.get(primaryId);
				if (existingPrimary) {
					ingredientMap.set(primaryId, {
						...existingPrimary,
						products: [
							...new Set([...(existingPrimary.products || []), ...(ingredient.products || [])])
						],
						tags: [...new Set([...(existingPrimary.tags || []), ...(ingredient.tags || [])])]
					});
				} else {
					ingredientMap.set(primaryId, {
						...ingredient,
						name: primaryName,
						id: primaryId
					});
				}
			} else {
				ingredientMap.set(id, { ...ingredient });
			}
		}
	});

	// Process each product's ingredients and key ingredients
	Object.entries(ingredientsMap).forEach(([productId, product]) => {
		if (!product.Ingredients) return;

		const ingredients = parseIngredientString(product.Ingredients);
		const keyIngredients = product.KeyIngredients
			? parseIngredientString(product.KeyIngredients)
			: [];

		ingredients.forEach((ingredient) => {
			const normalizedName = normalizeIngredientName(ingredient);

			// Skip excluded ingredients
			if (EXCLUDED_INGREDIENTS.includes(normalizedName)) {
				return;
			}

			const id = generateIngredientId(normalizedName);
			const isKeyIngredient = keyIngredients.some(
				(key) => normalizeIngredientName(key) === normalizedName
			);

			// If ingredient exists, update its products array and tags
			if (ingredientMap.has(id)) {
				const existingIngredient = ingredientMap.get(id)!;
				const products = existingIngredient.products || [];
				const tags = new Set(existingIngredient.tags || []);

				if (!products.includes(productId)) {
					products.push(productId);
				}

				if (isKeyIngredient) {
					tags.add('key-ingredient');
				}

				ingredientMap.set(id, {
					...existingIngredient,
					products,
					tags: Array.from(tags)
				});
				return;
			}

			// Add new ingredient with product reference and tags
			ingredientMap.set(id, {
				name: normalizedName,
				id,
				products: [productId],
				tags: isKeyIngredient ? ['key-ingredient'] : []
			});
		});

		// Check for key ingredients that weren't found in the main ingredients list
		keyIngredients.forEach((keyIngredient) => {
			const normalizedName = normalizeIngredientName(keyIngredient);
			const id = generateIngredientId(normalizedName);

			if (!ingredientMap.has(id) && !EXCLUDED_INGREDIENTS.includes(normalizedName)) {
				console.warn(
					`Warning: Key ingredient "${normalizedName}" not found in ingredients list for product "${productId}". This might be a synonym that needs to be added to INGREDIENT_SYNONYMS.`
				);
			}
		});
	});

	// Convert to record and sort by name
	return Object.fromEntries(
		Array.from(ingredientMap.entries()).sort(([, a], [, b]) => a.name.localeCompare(b.name))
	);
}
