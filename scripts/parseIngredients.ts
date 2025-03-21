import { products } from '../src/lib/products.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { parseIngredients, type Ingredient } from './ingredientParser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputPath = join(__dirname, '../src/lib/ingredients.ts');

// Read existing ingredients if the file exists
let existingIngredients: Record<string, Ingredient> = {};
if (existsSync(outputPath)) {
	try {
		// Read the file and extract the ingredients object
		const fileContent = readFileSync(outputPath, 'utf-8');
		const match = fileContent.match(/export const ingredients = ({[\s\S]*?});/);
		if (match) {
			// Parse the ingredients object, removing any type annotations
			const ingredientsStr = match[1].replace(/\s*:\s*{\s*\[key:\s*string\]\s*:\s*Ingredient\s*}/g, '');
			existingIngredients = eval(`(${ingredientsStr})`);
		}
	} catch (error) {
		console.error('Error reading existing ingredients:', error);
	}
}

// Generate the ingredients.ts file content
const ingredients = parseIngredients(products, existingIngredients);

// Count new ingredients
const newIngredients = Object.keys(ingredients).filter(id => !existingIngredients[id]);
if (newIngredients.length > 0) {
	console.log('\nNew ingredients found:');
	newIngredients.forEach(id => {
		console.log(`- ${ingredients[id].name}`);
	});
}

const fileContent = `export interface Ingredient {
	name: string;
	id: string;
	// Optional fields that can be manually added
	category?: string;
	description?: string;
	concerns?: string[];
}

export const ingredients: { [key: string]: Ingredient } = ${JSON.stringify(ingredients, null, 4)};
`;

writeFileSync(outputPath, fileContent);
console.log(`\nGenerated ingredients.ts with ${Object.keys(ingredients).length} ingredients (${newIngredients.length} new)`);
