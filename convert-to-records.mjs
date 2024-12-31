import { readFileSync, writeFileSync } from 'fs';

// Read the TypeScript file
const tsData = readFileSync('./stuff.ts', 'utf-8');

// Extract the array data from the TypeScript file
// Remove any TypeScript-specific syntax and get just the JSON array
const jsonString = tsData.replace(/^\[/, '').replace(/\]$/, '').trim();
const jsonData = JSON.parse(`[${jsonString}]`);

// Convert to records with IDs
const records = {};

jsonData.forEach(item => {
  // Create an ID from the Name (convert to lowercase, replace spaces and special chars with dashes)
  const id = item.Name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  records[id] = {
    ...item,
    id
  };
});

// Create TypeScript content
const tsContent = `export interface Product {
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

export interface ProductRecord extends Product {
  id: string;
}

export const products: { [key: string]: ProductRecord } = ${JSON.stringify(records, null, 2)};
`;

// Write the processed data back to a new TypeScript file
writeFileSync('./stuff.records.ts', tsContent);

console.log('Conversion to records completed! Check stuff.records.ts for the result.');
