import { type Ingredient } from '../src/lib/types/ingredients.js';
import fs from 'fs';
import path from 'path';

// List of ingredients to exclude from parsing
export const EXCLUDED_INGREDIENTS = ['Water', 'Aqua (Water)', 'Aqua/Water/Eau', 'Aqua (Water/Eau)'];

// Path for storing missing key ingredients
const MISSING_INGREDIENTS_PATH = path.join(process.cwd(), 'data', 'missing-key-ingredients.json');

// Function to load existing missing ingredients
function loadMissingIngredients(): Record<string, string[]> {
	try {
		if (fs.existsSync(MISSING_INGREDIENTS_PATH)) {
			return JSON.parse(fs.readFileSync(MISSING_INGREDIENTS_PATH, 'utf-8'));
		}
	} catch (error) {
		console.error('Error reading missing ingredients file:', error);
	}
	return {};
}

// Function to save missing ingredients
function saveMissingIngredients(missingIngredients: Record<string, string[]>) {
	try {
		// Ensure the directory exists
		const dir = path.dirname(MISSING_INGREDIENTS_PATH);
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}
		fs.writeFileSync(MISSING_INGREDIENTS_PATH, JSON.stringify(missingIngredients, null, 2));
	} catch (error) {
		console.error('Error saving missing ingredients:', error);
	}
}

// Function to handle missing key ingredients
function handleMissingKeyIngredient(ingredient: string, productId: string) {
	const missingIngredients = loadMissingIngredients();
	const normalizedIngredient = normalizeIngredientName(ingredient);

	// If this ingredient is already tracked for this product, skip
	if (missingIngredients[normalizedIngredient]?.includes(productId)) {
		return;
	}

	// Add the product to the list for this ingredient
	if (!missingIngredients[normalizedIngredient]) {
		missingIngredients[normalizedIngredient] = [];
	}
	missingIngredients[normalizedIngredient].push(productId);

	// Remove any other case variations of the same ingredient
	Object.keys(missingIngredients).forEach((key) => {
		if (key.toLowerCase() === normalizedIngredient.toLowerCase() && key !== normalizedIngredient) {
			delete missingIngredients[key];
		}
	});

	// Save updated missing ingredients
	saveMissingIngredients(missingIngredients);

	// Log the warning
	console.warn(
		`Warning: Key ingredient "${normalizedIngredient}" not found in ingredients list for product "${productId}". ` +
			`This might be a synonym that needs to be added to INGREDIENT_SYNONYMS. ` +
			`This warning has been logged to ${MISSING_INGREDIENTS_PATH}`
	);
}

// Map of ingredient categories
export const INGREDIENT_CATEGORIES: Record<string, string> = {
	Arginine: 'amino-acids',
	Glycine: 'amino-acids',
	Alanine: 'amino-acids',
	Serine: 'amino-acids',
	Proline: 'amino-acids',
	Threonine: 'amino-acids',
	'Glutamic Acid': 'amino-acids',
	'Lysine Hcl': 'amino-acids',
	'Linoleic Acid': 'fatty-acids',
	'Oleic Acid': 'fatty-acids',
	'Palmitic Acid': 'fatty-acids',
	'Stearic Acid': 'fatty-acids',
	'Sodium Lactate': 'lactates',
	'Magnesium Sulfate': 'minerals',
	'Sodium Chloride': 'minerals',
	Asiaticoside: 'centella-asiatica-phytotechnologies',
	'Asiatic Acid': 'centella-asiatica-phytotechnologies',
	'Madecassic Acid': 'centella-asiatica-phytotechnologies',
	'Cetylhydroxyproline Palmitamide': 'synthetic-oat-analogues',
	Sphingolipids: 'ceramides'
};

// Map of ingredient synonyms to their primary names
export const INGREDIENT_SYNONYMS: Record<string, string> = {
	'Sodium Hyaluronate': 'Hyaluronic Acid',
	'Hydrolyzed Hyaluronic Acid': 'Hyaluronic Acid',
	'Hyaluronate Sodium': 'Hyaluronic Acid',
	Hyaluronan: 'Hyaluronic Acid',
	'Hydrolyzed Sodium Hyaluronate': 'Hyaluronic Acid',
	'Sodium Hyaluronate Crosspolymer': 'Hyaluronic Acid',
	Panthenol: 'Pro-Vitamin B5',
	'N-Acetyl Glucosamine': 'N-Acetyl Glucosamine',
	'N-Acetylglucosamine': 'N-Acetyl Glucosamine',
	Ethylbisiminomethylguaiacol: 'EUK 134',
	'Ethylbisiminomethylguaiacol Manganese Chloride': 'EUK 134',
	Retinal: 'Retinaldehyde',
	'Yeast Extract': 'Saccharomyces Ferment',
	'Zingiber Officinale Root Extract': 'Ginger Root Extract',
	'Brassica Campestris Sterols': 'Rapeseed Sterols',
	'Epigallocatechin Gallatyl Glucoside': 'Epigallocatechin Gallate',
	Carnitine: 'L-Carnitine',
	'Acetyl Glucosamine': 'N-Acetylglucosamine',
	'Nicotiana Benthamiana Octapeptide-30 sh-Oligopeptide-2': 'IGF',
	'Nicotiana Benthamiana Hexapeptide-40 sh-Oligopeptide-1': 'EGF',
	'Nicotiana Benthamiana Hexapeptide-40 sh-Polypeptide-76': 'TGF',
	Cyanocobalamin: 'Vitamin B12',
	'Sodium PCA': 'PCA',
	EGCG: 'Epigallocatechin Gallate',
	'Ginseng Extract': 'Panax Ginseng Root Extract'
};

// Map of growth factors to their full names
export const GROWTH_FACTORS: Record<string, string> = {
	IGF: 'Nicotiana Benthamiana Octapeptide-30 sh-Oligopeptide-2',
	EGF: 'Nicotiana Benthamiana Hexapeptide-40 sh-Oligopeptide-1',
	TGF: 'Nicotiana Benthamiana Hexapeptide-40 sh-Polypeptide-76'
};

/*
	'Fatty Acid': 'Fatty Acids',
	'Linoleic Acid': 'Fatty Acids',
	'Oleic Acid': 'Fatty Acids',
	'Palmitic Acid': 'Fatty Acids',
	'Stearic Acid': 'Fatty Acids',
	'Sodium Lactate': 'Lactates',
	'Magnesium Sulfate': 'Minerals',
	'Sodium Chloride': 'Minerals',
	Arginine: 'Amino Acids',
	Glycine: 'Amino Acids',
	Alanine: 'Amino Acids',
	Serine: 'Amino Acids',
	Proline: 'Amino Acids',
	Threonine: 'Amino Acids',
	'Glutamic Acid': 'Amino Acids',
	'Lysine HCl': 'Amino Acids',
		Asiaticoside: 'Centella Asiatica Phytotechnologies',
	'Asiatic Acid': 'Centella Asiatica Phytotechnologies',
	'Madecassic Acid': 'Centella Asiatica Phytotechnologies',
	'Cetylhydroxyproline Palmitamide': 'Synthetic Oat Analogues',
	Sphingolipids: 'Ceramides',
*/

export function generateIngredientId(name: string): string {
	// For growth factors, use the full name for the ID
	if (GROWTH_FACTORS[name]) {
		return GROWTH_FACTORS[name]
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
			.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
	}

	// For synonyms, use the primary ingredient name to generate the ID
	const primaryName = INGREDIENT_SYNONYMS[name] || name;
	return primaryName
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export function normalizeIngredientName(name: string): string {
	// Special case handling for acronyms and specific ingredients
	const specialCases = {
		'euk 134': 'EUK 134',
		igf: 'IGF',
		egf: 'EGF',
		tgf: 'TGF',
		'nicotiana benthamiana octapeptide-30 sh-oligopeptide-2': 'IGF',
		'nicotiana benthamiana hexapeptide-40 sh-oligopeptide-1': 'EGF',
		'nicotiana benthamiana hexapeptide-40 sh-polypeptide-76': 'TGF'
	};

	// Keep original spacing and special characters, just normalize case
	let normalized = name.trim().toLowerCase();

	// Handle special cases first
	for (const [key, value] of Object.entries(specialCases)) {
		if (normalized === key || normalized === value.toLowerCase()) {
			return value;
		}
	}

	// Then do normal case normalization
	normalized = normalized.replace(/(?:^|\s|-|\(|\/)([a-z])/g, (m, p1) =>
		m.replace(p1, p1.toUpperCase())
	);

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
	const missingIngredients = loadMissingIngredients();

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
				(key) => normalizeIngredientName(key).toLowerCase() === normalizedName.toLowerCase()
			);

			// Find any synonyms for this ingredient
			const synonyms = Object.entries(INGREDIENT_SYNONYMS)
				.filter(([, primaryName]) => primaryName === normalizedName)
				.map(([synonym]) => synonym);

			// If ingredient exists, update its products array and tags
			if (ingredientMap.has(id)) {
				const existingIngredient = ingredientMap.get(id)!;
				const products = existingIngredient.products || [];
				const tags = new Set(existingIngredient.tags || []);
				const existingSynonyms = new Set(existingIngredient.synonyms || []);

				if (!products.includes(productId)) {
					products.push(productId);
				}

				if (isKeyIngredient) {
					tags.add('key-ingredient');
				}

				// Add category tag if applicable
				const category = INGREDIENT_CATEGORIES[normalizedName];
				if (category) {
					tags.add(category);
					// If ingredient has a category, it should also be marked as a key ingredient
					tags.add('key-ingredient');
				}

				// Add any new synonyms
				synonyms.forEach((synonym) => existingSynonyms.add(synonym));

				ingredientMap.set(id, {
					...existingIngredient,
					products,
					tags: Array.from(tags),
					synonyms: Array.from(existingSynonyms)
				});
				return;
			}

			// Add new ingredient with product reference, tags, and synonyms
			const tags: string[] = [];
			if (isKeyIngredient) {
				tags.push('key-ingredient');
			}
			const category = INGREDIENT_CATEGORIES[normalizedName];
			if (category) {
				tags.push(category);
				// If ingredient has a category, it should also be marked as a key ingredient
				tags.push('key-ingredient');
			}

			// For growth factors, add the full name as a synonym
			const fullName = GROWTH_FACTORS[normalizedName];
			const allSynonyms = fullName ? [...synonyms, fullName] : synonyms;

			ingredientMap.set(id, {
				name: normalizedName,
				id,
				products: [productId],
				tags,
				...(allSynonyms.length > 0 && { synonyms: allSynonyms })
			});
		});

		// Check for key ingredients that weren't found in the main ingredients list
		keyIngredients.forEach((keyIngredient) => {
			const normalizedName = normalizeIngredientName(keyIngredient);
			const id = generateIngredientId(normalizedName);

			if (!ingredientMap.has(id) && !EXCLUDED_INGREDIENTS.includes(normalizedName)) {
				handleMissingKeyIngredient(normalizedName, productId);
			} else {
				// If the ingredient is found, remove it from missing ingredients if it was there
				const missingIngredients = loadMissingIngredients();
				if (missingIngredients[normalizedName]) {
					missingIngredients[normalizedName] = missingIngredients[normalizedName].filter(
						(pid) => pid !== productId
					);
					if (missingIngredients[normalizedName].length === 0) {
						delete missingIngredients[normalizedName];
					}
					saveMissingIngredients(missingIngredients);
				}
			}
		});
	});

	// Convert to record and sort by name
	return Object.fromEntries(
		Array.from(ingredientMap.entries()).sort(([, a], [, b]) => a.name.localeCompare(b.name))
	);
}
