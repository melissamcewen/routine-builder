import { readFileSync, writeFileSync } from 'fs';

// Extend the existing Product interface
interface Product {
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

interface ProductRecord extends Product {
  id: string;
}

// Read the TypeScript file
const tsData = readFileSync('./stuff.ts', 'utf-8');

// Extract the array data from the TypeScript file
// This assumes the file contains a JSON array
const jsonData = JSON.parse(tsData);

// Convert to records with IDs
const records: { [key: string]: ProductRecord } = {};

jsonData.forEach((item: Product) => {
  // Create an ID from the Name (convert to lowercase, replace spaces and special chars with dashes)
  const id = item.Name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  records[id] = {
    ...item,
    id
  };
});

// Write the processed data back to a new file
writeFileSync(
  './stuff.records.json',
  JSON.stringify(records, null, 2)
);

console.log('Conversion to records completed! Check stuff.records.json for the result.');
