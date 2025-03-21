export interface Product {
  id: string;
  Name: string;
  TOD: 'day' | 'night' | 'both' | '';
  Step: 'Prep' | 'Treat' | 'Seal' | '';
  Targets: string[];
  'Skin Types': string;
  Phase: 'Water' | 'Emulsion' | 'Anhydrous' | 'Oil' | 'Cream' | 'Suspension' | '';
  Format: string;
  Excludes: string[];
  Tags: string[];
  Notes?: string;
	Ingredients?: string;
	KeyIngredients?: string;
}

export const products: { [key: string]: Product } = {
	'glycolic-acid-7-exfoliating-toner': {
		Name: 'Glycolic Acid 7% Exfoliating Toner',
		TOD: 'night',
		Step: 'Prep',
		Targets: ['Textural Irregularities', 'Dullness', 'Uneven Skin Tone'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Toner',
		Excludes: [
			'Copper Peptides',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide Powder',
			'Peptides',
			'Retinoids',
			'Direct Acids',
			'Saccharomyces Ferment 30% Milky Toner'
		],
		Tags: ['Direct Acids'],
		id: 'glycolic-acid-7-exfoliating-toner',
		Ingredients:
			'Aqua (Water), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Aminomethyl Propanol, Panax Ginseng Root Extract, Tasmannia Lanceolata Fruit/Leaf Extract, Aspartic Acid, Alanine, Glycine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Glutamic Acid, Arginine, Pca, Sodium Pca, Sodium Lactate, Fructose, Glucose, Sucrose, Urea, Hexyl Nicotinate, Dextrin, Citric Acid, Polysorbate 20, Gellan Gum, Trisodium Ethylenediamine Disuccinate, Sodium Chloride, Hexylene Glycol, Potassium Sorbate, Sodium Benzoate, 1,2-Hexanediol, Caprylyl Glycol.',
		KeyIngredients:
			'Glycolic Acid, Aloe Barbadensis Leaf Water, Panax Ginseng Root Extract, Tasmannia Lanceolata Fruit/Leaf Extract'
	},
	'hyaluronic-acid-2-b5-hydrating-serum': {
		Name: 'Hyaluronic Acid 2% + B5 (with Ceramides)',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dehydration', 'Signs of Aging'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [],
		Tags: [],
		id: 'hyaluronic-acid-2-b5-hydrating-serum',
		KeyIngredients: 'Hyaluronic acid, ceramides, pro-vitamin B5',
		Ingredients:
			'Aqua (Water), Sodium Hyaluronate, Propanediol, Pentylene Glycol, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Phospholipids, Sphingolipids, Panthenol, Ahnfeltiopsis Concinna Extract, Glycerin, Polysorbate 20, Citric Acid, Sodium Citrate, p-Anisic Acid, Tocopherol, Trisodium Ethylenediamine Disuccinate, Caprylyl Glycol, Ethoxydiglycol, Ethylhexylglycerin, Hexylene Glycol, Phenoxyethanol, Chlorphenesin.'
	},
	'niacinamide-10-zinc-1': {
		Name: 'Niacinamide 10% + Zinc 1%',
		TOD: 'both',
		Step: 'Treat',
		Targets: [
			'Textural Irregularities',
			'Dryness',
			'Dullness',
			'Visible Shine',
			'Signs of Congestion'
		],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: ['Direct Vitamin C', 'Indirect Vitamin C'],
		Tags: [],
		id: 'niacinamide-10-zinc-1',
		KeyIngredients: 'Niacinamide, Zinc PCA',
		Ingredients:
			'Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.'
	},
	'caffeine-solution-5-egcg': {
		Name: 'Caffeine Solution 5% + EGCG',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dark Circles', 'Puffiness'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [],
		Tags: [],
		id: 'caffeine-solution-5-egcg',
		KeyIngredients: 'Caffeine, Epigallocatechin Gallatyl Glucoside',
		Ingredients:
			'Aqua (Water), Caffeine, Maltodextrin, Glycerin, Propanediol, Epigallocatechin Gallatyl Glucoside, Gallyl Glucoside, Hyaluronic Acid, Oxidized Glutathione, Melanin, Glycine Soja (Soybean) Seed Extract, Pentylene Glycol, Hydroxyethylcellulose, Polyacrylate Crosspolymer-6, Xanthan gum, Lactic Acid, Dehydroacetic Acid, Trisodium Ethylenediamine Disuccinate, Propyl Gallate, Dimethyl Isosorbide, Benzyl Alcohol, 1,2-Hexanediol, Ethylhexylglycerin, Phenoxyethanol, Caprylyl Glycol.'
	},
	'argireline-solution-10': {
		Name: 'Argireline Solution 10%',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Early Signs of Aging', "Crow's Feet", 'Signs of Aging'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Direct Acids',
			'Direct Vitamin C',
			'Resveratrol and Ferulic Acid',
			'Salicylic Acid'
		],
		Tags: ['Peptides'],
		id: 'argireline-solution-10',
		KeyIngredients: 'Acetyl Hexapeptide-8',
		Ingredients:
			' Aqua (Water), Propanediol, Acetyl Hexapeptide-8, Trisodium Ethylenediamine Disuccinate, Gellan Gum, Sodium Chloride, Isoceteth-20, Dimethyl Isosorbide, Potassium Sorbate, Phenoxyethanol, Chlorphenesin.'
	},
	'salicylic-acid-2-solution': {
		Name: 'Salicylic Acid 2% Solution',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Acne', 'Textural Irregularities', 'Signs of Congestion'],
		'Skin Types': 'Acne-Prone Skin',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Copper Peptides',
			'Direct Acids',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide Powder',
			'Peptides',
			'Retinoids',
			'Saccharomyces Ferment 30% Milky Toner'
		],
		Tags: ['Direct Acids', 'Salicylic Acid'],
		id: 'salicylic-acid-2-solution',
		KeyIngredients: 'Salicylic Acid',
		Ingredients:
			'Cocamidopropyl Dimethylamine, Chlorphenesin, Citric Acid, Hydroxyethylcellulose, Phenoxyethanol, Polysorbate 20, Saccharide Isomerate, Sodium Citrate, Sodium Hydroxide, Water.'
	},

	'azelaic-acid-suspension-10': {
		Name: 'Azelaic Acid Suspension 10%',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Textural Irregularities', 'Dullness', 'Look of Redness', 'Uneven Skin Tone'],
		'Skin Types': 'All',
		Phase: 'Suspension',
		Format: 'Suspension',
		Excludes: [
			'Copper Peptides',
			'Direct Acids',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide Powder',
			'Peptides',
			'Retinoids',
			'Saccharomyces Ferment 30% Milky Toner'
		],
		Tags: ['Direct Acids'],
		id: 'azelaic-acid-suspension-10',
		KeyIngredients: 'Azelaic Acid',
		Ingredients:
			'Aqua (Water), Isodecyl Neopentanoate, Dimethicone, Azelaic Acid, Dimethicone/Bis-Isobutyl Ppg-20 Crosspolymer, Dimethyl Isosorbide, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polysilicone-11, Isohexadecane, Tocopherol, Trisodium Ethylenediamine Disuccinate, Isoceteth-20, Polysorbate 60, Triethanolamine, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.'
	},
	'lactic-acid-10-ha': {
		Name: 'Lactic Acid 10% + HA',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Textural Irregularities', 'Dullness', 'Uneven Skin Tone'],
		'Skin Types': 'Dry Skin',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Copper Peptides',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide Powder',
			'Peptides',
			'Retinoids',
			'Direct Acids',
			'Saccharomyces Ferment 30% Milky Toner'
		],
		Tags: ['Direct Acids'],
		id: 'lactic-acid-10-ha',
		KeyIngredients:
			'Lactic Acid, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract',
		Ingredients:
			'Aqua (Water), Lactic Acid, Glycerin, Pentylene Glycol, Propanediol, Sodium Hydroxide, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Acacia Senegal Gum, Xanthan Gum, Isoceteth-20, Trisodium Ethylenediamine Disuccinate, Ethylhexylglycerin, 1,2-Hexanediol, Caprylyl Glycol. '
	},
	'salicylic-acid-2-anhydrous-solution': {
		Name: 'Salicylic Acid 2% Anhydrous Solution',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Signs of Congestion', 'Dullness', 'Textural Irregularities', 'Uneven Skin Tone'],
		'Skin Types': 'All',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: [
			'Copper Peptides',
			'Direct Acids',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide Powder',
			'Peptides',
			'Retinoids',
			'Saccharomyces Ferment 30% Milky Toner'
		],
		Tags: ['Direct Acids', 'Salicylic Acid'],
		id: 'salicylic-acid-2-anhydrous-solution',
		KeyIngredients: 'Salicylic Acid',
		Ingredients:
			'Squalane, Caprylic/Capric Triglyceride, Pentylene Glycol, Salicylic Acid, Oleic/Linoleic/Linolenic Polyglycerides, 4-t-Butylcyclohexanol, Hydroxymethoxyphenyl Decanone, Phenoxyethanol, Chlorphenesin.'
	},
	'mandelic-acid-10-ha': {
		Name: 'Mandelic Acid 10% + HA',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Textural Irregularities', 'Dullness', 'Uneven Skin Tone'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Copper Peptides',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide Powder',
			'Peptides',
			'Retinoids',
			'Direct Acids',
			'Saccharomyces Ferment 30% Milky Toner'
		],
		Tags: ['Direct Acids'],
		id: 'mandelic-acid-10-ha',
		KeyIngredients:
			'Mandelic Acid, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract',
		Ingredients:
			'Propanediol, Aqua (Water), Mandelic Acid, Glycerin, Dimethyl Isosorbide, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Pentylene Glycol, Polysorbate 20, Sodium Hydroxide, Ethylhexylglycerin, 1,2-Hexanediol, Caprylyl Glycol.'
	},
	'lactic-acid-5-ha': {
		Name: 'Lactic Acid 5% + HA',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Textural Irregularities', 'Dullness', 'Uneven Skin Tone'],
		'Skin Types': 'Dry Skin',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Copper Peptides',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide Powder',
			'Peptides',
			'Retinoids',
			'Direct Acids',
			'Saccharomyces Ferment 30% Milky Toner'
		],
		Tags: ['Direct Acids'],
		id: 'lactic-acid-5-ha',
		KeyIngredients:
			'Lactic Acid, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract',
		Ingredients:
			'Aqua (Water), Lactic Acid, Glycerin, Pentylene Glycol, Propanediol, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Acacia Senegal Gum, Xanthan Gum, Isoceteth-20, Trisodium Ethylenediamine Disuccinate, Sodium Hydroxide, Ethylhexylglycerin, 1,2-Hexanediol, Caprylyl Glycol. '
	},
	'vitamin-c-suspension-23-ha-spheres-2': {
		Name: 'Vitamin C Suspension 23% + HA Spheres 2%',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Dullness', 'Antioxidant Support', 'Signs of Aging', 'Uneven Skin Tone'],
		'Skin Types': 'All',
		Phase: 'Suspension',
		Format: '',
		Excludes: [],
		Tags: ['Direct Vitamin C'],
		id: 'vitamin-c-suspension-23-ha-spheres-2',
		KeyIngredients: 'Ascorbic Acid, Sodium Hyaluronate',
		Ingredients:
			'Ascorbic Acid, Squalane, Isodecyl Neopentanoate, Isononyl Isononanoate, Coconut Alkanes, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Silica Dimethyl Silylate, Sodium Hyaluronate, Glucomannan, Coco-Caprylate/Caprate, Butylene/Ethylene/Styrene Copolymer, Acrylates/Ethylhexyl Acrylate Crosspolymer, Trihydroxystearin, Bht.'
	},
	'100-l-ascorbic-acid-powder': {
		Name: '100% L-Ascorbic Acid Powder',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Dullness', 'Antioxidant Support', 'Signs of Aging', 'Uneven Skin Tone'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: '',
		Excludes: [
			'Copper Peptides',
			'Direct Acids',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide',
			'Peptides',
			'Retinoids',
			''
		],
		Tags: ['Direct Vitamin C'],
		id: '100-l-ascorbic-acid-powder',
		KeyIngredients: 'Ascorbic Acid',
		Ingredients: 'Ascorbic Acid'
	},
	'vitamin-c-suspension-30-in-silicone': {
		Name: 'Vitamin C Suspension 30% in Silicone',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Dullness', 'Antioxidant Support', 'Signs of Aging', 'Uneven Skin Tone'],
		'Skin Types': 'All',
		Phase: 'Suspension',
		Format: 'Suspension',
		Excludes: [
			'Copper Peptides',
			'Direct Acids',
			'Direct Vitamin C',
			'EUK',
			'Niacinamide',
			'Peptides',
			'Retinoids'
		],
		Tags: ['Direct Vitamin C'],
		id: 'vitamin-c-suspension-30-in-silicone',
		Ingredients: 'Dimethicone, Ascorbic Acid, Polysilicone-11, Peg-10 Dimethicone'
	},
	'resveratrol-3-ferulic-acid-3': {
		Name: 'Resveratrol 3% + Ferulic Acid 3%',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Antioxidant Support', 'Dullness'],
		'Skin Types': 'All',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: ['Copper Peptides', 'EUK', 'Peptides', 'Re: Pigment'],
		Tags: ['Resveratrol and Ferulic Acid', 'Strong Antioxidants'],
		id: 'resveratrol-3-ferulic-acid-3',
		KeyIngredients: 'Resveratrol, Ferulic Acid',
		Ingredients: 'Propanediol, Resveratrol, Ferulic Acid. '
	},
	'ascorbyl-glucoside-solution-12': {
		Name: 'Ascorbyl Glucoside Solution 12%',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dullness', 'Antioxidant Support', 'Signs of Aging', 'Uneven Skin Tone'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: ['Niacinamide'],
		Tags: ['Indirect Vitamin C'],
		id: 'ascorbyl-glucoside-solution-12',
		KeyIngredients: 'Ascorbyl Glucoside',
		Ingredients:
			'Aqua (Water), Ascorbyl Glucoside, Propanediol, Aminomethyl Propanol, Triethanolamine, Isoceteth-20, Xanthan Gum, Dimethyl Isosorbide, Ethoxydiglycol, Trisodium Ethylenediamine Disuccinate, 1,2-Hexanediol, Caprylyl Glycol.'
	},
	'ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f': {
		Name: 'Ascorbyl Tetraisopalmitate Solution 20% in Vitamin F',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dullness', 'Antioxidant Support', 'Signs of Aging', 'Uneven Skin Tone'],
		'Skin Types': 'Dry Skin',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: ['Niacinamide'],
		Tags: ['Indirect Vitamin C'],
		id: 'ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f',
		KeyIngredients: 'Tetrahexyldecyl Ascorbate, Ethyl Linoleate',
		Ingredients:
			'Coconut Alkanes, Tetrahexyldecyl Ascorbate, Ethyl Linoleate, Coco-Caprylate/Caprate, Simmondsia Chinensis (Jojoba) Seed Oil, Solanum Lycopersicum (Tomato) Fruit Extract, Squalane.'
	},
	'multi-peptide-copper-peptides-1-serum': {
		Name: 'Multi-Peptide + Copper Peptides 1% Serum',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Advanced Signs of Aging', 'Dryness'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Direct Acids',
			'Direct Vitamin C',
			'EUK',
			'Retinoids',
			'Strong Antioxidants',
			'Resveratrol and Ferulic Acid',
			'Salicylic Acid'
		],
		Tags: ['Copper Peptides'],
		id: 'multi-peptide-copper-peptides-1-serum',
		KeyIngredients:
			'Copper Tripeptide-1, Lactococcus Ferment Lysate, Acetyl Hexapeptide-8, Palmitoyl Tripeptide-1, Pentapeptide-18, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetylarginyltryptophyl Diphenylglycine, Sodium Hyaluronate.',
		Ingredients:
			'Aqua (Water), Glycerin, Lactococcus Ferment Lysate, Copper Tripeptide-1, Acetyl Hexapeptide-8, Pentapeptide-18, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetylarginyltryptophyl Diphenylglycine, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Allantoin, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Arginine, Aspartic Acid, Trehalose, Fructose, Glucose, Maltose, Urea, Sodium Pca, Pca, Sodium Lactate, Citric Acid, Hydroxypropyl Cyclodextrin, Sodium Chloride, Sodium Hydroxide, Butylene Glycol, Pentylene Glycol, Acacia Senegal Gum, Xanthan Gum, Carbomer, Polysorbate 20, Dimethyl Isosorbide, Sodium Benzoate, Caprylyl Glycol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin. '
	},
	'100-niacinamide-powder': {
		Name: '100% Niacinamide Powder',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Textural Irregularities', 'Dullness', 'Visible Shine'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: '',
		Excludes: ['Direct Vitamin C', 'Indirect Vitamin C', 'Direct Acids'],
		Tags: ['Niacinamide Powder'],
		id: '100-niacinamide-powder',
		KeyIngredients: 'Niacinamide',
		Ingredients: 'Niacinamide'
	},
	'euk-134-0-1': {
		Name: 'EUK 134 0.1%',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Antioxidant Support', 'Dullness'],
		'Skin Types': 'All',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: [
			'Copper Peptides',
			'Direct Acids',
			'Direct Vitamin C',
			'Resveratrol and Ferulic Acid'
		],
		Tags: ['EUK'],
		id: 'euk-134-0-1',
		KeyIngredients: 'EUK 134',
		Ingredients: 'Propanediol, Ethylbisiminomethylguaiacol Manganese Chloride.'
	},
	'multi-peptide-ha-serum': {
		Name: 'Multi-Peptide + HA Serum',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Early Signs of Aging', 'Dryness', 'Signs of Aging'],
		'Skin Types': 'All',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Direct Acids',
			'Direct Vitamin C',
			'Resveratrol and Ferulic Acid',
			'Salicylic Acid'
		],
		Tags: ['Peptides'],
		id: 'multi-peptide-ha-serum',
		Ingredients:
			'Aqua (Water), Glycerin, Lactococcus Ferment Lysate, Acetyl Hexapeptide-8, Pentapeptide-18, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetylarginyltryptophyl Diphenylglycine, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Allantoin, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Arginine, Aspartic Acid, Trehalose, Fructose, Glucose, Maltose, Urea, Sodium PCA, PCA, Sodium Lactate, Citric Acid, Hydroxypropyl Cyclodextrin, Sodium Chloride, Sodium Hydroxide, Butylene Glycol, Pentylene Glycol, Acacia Senegal Gum, Xanthan Gum, Carbomer, Polysorbate 20, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Trisodium Ethylenediamine Disuccinate, Ethoxydiglycol, Sodium Benzoate, Caprylyl Glycol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin. ',
		KeyIngredients:
			'Lactococcus Ferment Lysate, Acetyl Hexapeptide-8, Palmitoyl Tripeptide-1, Pentapeptide-18, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetylarginyltryptophyl Diphenylglycine, Sodium Hyaluronate'
	},
	'multi-peptide-eye-serum': {
		Name: 'Multi-Peptide Eye Serum',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Early Signs of Aging', "Crow's Feet", 'Dark Circles', 'Signs of Aging', 'Puffiness'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Direct Acids',
			'Direct Vitamin C',
			'Resveratrol and Ferulic Acid',
			'Salicylic Acid'
		],
		Tags: ['Peptides'],
		id: 'multi-peptide-eye-serum',
		KeyIngredients:
			'Epigallocatechin Gallatyl Glucoside, Niacinamide, Fraxinus Excelsior Bark Extract, Palmitoyl Tripeptide-38, Acetyl Tetrapeptide-5, Myristoyl Nonapeptide-3, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Caffeine',
		Ingredients:
			' Aqua (Water), Glycerin, Butylene Glycol, Propanediol, Dipropylene Glycol, Acetyl Glucosamine, Niacinamide, Palmitoyl Tripeptide-38, Acetyl Tetrapeptide-5, Myristoyl Nonapeptide-3, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Caffeine, Epigallocatechin Gallatyl Glucoside, Gallyl Glucoside, Fraxinus Excelsior Bark Extract, Silanetriol, Arginine, Pentylene Glycol, Hydroxymethoxyphenyl Decanone, Propyl Gallate, Maltodextrin, Hydroxypropyl Cyclodextrin, Hydroxyethylcellulose, Xanthan Gum, Citric Acid, Glycolic Acid, Sodium Citrate, Polysorbate 20, Trisodium Ethylenediamine Disuccinate, Dehydroacetic Acid, Ethylhexylglycerin, Benzyl Alcohol, Phenoxyethanol, Chlorphenesin. '
	},
	'aloe-2-nag-2-solution': {
		Name: 'Aloe 2% + NAG 2% Solution',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Textural Irregularities', 'Look of Redness', 'Uneven Skin Tone'],
		'Skin Types': 'Dry Skin',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Direct Acids',
			'Direct Vitamin C',
			'Resveratrol and Ferulic Acid',
			'Salicylic Acid'
		],
		Tags: ['Peptides'],
		id: 'aloe-2-nag-2-solution',
		KeyIngredients:
			'Aloe Barbadensis Leaf Juice Powder, N-Acetyl Glucosamine, Palmitoyl Pentapeptide-4',
		Ingredients:
			'Aqua (Water), Propanediol, Glycerin, Dipropylene Glycol, Aloe Barbadensis Leaf Juice Powder, N-Acetyl Glucosamine, Palmitoyl Pentapeptide-4, Biosaccharide Gum-2, Pentylene Glycol, Xanthan Gum, Isoceteth-20, Hydroxymethoxyphenyl Decanone, Sodium Lactate, Lactic Acid, Sodium Hydroxide, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin.'
	},
	'matrixyl-10-ha': {
		Name: 'Matrixyl 10% + HA',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Early Signs of Aging', 'Signs of Aging'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [
			'Direct Acids',
			'Direct Vitamin C',
			'Resveratrol and Ferulic Acid',
			'Salicylic Acid'
		],
		Tags: ['Peptides'],
		id: 'matrixyl-10-ha',
		Ingredients:
			'Aqua (Water), Glycerin, Butylene Glycol, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Sodium Hyaluronate, Hydroxypropyl Cyclodextrin, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Polyacrylate Crosspolymer-6, Trisodium Ethylenediamine Disuccinate, Carbomer, Polysorbate 20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin. '
	},
	'retinal-0-2-emulsion': {
		Name: 'Retinal 0.2% Emulsion',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Advanced Signs of Aging', 'Textural Irregularities', 'Uneven Skin Tone'],
		'Skin Types': '',
		Phase: 'Oil',
		Format: 'Serum',
		Excludes: ['Copper Peptides', 'Direct Acids', 'Direct Vitamin C', 'Retinoids'],
		Tags: ['Retinoids'],
		id: 'retinal-0-2-emulsion',
		Ingredients:
			'Aqua (Water), Coco-Caprylate/Caprate, Propanediol, Pentylene Glycol, Hydroxyapatite, Retinal, Cetylhydroxyproline Palmitamide, 4-t-Butylcyclohexanol, Hydroxyphenyl Propamidobenzoic Acid, Ergothioneine, Biosaccharide Gum-1, Bisabolol, Brassica Campestris Sterols, Zingiber Officinale Root Extract, Butylene Glycol, Isohexadecane, Hexyldecanol, Maltodextrin, Caesalpinia Spinosa Gum, Polyacrylate Crosspolymer-6, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Stearic Acid, Isoceteth-20, Polysorbate 60, Ascorbyl Palmitate, Tocopherol, Lactic Acid, Sodium Lactate, Sodium Hydroxide, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin. '
	},
	'retinol-1-in-squalane': {
		Name: 'Retinol 1% in Squalane',
		TOD: 'night',
		Step: 'Treat',
		Targets: [
			'Advanced Signs of Aging',
			'Dryness',
			'Textural Irregularities',
			'Signs of Aging',
			'Uneven Skin Tone'
		],
		'Skin Types': '',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: ['Copper Peptides', 'Direct Acids', 'Direct Vitamin C', 'Retinoids'],
		Tags: ['Retinoids'],
		id: 'retinol-1-in-squalane',
		Ingredients:
			'Squalane, Caprylic/Capric Triglyceride, Simmondsia Chinensis (Jojoba) Seed Oil, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Hydroxymethoxyphenyl Decanone, BHT'
	},
	'retinol-0-5-in-squalane': {
		Name: 'Retinol 0.5% in Squalane',
		TOD: 'night',
		Step: 'Treat',
		Targets: [
			'Advanced Signs of Aging',
			'Dryness',
			'Textural Irregularities',
			'Signs of Aging',
			'Uneven Skin Tone'
		],
		'Skin Types': '',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: ['Copper Peptides', 'Direct Acids', 'Direct Vitamin C', 'Retinoids'],
		Tags: ['Retinoids'],
		id: 'retinol-0-5-in-squalane',
		Ingredients:
			'Squalane, Caprylic/Capric Triglyceride, Simmondsia Chinensis (Jojoba) Seed Oil, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Hydroxymethoxyphenyl Decanone, BHT. '
	},
	'granactive-retinoid-2-emulsion': {
		Name: 'Granactive Retinoid 2% Emulsion',
		TOD: 'night',
		Step: 'Treat',
		Targets: [
			'Early Signs of Aging',
			'Textural Irregularities',
			'Signs of Aging',
			'Uneven Skin Tone'
		],
		'Skin Types': '',
		Phase: 'Oil',
		Format: 'Serum',
		Excludes: ['Copper Peptides', 'Direct Acids', 'Direct Vitamin C', 'Retinoids'],
		Tags: ['Retinoids'],
		id: 'granactive-retinoid-2-emulsion',
		Ingredients:
			' Aqua (Water), Glycerin, Caprylic/Capric Triglyceride, Ethyl Linoleate, Propanediol, Dimethyl Isosorbide, Cetearyl Isononanoate, Bisabolol, Hydroxypinacolone Retinoate, Retinol, Tasmannia Lanceolata Fruit/Leaf Extract, Inulin Lauryl Carbamate, Glyceryl Stearate, Ceteareth-12, Ceteareth-20, Cetearyl Alcohol, Carrageenan, Xanthan Gum, Acacia Senegal Gum, Cetyl Palmitate, Sucrose Laurate, Polysorbate 20, Isoceteth-20, Rosmarinus Officinalis (Rosemary) Leaf Extract, Hydroxymethoxyphenyl Decanone, Behentrimonium Chloride, Trisodium Ethylenediamine Disuccinate, Disodium Edta, Dehydroacetic Acid, Benzoic Acid, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin'
	},
	'retinol-0-2-in-squalane': {
		Name: 'Retinol 0.2% in Squalane',
		TOD: 'night',
		Step: 'Treat',
		Targets: [
			'Advanced Signs of Aging',
			'Dryness',
			'Textural Irregularities',
			'Signs of Aging',
			'Uneven Skin Tone'
		],
		'Skin Types': '',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: ['Copper Peptides', 'Direct Acids', 'Direct Vitamin C', 'Retinoids'],
		Tags: ['Retinoids'],
		id: 'retinol-0-2-in-squalane',
		Ingredients:
			'Squalane, Caprylic/Capric Triglyceride, Simmondsia Chinensis (Jojoba) Seed Oil, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Hydroxymethoxyphenyl Decanone, BHT'
	},
	'granactive-retinoid-5-in-squalane': {
		Name: 'Granactive Retinoid 5% in Squalane',
		TOD: 'night',
		Step: 'Treat',
		Targets: [
			'Advanced Signs of Aging',
			'Textural Irregularities',
			'Signs of Aging',
			'Uneven Skin Tone'
		],
		'Skin Types': '',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: ['Copper Peptides', 'Direct Acids', 'Direct Vitamin C', 'Retinoids'],
		Tags: ['Retinoids'],
		id: 'granactive-retinoid-5-in-squalane',
		Ingredients:
			'Squalane, C12-15 Alkyl Benzoate, Bisabolol, Dimethyl Isosorbide, Caprylic/Capric Triglyceride, Simmondsia Chinensis (Jojoba) Seed Oil, Hydroxypinacolone Retinoate, Solanum Lycopersicum (Tomato) Fruit Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Hydroxymethoxyphenyl Decanone'
	},
	'saccharomyces-ferment-30-milky-toner': {
		Name: 'Saccharomyces Ferment 30% Milky Toner',
		TOD: 'both',
		Step: 'Prep',
		Targets: ['Textural Irregularities', 'Dryness', 'Uneven Skin Tone'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Toner',
		Excludes: ['Direct Acids'],
		Tags: ['Saccharomyces Ferment 30% Milky Toner'],
		id: 'saccharomyces-ferment-30-milky-toner',
		Ingredients:
			'Aqua (Water), Yeast Extract, Squalane, Lauryl Glucoside, Myristyl Glucoside, Polyglyceryl-6 Laurate, Isoceteth-20, Trisodium Ethylenediamine Disuccinate, Citric Acid, Sodium Citrate, Sodium Hydroxide, Phenoxyethanol, Chlorphenesin'
	},
	'pycnogenol-5': {
		Name: 'Pycnogenol 5%',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Antioxidant Support', 'Dullness'],
		'Skin Types': '',
		Phase: 'Anhydrous',
		Format: 'Serum',
		Excludes: ['Copper Peptides'],
		Tags: ['Strong Antioxidants'],
		id: 'pycnogenol-5',
		Ingredients: 'Propanediol, Pinus Pinaster Bark Extract'
	},
	'alpha-arbutin-2-ha': {
		Name: 'Alpha Arbutin 2% + HA',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Uneven Skin Tone', 'Dryness'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [],
		Tags: [],
		id: 'alpha-arbutin-2-ha',
		Ingredients:
			'Aqua (Water), Alpha-Arbutin, Polyacrylate Crosspolymer-6, Hydrolyzed Sodium Hyaluronate, Propanediol, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Lactic Acid, Trisodium Ethylenediamine Disuccinate, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin'
	},
	'hyaluronic-acid-2-b5-original-formulation': {
		Name: 'Hyaluronic Acid 2% + B5 (Original Formulation)',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dehydration', 'Signs of Aging'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [],
		Tags: [],
		id: 'hyaluronic-acid-2-b5-original-formulation',
		Ingredients:
			'Aqua (Water), Sodium Hyaluronate, Pentylene Glycol, Propanediol, Sodium Hyaluronate Crosspolymer, Panthenol, Ahnfeltia Concinna Extract, Glycerin, Trisodium Ethylenediamine Disuccinate, Citric Acid, Isoceteth-20, Ethoxydiglycol, Ethylhexylglycerin, Hexylene Glycol, 1,2-Hexanediol, Phenoxyethanol, Caprylyl Glycol'
	},
	'soothing-barrier-support-serum': {
		Name: 'Soothing & Barrier Support Serum',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Barrier Support', 'Look of Redness'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: ['Direct Vitamin C', 'Indirect Vitamin C'],
		Tags: [],
		id: 'soothing-barrier-support-serum',
		Ingredients:
			'Aqua (Water), Propanediol, Isodecyl Neopentanoate, Pentylene Glycol, Niacinamide, Hexyldecanol, Cetearyl Alcohol, Xylitylglucoside, Ceteth-20 Phosphate, Anhydroxylitol, Ethyl Linoleate, Asiaticoside, Asiatic Acid, Madecassic Acid, Naringenin, Cyanocobalamin, Panthenyl Triacetate, 4-T-Butylcyclohexanol, Hydroxyphenyl Propamidobenzoic Acid, Cetylhydroxyproline Palmitamide, Bisabolol, Brassica Campestris Sterols, Sphingolipids, Phospholipids, Epigallocatechin Gallatyl Glucoside, Gallyl Glucoside, Propyl Gallate, Xylitol, Zingiber Officinale Root Extract, Stearic Acid, Dicetyl Phosphate, Isoceteth-20, Xanthan Gum, Trisodium Ethylenediamine Disuccinate, Tocopherol, Dehydroacetic Acid, P-Anisic Acid, Phytic Acid, Sodium Phytate, Sodium Citrate, Sodium Hydroxide, Benzyl Alcohol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin'
	},
	'natural-moisturizing-factors-beta-glucan': {
		Name: 'Natural Moisturizing Factors + Beta Glucan',
		TOD: 'both',
		Step: 'Seal',
		Targets: ['Dryness'],
		'Skin Types': '',
		Phase: 'Cream',
		Format: 'Moisturizer',
		Excludes: [],
		Tags: [],
		id: 'natural-moisturizing-factors-beta-glucan',
		Ingredients:
			'Aqua (Water), PPG-24-Glycereth-24, Propanediol, Betaine, Beta-Glucan, Arginine, Glycine, Alanine, Serine, Proline, Threonine, Glutamic Acid, Lysine HCl, Glucose, Maltose, Fructose, Trehalose, Xylitol, Anhydroxylitol, Xylitylglucoside, Sodium PCA, PCA, Sodium Lactate, Urea, Allantoin, Sodium Hyaluronate, Phospholipids, Sphingolipids, Glycerin, Pentylene Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Hydroxide, Sodium Chloride, Sodium Citrate, Citric Acid, Tocopherol, P-Anisic Acid, Aminomethyl Propanol, Phenoxyethanol, Chlorphenesin'
	},
	'marine-hyaluronics': {
		Name: 'Marine Hyaluronics',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dehydration', 'Dryness'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [],
		Tags: [],
		id: 'marine-hyaluronics',
		Ingredients:
			'Aqua (Water), Glycerin, Algae Extract, Pseudoalteromonas Exopolysaccharides, Pseudoalteromonas Ferment Extract, Ahnfeltia Concinna Extract, Arginine, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Aspartic Acid, PCA, Sodium PCA, Sodium Lactate, Salicylic Acid, Citric Acid, Propanediol, Dimethyl Isosorbide, Ethoxydiglycol, Polysorbate 20, Potassium Sorbate, Sodium Salicylate, Sodium Benzoate, Hexylene Glycol, 1,2-Hexanediol, Phenoxyethanol, Caprylyl Glycol'
	},
	'amino-acids-b5': {
		Name: 'Amino Acids + B5',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dehydration', 'Dryness'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [],
		Tags: [],
		id: 'amino-acids-b5',
		Ingredients:
			'Aqua (Water), Propanediol, Betaine, Sodium PCA, Panthenol, Sodium Lactate, Arginine, PCA, Aspartic Acid, Glycine, Alanine, Serine, Threonine, Valine, Proline, Isoleucine, Lysine HCl, Histidine, Phenylalanine, Glutamic Acid, Citric Acid, Dimethyl Isosorbide, Polysorbate 20, Trisodium Ethylenediamine Disuccinate, 1,2-Hexanediol, Caprylyl Glycol'
	},
	'niacinamide-5-face-and-body-emulsion': {
		Name: 'Niacinamide 5% Face and Body Emulsion',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Uneven Skin Tone', 'Dryness', 'Signs of Aging'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: ['Direct Vitamin C', 'Indirect Vitamin C'],
		Tags: [],
		id: 'niacinamide-5-face-and-body-emulsion',
		Ingredients:
			'Aqua (Water), Ethyl Macadamiate, Niacinamide, Propanediol, Glycerin, Sphingomonas Ferment Extract, Pentylene Glycol, Ethylhexyl Olivate, Polyglyceryl-4 Oleate, Sodium Acrylates Copolymer, Isoceteth-20, Sodium Citrate, Citric Acid, Malic Acid, Trisodium Ethylenediamine Disuccinate, Tocopherol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin'
	},
	'balancing-clarifying-serum': {
		Name: 'Balancing & Clarifying Serum',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Signs of Congestion', 'Dryness', 'Textural Irregularities'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: [],
		Tags: [],
		id: 'balancing-clarifying-serum',
		Ingredients:
			'Aqua (Water), Lactococcus Ferment Lysate, Propanediol, Potassium Azeloyl Diglycinate, Carnitine, Acetyl Glucosamine, Sarcosine, Ectoin, Adenosine, Polylysine, Silanetriol, Glycerin, Pentylene Glycol, Sclerotium Gum, Xanthan Gum, Isoceteth-20, Citric Acid, Sodium Citrate, Trisodium Ethylenediamine Disuccinate, Sodium Chloride, Ethylhexylglycerin, Sodium Benzoate, Phenoxyethanol, Chlorphenesin'
	},
	'gf-15-solution': {
		Name: 'GF 15% Solution',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Advanced Signs of Aging'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Serum',
		Excludes: ['Direct Acids', 'Direct Vitamin C'],
		Tags: ['Peptides'],
		id: 'gf-15-solution',
		Ingredients:
			'Aqua/Water/Eau, Butylene Glycol, Nicotiana Benthamiana Hexapeptide-40 sh-Oligopeptide-1, Nicotiana Benthamiana Hexapeptide-40 sh-Polypeptide-76, Nicotiana Benthamiana Octapeptide-30 sh-Oligopeptide-2, Sclerotium Gum, Glycerin, Trisodium Ethylenediamine Disuccinate, Citric Acid, Sodium Citrate, Phenoxyethanol, Chlorphenesin'
	},
	'prescription-tretinoin': {
		Name: 'Prescription Tretinoin (not The Ordinary)',
		TOD: 'night',
		Step: 'Treat',
		Targets: ['Advanced Signs of Aging'],
		'Skin Types': '',
		Phase: 'Cream',
		Format: 'Moisturizer',
		Excludes: ['Copper Peptides', 'Direct Acids', 'Direct Vitamin C', 'Retinoids'],
		Tags: ['Retinoids'],
		id: 'prescription-tretinoin'
	},
	'natural-moisturizing-factors-phytoceramides': {
		Name: 'Natural Moisturizing Factors + Phytoceramides',
		TOD: 'both',
		Step: 'Seal',
		Targets: ['Dryness'],
		'Skin Types': '',
		Phase: 'Cream',
		Format: 'Moisturizer',
		Excludes: [],
		Tags: [],
		id: 'natural-moisturizing-factors-phytoceramides',
		Ingredients:
			'Aqua (Water), Caprylic/Capric Triglyceride, Cetyl Ethylhexanoate, Isodecyl Neopentanoate, Glycerin, Propanediol, Polyglyceryl-6 Polyricinoleate, Hydrogenated Vegetable Oil, Polyglyceryl-2 Isostearate, Isosorbide Dicaprylate, Disteardimonium Hectorite, Phytosteryl Canola Glycerides, Glycosphingolipids, Glycolipids, Linoleic Acid, Oleic Acid, Palmitic Acid, Stearic Acid, Arginine, Glycine, Alanine, Serine, Proline, Threonine, Glutamic Acid, Lysine HCl, Betaine, Xylitylglucoside, Anhydroxylitol, Xylitol, Glucose, Maltose, Fructose, Trehalose, Sodium PCA, PCA, Sodium Lactate, Urea, Allantoin, Sodium Hyaluronate, Lecithin, Triolein, Dimethyl Isosorbide, Pentylene Glycol, Tocopherol, Hydroxymethoxyphenyl Decanone, Citric Acid, Trisodium Ethylenediamine Disuccinate, Magnesium Sulfate, Sodium Chloride, Sodium Hydroxide, Phenoxyethanol, Chlorphenesin'
	},
	'glycolipid-cream-cleanser': {
		Name: 'Glycolipid Cream Cleanser',
		TOD: 'both',
		Step: 'Prep',
		Targets: ['Barrier Support'],
		'Skin Types': '',
		Phase: '',
		Format: 'Cleanser',
		Excludes: [],
		Tags: [],
		id: 'glycolipid-cream-cleanser',
		Ingredients:
			'Aqua (Water), Behenyl Alcohol, Polyglyceryl-2 Stearate, Glycolipids, Pentylene Glycol, Polyglyceryl-6 Dicaprate, Glyceryl Stearate, Stearyl Alcohol, Diutan Gum, Polyacrylate Crosspolymer-6, Sodium Phytate, Phytic Acid, Trisodium Ethylenediamine Disuccinate, Sodium Benzoate, Phenoxyethanol, Chlorphenesin'
	},
	'the-ordinary-glucoside-foaming-cleanser': {
		Name: 'The Ordinary Glucoside Foaming Cleanser',
		TOD: 'both',
		Step: 'Prep',
		Targets: ['Textural Irregularities'],
		'Skin Types': '',
		Phase: '',
		Format: 'Cleanser',
		Excludes: [],
		Tags: [],
		id: 'the-ordinary-glucoside-foaming-cleanser',
		Ingredients:
			'Aqua (Water), Decyl Glucoside, Coco Glucoside, Xanthan Gum, Tocopherol, Phytic Acid, Benzyl Alcohol, Ethylhexylglycerin'
	},
	'natural-moisturizing-factors-ha': {
		Name: 'Natural Moisturizing Factors + HA',
		TOD: 'both',
		Step: 'Seal',
		Targets: ['Dryness'],
		'Skin Types': '',
		Phase: 'Cream',
		Format: 'Moisturizer',
		Excludes: [],
		Tags: [],
		id: 'natural-moisturizing-factors-ha',
		Ingredients:
			'Aqua (Water), Caprylic/Capric Triglyceride, Cetyl Alcohol, Propanediol, Stearyl Alcohol, Glycerin, Sodium Hyaluronate, Arginine, Aspartic Acid, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Glucose, Maltose, Fructose, Trehalose, Sodium PCA, PCA, Sodium Lactate, Urea, Allantoin, Linoleic Acid, Oleic Acid, Phytosteryl Canola Glycerides, Palmitic Acid, Stearic Acid, Lecithin, Triolein, Tocopherol, Carbomer, Isoceteth-20, Polysorbate 60, Sodium Chloride, Citric Acid, Trisodium Ethylenediamine Disuccinate, Pentylene Glycol, Triethanolamine, Sodium Hydroxide, Phenoxyethanol, Chlorphenesin'
	},
	'squalane-cleanser': {
		Name: 'Squalane Cleanser',
		TOD: 'both',
		Step: 'Prep',
		Targets: ['Dryness'],
		'Skin Types': '',
		Phase: '',
		Format: 'Cleanser',
		Excludes: [],
		Tags: [],
		id: 'squalane-cleanser',
		Ingredients:
			'Squalane, Aqua (Water), Coco-Caprylate/Caprate, Glycerin, Sucrose Stearate, Ethyl Macadamiate, Caprylic/Capric Triglyceride, Hydrogenated Starch Hydrolysate, Sucrose Laurate, Polyacrylate Crosspolymer-6, Isoceteth-20, Sodium Polyacrylate, Tocopherol, Hydroxymethoxyphenyl Decanone, Trisodium Ethylenediamine Disuccinate, Malic Acid, Ethylhexylglycerin, Chlorphenesin'
	},
	'100-organic-cold-pressed-moroccan-argan-oil': {
		Name: '100% Organic Cold-Pressed Moroccan Argan Oil',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dryness'],
		'Skin Types': '',
		Phase: 'Oil',
		Format: 'Oil',
		Excludes: [],
		Tags: [],
		id: '100-organic-cold-pressed-moroccan-argan-oil'
	},
	'100-organic-cold-pressed-rose-hip-seed-oil': {
		Name: '100% Organic Cold-Pressed Rose Hip Seed Oil',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dryness', 'Dullness', 'Signs of Aging'],
		'Skin Types': '',
		Phase: 'Oil',
		Format: 'Oil',
		Excludes: [],
		Tags: [],
		id: '100-organic-cold-pressed-rose-hip-seed-oil',
		Ingredients: 'Argania Spinosa Kernel Oil'
	},
	'100-plant-derived-squalane': {
		Name: '100% Plant-Derived Squalane',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dryness'],
		'Skin Types': '',
		Phase: 'Oil',
		Format: 'Oil',
		Excludes: [],
		Tags: [],
		id: '100-plant-derived-squalane',
		Ingredients: 'Squalane'
	},
	'100-cold-pressed-virgin-marula-oil': {
		Name: '100% Cold-Pressed Virgin Marula Oil',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Dryness', 'Antioxidant Support'],
		'Skin Types': '',
		Phase: 'Oil',
		Format: 'Oil',
		Excludes: [],
		Tags: [],
		id: '100-cold-pressed-virgin-marula-oil',
		Ingredients: 'Marula Oil'
	},
	sunscreen: {
		Name: 'Sunscreen (generic, use any sunscreen)',
		TOD: 'day',
		Step: 'Seal',
		Targets: ['Sun Protection'],
		'Skin Types': '',
		Phase: 'Cream',
		Format: 'Sunscreen',
		Excludes: [],
		Tags: [],
		id: 'sunscreen'
	},
	'multi-active-delivery-essence': {
		Name: 'Multi-Active Delivery Essence',
		id: 'multi-active-delivery-essence',
		TOD: 'both',
		Step: 'Prep',
		Targets: ['Dryness', 'Dullness', 'Textural Irregularities', 'Dehydration'],
		'Skin Types': '',
		Phase: 'Water',
		Format: 'Essence',
		Excludes: ['Retinoids', 'Direct Acids'],
		Tags: [],
		Ingredients:
			'Aqua/Water/Eau, Glycerin, Propanediol, Sodium Caproyl Prolinate, Glycogen, Gellan Gum, Citric Acid, Sodium Chloride, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Chlorphenesin'
	},
	'fermented-rose-hip-seed-oil': {
		Name: 'Fermented Rose Hip Seed Oil',
		id: 'fermented-rose-hip-seed-oil',
		TOD: 'both',
		Step: 'Treat',
		Targets: ['Advanced Signs of Aging', 'Antioxidant Support', 'Dullness', 'Look of Redness'],
		'Skin Types': '',
		Phase: 'Oil',
		Format: 'Oil',
		Excludes: [],
		Tags: [],
		Ingredients: 'Rosa Canina Seed Oil'
	}
};
