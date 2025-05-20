export interface ProductCompatibility {
	name: string;
	conflictingTags: string[];
	conflictingProducts: string[];
}

export interface CompatibilityTableProps {
	products: ProductCompatibility[];
}
