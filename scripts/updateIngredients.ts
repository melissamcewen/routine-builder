import { writeFileSync } from 'fs';
import { parseIngredients } from './ingredientParser.js';
import { products } from '../src/lib/products.js';
import { ingredients as existingIngredients } from '../src/lib/ingredients.js';

// Parse ingredients and preserve existing data
const updatedIngredients = parseIngredients(products, existingIngredients);

// Format the ingredients object as a string
const ingredientsFileContent = `/**
 * Represents a skincare ingredient with its properties and metadata
 */
export interface Ingredient {
	/** The display name of the ingredient */
	name: string;
	/** Unique identifier for the ingredient */
	id: string;
	/** Optional category classification (e.g., "Humectant", "Emollient", etc.) */
	category?: string;
	/** Optional detailed description of the ingredient's properties and effects */
	description?: string;
	/** Optional array of potential concerns or benefits */
	concerns?: string[];
	/** Array of product IDs that contain this ingredient */
	products?: string[];
}

export const ingredients: { [key: string]: Ingredient } = ${JSON.stringify(updatedIngredients, null, 2)};
`;

// Write the updated ingredients to the file
writeFileSync('src/lib/ingredients.ts', ingredientsFileContent);

console.log('✨ Successfully updated ingredients file with product associations!');
