import { writeFileSync } from 'node:fs';
import { parseIngredients } from './ingredientParser.js';
import { products } from '../src/lib/products.js';
import { ingredients as existingIngredients } from '../src/lib/ingredients.js';
import type { Ingredient } from '../src/lib/types/ingredients.js';

// Parse ingredients and preserve existing data
const updatedIngredients = parseIngredients(products, existingIngredients);

// Format the ingredients object as a string
const ingredientsFileContent = `import type { Ingredient } from './types/ingredients';

export const ingredients: { [key: string]: Ingredient } = ${JSON.stringify(updatedIngredients, null, 2)};
`;

// Write the updated ingredients to the file
writeFileSync('src/lib/ingredients.ts', ingredientsFileContent);

console.log('✨ Successfully updated ingredients file with product associations!');
