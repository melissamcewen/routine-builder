import { readFileSync, writeFileSync } from 'fs';

export interface Product {
	Name: string;
	TOD: string;
	Step: string;
	Targets: string[];
	'Skin Types': string;
	Phase: string;
	Format: string;
	Excludes: string[];
	Tags: string[];
}

// Read the JSON file
const jsonData = JSON.parse(readFileSync('./stuff.json', 'utf-8'));

// Convert string lists to arrays
const convertToArray = (str: string): string[] => {
	if (!str) return [];
	return str.split(',').map((item) => item.trim());
};

// Process each item
const processedData = jsonData.map(
	(item: any): Product => ({
		Name: item.Name,
		TOD: item.TOD,
		Step: item.Step,
		Targets: convertToArray(item.Targets),
		'Skin Types': item['Skin Types'],
		Phase: item.Phase,
		Format: item.Format,
		Excludes: convertToArray(item.Excludes),
		Tags: convertToArray(item.Tags)
	})
);

// Write the processed data back to a new file
writeFileSync('./stuff.ts.json', JSON.stringify(processedData, null, 2));

console.log('Conversion completed! Check stuff.ts.json for the result.');
