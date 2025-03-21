/**
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
	/** Array of tags describing the ingredient (e.g., "key-ingredient") */
	tags?: string[];
	/** Array of alternative names for this ingredient */
	synonyms?: string[];
}
