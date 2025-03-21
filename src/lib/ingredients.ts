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
}

export const ingredients: { [key: string]: Ingredient } = {
	'1-2-hexanediol': {
		name: '1,2-Hexanediol',
		id: '1-2-hexanediol'
	},
	'4-t-butylcyclohexanol': {
		name: '4-T-Butylcyclohexanol',
		id: '4-t-butylcyclohexanol'
	},
	'acacia-senegal-gum': {
		name: 'Acacia Senegal Gum',
		id: 'acacia-senegal-gum'
	},
	'acetyl-glucosamine': {
		name: 'Acetyl Glucosamine',
		id: 'acetyl-glucosamine'
	},
	'acetyl-hexapeptide-8': {
		name: 'Acetyl Hexapeptide-8',
		id: 'acetyl-hexapeptide-8'
	},
	'acetyl-tetrapeptide-5': {
		name: 'Acetyl Tetrapeptide-5',
		id: 'acetyl-tetrapeptide-5'
	},
	'acetylarginyltryptophyl-diphenylglycine': {
		name: 'Acetylarginyltryptophyl Diphenylglycine',
		id: 'acetylarginyltryptophyl-diphenylglycine'
	},
	'acrylates-c10-30-alkyl-acrylate-crosspolymer': {
		name: 'Acrylates/C10-30 Alkyl Acrylate Crosspolymer',
		id: 'acrylates-c10-30-alkyl-acrylate-crosspolymer'
	},
	'acrylates-ethylhexyl-acrylate-crosspolymer': {
		name: 'Acrylates/Ethylhexyl Acrylate Crosspolymer',
		id: 'acrylates-ethylhexyl-acrylate-crosspolymer'
	},
	adenosine: {
		name: 'Adenosine',
		id: 'adenosine'
	},
	'ahnfeltia-concinna-extract': {
		name: 'Ahnfeltia Concinna Extract',
		id: 'ahnfeltia-concinna-extract'
	},
	'ahnfeltiopsis-concinna-extract': {
		name: 'Ahnfeltiopsis Concinna Extract',
		id: 'ahnfeltiopsis-concinna-extract'
	},
	alanine: {
		name: 'Alanine',
		id: 'alanine'
	},
	'algae-extract': {
		name: 'Algae Extract',
		id: 'algae-extract'
	},
	allantoin: {
		name: 'Allantoin',
		id: 'allantoin'
	},
	'aloe-barbadensis-leaf-juice-powder': {
		name: 'Aloe Barbadensis Leaf Juice Powder',
		id: 'aloe-barbadensis-leaf-juice-powder'
	},
	'aloe-barbadensis-leaf-water': {
		name: 'Aloe Barbadensis Leaf Water',
		id: 'aloe-barbadensis-leaf-water'
	},
	'alpha-arbutin': {
		name: 'Alpha-Arbutin',
		id: 'alpha-arbutin'
	},
	'aminomethyl-propanol': {
		name: 'Aminomethyl Propanol',
		id: 'aminomethyl-propanol'
	},
	anhydroxylitol: {
		name: 'Anhydroxylitol',
		id: 'anhydroxylitol'
	},
	'aqua-water': {
		name: 'Aqua (Water)',
		id: 'aqua-water'
	},
	'aqua-water-eau': {
		name: 'Aqua/Water/Eau',
		id: 'aqua-water-eau'
	},
	'argania-spinosa-kernel-oil': {
		name: 'Argania Spinosa Kernel Oil',
		id: 'argania-spinosa-kernel-oil'
	},
	arginine: {
		name: 'Arginine',
		id: 'arginine'
	},
	'ascorbic-acid': {
		name: 'Ascorbic Acid',
		id: 'ascorbic-acid'
	},
	'ascorbyl-glucoside': {
		name: 'Ascorbyl Glucoside',
		id: 'ascorbyl-glucoside'
	},
	'ascorbyl-palmitate': {
		name: 'Ascorbyl Palmitate',
		id: 'ascorbyl-palmitate'
	},
	'asiatic-acid': {
		name: 'Asiatic Acid',
		id: 'asiatic-acid'
	},
	asiaticoside: {
		name: 'Asiaticoside',
		id: 'asiaticoside'
	},
	'aspartic-acid': {
		name: 'Aspartic Acid',
		id: 'aspartic-acid'
	},
	'azelaic-acid': {
		name: 'Azelaic Acid',
		id: 'azelaic-acid'
	},
	'behentrimonium-chloride': {
		name: 'Behentrimonium Chloride',
		id: 'behentrimonium-chloride'
	},
	'behenyl-alcohol': {
		name: 'Behenyl Alcohol',
		id: 'behenyl-alcohol'
	},
	'benzoic-acid': {
		name: 'Benzoic Acid',
		id: 'benzoic-acid'
	},
	'benzyl-alcohol': {
		name: 'Benzyl Alcohol',
		id: 'benzyl-alcohol'
	},
	'beta-glucan': {
		name: 'Beta-Glucan',
		id: 'beta-glucan'
	},
	betaine: {
		name: 'Betaine',
		id: 'betaine'
	},
	bht: {
		name: 'Bht',
		id: 'bht'
	},
	'biosaccharide-gum-1': {
		name: 'Biosaccharide Gum-1',
		id: 'biosaccharide-gum-1'
	},
	'biosaccharide-gum-2': {
		name: 'Biosaccharide Gum-2',
		id: 'biosaccharide-gum-2'
	},
	bisabolol: {
		name: 'Bisabolol',
		id: 'bisabolol'
	},
	'brassica-campestris-sterols': {
		name: 'Brassica Campestris Sterols',
		id: 'brassica-campestris-sterols'
	},
	'butylene-glycol': {
		name: 'Butylene Glycol',
		id: 'butylene-glycol'
	},
	'butylene-ethylene-styrene-copolymer': {
		name: 'Butylene/Ethylene/Styrene Copolymer',
		id: 'butylene-ethylene-styrene-copolymer'
	},
	'c12-15-alkyl-benzoate': {
		name: 'C12-15 Alkyl Benzoate',
		id: 'c12-15-alkyl-benzoate'
	},
	'caesalpinia-spinosa-gum': {
		name: 'Caesalpinia Spinosa Gum',
		id: 'caesalpinia-spinosa-gum'
	},
	caffeine: {
		name: 'Caffeine',
		id: 'caffeine'
	},
	'caprylic-capric-triglyceride': {
		name: 'Caprylic/Capric Triglyceride',
		id: 'caprylic-capric-triglyceride'
	},
	'caprylyl-glycol': {
		name: 'Caprylyl Glycol',
		id: 'caprylyl-glycol'
	},
	carbomer: {
		name: 'Carbomer',
		id: 'carbomer'
	},
	carnitine: {
		name: 'Carnitine',
		id: 'carnitine'
	},
	carrageenan: {
		name: 'Carrageenan',
		id: 'carrageenan'
	},
	'centaurea-cyanus-flower-water': {
		name: 'Centaurea Cyanus Flower Water',
		id: 'centaurea-cyanus-flower-water'
	},
	'ceteareth-12': {
		name: 'Ceteareth-12',
		id: 'ceteareth-12'
	},
	'ceteareth-20': {
		name: 'Ceteareth-20',
		id: 'ceteareth-20'
	},
	'cetearyl-alcohol': {
		name: 'Cetearyl Alcohol',
		id: 'cetearyl-alcohol'
	},
	'cetearyl-isononanoate': {
		name: 'Cetearyl Isononanoate',
		id: 'cetearyl-isononanoate'
	},
	'ceteth-20-phosphate': {
		name: 'Ceteth-20 Phosphate',
		id: 'ceteth-20-phosphate'
	},
	'cetyl-alcohol': {
		name: 'Cetyl Alcohol',
		id: 'cetyl-alcohol'
	},
	'cetyl-ethylhexanoate': {
		name: 'Cetyl Ethylhexanoate',
		id: 'cetyl-ethylhexanoate'
	},
	'cetyl-palmitate': {
		name: 'Cetyl Palmitate',
		id: 'cetyl-palmitate'
	},
	'cetylhydroxyproline-palmitamide': {
		name: 'Cetylhydroxyproline Palmitamide',
		id: 'cetylhydroxyproline-palmitamide'
	},
	chlorphenesin: {
		name: 'Chlorphenesin',
		id: 'chlorphenesin'
	},
	'citric-acid': {
		name: 'Citric Acid',
		id: 'citric-acid'
	},
	'cocamidopropyl-dimethylamine': {
		name: 'Cocamidopropyl Dimethylamine',
		id: 'cocamidopropyl-dimethylamine'
	},
	'coco-glucoside': {
		name: 'Coco Glucoside',
		id: 'coco-glucoside'
	},
	'coco-caprylate-caprate': {
		name: 'Coco-Caprylate/Caprate',
		id: 'coco-caprylate-caprate'
	},
	'coconut-alkanes': {
		name: 'Coconut Alkanes',
		id: 'coconut-alkanes'
	},
	'copper-tripeptide-1': {
		name: 'Copper Tripeptide-1',
		id: 'copper-tripeptide-1'
	},
	cyanocobalamin: {
		name: 'Cyanocobalamin',
		id: 'cyanocobalamin'
	},
	'decyl-glucoside': {
		name: 'Decyl Glucoside',
		id: 'decyl-glucoside'
	},
	'dehydroacetic-acid': {
		name: 'Dehydroacetic Acid',
		id: 'dehydroacetic-acid'
	},
	dextrin: {
		name: 'Dextrin',
		id: 'dextrin'
	},
	'dicetyl-phosphate': {
		name: 'Dicetyl Phosphate',
		id: 'dicetyl-phosphate'
	},
	dimethicone: {
		name: 'Dimethicone',
		id: 'dimethicone'
	},
	'dimethicone-bis-isobutyl-ppg-20-crosspolymer': {
		name: 'Dimethicone/Bis-Isobutyl Ppg-20 Crosspolymer',
		id: 'dimethicone-bis-isobutyl-ppg-20-crosspolymer'
	},
	'dimethyl-isosorbide': {
		name: 'Dimethyl Isosorbide',
		id: 'dimethyl-isosorbide'
	},
	'dipeptide-diaminobutyroyl-benzylamide-diacetate': {
		name: 'Dipeptide Diaminobutyroyl Benzylamide Diacetate',
		id: 'dipeptide-diaminobutyroyl-benzylamide-diacetate'
	},
	'dipropylene-glycol': {
		name: 'Dipropylene Glycol',
		id: 'dipropylene-glycol'
	},
	'disodium-edta': {
		name: 'Disodium Edta',
		id: 'disodium-edta'
	},
	'disteardimonium-hectorite': {
		name: 'Disteardimonium Hectorite',
		id: 'disteardimonium-hectorite'
	},
	'diutan-gum': {
		name: 'Diutan Gum',
		id: 'diutan-gum'
	},
	ectoin: {
		name: 'Ectoin',
		id: 'ectoin'
	},
	'epigallocatechin-gallatyl-glucoside': {
		name: 'Epigallocatechin Gallatyl Glucoside',
		id: 'epigallocatechin-gallatyl-glucoside'
	},
	ergothioneine: {
		name: 'Ergothioneine',
		id: 'ergothioneine'
	},
	ethoxydiglycol: {
		name: 'Ethoxydiglycol',
		id: 'ethoxydiglycol'
	},
	'ethyl-linoleate': {
		name: 'Ethyl Linoleate',
		id: 'ethyl-linoleate'
	},
	'ethyl-macadamiate': {
		name: 'Ethyl Macadamiate',
		id: 'ethyl-macadamiate'
	},
	'ethylbisiminomethylguaiacol-manganese-chloride': {
		name: 'Ethylbisiminomethylguaiacol Manganese Chloride.',
		id: 'ethylbisiminomethylguaiacol-manganese-chloride'
	},
	'ethylene-propylene-styrene-copolymer': {
		name: 'Ethylene/Propylene/Styrene Copolymer',
		id: 'ethylene-propylene-styrene-copolymer'
	},
	'ethylhexyl-olivate': {
		name: 'Ethylhexyl Olivate',
		id: 'ethylhexyl-olivate'
	},
	'ethylhexyl-palmitate': {
		name: 'Ethylhexyl Palmitate',
		id: 'ethylhexyl-palmitate'
	},
	ethylhexylglycerin: {
		name: 'Ethylhexylglycerin',
		id: 'ethylhexylglycerin'
	},
	'ferulic-acid': {
		name: 'Ferulic Acid.',
		id: 'ferulic-acid'
	},
	'fraxinus-excelsior-bark-extract': {
		name: 'Fraxinus Excelsior Bark Extract',
		id: 'fraxinus-excelsior-bark-extract'
	},
	fructose: {
		name: 'Fructose',
		id: 'fructose'
	},
	'gallyl-glucoside': {
		name: 'Gallyl Glucoside',
		id: 'gallyl-glucoside'
	},
	'gellan-gum': {
		name: 'Gellan Gum',
		id: 'gellan-gum'
	},
	glucomannan: {
		name: 'Glucomannan',
		id: 'glucomannan'
	},
	glucose: {
		name: 'Glucose',
		id: 'glucose'
	},
	'glutamic-acid': {
		name: 'Glutamic Acid',
		id: 'glutamic-acid'
	},
	glycerin: {
		name: 'Glycerin',
		id: 'glycerin'
	},
	'glyceryl-stearate': {
		name: 'Glyceryl Stearate',
		id: 'glyceryl-stearate'
	},
	glycine: {
		name: 'Glycine',
		id: 'glycine'
	},
	'glycine-soja-soybean-seed-extract': {
		name: 'Glycine Soja (Soybean) Seed Extract',
		id: 'glycine-soja-soybean-seed-extract'
	},
	glycogen: {
		name: 'Glycogen',
		id: 'glycogen'
	},
	'glycolic-acid': {
		name: 'Glycolic Acid',
		id: 'glycolic-acid'
	},
	glycolipids: {
		name: 'Glycolipids',
		id: 'glycolipids'
	},
	glycosphingolipids: {
		name: 'Glycosphingolipids',
		id: 'glycosphingolipids'
	},
	'hexyl-nicotinate': {
		name: 'Hexyl Nicotinate',
		id: 'hexyl-nicotinate'
	},
	hexyldecanol: {
		name: 'Hexyldecanol',
		id: 'hexyldecanol'
	},
	'hexylene-glycol': {
		name: 'Hexylene Glycol',
		id: 'hexylene-glycol'
	},
	histidine: {
		name: 'Histidine',
		id: 'histidine'
	},
	'hyaluronic-acid': {
		name: 'Hyaluronic Acid',
		id: 'hyaluronic-acid'
	},
	'hydrogenated-starch-hydrolysate': {
		name: 'Hydrogenated Starch Hydrolysate',
		id: 'hydrogenated-starch-hydrolysate'
	},
	'hydrogenated-vegetable-oil': {
		name: 'Hydrogenated Vegetable Oil',
		id: 'hydrogenated-vegetable-oil'
	},
	'hydrolyzed-hyaluronic-acid': {
		name: 'Hydrolyzed Hyaluronic Acid',
		id: 'hydrolyzed-hyaluronic-acid'
	},
	'hydrolyzed-sodium-hyaluronate': {
		name: 'Hydrolyzed Sodium Hyaluronate',
		id: 'hydrolyzed-sodium-hyaluronate'
	},
	hydroxyapatite: {
		name: 'Hydroxyapatite',
		id: 'hydroxyapatite'
	},
	'hydroxyethyl-acrylate-sodium-acryloyldimethyl-taurate-copolymer': {
		name: 'Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer',
		id: 'hydroxyethyl-acrylate-sodium-acryloyldimethyl-taurate-copolymer'
	},
	hydroxyethylcellulose: {
		name: 'Hydroxyethylcellulose',
		id: 'hydroxyethylcellulose'
	},
	'hydroxymethoxyphenyl-decanone': {
		name: 'Hydroxymethoxyphenyl Decanone',
		id: 'hydroxymethoxyphenyl-decanone'
	},
	'hydroxyphenyl-propamidobenzoic-acid': {
		name: 'Hydroxyphenyl Propamidobenzoic Acid',
		id: 'hydroxyphenyl-propamidobenzoic-acid'
	},
	'hydroxypinacolone-retinoate': {
		name: 'Hydroxypinacolone Retinoate',
		id: 'hydroxypinacolone-retinoate'
	},
	'hydroxypropyl-cyclodextrin': {
		name: 'Hydroxypropyl Cyclodextrin',
		id: 'hydroxypropyl-cyclodextrin'
	},
	'inulin-lauryl-carbamate': {
		name: 'Inulin Lauryl Carbamate',
		id: 'inulin-lauryl-carbamate'
	},
	'isoceteth-20': {
		name: 'Isoceteth-20',
		id: 'isoceteth-20'
	},
	'isodecyl-neopentanoate': {
		name: 'Isodecyl Neopentanoate',
		id: 'isodecyl-neopentanoate'
	},
	isohexadecane: {
		name: 'Isohexadecane',
		id: 'isohexadecane'
	},
	isoleucine: {
		name: 'Isoleucine',
		id: 'isoleucine'
	},
	'isononyl-isononanoate': {
		name: 'Isononyl Isononanoate',
		id: 'isononyl-isononanoate'
	},
	'isosorbide-dicaprylate': {
		name: 'Isosorbide Dicaprylate',
		id: 'isosorbide-dicaprylate'
	},
	'lactic-acid': {
		name: 'Lactic Acid',
		id: 'lactic-acid'
	},
	'lactococcus-ferment-lysate': {
		name: 'Lactococcus Ferment Lysate',
		id: 'lactococcus-ferment-lysate'
	},
	'lauryl-glucoside': {
		name: 'Lauryl Glucoside',
		id: 'lauryl-glucoside'
	},
	lecithin: {
		name: 'Lecithin',
		id: 'lecithin'
	},
	'linoleic-acid': {
		name: 'Linoleic Acid',
		id: 'linoleic-acid'
	},
	'lysine-hcl': {
		name: 'Lysine Hcl',
		id: 'lysine-hcl'
	},
	'madecassic-acid': {
		name: 'Madecassic Acid',
		id: 'madecassic-acid'
	},
	'magnesium-sulfate': {
		name: 'Magnesium Sulfate',
		id: 'magnesium-sulfate'
	},
	'malic-acid': {
		name: 'Malic Acid',
		id: 'malic-acid'
	},
	maltodextrin: {
		name: 'Maltodextrin',
		id: 'maltodextrin'
	},
	maltose: {
		name: 'Maltose',
		id: 'maltose'
	},
	'mandelic-acid': {
		name: 'Mandelic Acid',
		id: 'mandelic-acid'
	},
	'marula-oil': {
		name: 'Marula Oil',
		id: 'marula-oil'
	},
	melanin: {
		name: 'Melanin',
		id: 'melanin'
	},
	'myristoyl-nonapeptide-3': {
		name: 'Myristoyl Nonapeptide-3',
		id: 'myristoyl-nonapeptide-3'
	},
	'myristyl-glucoside': {
		name: 'Myristyl Glucoside',
		id: 'myristyl-glucoside'
	},
	'n-acetyl-glucosamine': {
		name: 'N-Acetyl Glucosamine',
		id: 'n-acetyl-glucosamine'
	},
	naringenin: {
		name: 'Naringenin',
		id: 'naringenin'
	},
	niacinamide: {
		name: 'Niacinamide',
		id: 'niacinamide'
	},
	'nicotiana-benthamiana-hexapeptide-40-sh-oligopeptide-1': {
		name: 'Nicotiana Benthamiana Hexapeptide-40 Sh-Oligopeptide-1',
		id: 'nicotiana-benthamiana-hexapeptide-40-sh-oligopeptide-1'
	},
	'nicotiana-benthamiana-hexapeptide-40-sh-polypeptide-76': {
		name: 'Nicotiana Benthamiana Hexapeptide-40 Sh-Polypeptide-76',
		id: 'nicotiana-benthamiana-hexapeptide-40-sh-polypeptide-76'
	},
	'nicotiana-benthamiana-octapeptide-30-sh-oligopeptide-2': {
		name: 'Nicotiana Benthamiana Octapeptide-30 Sh-Oligopeptide-2',
		id: 'nicotiana-benthamiana-octapeptide-30-sh-oligopeptide-2'
	},
	'oleic-acid': {
		name: 'Oleic Acid',
		id: 'oleic-acid'
	},
	'oleic-linoleic-linolenic-polyglycerides': {
		name: 'Oleic/Linoleic/Linolenic Polyglycerides',
		id: 'oleic-linoleic-linolenic-polyglycerides'
	},
	'oxidized-glutathione': {
		name: 'Oxidized Glutathione',
		id: 'oxidized-glutathione'
	},
	'p-anisic-acid': {
		name: 'P-Anisic Acid',
		id: 'p-anisic-acid'
	},
	'palmitic-acid': {
		name: 'Palmitic Acid',
		id: 'palmitic-acid'
	},
	'palmitoyl-pentapeptide-4': {
		name: 'Palmitoyl Pentapeptide-4',
		id: 'palmitoyl-pentapeptide-4'
	},
	'palmitoyl-tetrapeptide-7': {
		name: 'Palmitoyl Tetrapeptide-7',
		id: 'palmitoyl-tetrapeptide-7'
	},
	'palmitoyl-tripeptide-1': {
		name: 'Palmitoyl Tripeptide-1',
		id: 'palmitoyl-tripeptide-1'
	},
	'palmitoyl-tripeptide-38': {
		name: 'Palmitoyl Tripeptide-38',
		id: 'palmitoyl-tripeptide-38'
	},
	'panax-ginseng-root-extract': {
		name: 'Panax Ginseng Root Extract',
		id: 'panax-ginseng-root-extract'
	},
	panthenol: {
		name: 'Panthenol',
		id: 'panthenol'
	},
	'panthenyl-triacetate': {
		name: 'Panthenyl Triacetate',
		id: 'panthenyl-triacetate'
	},
	pca: {
		name: 'Pca',
		id: 'pca'
	},
	'peg-10-dimethicone': {
		name: 'Peg-10 Dimethicone',
		id: 'peg-10-dimethicone'
	},
	'peg-40-hydrogenated-castor-oil': {
		name: 'Peg-40 Hydrogenated Castor Oil',
		id: 'peg-40-hydrogenated-castor-oil'
	},
	'pentapeptide-18': {
		name: 'Pentapeptide-18',
		id: 'pentapeptide-18'
	},
	'pentylene-glycol': {
		name: 'Pentylene Glycol',
		id: 'pentylene-glycol'
	},
	phenoxyethanol: {
		name: 'Phenoxyethanol',
		id: 'phenoxyethanol'
	},
	phenylalanine: {
		name: 'Phenylalanine',
		id: 'phenylalanine'
	},
	phospholipids: {
		name: 'Phospholipids',
		id: 'phospholipids'
	},
	'phytic-acid': {
		name: 'Phytic Acid',
		id: 'phytic-acid'
	},
	'phytosteryl-canola-glycerides': {
		name: 'Phytosteryl Canola Glycerides',
		id: 'phytosteryl-canola-glycerides'
	},
	'pinus-pinaster-bark-extract': {
		name: 'Pinus Pinaster Bark Extract',
		id: 'pinus-pinaster-bark-extract'
	},
	'polyacrylate-crosspolymer-6': {
		name: 'Polyacrylate Crosspolymer-6',
		id: 'polyacrylate-crosspolymer-6'
	},
	'polyglyceryl-2-isostearate': {
		name: 'Polyglyceryl-2 Isostearate',
		id: 'polyglyceryl-2-isostearate'
	},
	'polyglyceryl-2-stearate': {
		name: 'Polyglyceryl-2 Stearate',
		id: 'polyglyceryl-2-stearate'
	},
	'polyglyceryl-4-oleate': {
		name: 'Polyglyceryl-4 Oleate',
		id: 'polyglyceryl-4-oleate'
	},
	'polyglyceryl-6-dicaprate': {
		name: 'Polyglyceryl-6 Dicaprate',
		id: 'polyglyceryl-6-dicaprate'
	},
	'polyglyceryl-6-laurate': {
		name: 'Polyglyceryl-6 Laurate',
		id: 'polyglyceryl-6-laurate'
	},
	'polyglyceryl-6-polyricinoleate': {
		name: 'Polyglyceryl-6 Polyricinoleate',
		id: 'polyglyceryl-6-polyricinoleate'
	},
	polylysine: {
		name: 'Polylysine',
		id: 'polylysine'
	},
	'polysilicone-11': {
		name: 'Polysilicone-11',
		id: 'polysilicone-11'
	},
	'polysorbate-20': {
		name: 'Polysorbate 20',
		id: 'polysorbate-20'
	},
	'polysorbate-60': {
		name: 'Polysorbate 60',
		id: 'polysorbate-60'
	},
	'potassium-azeloyl-diglycinate': {
		name: 'Potassium Azeloyl Diglycinate',
		id: 'potassium-azeloyl-diglycinate'
	},
	'potassium-sorbate': {
		name: 'Potassium Sorbate',
		id: 'potassium-sorbate'
	},
	'ppg-24-glycereth-24': {
		name: 'Ppg-24-Glycereth-24',
		id: 'ppg-24-glycereth-24'
	},
	'ppg-26-buteth-26': {
		name: 'Ppg-26-Buteth-26',
		id: 'ppg-26-buteth-26'
	},
	proline: {
		name: 'Proline',
		id: 'proline'
	},
	propanediol: {
		name: 'Propanediol',
		id: 'propanediol'
	},
	'propyl-gallate': {
		name: 'Propyl Gallate',
		id: 'propyl-gallate'
	},
	'pseudoalteromonas-exopolysaccharides': {
		name: 'Pseudoalteromonas Exopolysaccharides',
		id: 'pseudoalteromonas-exopolysaccharides'
	},
	'pseudoalteromonas-ferment-extract': {
		name: 'Pseudoalteromonas Ferment Extract',
		id: 'pseudoalteromonas-ferment-extract'
	},
	resveratrol: {
		name: 'Resveratrol',
		id: 'resveratrol'
	},
	retinal: {
		name: 'Retinal',
		id: 'retinal'
	},
	retinol: {
		name: 'Retinol',
		id: 'retinol'
	},
	'rosa-canina-seed-oil': {
		name: 'Rosa Canina Seed Oil',
		id: 'rosa-canina-seed-oil'
	},
	'rosa-damascena-flower-water': {
		name: 'Rosa Damascena Flower Water',
		id: 'rosa-damascena-flower-water'
	},
	'rosmarinus-officinalis-rosemary-leaf-extract': {
		name: 'Rosmarinus Officinalis (Rosemary) Leaf Extract',
		id: 'rosmarinus-officinalis-rosemary-leaf-extract'
	},
	'saccharide-isomerate': {
		name: 'Saccharide Isomerate',
		id: 'saccharide-isomerate'
	},
	'salicylic-acid': {
		name: 'Salicylic Acid',
		id: 'salicylic-acid'
	},
	sarcosine: {
		name: 'Sarcosine',
		id: 'sarcosine'
	},
	'sclerotium-gum': {
		name: 'Sclerotium Gum',
		id: 'sclerotium-gum'
	},
	serine: {
		name: 'Serine',
		id: 'serine'
	},
	silanetriol: {
		name: 'Silanetriol',
		id: 'silanetriol'
	},
	'silica-dimethyl-silylate': {
		name: 'Silica Dimethyl Silylate',
		id: 'silica-dimethyl-silylate'
	},
	'simmondsia-chinensis-jojoba-seed-oil': {
		name: 'Simmondsia Chinensis (Jojoba) Seed Oil',
		id: 'simmondsia-chinensis-jojoba-seed-oil'
	},
	'sodium-acrylates-copolymer': {
		name: 'Sodium Acrylates Copolymer',
		id: 'sodium-acrylates-copolymer'
	},
	'sodium-benzoate': {
		name: 'Sodium Benzoate',
		id: 'sodium-benzoate'
	},
	'sodium-caproyl-prolinate': {
		name: 'Sodium Caproyl Prolinate',
		id: 'sodium-caproyl-prolinate'
	},
	'sodium-chloride': {
		name: 'Sodium Chloride',
		id: 'sodium-chloride'
	},
	'sodium-citrate': {
		name: 'Sodium Citrate',
		id: 'sodium-citrate'
	},
	'sodium-hyaluronate': {
		name: 'Sodium Hyaluronate',
		id: 'sodium-hyaluronate'
	},
	'sodium-hyaluronate-crosspolymer': {
		name: 'Sodium Hyaluronate Crosspolymer',
		id: 'sodium-hyaluronate-crosspolymer'
	},
	'sodium-hydroxide': {
		name: 'Sodium Hydroxide',
		id: 'sodium-hydroxide'
	},
	'sodium-lactate': {
		name: 'Sodium Lactate',
		id: 'sodium-lactate'
	},
	'sodium-pca': {
		name: 'Sodium Pca',
		id: 'sodium-pca'
	},
	'sodium-phytate': {
		name: 'Sodium Phytate',
		id: 'sodium-phytate'
	},
	'sodium-polyacrylate': {
		name: 'Sodium Polyacrylate',
		id: 'sodium-polyacrylate'
	},
	'sodium-salicylate': {
		name: 'Sodium Salicylate',
		id: 'sodium-salicylate'
	},
	'solanum-lycopersicum-tomato-fruit-extract': {
		name: 'Solanum Lycopersicum (Tomato) Fruit Extract',
		id: 'solanum-lycopersicum-tomato-fruit-extract'
	},
	sphingolipids: {
		name: 'Sphingolipids',
		id: 'sphingolipids'
	},
	'sphingomonas-ferment-extract': {
		name: 'Sphingomonas Ferment Extract',
		id: 'sphingomonas-ferment-extract'
	},
	squalane: {
		name: 'Squalane',
		id: 'squalane'
	},
	'stearic-acid': {
		name: 'Stearic Acid',
		id: 'stearic-acid'
	},
	'stearyl-alcohol': {
		name: 'Stearyl Alcohol',
		id: 'stearyl-alcohol'
	},
	sucrose: {
		name: 'Sucrose',
		id: 'sucrose'
	},
	'sucrose-laurate': {
		name: 'Sucrose Laurate',
		id: 'sucrose-laurate'
	},
	'sucrose-stearate': {
		name: 'Sucrose Stearate',
		id: 'sucrose-stearate'
	},
	'tamarindus-indica-seed-gum': {
		name: 'Tamarindus Indica Seed Gum',
		id: 'tamarindus-indica-seed-gum'
	},
	'tasmannia-lanceolata-fruit-leaf-extract': {
		name: 'Tasmannia Lanceolata Fruit/Leaf Extract',
		id: 'tasmannia-lanceolata-fruit-leaf-extract'
	},
	'tetrahexyldecyl-ascorbate': {
		name: 'Tetrahexyldecyl Ascorbate',
		id: 'tetrahexyldecyl-ascorbate'
	},
	threonine: {
		name: 'Threonine',
		id: 'threonine'
	},
	tocopherol: {
		name: 'Tocopherol',
		id: 'tocopherol'
	},
	trehalose: {
		name: 'Trehalose',
		id: 'trehalose'
	},
	triethanolamine: {
		name: 'Triethanolamine',
		id: 'triethanolamine'
	},
	trihydroxystearin: {
		name: 'Trihydroxystearin',
		id: 'trihydroxystearin'
	},
	triolein: {
		name: 'Triolein',
		id: 'triolein'
	},
	'trisodium-ethylenediamine-disuccinate': {
		name: 'Trisodium Ethylenediamine Disuccinate',
		id: 'trisodium-ethylenediamine-disuccinate'
	},
	urea: {
		name: 'Urea',
		id: 'urea'
	},
	valine: {
		name: 'Valine',
		id: 'valine'
	},
	water: {
		name: 'Water.',
		id: 'water'
	},
	'xanthan-gum': {
		name: 'Xanthan Gum',
		id: 'xanthan-gum'
	},
	xylitol: {
		name: 'Xylitol',
		id: 'xylitol'
	},
	xylitylglucoside: {
		name: 'Xylitylglucoside',
		id: 'xylitylglucoside'
	},
	'yeast-extract': {
		name: 'Yeast Extract',
		id: 'yeast-extract'
	},
	'zinc-pca': {
		name: 'Zinc Pca',
		id: 'zinc-pca'
	},
	'zingiber-officinale-root-extract': {
		name: 'Zingiber Officinale Root Extract',
		id: 'zingiber-officinale-root-extract'
	}
};
