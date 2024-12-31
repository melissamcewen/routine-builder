import { readFileSync, writeFileSync } from 'fs';

// Define the Product interface structure (TypeScript types will be removed at runtime)
const convertToArray = (str) => {
  if (!str) return [];
  return str.split(',').map(item => item.trim());
};

// Read the original JSON file
const jsonData = JSON.parse(readFileSync('./stuff.json', 'utf-8'));

// First conversion: Convert string lists to arrays
const processedData = jsonData.map(item => ({
  Name: item.Name,
  TOD: item.TOD,
  Step: item.Step,
  Targets: convertToArray(item.Targets),
  'Skin Types': item['Skin Types'],
  Phase: item.Phase,
  Format: item.Format,
  Excludes: convertToArray(item.Excludes),
  Tags: convertToArray(item.Tags)
}));

// Write the intermediate result
writeFileSync('./stuff.ts.json', JSON.stringify(processedData, null, 2));

// Second conversion: Convert to records with IDs
const records = {};

processedData.forEach(item => {
  // Create an ID from the Name (convert to lowercase, replace spaces and special chars with dashes)
  const id = item.Name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  records[id] = {
    ...item,
    id
  };
});

// Write the final result
writeFileSync('./stuff.records.json', JSON.stringify(records, null, 2));

console.log('All conversions completed! Check stuff.records.json for the final result.');
