import { type Ingredient } from '../src/lib/ingredients.js';

export function generateIngredientId(name: string): string {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export function normalizeIngredientName(name: string): string {
	// Keep original spacing and special characters, just normalize case
	return name
		.trim()
		.toLowerCase()
		.replace(/(?:^|\s|-|\(|\/)([a-z])/g, (m, p1) => m.replace(p1, p1.toUpperCase()));
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
	ingredientsMap: Record<string, { Ingredients?: string; id: string }>,
	existingIngredients: Record<string, Ingredient> = {}
): Record<string, Ingredient> {
	const ingredientMap = new Map<string, Ingredient>();

	// First, add all existing ingredients to preserve manual additions
	Object.entries(existingIngredients).forEach(([id, ingredient]) => {
		ingredientMap.set(id, { ...ingredient });
	});

	// Process each product's ingredients
	Object.entries(ingredientsMap).forEach(([productId, product]) => {
		if (!product.Ingredients) return;

		const ingredients = parseIngredientString(product.Ingredients);

		ingredients.forEach((ingredient) => {
			const normalizedName = normalizeIngredientName(ingredient);
			const id = generateIngredientId(ingredient);

			// If ingredient exists, update its products array
			if (ingredientMap.has(id)) {
				const existingIngredient = ingredientMap.get(id)!;
				const products = existingIngredient.products || [];
				if (!products.includes(productId)) {
					products.push(productId);
				}
				ingredientMap.set(id, {
					...existingIngredient,
					products
				});
				return;
			}

			// Add new ingredient with product reference
			ingredientMap.set(id, {
				name: normalizedName,
				id,
				products: [productId]
			});
		});
	});

	// Convert to record and sort by name
	return Object.fromEntries(
		Array.from(ingredientMap.entries()).sort(([, a], [, b]) => a.name.localeCompare(b.name))
	);
}
