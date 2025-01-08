export interface Product {
  id: string;
  Name: string;
  TOD: 'day' | 'night' | 'both' | '';
  Step: 'Prep' | 'Treat' | 'Seal' | '';
  Targets: string[];
  'Skin Types': string;
  Phase: string;
  Format: string;
  Excludes: string[];
  Tags: string[];
}

export const products: { [key: string]: Product } = {
  "glycolic-acid-7-exfoliating-toner": {
    "Name": "Glycolic Acid 7% Exfoliating Toner",
    "TOD": "night",
    "Step": "Prep",
    "Targets": [
      "Textural Irregularities",
      "Dullness",
      "Uneven Skin Tone"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Toner",
    "Excludes": [
      "Copper Peptides",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide Powder",
      "Peptides",
      "Retinoids",
      "Direct Acids",
      "Saccharomyces Ferment 30% Milky Toner"
    ],
    "Tags": [
      "Direct Acids"
    ],
    "id": "glycolic-acid-7-exfoliating-toner"
  },
  "hyaluronic-acid-2-b5-hydrating-serum": {
    "Name": "Hyaluronic Acid 2% + B5 Hydrating Serum",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Dehydration",
      "Signs of Aging"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [],
    "Tags": [],
    "id": "hyaluronic-acid-2-b5-hydrating-serum"
  },
  "niacinamide-10-zinc-1": {
    "Name": "Niacinamide 10% + Zinc 1%",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Textural Irregularities",
      "Dryness",
      "Dullness",
      "Visible Shine",
      "Signs of Congestion"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Direct Vitamin C",
      "Indirect Vitamin C"
    ],
    "Tags": [],
    "id": "niacinamide-10-zinc-1"
  },
  "caffeine-solution-5-egcg": {
    "Name": "Caffeine Solution 5% + EGCG",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Dark Circles",
      "Puffiness"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [],
    "Tags": [],
    "id": "caffeine-solution-5-egcg"
  },
  "argireline-solution-10": {
    "Name": "Argireline Solution 10%",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Early Signs of Aging",
      "Crow's Feet",
      "Signs of Aging"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Direct Acids",
      "Direct Vitamin C",
      "Resveratrol and Ferulic Acid",
      "Salicylic Acid"
    ],
    "Tags": [
      "Peptides"
    ],
    "id": "argireline-solution-10"
  },
  "salicylic-acid-2-solution": {
    "Name": "Salicylic Acid 2% Solution",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Acne",
      "Textural Irregularities",
      "Signs of Congestion"
    ],
    "Skin Types": "Acne-Prone Skin",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide Powder",
      "Peptides",
      "Retinoids",
      "Saccharomyces Ferment 30% Milky Toner"
    ],
    "Tags": [
      "Direct Acids",
      "Salicylic Acid"
    ],
    "id": "salicylic-acid-2-solution"
  },

  "azelaic-acid-suspension-10": {
    "Name": "Azelaic Acid Suspension 10%",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Textural Irregularities",
      "Dullness",
      "Look of Redness",
      "Uneven Skin Tone"
    ],
    "Skin Types": "All",
    "Phase": "",
    "Format": "Suspension",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide Powder",
      "Peptides",
      "Retinoids",
      "Saccharomyces Ferment 30% Milky Toner"
    ],
    "Tags": [
      "Direct Acids"
    ],
    "id": "azelaic-acid-suspension-10"
  },
  "lactic-acid-10-ha": {
    "Name": "Lactic Acid 10% + HA",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Textural Irregularities",
      "Dullness",
      "Uneven Skin Tone"
    ],
    "Skin Types": "Dry Skin",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide Powder",
      "Peptides",
      "Retinoids",
      "Direct Acids",
      "Saccharomyces Ferment 30% Milky Toner"
    ],
    "Tags": [
      "Direct Acids"
    ],
    "id": "lactic-acid-10-ha"
  },
  "salicylic-acid-2-anhydrous-solution": {
    "Name": "Salicylic Acid 2% Anhydrous Solution",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Signs of Congestion",
      "Dullness",
      "Textural Irregularities",
      "Uneven Skin Tone"
    ],
    "Skin Types": "All",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide Powder",
      "Peptides",
      "Retinoids",
      "Saccharomyces Ferment 30% Milky Toner"
    ],
    "Tags": [
      "Direct Acids",
      "Salicylic Acid"
    ],
    "id": "salicylic-acid-2-anhydrous-solution"
  },
  "mandelic-acid-10-ha": {
    "Name": "Mandelic Acid 10% + HA",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Textural Irregularities",
      "Dullness",
      "Uneven Skin Tone"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide Powder",
      "Peptides",
      "Retinoids",
      "Direct Acids",
      "Saccharomyces Ferment 30% Milky Toner"
    ],
    "Tags": [
      "Direct Acids"
    ],
    "id": "mandelic-acid-10-ha"
  },
  "lactic-acid-5-ha": {
    "Name": "Lactic Acid 5% + HA",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Textural Irregularities",
      "Dullness",
      "Uneven Skin Tone"
    ],
    "Skin Types": "Dry Skin",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide Powder",
      "Peptides",
      "Retinoids",
      "Direct Acids",
      "Saccharomyces Ferment 30% Milky Toner"
    ],
    "Tags": [
      "Direct Acids"
    ],
    "id": "lactic-acid-5-ha"
  },
  "vitamin-c-suspension-23-ha-spheres-2": {
    "Name": "Vitamin C Suspension 23% + HA Spheres 2%",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Dullness",
      "Antioxidant Support",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "All",
    "Phase": "",
    "Format": "Suspension",
    "Excludes": [],
    "Tags": [
      "Direct Vitamin C"
    ],
    "id": "vitamin-c-suspension-23-ha-spheres-2"
  },
  "100-l-ascorbic-acid-powder": {
    "Name": "100% L-Ascorbic Acid Powder",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Dullness",
      "Antioxidant Support",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "All",
    "Phase": "Powder",
    "Format": "",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide",
      "Peptides",
      "Retinoids",
      ""
    ],
    "Tags": [
      "Direct Vitamin C"
    ],
    "id": "100-l-ascorbic-acid-powder"
  },
  "vitamin-c-suspension-30-in-silicone": {
    "Name": "Vitamin C Suspension 30% in Silicone",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Dullness",
      "Antioxidant Support",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "All",
    "Phase": "",
    "Format": "Suspension",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "EUK",
      "Niacinamide",
      "Peptides",
      "Retinoids"
    ],
    "Tags": [
      "Direct Vitamin C"
    ],
    "id": "vitamin-c-suspension-30-in-silicone"
  },
  "resveratrol-3-ferulic-acid-3": {
    "Name": "Resveratrol 3% + Ferulic Acid 3%",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Antioxidant Support",
      "Dullness"
    ],
    "Skin Types": "All",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "EUK",
      "Peptides",
      "Re: Pigment"
    ],
    "Tags": [
      "Resveratrol and Ferulic Acid",
      "Strong Antioxidants"
    ],
    "id": "resveratrol-3-ferulic-acid-3"
  },
  "ascorbyl-glucoside-solution-12": {
    "Name": "Ascorbyl Glucoside Solution 12%",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Dullness",
      "Antioxidant Support",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Niacinamide"
    ],
    "Tags": [
      "Indirect Vitamin C"
    ],
    "id": "ascorbyl-glucoside-solution-12"
  },
  "ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f": {
    "Name": "Ascorbyl Tetraisopalmitate Solution 20% in Vitamin F",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Dullness",
      "Antioxidant Support",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "Dry Skin",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Niacinamide"
    ],
    "Tags": [
      "Indirect Vitamin C"
    ],
    "id": "ascorbyl-tetraisopalmitate-solution-20-in-vitamin-f"
  },
  "multi-peptide-copper-peptides-1-serum": {
    "Name": "Multi-Peptide + Copper Peptides 1% Serum",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Advanced Signs of Aging",
      "Dryness"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Direct Acids",
      "Direct Vitamin C",
      "EUK",
      "Retinoids",
      "Strong Antioxidants",
      "Resveratrol and Ferulic Acid",
      "Salicylic Acid"
    ],
    "Tags": [
      "Copper Peptides"
    ],
    "id": "multi-peptide-copper-peptides-1-serum"
  },
  "100-niacinamide-powder": {
    "Name": "100% Niacinamide Powder",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Textural Irregularities",
      "Dullness",
      "Visible Shine"
    ],
    "Skin Types": "All",
    "Phase": "Powder",
    "Format": "",
    "Excludes": [
      "Direct Vitamin C",
      "Indirect Vitamin C",
      "Direct Acids"
    ],
    "Tags": [
      "Niacinamide Powder"
    ],
    "id": "100-niacinamide-powder"
  },
  "euk-134-0-1": {
    "Name": "EUK 134 0.1%",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Antioxidant Support",
      "Dullness"
    ],
    "Skin Types": "All",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "Resveratrol and Ferulic Acid"
    ],
    "Tags": [
      "EUK"
    ],
    "id": "euk-134-0-1"
  },
  "multi-peptide-ha-serum": {
    "Name": "Multi-Peptide + HA Serum",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Early Signs of Aging",
      "Dryness",
      "Signs of Aging"
    ],
    "Skin Types": "All",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Direct Acids",
      "Direct Vitamin C",
      "Resveratrol and Ferulic Acid",
      "Salicylic Acid"
    ],
    "Tags": [
      "Peptides"
    ],
    "id": "multi-peptide-ha-serum"
  },
  "multi-peptide-eye-serum": {
    "Name": "Multi-Peptide Eye Serum",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Early Signs of Aging",
      "Crow's Feet",
      "Dark Circles",
      "Signs of Aging",
      "Puffiness"
    ],
    "Skin Types": "",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Direct Acids",
      "Direct Vitamin C",
      "Resveratrol and Ferulic Acid",
      "Salicylic Acid"
    ],
    "Tags": [
      "Peptides"
    ],
    "id": "multi-peptide-eye-serum"
  },
  "aloe-2-nag-2-solution": {
    "Name": "Aloe 2% + NAG 2% Solution",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Textural Irregularities",
      "Look of Redness",
      "Uneven Skin Tone"
    ],
    "Skin Types": "Dry Skin",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Direct Acids",
      "Direct Vitamin C",
      "Resveratrol and Ferulic Acid",
      "Salicylic Acid"
    ],
    "Tags": [
      "Peptides"
    ],
    "id": "aloe-2-nag-2-solution"
  },
  "matrixyl-10-ha": {
    "Name": "Matrixyl 10% + HA",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Early Signs of Aging",
      "Signs of Aging"
    ],
    "Skin Types": "",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [
      "Direct Acids",
      "Direct Vitamin C",
      "Resveratrol and Ferulic Acid",
      "Salicylic Acid"
    ],
    "Tags": [
      "Peptides"
    ],
    "id": "matrixyl-10-ha"
  },
  "retinal-0-2-emulsion": {
    "Name": "Retinal 0.2% Emulsion",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Advanced Signs of Aging",
      "Textural Irregularities",
      "Uneven Skin Tone"
    ],
    "Skin Types": "",
    "Phase": "Emulsion",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "Retinoids"
    ],
    "Tags": [
      "Retinoids"
    ],
    "id": "retinal-0-2-emulsion"
  },
  "retinol-1-in-squalane": {
    "Name": "Retinol 1% in Squalane",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Advanced Signs of Aging",
      "Dryness",
      "Textural Irregularities",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "Retinoids"
    ],
    "Tags": [
      "Retinoids"
    ],
    "id": "retinol-1-in-squalane"
  },
  "retinol-0-5-in-squalane": {
    "Name": "Retinol 0.5% in Squalane",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Advanced Signs of Aging",
      "Dryness",
      "Textural Irregularities",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "Retinoids"
    ],
    "Tags": [
      "Retinoids"
    ],
    "id": "retinol-0-5-in-squalane"
  },
  "granactive-retinoid-2-emulsion": {
    "Name": "Granactive Retinoid 2% Emulsion",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Early Signs of Aging",
      "Textural Irregularities",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "",
    "Phase": "Emulsion",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "Retinoids"
    ],
    "Tags": [
      "Retinoids"
    ],
    "id": "granactive-retinoid-2-emulsion"
  },
  "retinol-0-2-in-squalane": {
    "Name": "Retinol 0.2% in Squalane",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Advanced Signs of Aging",
      "Dryness",
      "Textural Irregularities",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "Retinoids"
    ],
    "Tags": [
      "Retinoids"
    ],
    "id": "retinol-0-2-in-squalane"
  },
  "granactive-retinoid-5-in-squalane": {
    "Name": "Granactive Retinoid 5% in Squalane",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Advanced Signs of Aging",
      "Textural Irregularities",
      "Signs of Aging",
      "Uneven Skin Tone"
    ],
    "Skin Types": "",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides",
      "Direct Acids",
      "Direct Vitamin C",
      "Retinoids"
    ],
    "Tags": [
      "Retinoids"
    ],
    "id": "granactive-retinoid-5-in-squalane"
  },
  "saccharomyces-ferment-30-milky-toner": {
    "Name": "Saccharomyces Ferment 30% Milky Toner",
    "TOD": "both",
    "Step": "Prep",
    "Targets": [
      "Textural Irregularities",
      "Dryness",
      "Uneven Skin Tone"
    ],
    "Skin Types": "",
    "Phase": "Milky",
    "Format": "Toner",
    "Excludes": [
      "Direct Acids"
    ],
    "Tags": [
      "Saccharomyces Ferment 30% Milky Toner"
    ],
    "id": "saccharomyces-ferment-30-milky-toner"
  },
  "pycnogenol-5": {
    "Name": "Pycnogenol 5%",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Antioxidant Support",
      "Dullness"
    ],
    "Skin Types": "",
    "Phase": "Anhydrous",
    "Format": "Serum",
    "Excludes": [
      "Copper Peptides"
    ],
    "Tags": [
      "Strong Antioxidants"
    ],
    "id": "pycnogenol-5"
  },
  "alpha-arbutin-2-ha": {
    "Name": "Alpha Arbutin 2% + HA",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Uneven Skin Tone",
      "Dryness"
    ],
    "Skin Types": "",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [],
    "Tags": [],
    "id": "alpha-arbutin-2-ha"
  },
  "hyaluronic-acid-2-b5-with-ceramides": {
    "Name": "Hyaluronic Acid 2% + B5 (with Ceramides)",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Dehydration",
      "Signs of Aging"
    ],
    "Skin Types": "",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [],
    "Tags": [],
    "id": "hyaluronic-acid-2-b5-with-ceramides"
  },
  "soothing-barrier-support-serum": {
    "Name": "Soothing & Barrier Support Serum",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Barrier Support",
      "Look of Redness"
    ],
    "Skin Types": "",
    "Phase": "Emulsion",
    "Format": "Serum",
    "Excludes": [
      "Direct Vitamin C",
      "Indirect Vitamin C"
    ],
    "Tags": [],
    "id": "soothing-barrier-support-serum"
  },
  "natural-moisturizing-factors-beta-glucan": {
    "Name": "Natural Moisturizing Factors + Beta Glucan",
    "TOD": "both",
    "Step": "Seal",
    "Targets": [
      "Dryness"
    ],
    "Skin Types": "",
    "Phase": "Gel",
    "Format": "Moisturizer",
    "Excludes": [],
    "Tags": [],
    "id": "natural-moisturizing-factors-beta-glucan"
  },
  "marine-hyaluronics": {
    "Name": "Marine Hyaluronics",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Dehydration",
      "Dryness"
    ],
    "Skin Types": "",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [],
    "Tags": [],
    "id": "marine-hyaluronics"
  },
  "amino-acids-b5": {
    "Name": "Amino Acids + B5",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Dehydration",
      "Dryness"
    ],
    "Skin Types": "",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [],
    "Tags": [],
    "id": "amino-acids-b5"
  },
  "niacinamide-5-face-and-body-emulsion": {
    "Name": "Niacinamide 5% Face and Body Emulsion",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Uneven Skin Tone",
      "Dryness",
      "Signs of Aging"
    ],
    "Skin Types": "",
    "Phase": "Emulsion",
    "Format": "Serum",
    "Excludes": [
      "Direct Vitamin C",
      "Indirect Vitamin C"
    ],
    "Tags": [],
    "id": "niacinamide-5-face-and-body-emulsion"
  },
  "balancing-clarifying-serum": {
    "Name": "Balancing & Clarifying Serum",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Signs of Congestion",
      "Dryness",
      "Textural Irregularities"
    ],
    "Skin Types": "",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [],
    "Tags": [],
    "id": "balancing-clarifying-serum"
  },
  "gf-15-solution": {
    "Name": "GF 15% Solution",
    "TOD": "both",
    "Step": "Treat",
    "Targets": [
      "Advanced Signs of Aging"
    ],
    "Skin Types": "",
    "Phase": "Water",
    "Format": "Serum",
    "Excludes": [ "Direct Acids", "Direct Vitamin C"],
    "Tags": ["Peptides"],
    "id": "gf-15-solution"
  },
  "prescription-tretinoin": {
    "Name": "Prescription Tretinoin (not The Ordinary)",
    "TOD": "night",
    "Step": "Treat",
    "Targets": [
      "Advanced Signs of Aging"
    ],
    "Skin Types": "",
    "Phase": "Cream",
    "Format": "Moisturizer",
    "Excludes": ["Copper Peptides", "Direct Acids", "Direct Vitamin C", "Retinoids"],
    "Tags": ["Retinoids"],
    "id": "prescription-tretinoin"
  }

};
