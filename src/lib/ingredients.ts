import type { Ingredient } from './types/ingredients';

export const ingredients: { [key: string]: Ingredient } = {
	'1-2-hexanediol': {
		name: '1,2-Hexanediol',
		id: '1-2-hexanediol',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'caffeine-solution-5-egcg',
			'lactic-acid-10-ha',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha',
			'ascorbyl-glucoside-solution-12',
			'hyaluronic-acid-2-b5-original-formulation',
			'marine-hyaluronics',
			'amino-acids-b5'
		],
		tags: [],
		synonyms: []
	},
	'4-t-butylcyclohexanol': {
		name: '4-T-Butylcyclohexanol',
		id: '4-t-butylcyclohexanol',
		products: [
			'salicylic-acid-2-anhydrous-solution',
			'retinal-0-2-emulsion',
			'soothing-barrier-support-serum'
		],
		tags: [],
		synonyms: []
	},
	'acacia-senegal-gum': {
		name: 'Acacia Senegal Gum',
		id: 'acacia-senegal-gum',
		products: [
			'lactic-acid-10-ha',
			'lactic-acid-5-ha',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'granactive-retinoid-2-emulsion'
		],
		tags: [],
		synonyms: []
	},
	'acetyl-hexapeptide-8': {
		name: 'Acetyl Hexapeptide-8',
		id: 'acetyl-hexapeptide-8',
		products: [
			'argireline-solution-10',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum'
		],
		tags: ['key-ingredient'],
		synonyms: ['Argireline'],
		category: 'Peptides',
		description: 'A peptide that targets dynamic wrinkles'
	},
	'acetyl-tetrapeptide-5': {
		name: 'Acetyl Tetrapeptide-5',
		id: 'acetyl-tetrapeptide-5',
		products: ['multi-peptide-eye-serum'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Peptides',
		description: 'A peptide designed to target undereye puffiness'
	},
	'acetylarginyltryptophyl-diphenylglycine': {
		name: 'Acetylarginyltryptophyl Diphenylglycine',
		id: 'acetylarginyltryptophyl-diphenylglycine',
		products: ['multi-peptide-copper-peptides-1-serum', 'multi-peptide-ha-serum'],
		tags: ['key-ingredient'],
		synonyms: ['Relistase'],
		category: 'Peptides',
		description: 'A peptide designed improve skin elasticity'
	},
	'acrylates-c10-30-alkyl-acrylate-crosspolymer': {
		name: 'Acrylates/C10-30 Alkyl Acrylate Crosspolymer',
		id: 'acrylates-c10-30-alkyl-acrylate-crosspolymer',
		products: ['natural-moisturizing-factors-beta-glucan'],
		tags: [],
		synonyms: []
	},
	'acrylates-ethylhexyl-acrylate-crosspolymer': {
		name: 'Acrylates/Ethylhexyl Acrylate Crosspolymer',
		id: 'acrylates-ethylhexyl-acrylate-crosspolymer',
		products: ['vitamin-c-suspension-23-ha-spheres-2'],
		tags: [],
		synonyms: []
	},
	adenosine: {
		name: 'Adenosine',
		id: 'adenosine',
		products: ['balancing-clarifying-serum'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Biologics',
		description: 'A molecule with anti-inflammatory properties'
	},
	'ahnfeltia-concinna-extract': {
		name: 'Ahnfeltia Concinna Extract',
		id: 'ahnfeltia-concinna-extract',
		products: ['hyaluronic-acid-2-b5-original-formulation', 'marine-hyaluronics'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Botanicals',
		description: 'A film-foaming humectant that helps improve skin hydration'
	},
	'ahnfeltiopsis-concinna-extract': {
		name: 'Ahnfeltiopsis Concinna Extract',
		id: 'ahnfeltiopsis-concinna-extract',
		products: ['hyaluronic-acid-2-b5-hydrating-serum'],
		tags: [],
		synonyms: []
	},
	alanine: {
		name: 'Alanine',
		id: 'alanine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['amino-acids'],
		synonyms: []
	},
	'algae-extract': {
		name: 'Algae Extract',
		id: 'algae-extract',
		products: ['marine-hyaluronics'],
		tags: [],
		synonyms: []
	},
	allantoin: {
		name: 'Allantoin',
		id: 'allantoin',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'aloe-barbadensis-leaf-juice-powder': {
		name: 'Aloe Barbadensis Leaf Juice Powder',
		id: 'aloe-barbadensis-leaf-juice-powder',
		products: ['aloe-2-nag-2-solution'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Botanicals',
		description:
			'Powdered form of aloe vera leaf juice with soothing and film-forming humectant properties'
	},
	'aloe-barbadensis-leaf-water': {
		name: 'Aloe Barbadensis Leaf Water',
		id: 'aloe-barbadensis-leaf-water',
		products: ['glycolic-acid-7-exfoliating-toner'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Botanicals',
		description: 'The juice of aloe vera leaf with film-forming humectant and soothing properties'
	},
	'alpha-arbutin': {
		name: 'Alpha-Arbutin',
		id: 'alpha-arbutin',
		products: ['alpha-arbutin-2-ha'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Antioxidants',
		description: 'A plant-derived compound that may help prevent the formation of brown spots'
	},
	'aminomethyl-propanol': {
		name: 'Aminomethyl Propanol',
		id: 'aminomethyl-propanol',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'ascorbyl-glucoside-solution-12',
			'natural-moisturizing-factors-beta-glucan'
		],
		tags: [],
		synonyms: []
	},
	anhydroxylitol: {
		name: 'Anhydroxylitol',
		id: 'anhydroxylitol',
		products: [
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides'
		],
		tags: [],
		synonyms: []
	},
	'argania-spinosa-kernel-oil': {
		name: 'Argania Spinosa Kernel Oil',
		id: 'argania-spinosa-kernel-oil',
		products: ['100-organic-cold-pressed-moroccan-argan-oil'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Oils',
		description: 'An oil with naturally-occurring antioxidants and fatty acids'
	},
	arginine: {
		name: 'Arginine',
		id: 'arginine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['key-ingredient', 'amino-acids'],
		synonyms: [],
		category: 'Amino Acids',
		description: 'An amino acid that acts as a film-forming humectant'
	},
	'ascorbic-acid': {
		name: 'Ascorbic Acid',
		id: 'ascorbic-acid',
		products: [
			'vitamin-c-suspension-23-ha-spheres-2',
			'100-l-ascorbic-acid-powder',
			'vitamin-c-suspension-30-in-silicone'
		],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Antioxidants',
		description:
			'An antioxidant that helps prevent free radical/sun damage/browning and may also boost collagen production'
	},
	'ascorbyl-glucoside': {
		name: 'Ascorbyl Glucoside',
		id: 'ascorbyl-glucoside',
		products: ['ascorbyl-glucoside-solution-12'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Antioxidants',
		description:
			'Stable better-penetrating form of vitamin C, used for preventing free radical damage/boosting collagen'
	},
	'ascorbyl-palmitate': {
		name: 'Ascorbyl Palmitate',
		id: 'ascorbyl-palmitate',
		products: ['retinal-0-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'asiatic-acid': {
		name: 'Asiatic Acid',
		id: 'asiatic-acid',
		products: ['soothing-barrier-support-serum'],
		tags: ['centella-asiatica-phytotechnologies'],
		synonyms: []
	},
	asiaticoside: {
		name: 'Asiaticoside',
		id: 'asiaticoside',
		products: ['soothing-barrier-support-serum'],
		tags: ['centella-asiatica-phytotechnologies'],
		synonyms: []
	},
	'aspartic-acid': {
		name: 'Aspartic Acid',
		id: 'aspartic-acid',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'azelaic-acid': {
		name: 'Azelaic Acid',
		id: 'azelaic-acid',
		products: ['azelaic-acid-suspension-10'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Acids',
		description: 'An carboxylic acid known to be effective for treating acne, rosacea, and melasma'
	},
	'behentrimonium-chloride': {
		name: 'Behentrimonium Chloride',
		id: 'behentrimonium-chloride',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'behenyl-alcohol': {
		name: 'Behenyl Alcohol',
		id: 'behenyl-alcohol',
		products: ['glycolipid-cream-cleanser'],
		tags: [],
		synonyms: []
	},
	'benzoic-acid': {
		name: 'Benzoic Acid',
		id: 'benzoic-acid',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'benzyl-alcohol': {
		name: 'Benzyl Alcohol',
		id: 'benzyl-alcohol',
		products: [
			'caffeine-solution-5-egcg',
			'multi-peptide-eye-serum',
			'soothing-barrier-support-serum',
			'the-ordinary-glucoside-foaming-cleanser',
			'glucoside-foaming-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'beta-glucan': {
		name: 'Beta-Glucan',
		id: 'beta-glucan',
		products: ['natural-moisturizing-factors-beta-glucan'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Humectants',
		description: 'A film-forming humectant that may have anti-aging properties'
	},
	betaine: {
		name: 'Betaine',
		id: 'betaine',
		products: [
			'natural-moisturizing-factors-beta-glucan',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides'
		],
		tags: ['key-ingredient'],

		synonyms: [],
		category: 'Humectants',
		description: 'A plant-derived humectant derived from sugar beets'
	},
	bht: {
		name: 'Bht',
		id: 'bht',
		products: [
			'vitamin-c-suspension-23-ha-spheres-2',
			'retinol-1-in-squalane',
			'retinol-0-5-in-squalane',
			'retinol-0-2-in-squalane'
		],
		tags: [],
		synonyms: []
	},
	'biosaccharide-gum-1': {
		name: 'Biosaccharide Gum-1',
		id: 'biosaccharide-gum-1',
		products: ['retinal-0-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'biosaccharide-gum-2': {
		name: 'Biosaccharide Gum-2',
		id: 'biosaccharide-gum-2',
		products: ['aloe-2-nag-2-solution'],
		tags: [],
		synonyms: []
	},
	bisabolol: {
		name: 'Bisabolol',
		id: 'bisabolol',
		products: [
			'retinal-0-2-emulsion',
			'granactive-retinoid-2-emulsion',
			'granactive-retinoid-5-in-squalane',
			'soothing-barrier-support-serum'
		],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Botanicals',
		description: 'Chamomile-derived compound with soothing properties'
	},
	'butylene-glycol': {
		name: 'Butylene Glycol',
		id: 'butylene-glycol',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'matrixyl-10-ha',
			'retinal-0-2-emulsion',
			'gf-15-solution'
		],
		tags: [],
		synonyms: []
	},
	'butylene-ethylene-styrene-copolymer': {
		name: 'Butylene/Ethylene/Styrene Copolymer',
		id: 'butylene-ethylene-styrene-copolymer',
		products: ['vitamin-c-suspension-23-ha-spheres-2'],
		tags: [],
		synonyms: []
	},
	'c12-15-alkyl-benzoate': {
		name: 'C12-15 Alkyl Benzoate',
		id: 'c12-15-alkyl-benzoate',
		products: ['granactive-retinoid-5-in-squalane'],
		tags: [],
		synonyms: []
	},
	'caesalpinia-spinosa-gum': {
		name: 'Caesalpinia Spinosa Gum',
		id: 'caesalpinia-spinosa-gum',
		products: ['retinal-0-2-emulsion'],
		tags: [],
		synonyms: []
	},
	caffeine: {
		name: 'Caffeine',
		id: 'caffeine',
		products: ['caffeine-solution-5-egcg', 'multi-peptide-eye-serum'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Caffeine',
		description: 'The same stuff as in coffee, may improve circulation'
	},
	'caprylic-capric-triglyceride': {
		name: 'Caprylic/Capric Triglyceride',
		id: 'caprylic-capric-triglyceride',
		products: [
			'salicylic-acid-2-anhydrous-solution',
			'retinol-1-in-squalane',
			'retinol-0-5-in-squalane',
			'granactive-retinoid-2-emulsion',
			'retinol-0-2-in-squalane',
			'granactive-retinoid-5-in-squalane',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha',
			'squalane-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'caprylyl-glycol': {
		name: 'Caprylyl Glycol',
		id: 'caprylyl-glycol',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'hyaluronic-acid-2-b5-hydrating-serum',
			'caffeine-solution-5-egcg',
			'lactic-acid-10-ha',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha',
			'ascorbyl-glucoside-solution-12',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'hyaluronic-acid-2-b5-original-formulation',
			'marine-hyaluronics',
			'amino-acids-b5'
		],
		tags: [],
		synonyms: []
	},
	carbomer: {
		name: 'Carbomer',
		id: 'carbomer',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'matrixyl-10-ha',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	carrageenan: {
		name: 'Carrageenan',
		id: 'carrageenan',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'centaurea-cyanus-flower-water': {
		name: 'Centaurea Cyanus Flower Water',
		id: 'centaurea-cyanus-flower-water',
		products: ['glycolic-acid-7-exfoliating-toner'],
		tags: [],
		synonyms: []
	},

	'ceteareth-12': {
		name: 'Ceteareth-12',
		id: 'ceteareth-12',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'ceteareth-20': {
		name: 'Ceteareth-20',
		id: 'ceteareth-20',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'cetearyl-alcohol': {
		name: 'Cetearyl Alcohol',
		id: 'cetearyl-alcohol',
		products: ['granactive-retinoid-2-emulsion', 'soothing-barrier-support-serum'],
		tags: [],
		synonyms: []
	},
	'cetearyl-isononanoate': {
		name: 'Cetearyl Isononanoate',
		id: 'cetearyl-isononanoate',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'ceteth-20-phosphate': {
		name: 'Ceteth-20 Phosphate',
		id: 'ceteth-20-phosphate',
		products: ['soothing-barrier-support-serum'],
		tags: [],
		synonyms: []
	},
	'cetyl-alcohol': {
		name: 'Cetyl Alcohol',
		id: 'cetyl-alcohol',
		products: ['natural-moisturizing-factors-ha'],
		tags: [],
		synonyms: []
	},
	'cetyl-ethylhexanoate': {
		name: 'Cetyl Ethylhexanoate',
		id: 'cetyl-ethylhexanoate',
		products: ['natural-moisturizing-factors-phytoceramides'],
		tags: [],
		synonyms: []
	},
	'cetyl-palmitate': {
		name: 'Cetyl Palmitate',
		id: 'cetyl-palmitate',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'cetylhydroxyproline-palmitamide': {
		name: 'Cetylhydroxyproline Palmitamide',
		id: 'cetylhydroxyproline-palmitamide',
		products: ['retinal-0-2-emulsion', 'soothing-barrier-support-serum'],
		tags: ['synthetic-oat-analogues'],
		synonyms: []
	},
	chlorphenesin: {
		name: 'Chlorphenesin',
		id: 'chlorphenesin',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'niacinamide-10-zinc-1',
			'argireline-solution-10',
			'salicylic-acid-2-solution',
			'azelaic-acid-suspension-10',
			'salicylic-acid-2-anhydrous-solution',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'aloe-2-nag-2-solution',
			'matrixyl-10-ha',
			'retinal-0-2-emulsion',
			'granactive-retinoid-2-emulsion',
			'saccharomyces-ferment-30-milky-toner',
			'alpha-arbutin-2-ha',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'gf-15-solution',
			'natural-moisturizing-factors-phytoceramides',
			'glycolipid-cream-cleanser',
			'natural-moisturizing-factors-ha',
			'squalane-cleanser',
			'multi-active-delivery-essence'
		],
		tags: [],
		synonyms: []
	},
	'citric-acid': {
		name: 'Citric Acid',
		id: 'citric-acid',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'hyaluronic-acid-2-b5-hydrating-serum',
			'salicylic-acid-2-solution',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'saccharomyces-ferment-30-milky-toner',
			'hyaluronic-acid-2-b5-original-formulation',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'gf-15-solution',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha',
			'multi-active-delivery-essence'
		],
		tags: [],
		synonyms: []
	},
	'cocamidopropyl-dimethylamine': {
		name: 'Cocamidopropyl Dimethylamine',
		id: 'cocamidopropyl-dimethylamine',
		products: ['salicylic-acid-2-solution'],
		tags: [],
		synonyms: []
	},
	'coco-glucoside': {
		name: 'Coco Glucoside',
		id: 'coco-glucoside',
		products: ['the-ordinary-glucoside-foaming-cleanser', 'glucoside-foaming-cleanser'],
		tags: [],
		synonyms: []
	},
	'coco-caprylate-caprate': {
		name: 'Coco-Caprylate/Caprate',
		id: 'coco-caprylate-caprate',
		products: [
			'vitamin-c-suspension-23-ha-spheres-2',
			'ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f',
			'retinal-0-2-emulsion',
			'squalane-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'coconut-alkanes': {
		name: 'Coconut Alkanes',
		id: 'coconut-alkanes',
		products: [
			'vitamin-c-suspension-23-ha-spheres-2',
			'ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f'
		],
		tags: [],
		synonyms: []
	},
	'copper-tripeptide-1': {
		name: 'Copper Tripeptide-1',
		id: 'copper-tripeptide-1',
		products: ['multi-peptide-copper-peptides-1-serum'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Peptides',
		description: 'Peptide with anti-inflammatory and anti-aging properties'
	},
	cyanocobalamin: {
		name: 'Cyanocobalamin',
		id: 'cyanocobalamin',
		products: ['soothing-barrier-support-serum'],
		tags: [],
		synonyms: []
	},
	'decyl-glucoside': {
		name: 'Decyl Glucoside',
		id: 'decyl-glucoside',
		products: ['glucoside-foaming-cleanser'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Surfactants',
		description: 'A mild cleansing agent'
	},
	'dehydroacetic-acid': {
		name: 'Dehydroacetic Acid',
		id: 'dehydroacetic-acid',
		products: [
			'caffeine-solution-5-egcg',
			'multi-peptide-eye-serum',
			'granactive-retinoid-2-emulsion',
			'soothing-barrier-support-serum'
		],
		tags: [],
		synonyms: []
	},
	dextrin: {
		name: 'Dextrin',
		id: 'dextrin',
		products: ['glycolic-acid-7-exfoliating-toner'],
		tags: [],
		synonyms: []
	},
	'dicetyl-phosphate': {
		name: 'Dicetyl Phosphate',
		id: 'dicetyl-phosphate',
		products: ['soothing-barrier-support-serum'],
		tags: [],
		synonyms: []
	},
	dimethicone: {
		name: 'Dimethicone',
		id: 'dimethicone',
		products: ['azelaic-acid-suspension-10', 'vitamin-c-suspension-30-in-silicone'],
		tags: [],
		synonyms: []
	},
	'dimethicone-bis-isobutyl-ppg-20-crosspolymer': {
		name: 'Dimethicone/Bis-Isobutyl Ppg-20 Crosspolymer',
		id: 'dimethicone-bis-isobutyl-ppg-20-crosspolymer',
		products: ['azelaic-acid-suspension-10'],
		tags: [],
		synonyms: []
	},
	'dimethyl-isosorbide': {
		name: 'Dimethyl Isosorbide',
		id: 'dimethyl-isosorbide',
		products: [
			'niacinamide-10-zinc-1',
			'caffeine-solution-5-egcg',
			'argireline-solution-10',
			'azelaic-acid-suspension-10',
			'mandelic-acid-10-ha',
			'ascorbyl-glucoside-solution-12',
			'multi-peptide-copper-peptides-1-serum',
			'granactive-retinoid-2-emulsion',
			'granactive-retinoid-5-in-squalane',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides'
		],
		tags: [],
		synonyms: []
	},
	'dipeptide-diaminobutyroyl-benzylamide-diacetate': {
		name: 'Dipeptide Diaminobutyroyl Benzylamide Diacetate',
		id: 'dipeptide-diaminobutyroyl-benzylamide-diacetate',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum'
		],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Peptides',
		description: 'A peptide that may prevent/improve dynamic wrinkles'
	},
	'dipropylene-glycol': {
		name: 'Dipropylene Glycol',
		id: 'dipropylene-glycol',
		products: ['multi-peptide-eye-serum', 'aloe-2-nag-2-solution'],
		tags: [],
		synonyms: []
	},
	'disodium-edta': {
		name: 'Disodium Edta',
		id: 'disodium-edta',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'disteardimonium-hectorite': {
		name: 'Disteardimonium Hectorite',
		id: 'disteardimonium-hectorite',
		products: ['natural-moisturizing-factors-phytoceramides'],
		tags: [],
		synonyms: []
	},
	'diutan-gum': {
		name: 'Diutan Gum',
		id: 'diutan-gum',
		products: ['glycolipid-cream-cleanser'],
		tags: [],
		synonyms: []
	},
	ectoin: {
		name: 'Ectoin',
		id: 'ectoin',
		products: ['balancing-clarifying-serum'],
		tags: ['key-ingredient'],
		synonyms: [],
		category: 'Humectants',
		description: 'A film-forming humectant with soothing and anti-aging properties'
	},
	'epigallocatechin-gallate': {
		name: 'Epigallocatechin Gallate',
		id: 'epigallocatechin-gallate',
		products: [
			'caffeine-solution-5-egcg',
			'multi-peptide-eye-serum',
			'soothing-barrier-support-serum'
		],
		tags: ['key-ingredient'],
		synonyms: ['Epigallocatechin Gallatyl Glucoside']
	},
	ergothioneine: {
		name: 'Ergothioneine',
		id: 'ergothioneine',
		products: ['retinal-0-2-emulsion'],
		tags: [],
		synonyms: []
	},
	ethoxydiglycol: {
		name: 'Ethoxydiglycol',
		id: 'ethoxydiglycol',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'niacinamide-10-zinc-1',
			'azelaic-acid-suspension-10',
			'ascorbyl-glucoside-solution-12',
			'multi-peptide-ha-serum',
			'matrixyl-10-ha',
			'alpha-arbutin-2-ha',
			'hyaluronic-acid-2-b5-original-formulation',
			'marine-hyaluronics'
		],
		tags: [],
		synonyms: []
	},
	'ethyl-linoleate': {
		name: 'Ethyl Linoleate',
		id: 'ethyl-linoleate',
		products: [
			'ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f',
			'granactive-retinoid-2-emulsion',
			'soothing-barrier-support-serum'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'ethyl-macadamiate': {
		name: 'Ethyl Macadamiate',
		id: 'ethyl-macadamiate',
		products: ['niacinamide-5-face-and-body-emulsion', 'squalane-cleanser'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'ethylbisiminomethylguaiacol-manganese-chloride': {
		name: 'Ethylbisiminomethylguaiacol Manganese Chloride.',
		id: 'ethylbisiminomethylguaiacol-manganese-chloride',
		products: ['euk-134-0-1'],
		tags: [],
		synonyms: []
	},
	'ethylene-propylene-styrene-copolymer': {
		name: 'Ethylene/Propylene/Styrene Copolymer',
		id: 'ethylene-propylene-styrene-copolymer',
		products: ['vitamin-c-suspension-23-ha-spheres-2'],
		tags: [],
		synonyms: []
	},
	'ethylhexyl-olivate': {
		name: 'Ethylhexyl Olivate',
		id: 'ethylhexyl-olivate',
		products: ['niacinamide-5-face-and-body-emulsion'],
		tags: [],
		synonyms: []
	},
	'ethylhexyl-palmitate': {
		name: 'Ethylhexyl Palmitate',
		id: 'ethylhexyl-palmitate',
		products: ['vitamin-c-suspension-23-ha-spheres-2'],
		tags: [],
		synonyms: []
	},
	ethylhexylglycerin: {
		name: 'Ethylhexylglycerin',
		id: 'ethylhexylglycerin',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'caffeine-solution-5-egcg',
			'lactic-acid-10-ha',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'aloe-2-nag-2-solution',
			'retinal-0-2-emulsion',
			'granactive-retinoid-2-emulsion',
			'hyaluronic-acid-2-b5-original-formulation',
			'soothing-barrier-support-serum',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'the-ordinary-glucoside-foaming-cleanser',
			'squalane-cleanser',
			'glucoside-foaming-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'ferulic-acid': {
		name: 'Ferulic Acid.',
		id: 'ferulic-acid',
		products: ['resveratrol-3-ferulic-acid-3'],
		tags: [],
		synonyms: []
	},
	'fraxinus-excelsior-bark-extract': {
		name: 'Fraxinus Excelsior Bark Extract',
		id: 'fraxinus-excelsior-bark-extract',
		products: ['multi-peptide-eye-serum'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	fructose: {
		name: 'Fructose',
		id: 'fructose',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'gallyl-glucoside': {
		name: 'Gallyl Glucoside',
		id: 'gallyl-glucoside',
		products: [
			'caffeine-solution-5-egcg',
			'multi-peptide-eye-serum',
			'soothing-barrier-support-serum'
		],
		tags: [],
		synonyms: []
	},
	'gellan-gum': {
		name: 'Gellan Gum',
		id: 'gellan-gum',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'argireline-solution-10',
			'multi-active-delivery-essence'
		],
		tags: [],
		synonyms: []
	},
	'ginger-root-extract': {
		name: 'Ginger Root Extract',
		id: 'ginger-root-extract',
		products: ['retinal-0-2-emulsion', 'soothing-barrier-support-serum'],
		tags: ['key-ingredient'],
		synonyms: ['Zingiber Officinale Root Extract']
	},
	glucomannan: {
		name: 'Glucomannan',
		id: 'glucomannan',
		products: ['vitamin-c-suspension-23-ha-spheres-2'],
		tags: [],
		synonyms: []
	},
	glucose: {
		name: 'Glucose',
		id: 'glucose',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'glutamic-acid': {
		name: 'Glutamic Acid',
		id: 'glutamic-acid',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'natural-moisturizing-factors-beta-glucan',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides'
		],
		tags: ['amino-acids'],
		synonyms: []
	},
	glycerin: {
		name: 'Glycerin',
		id: 'glycerin',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'hyaluronic-acid-2-b5-hydrating-serum',
			'caffeine-solution-5-egcg',
			'lactic-acid-10-ha',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'aloe-2-nag-2-solution',
			'matrixyl-10-ha',
			'granactive-retinoid-2-emulsion',
			'hyaluronic-acid-2-b5-original-formulation',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'gf-15-solution',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha',
			'squalane-cleanser',
			'multi-active-delivery-essence'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'glyceryl-stearate': {
		name: 'Glyceryl Stearate',
		id: 'glyceryl-stearate',
		products: ['granactive-retinoid-2-emulsion', 'glycolipid-cream-cleanser'],
		tags: [],
		synonyms: []
	},
	glycine: {
		name: 'Glycine',
		id: 'glycine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['amino-acids'],
		synonyms: []
	},
	'glycine-soja-soybean-seed-extract': {
		name: 'Glycine Soja (Soybean) Seed Extract',
		id: 'glycine-soja-soybean-seed-extract',
		products: ['caffeine-solution-5-egcg'],
		tags: [],
		synonyms: []
	},
	glycogen: {
		name: 'Glycogen',
		id: 'glycogen',
		products: ['multi-active-delivery-essence'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'glycolic-acid': {
		name: 'Glycolic Acid',
		id: 'glycolic-acid',
		products: ['glycolic-acid-7-exfoliating-toner', 'multi-peptide-eye-serum'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	glycolipids: {
		name: 'Glycolipids',
		id: 'glycolipids',
		products: ['natural-moisturizing-factors-phytoceramides', 'glycolipid-cream-cleanser'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	glycosphingolipids: {
		name: 'Glycosphingolipids',
		id: 'glycosphingolipids',
		products: ['natural-moisturizing-factors-phytoceramides'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'hexyl-nicotinate': {
		name: 'Hexyl Nicotinate',
		id: 'hexyl-nicotinate',
		products: ['glycolic-acid-7-exfoliating-toner'],
		tags: [],
		synonyms: []
	},
	hexyldecanol: {
		name: 'Hexyldecanol',
		id: 'hexyldecanol',
		products: ['retinal-0-2-emulsion', 'soothing-barrier-support-serum'],
		tags: [],
		synonyms: []
	},
	'hexylene-glycol': {
		name: 'Hexylene Glycol',
		id: 'hexylene-glycol',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'hyaluronic-acid-2-b5-hydrating-serum',
			'hyaluronic-acid-2-b5-original-formulation',
			'marine-hyaluronics'
		],
		tags: [],
		synonyms: []
	},
	histidine: {
		name: 'Histidine',
		id: 'histidine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'hyaluronic-acid': {
		name: 'Hyaluronic Acid',
		id: 'hyaluronic-acid',
		products: [
			'caffeine-solution-5-egcg',
			'hyaluronic-acid-2-b5-hydrating-serum',
			'vitamin-c-suspension-23-ha-spheres-2',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'matrixyl-10-ha',
			'hyaluronic-acid-2-b5-original-formulation',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha',
			'lactic-acid-10-ha',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha'
		],
		tags: ['key-ingredient'],
		synonyms: [
			'Sodium Hyaluronate',
			'Hydrolyzed Hyaluronic Acid',
			'Hyaluronate Sodium',
			'Hyaluronan',
			'Sodium Hyaluronate Crosspolymer'
		]
	},
	'hydrogenated-starch-hydrolysate': {
		name: 'Hydrogenated Starch Hydrolysate',
		id: 'hydrogenated-starch-hydrolysate',
		products: ['squalane-cleanser'],
		tags: [],
		synonyms: []
	},
	'hydrogenated-vegetable-oil': {
		name: 'Hydrogenated Vegetable Oil',
		id: 'hydrogenated-vegetable-oil',
		products: ['natural-moisturizing-factors-phytoceramides'],
		tags: [],
		synonyms: []
	},
	'hydrolyzed-sodium-hyaluronate': {
		name: 'Hydrolyzed Sodium Hyaluronate',
		id: 'hydrolyzed-sodium-hyaluronate',
		products: ['alpha-arbutin-2-ha'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	hydroxyapatite: {
		name: 'Hydroxyapatite',
		id: 'hydroxyapatite',
		products: ['retinal-0-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'hydroxyethyl-acrylate-sodium-acryloyldimethyl-taurate-copolymer': {
		name: 'Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer',
		id: 'hydroxyethyl-acrylate-sodium-acryloyldimethyl-taurate-copolymer',
		products: ['azelaic-acid-suspension-10', 'retinal-0-2-emulsion'],
		tags: [],
		synonyms: []
	},
	hydroxyethylcellulose: {
		name: 'Hydroxyethylcellulose',
		id: 'hydroxyethylcellulose',
		products: ['caffeine-solution-5-egcg', 'salicylic-acid-2-solution', 'multi-peptide-eye-serum'],
		tags: [],
		synonyms: []
	},
	'hydroxymethoxyphenyl-decanone': {
		name: 'Hydroxymethoxyphenyl Decanone',
		id: 'hydroxymethoxyphenyl-decanone',
		products: [
			'salicylic-acid-2-anhydrous-solution',
			'multi-peptide-eye-serum',
			'aloe-2-nag-2-solution',
			'retinol-1-in-squalane',
			'retinol-0-5-in-squalane',
			'granactive-retinoid-2-emulsion',
			'retinol-0-2-in-squalane',
			'granactive-retinoid-5-in-squalane',
			'natural-moisturizing-factors-phytoceramides',
			'squalane-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'hydroxyphenyl-propamidobenzoic-acid': {
		name: 'Hydroxyphenyl Propamidobenzoic Acid',
		id: 'hydroxyphenyl-propamidobenzoic-acid',
		products: ['retinal-0-2-emulsion', 'soothing-barrier-support-serum'],
		tags: [],
		synonyms: []
	},
	'hydroxypinacolone-retinoate': {
		name: 'Hydroxypinacolone Retinoate',
		id: 'hydroxypinacolone-retinoate',
		products: ['granactive-retinoid-2-emulsion', 'granactive-retinoid-5-in-squalane'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'hydroxypropyl-cyclodextrin': {
		name: 'Hydroxypropyl Cyclodextrin',
		id: 'hydroxypropyl-cyclodextrin',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'matrixyl-10-ha'
		],
		tags: [],
		synonyms: []
	},
	'inulin-lauryl-carbamate': {
		name: 'Inulin Lauryl Carbamate',
		id: 'inulin-lauryl-carbamate',
		products: ['granactive-retinoid-2-emulsion'],
		tags: [],
		synonyms: []
	},
	'isoceteth-20': {
		name: 'Isoceteth-20',
		id: 'isoceteth-20',
		products: [
			'niacinamide-10-zinc-1',
			'argireline-solution-10',
			'azelaic-acid-suspension-10',
			'lactic-acid-10-ha',
			'lactic-acid-5-ha',
			'ascorbyl-glucoside-solution-12',
			'aloe-2-nag-2-solution',
			'retinal-0-2-emulsion',
			'granactive-retinoid-2-emulsion',
			'saccharomyces-ferment-30-milky-toner',
			'hyaluronic-acid-2-b5-original-formulation',
			'soothing-barrier-support-serum',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'natural-moisturizing-factors-ha',
			'squalane-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'isodecyl-neopentanoate': {
		name: 'Isodecyl Neopentanoate',
		id: 'isodecyl-neopentanoate',
		products: [
			'azelaic-acid-suspension-10',
			'vitamin-c-suspension-23-ha-spheres-2',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-phytoceramides'
		],
		tags: [],
		synonyms: []
	},
	isohexadecane: {
		name: 'Isohexadecane',
		id: 'isohexadecane',
		products: ['azelaic-acid-suspension-10', 'retinal-0-2-emulsion'],
		tags: [],
		synonyms: []
	},
	isoleucine: {
		name: 'Isoleucine',
		id: 'isoleucine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'isononyl-isononanoate': {
		name: 'Isononyl Isononanoate',
		id: 'isononyl-isononanoate',
		products: ['vitamin-c-suspension-23-ha-spheres-2'],
		tags: [],
		synonyms: []
	},
	'isosorbide-dicaprylate': {
		name: 'Isosorbide Dicaprylate',
		id: 'isosorbide-dicaprylate',
		products: ['natural-moisturizing-factors-phytoceramides'],
		tags: [],
		synonyms: []
	},
	'l-carnitine': {
		name: 'L-Carnitine',
		id: 'l-carnitine',
		products: ['balancing-clarifying-serum'],
		tags: ['key-ingredient'],
		synonyms: ['Carnitine']
	},
	'lactic-acid': {
		name: 'Lactic Acid',
		id: 'lactic-acid',
		products: [
			'caffeine-solution-5-egcg',
			'lactic-acid-10-ha',
			'lactic-acid-5-ha',
			'aloe-2-nag-2-solution',
			'retinal-0-2-emulsion',
			'alpha-arbutin-2-ha'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'lactococcus-ferment-lysate': {
		name: 'Lactococcus Ferment Lysate',
		id: 'lactococcus-ferment-lysate',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'balancing-clarifying-serum'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'lauryl-glucoside': {
		name: 'Lauryl Glucoside',
		id: 'lauryl-glucoside',
		products: ['saccharomyces-ferment-30-milky-toner'],
		tags: [],
		synonyms: []
	},
	lecithin: {
		name: 'Lecithin',
		id: 'lecithin',
		products: ['natural-moisturizing-factors-phytoceramides', 'natural-moisturizing-factors-ha'],
		tags: [],
		synonyms: []
	},
	'linoleic-acid': {
		name: 'Linoleic Acid',
		id: 'linoleic-acid',
		products: ['natural-moisturizing-factors-phytoceramides', 'natural-moisturizing-factors-ha'],
		tags: ['fatty-acids'],
		synonyms: []
	},
	'lysine-hcl': {
		name: 'Lysine Hcl',
		id: 'lysine-hcl',
		products: [
			'natural-moisturizing-factors-beta-glucan',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides'
		],
		tags: [],
		synonyms: []
	},
	'madecassic-acid': {
		name: 'Madecassic Acid',
		id: 'madecassic-acid',
		products: ['soothing-barrier-support-serum'],
		tags: ['centella-asiatica-phytotechnologies'],
		synonyms: []
	},
	'magnesium-sulfate': {
		name: 'Magnesium Sulfate',
		id: 'magnesium-sulfate',
		products: ['natural-moisturizing-factors-phytoceramides'],
		tags: ['minerals'],
		synonyms: []
	},
	'malic-acid': {
		name: 'Malic Acid',
		id: 'malic-acid',
		products: ['niacinamide-5-face-and-body-emulsion', 'squalane-cleanser'],
		tags: [],
		synonyms: []
	},
	maltodextrin: {
		name: 'Maltodextrin',
		id: 'maltodextrin',
		products: ['caffeine-solution-5-egcg', 'multi-peptide-eye-serum', 'retinal-0-2-emulsion'],
		tags: [],
		synonyms: []
	},
	maltose: {
		name: 'Maltose',
		id: 'maltose',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'mandelic-acid': {
		name: 'Mandelic Acid',
		id: 'mandelic-acid',
		products: ['mandelic-acid-10-ha'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'marula-oil': {
		name: 'Marula Oil',
		id: 'marula-oil',
		products: ['100-cold-pressed-virgin-marula-oil'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	melanin: {
		name: 'Melanin',
		id: 'melanin',
		products: ['caffeine-solution-5-egcg'],
		tags: [],
		synonyms: []
	},
	'myristoyl-nonapeptide-3': {
		name: 'Myristoyl Nonapeptide-3',
		id: 'myristoyl-nonapeptide-3',
		products: ['multi-peptide-eye-serum'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'myristyl-glucoside': {
		name: 'Myristyl Glucoside',
		id: 'myristyl-glucoside',
		products: ['saccharomyces-ferment-30-milky-toner'],
		tags: [],
		synonyms: []
	},
	'n-acetyl-glucosamine': {
		name: 'N-Acetyl Glucosamine',
		id: 'n-acetyl-glucosamine',
		products: ['aloe-2-nag-2-solution'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'n-acetylglucosamine': {
		name: 'N-Acetylglucosamine',
		id: 'n-acetylglucosamine',
		products: ['multi-peptide-eye-serum', 'balancing-clarifying-serum'],
		tags: ['key-ingredient'],
		synonyms: ['Acetyl Glucosamine']
	},
	naringenin: {
		name: 'Naringenin',
		id: 'naringenin',
		products: ['soothing-barrier-support-serum'],
		tags: [],
		synonyms: []
	},
	niacinamide: {
		name: 'Niacinamide',
		id: 'niacinamide',
		products: [
			'niacinamide-10-zinc-1',
			'100-niacinamide-powder',
			'multi-peptide-eye-serum',
			'soothing-barrier-support-serum',
			'niacinamide-5-face-and-body-emulsion'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'nicotiana-benthamiana-hexapeptide-40-sh-oligopeptide-1': {
		name: 'Nicotiana Benthamiana Hexapeptide-40 Sh-Oligopeptide-1',
		id: 'nicotiana-benthamiana-hexapeptide-40-sh-oligopeptide-1',
		products: ['gf-15-solution'],
		tags: [],
		synonyms: []
	},
	'nicotiana-benthamiana-hexapeptide-40-sh-polypeptide-76': {
		name: 'Nicotiana Benthamiana Hexapeptide-40 Sh-Polypeptide-76',
		id: 'nicotiana-benthamiana-hexapeptide-40-sh-polypeptide-76',
		products: ['gf-15-solution'],
		tags: [],
		synonyms: []
	},
	'nicotiana-benthamiana-octapeptide-30-sh-oligopeptide-2': {
		name: 'Nicotiana Benthamiana Octapeptide-30 Sh-Oligopeptide-2',
		id: 'nicotiana-benthamiana-octapeptide-30-sh-oligopeptide-2',
		products: ['gf-15-solution'],
		tags: [],
		synonyms: []
	},
	'oleic-acid': {
		name: 'Oleic Acid',
		id: 'oleic-acid',
		products: ['natural-moisturizing-factors-phytoceramides', 'natural-moisturizing-factors-ha'],
		tags: ['fatty-acids'],
		synonyms: []
	},
	'oleic-linoleic-linolenic-polyglycerides': {
		name: 'Oleic/Linoleic/Linolenic Polyglycerides',
		id: 'oleic-linoleic-linolenic-polyglycerides',
		products: ['salicylic-acid-2-anhydrous-solution'],
		tags: [],
		synonyms: []
	},
	'oxidized-glutathione': {
		name: 'Oxidized Glutathione',
		id: 'oxidized-glutathione',
		products: ['caffeine-solution-5-egcg'],
		tags: [],
		synonyms: []
	},
	'p-anisic-acid': {
		name: 'P-Anisic Acid',
		id: 'p-anisic-acid',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan'
		],
		tags: [],
		synonyms: []
	},
	'palmitic-acid': {
		name: 'Palmitic Acid',
		id: 'palmitic-acid',
		products: ['natural-moisturizing-factors-phytoceramides', 'natural-moisturizing-factors-ha'],
		tags: ['fatty-acids'],
		synonyms: []
	},
	'palmitoyl-pentapeptide-4': {
		name: 'Palmitoyl Pentapeptide-4',
		id: 'palmitoyl-pentapeptide-4',
		products: ['aloe-2-nag-2-solution'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'palmitoyl-tetrapeptide-7': {
		name: 'Palmitoyl Tetrapeptide-7',
		id: 'palmitoyl-tetrapeptide-7',
		products: ['multi-peptide-copper-peptides-1-serum', 'multi-peptide-ha-serum', 'matrixyl-10-ha'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'palmitoyl-tripeptide-1': {
		name: 'Palmitoyl Tripeptide-1',
		id: 'palmitoyl-tripeptide-1',
		products: ['multi-peptide-copper-peptides-1-serum', 'multi-peptide-ha-serum', 'matrixyl-10-ha'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'palmitoyl-tripeptide-38': {
		name: 'Palmitoyl Tripeptide-38',
		id: 'palmitoyl-tripeptide-38',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'matrixyl-10-ha'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'panax-ginseng-root-extract': {
		name: 'Panax Ginseng Root Extract',
		id: 'panax-ginseng-root-extract',
		products: ['glycolic-acid-7-exfoliating-toner'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'panthenyl-triacetate': {
		name: 'Panthenyl Triacetate',
		id: 'panthenyl-triacetate',
		products: ['soothing-barrier-support-serum'],
		tags: [],
		synonyms: []
	},
	pca: {
		name: 'Pca',
		id: 'pca',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'peg-10-dimethicone': {
		name: 'Peg-10 Dimethicone',
		id: 'peg-10-dimethicone',
		products: ['vitamin-c-suspension-30-in-silicone'],
		tags: [],
		synonyms: []
	},
	'peg-40-hydrogenated-castor-oil': {
		name: 'Peg-40 Hydrogenated Castor Oil',
		id: 'peg-40-hydrogenated-castor-oil',
		products: ['multi-peptide-ha-serum', 'matrixyl-10-ha', 'alpha-arbutin-2-ha'],
		tags: [],
		synonyms: []
	},
	'pentapeptide-18': {
		name: 'Pentapeptide-18',
		id: 'pentapeptide-18',
		products: ['multi-peptide-copper-peptides-1-serum', 'multi-peptide-ha-serum'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'pentylene-glycol': {
		name: 'Pentylene Glycol',
		id: 'pentylene-glycol',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'niacinamide-10-zinc-1',
			'caffeine-solution-5-egcg',
			'lactic-acid-10-ha',
			'salicylic-acid-2-anhydrous-solution',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'aloe-2-nag-2-solution',
			'retinal-0-2-emulsion',
			'hyaluronic-acid-2-b5-original-formulation',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'natural-moisturizing-factors-phytoceramides',
			'glycolipid-cream-cleanser',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	phenoxyethanol: {
		name: 'Phenoxyethanol',
		id: 'phenoxyethanol',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'niacinamide-10-zinc-1',
			'caffeine-solution-5-egcg',
			'argireline-solution-10',
			'salicylic-acid-2-solution',
			'azelaic-acid-suspension-10',
			'salicylic-acid-2-anhydrous-solution',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'aloe-2-nag-2-solution',
			'matrixyl-10-ha',
			'retinal-0-2-emulsion',
			'granactive-retinoid-2-emulsion',
			'saccharomyces-ferment-30-milky-toner',
			'alpha-arbutin-2-ha',
			'hyaluronic-acid-2-b5-original-formulation',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'gf-15-solution',
			'natural-moisturizing-factors-phytoceramides',
			'glycolipid-cream-cleanser',
			'natural-moisturizing-factors-ha',
			'multi-active-delivery-essence'
		],
		tags: [],
		synonyms: []
	},
	phenylalanine: {
		name: 'Phenylalanine',
		id: 'phenylalanine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	phospholipids: {
		name: 'Phospholipids',
		id: 'phospholipids',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan'
		],
		tags: [],
		synonyms: []
	},
	'phytic-acid': {
		name: 'Phytic Acid',
		id: 'phytic-acid',
		products: [
			'soothing-barrier-support-serum',
			'glycolipid-cream-cleanser',
			'the-ordinary-glucoside-foaming-cleanser',
			'glucoside-foaming-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'phytosteryl-canola-glycerides': {
		name: 'Phytosteryl Canola Glycerides',
		id: 'phytosteryl-canola-glycerides',
		products: ['natural-moisturizing-factors-phytoceramides', 'natural-moisturizing-factors-ha'],
		tags: [],
		synonyms: []
	},
	'pinus-pinaster-bark-extract': {
		name: 'Pinus Pinaster Bark Extract',
		id: 'pinus-pinaster-bark-extract',
		products: ['pycnogenol-5'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'polyacrylate-crosspolymer-6': {
		name: 'Polyacrylate Crosspolymer-6',
		id: 'polyacrylate-crosspolymer-6',
		products: [
			'caffeine-solution-5-egcg',
			'matrixyl-10-ha',
			'retinal-0-2-emulsion',
			'alpha-arbutin-2-ha',
			'glycolipid-cream-cleanser',
			'squalane-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'polyglyceryl-2-isostearate': {
		name: 'Polyglyceryl-2 Isostearate',
		id: 'polyglyceryl-2-isostearate',
		products: ['natural-moisturizing-factors-phytoceramides'],
		tags: [],
		synonyms: []
	},
	'polyglyceryl-2-stearate': {
		name: 'Polyglyceryl-2 Stearate',
		id: 'polyglyceryl-2-stearate',
		products: ['glycolipid-cream-cleanser'],
		tags: [],
		synonyms: []
	},
	'polyglyceryl-4-oleate': {
		name: 'Polyglyceryl-4 Oleate',
		id: 'polyglyceryl-4-oleate',
		products: ['niacinamide-5-face-and-body-emulsion'],
		tags: [],
		synonyms: []
	},
	'polyglyceryl-6-dicaprate': {
		name: 'Polyglyceryl-6 Dicaprate',
		id: 'polyglyceryl-6-dicaprate',
		products: ['glycolipid-cream-cleanser'],
		tags: [],
		synonyms: []
	},
	'polyglyceryl-6-laurate': {
		name: 'Polyglyceryl-6 Laurate',
		id: 'polyglyceryl-6-laurate',
		products: ['saccharomyces-ferment-30-milky-toner'],
		tags: [],
		synonyms: []
	},
	'polyglyceryl-6-polyricinoleate': {
		name: 'Polyglyceryl-6 Polyricinoleate',
		id: 'polyglyceryl-6-polyricinoleate',
		products: ['natural-moisturizing-factors-phytoceramides'],
		tags: [],
		synonyms: []
	},
	polylysine: {
		name: 'Polylysine',
		id: 'polylysine',
		products: ['balancing-clarifying-serum'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'polysilicone-11': {
		name: 'Polysilicone-11',
		id: 'polysilicone-11',
		products: ['azelaic-acid-suspension-10', 'vitamin-c-suspension-30-in-silicone'],
		tags: [],
		synonyms: []
	},
	'polysorbate-20': {
		name: 'Polysorbate 20',
		id: 'polysorbate-20',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'hyaluronic-acid-2-b5-hydrating-serum',
			'salicylic-acid-2-solution',
			'mandelic-acid-10-ha',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'matrixyl-10-ha',
			'granactive-retinoid-2-emulsion',
			'marine-hyaluronics',
			'amino-acids-b5'
		],
		tags: [],
		synonyms: []
	},
	'polysorbate-60': {
		name: 'Polysorbate 60',
		id: 'polysorbate-60',
		products: [
			'azelaic-acid-suspension-10',
			'retinal-0-2-emulsion',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'potassium-azeloyl-diglycinate': {
		name: 'Potassium Azeloyl Diglycinate',
		id: 'potassium-azeloyl-diglycinate',
		products: ['balancing-clarifying-serum'],
		tags: [],
		synonyms: []
	},
	'potassium-sorbate': {
		name: 'Potassium Sorbate',
		id: 'potassium-sorbate',
		products: ['glycolic-acid-7-exfoliating-toner', 'argireline-solution-10', 'marine-hyaluronics'],
		tags: [],
		synonyms: []
	},
	'ppg-24-glycereth-24': {
		name: 'Ppg-24-Glycereth-24',
		id: 'ppg-24-glycereth-24',
		products: ['natural-moisturizing-factors-beta-glucan'],
		tags: [],
		synonyms: []
	},
	'ppg-26-buteth-26': {
		name: 'Ppg-26-Buteth-26',
		id: 'ppg-26-buteth-26',
		products: ['multi-peptide-ha-serum', 'matrixyl-10-ha', 'alpha-arbutin-2-ha'],
		tags: [],
		synonyms: []
	},
	'pro-vitamin-b5': {
		name: 'Pro-Vitamin B5',
		id: 'pro-vitamin-b5',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'hyaluronic-acid-2-b5-original-formulation',
			'amino-acids-b5'
		],
		tags: ['key-ingredient'],
		synonyms: ['Panthenol']
	},
	proline: {
		name: 'Proline',
		id: 'proline',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['amino-acids'],
		synonyms: []
	},
	propanediol: {
		name: 'Propanediol',
		id: 'propanediol',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'hyaluronic-acid-2-b5-hydrating-serum',
			'caffeine-solution-5-egcg',
			'argireline-solution-10',
			'lactic-acid-10-ha',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha',
			'resveratrol-3-ferulic-acid-3',
			'ascorbyl-glucoside-solution-12',
			'euk-134-0-1',
			'multi-peptide-eye-serum',
			'aloe-2-nag-2-solution',
			'retinal-0-2-emulsion',
			'granactive-retinoid-2-emulsion',
			'pycnogenol-5',
			'alpha-arbutin-2-ha',
			'hyaluronic-acid-2-b5-original-formulation',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha',
			'multi-active-delivery-essence'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'propyl-gallate': {
		name: 'Propyl Gallate',
		id: 'propyl-gallate',
		products: [
			'caffeine-solution-5-egcg',
			'multi-peptide-eye-serum',
			'soothing-barrier-support-serum'
		],
		tags: [],
		synonyms: []
	},
	'pseudoalteromonas-exopolysaccharides': {
		name: 'Pseudoalteromonas Exopolysaccharides',
		id: 'pseudoalteromonas-exopolysaccharides',
		products: ['marine-hyaluronics'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'pseudoalteromonas-ferment-extract': {
		name: 'Pseudoalteromonas Ferment Extract',
		id: 'pseudoalteromonas-ferment-extract',
		products: ['marine-hyaluronics'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'rapeseed-sterols': {
		name: 'Rapeseed Sterols',
		id: 'rapeseed-sterols',
		products: ['retinal-0-2-emulsion', 'soothing-barrier-support-serum'],
		tags: ['key-ingredient'],
		synonyms: ['Brassica Campestris Sterols']
	},
	resveratrol: {
		name: 'Resveratrol',
		id: 'resveratrol',
		products: ['resveratrol-3-ferulic-acid-3'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	retinaldehyde: {
		name: 'Retinaldehyde',
		id: 'retinaldehyde',
		products: ['retinal-0-2-emulsion'],
		tags: ['key-ingredient'],
		synonyms: ['Retinal']
	},
	retinol: {
		name: 'Retinol',
		id: 'retinol',
		products: [
			'retinol-1-in-squalane',
			'retinol-0-5-in-squalane',
			'granactive-retinoid-2-emulsion',
			'retinol-0-2-in-squalane'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'rosa-canina-seed-oil': {
		name: 'Rosa Canina Seed Oil',
		id: 'rosa-canina-seed-oil',
		products: ['fermented-rose-hip-seed-oil', '100-organic-cold-pressed-rose-hip-seed-oil'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'rosa-damascena-flower-water': {
		name: 'Rosa Damascena Flower Water',
		id: 'rosa-damascena-flower-water',
		products: ['glycolic-acid-7-exfoliating-toner'],
		tags: [],
		synonyms: []
	},
	'rosmarinus-officinalis-rosemary-leaf-extract': {
		name: 'Rosmarinus Officinalis (Rosemary) Leaf Extract',
		id: 'rosmarinus-officinalis-rosemary-leaf-extract',
		products: [
			'retinol-1-in-squalane',
			'retinol-0-5-in-squalane',
			'granactive-retinoid-2-emulsion',
			'retinol-0-2-in-squalane',
			'granactive-retinoid-5-in-squalane'
		],
		tags: [],
		synonyms: []
	},
	'saccharide-isomerate': {
		name: 'Saccharide Isomerate',
		id: 'saccharide-isomerate',
		products: ['salicylic-acid-2-solution'],
		tags: [],
		synonyms: []
	},
	'saccharomyces-ferment': {
		name: 'Saccharomyces Ferment',
		id: 'saccharomyces-ferment',
		products: ['saccharomyces-ferment-30-milky-toner'],
		tags: ['key-ingredient'],
		synonyms: ['Yeast Extract']
	},
	'salicylic-acid': {
		name: 'Salicylic Acid',
		id: 'salicylic-acid',
		products: ['salicylic-acid-2-anhydrous-solution', 'marine-hyaluronics'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	sarcosine: {
		name: 'Sarcosine',
		id: 'sarcosine',
		products: ['balancing-clarifying-serum'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'sclerotium-gum': {
		name: 'Sclerotium Gum',
		id: 'sclerotium-gum',
		products: ['balancing-clarifying-serum', 'gf-15-solution'],
		tags: [],
		synonyms: []
	},
	serine: {
		name: 'Serine',
		id: 'serine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['amino-acids'],
		synonyms: []
	},
	silanetriol: {
		name: 'Silanetriol',
		id: 'silanetriol',
		products: ['multi-peptide-eye-serum', 'balancing-clarifying-serum'],
		tags: [],
		synonyms: []
	},
	'silica-dimethyl-silylate': {
		name: 'Silica Dimethyl Silylate',
		id: 'silica-dimethyl-silylate',
		products: ['vitamin-c-suspension-23-ha-spheres-2'],
		tags: [],
		synonyms: []
	},
	'simmondsia-chinensis-jojoba-seed-oil': {
		name: 'Simmondsia Chinensis (Jojoba) Seed Oil',
		id: 'simmondsia-chinensis-jojoba-seed-oil',
		products: [
			'ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f',
			'retinol-1-in-squalane',
			'retinol-0-5-in-squalane',
			'retinol-0-2-in-squalane',
			'granactive-retinoid-5-in-squalane'
		],
		tags: [],
		synonyms: []
	},
	'sodium-acrylates-copolymer': {
		name: 'Sodium Acrylates Copolymer',
		id: 'sodium-acrylates-copolymer',
		products: ['niacinamide-5-face-and-body-emulsion'],
		tags: [],
		synonyms: []
	},
	'sodium-benzoate': {
		name: 'Sodium Benzoate',
		id: 'sodium-benzoate',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'marine-hyaluronics',
			'balancing-clarifying-serum',
			'glycolipid-cream-cleanser'
		],
		tags: [],
		synonyms: []
	},
	'sodium-caproyl-prolinate': {
		name: 'Sodium Caproyl Prolinate',
		id: 'sodium-caproyl-prolinate',
		products: ['multi-active-delivery-essence'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'sodium-chloride': {
		name: 'Sodium Chloride',
		id: 'sodium-chloride',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'argireline-solution-10',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'balancing-clarifying-serum',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha',
			'multi-active-delivery-essence'
		],
		tags: ['minerals'],
		synonyms: []
	},
	'sodium-citrate': {
		name: 'Sodium Citrate',
		id: 'sodium-citrate',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'salicylic-acid-2-solution',
			'multi-peptide-eye-serum',
			'saccharomyces-ferment-30-milky-toner',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'gf-15-solution'
		],
		tags: [],
		synonyms: []
	},
	'sodium-hydroxide': {
		name: 'Sodium Hydroxide',
		id: 'sodium-hydroxide',
		products: [
			'salicylic-acid-2-solution',
			'lactic-acid-10-ha',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'aloe-2-nag-2-solution',
			'retinal-0-2-emulsion',
			'saccharomyces-ferment-30-milky-toner',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'sodium-lactate': {
		name: 'Sodium Lactate',
		id: 'sodium-lactate',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'aloe-2-nag-2-solution',
			'retinal-0-2-emulsion',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['key-ingredient', 'lactates'],
		synonyms: []
	},
	'sodium-pca': {
		name: 'Sodium Pca',
		id: 'sodium-pca',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'sodium-phytate': {
		name: 'Sodium Phytate',
		id: 'sodium-phytate',
		products: ['soothing-barrier-support-serum', 'glycolipid-cream-cleanser'],
		tags: [],
		synonyms: []
	},
	'sodium-polyacrylate': {
		name: 'Sodium Polyacrylate',
		id: 'sodium-polyacrylate',
		products: ['squalane-cleanser'],
		tags: [],
		synonyms: []
	},
	'sodium-salicylate': {
		name: 'Sodium Salicylate',
		id: 'sodium-salicylate',
		products: ['marine-hyaluronics'],
		tags: [],
		synonyms: []
	},
	'solanum-lycopersicum-tomato-fruit-extract': {
		name: 'Solanum Lycopersicum (Tomato) Fruit Extract',
		id: 'solanum-lycopersicum-tomato-fruit-extract',
		products: [
			'ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f',
			'retinol-1-in-squalane',
			'retinol-0-5-in-squalane',
			'retinol-0-2-in-squalane',
			'granactive-retinoid-5-in-squalane'
		],
		tags: [],
		synonyms: []
	},
	sphingolipids: {
		name: 'Sphingolipids',
		id: 'sphingolipids',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan'
		],
		tags: ['ceramides'],
		synonyms: []
	},
	'sphingomonas-ferment-extract': {
		name: 'Sphingomonas Ferment Extract',
		id: 'sphingomonas-ferment-extract',
		products: ['niacinamide-5-face-and-body-emulsion'],
		tags: [],
		synonyms: []
	},
	squalane: {
		name: 'Squalane',
		id: 'squalane',
		products: [
			'salicylic-acid-2-anhydrous-solution',
			'vitamin-c-suspension-23-ha-spheres-2',
			'ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f',
			'retinol-1-in-squalane',
			'retinol-0-5-in-squalane',
			'retinol-0-2-in-squalane',
			'granactive-retinoid-5-in-squalane',
			'saccharomyces-ferment-30-milky-toner',
			'squalane-cleanser',
			'100-plant-derived-squalane'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'stearic-acid': {
		name: 'Stearic Acid',
		id: 'stearic-acid',
		products: [
			'retinal-0-2-emulsion',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['fatty-acids'],
		synonyms: []
	},
	'stearyl-alcohol': {
		name: 'Stearyl Alcohol',
		id: 'stearyl-alcohol',
		products: ['glycolipid-cream-cleanser', 'natural-moisturizing-factors-ha'],
		tags: [],
		synonyms: []
	},
	sucrose: {
		name: 'Sucrose',
		id: 'sucrose',
		products: ['glycolic-acid-7-exfoliating-toner'],
		tags: [],
		synonyms: []
	},
	'sucrose-laurate': {
		name: 'Sucrose Laurate',
		id: 'sucrose-laurate',
		products: ['granactive-retinoid-2-emulsion', 'squalane-cleanser'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'sucrose-stearate': {
		name: 'Sucrose Stearate',
		id: 'sucrose-stearate',
		products: ['squalane-cleanser'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'synthetic-oat-analogues': {
		name: 'Synthetic Oat Analogues',
		id: 'synthetic-oat-analogues',
		products: ['retinal-0-2-emulsion', 'soothing-barrier-support-serum'],
		tags: ['key-ingredient'],
		synonyms: ['Cetylhydroxyproline Palmitamide']
	},
	'tamarindus-indica-seed-gum': {
		name: 'Tamarindus Indica Seed Gum',
		id: 'tamarindus-indica-seed-gum',
		products: ['niacinamide-10-zinc-1'],
		tags: [],
		synonyms: []
	},
	'tasmannia-lanceolata-fruit-leaf-extract': {
		name: 'Tasmannia Lanceolata Fruit/Leaf Extract',
		id: 'tasmannia-lanceolata-fruit-leaf-extract',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'lactic-acid-10-ha',
			'mandelic-acid-10-ha',
			'lactic-acid-5-ha',
			'granactive-retinoid-2-emulsion'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	'tetrahexyldecyl-ascorbate': {
		name: 'Tetrahexyldecyl Ascorbate',
		id: 'tetrahexyldecyl-ascorbate',
		products: ['ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f'],
		tags: ['key-ingredient'],
		synonyms: []
	},
	threonine: {
		name: 'Threonine',
		id: 'threonine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['amino-acids'],
		synonyms: []
	},
	tocopherol: {
		name: 'Tocopherol',
		id: 'tocopherol',
		products: [
			'hyaluronic-acid-2-b5-hydrating-serum',
			'azelaic-acid-suspension-10',
			'retinal-0-2-emulsion',
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'niacinamide-5-face-and-body-emulsion',
			'natural-moisturizing-factors-phytoceramides',
			'the-ordinary-glucoside-foaming-cleanser',
			'natural-moisturizing-factors-ha',
			'squalane-cleanser',
			'glucoside-foaming-cleanser'
		],
		tags: [],
		synonyms: []
	},
	trehalose: {
		name: 'Trehalose',
		id: 'trehalose',
		products: [
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	triethanolamine: {
		name: 'Triethanolamine',
		id: 'triethanolamine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'azelaic-acid-suspension-10',
			'ascorbyl-glucoside-solution-12',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	trihydroxystearin: {
		name: 'Trihydroxystearin',
		id: 'trihydroxystearin',
		products: ['vitamin-c-suspension-23-ha-spheres-2'],
		tags: [],
		synonyms: []
	},
	triolein: {
		name: 'Triolein',
		id: 'triolein',
		products: ['natural-moisturizing-factors-phytoceramides', 'natural-moisturizing-factors-ha'],
		tags: [],
		synonyms: []
	},
	'trisodium-ethylenediamine-disuccinate': {
		name: 'Trisodium Ethylenediamine Disuccinate',
		id: 'trisodium-ethylenediamine-disuccinate',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'hyaluronic-acid-2-b5-hydrating-serum',
			'caffeine-solution-5-egcg',
			'argireline-solution-10',
			'azelaic-acid-suspension-10',
			'lactic-acid-10-ha',
			'lactic-acid-5-ha',
			'ascorbyl-glucoside-solution-12',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'matrixyl-10-ha',
			'granactive-retinoid-2-emulsion',
			'saccharomyces-ferment-30-milky-toner',
			'alpha-arbutin-2-ha',
			'hyaluronic-acid-2-b5-original-formulation',
			'soothing-barrier-support-serum',
			'amino-acids-b5',
			'niacinamide-5-face-and-body-emulsion',
			'balancing-clarifying-serum',
			'gf-15-solution',
			'natural-moisturizing-factors-phytoceramides',
			'glycolipid-cream-cleanser',
			'natural-moisturizing-factors-ha',
			'squalane-cleanser',
			'multi-active-delivery-essence'
		],
		tags: [],
		synonyms: []
	},
	urea: {
		name: 'Urea',
		id: 'urea',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides',
			'natural-moisturizing-factors-ha'
		],
		tags: ['key-ingredient'],
		synonyms: []
	},
	valine: {
		name: 'Valine',
		id: 'valine',
		products: [
			'glycolic-acid-7-exfoliating-toner',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'marine-hyaluronics',
			'amino-acids-b5',
			'natural-moisturizing-factors-ha'
		],
		tags: [],
		synonyms: []
	},
	'xanthan-gum': {
		name: 'Xanthan Gum',
		id: 'xanthan-gum',
		products: [
			'niacinamide-10-zinc-1',
			'caffeine-solution-5-egcg',
			'lactic-acid-10-ha',
			'lactic-acid-5-ha',
			'ascorbyl-glucoside-solution-12',
			'multi-peptide-copper-peptides-1-serum',
			'multi-peptide-ha-serum',
			'multi-peptide-eye-serum',
			'aloe-2-nag-2-solution',
			'granactive-retinoid-2-emulsion',
			'soothing-barrier-support-serum',
			'balancing-clarifying-serum',
			'the-ordinary-glucoside-foaming-cleanser',
			'glucoside-foaming-cleanser'
		],
		tags: [],
		synonyms: []
	},
	xylitol: {
		name: 'Xylitol',
		id: 'xylitol',
		products: [
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides'
		],
		tags: [],
		synonyms: []
	},
	xylitylglucoside: {
		name: 'Xylitylglucoside',
		id: 'xylitylglucoside',
		products: [
			'soothing-barrier-support-serum',
			'natural-moisturizing-factors-beta-glucan',
			'natural-moisturizing-factors-phytoceramides'
		],
		tags: [],
		synonyms: []
	},
	'zinc-pca': {
		name: 'Zinc Pca',
		id: 'zinc-pca',
		products: ['niacinamide-10-zinc-1'],
		tags: ['key-ingredient'],
		synonyms: []
	}
};
