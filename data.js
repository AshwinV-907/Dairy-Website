// Data Registry for Kaveri Artisanal Dairy (Karnataka)

const DAIRY_DATA = {
  products: [
    {
      id: 'a2-milk-1l',
      name: 'A2 Hallikar & Gir Desi Cow Milk',
      kannadaName: 'ಎ೨ ಹಳ್ಳಿಕಾರ್ ಹಸುವಿನ ಹಾಲು',
      category: 'milk',
      price: 88,
      unit: '1 Litre Glass Bottle',
      origin: 'Hassan & Mandya Grasslands',
      fat: '4.5%',
      snf: '8.8%',
      badge: 'Daily Essential',
      description: 'Single-origin, unhomogenized A2 milk from free-grazing indigenous Hallikar & Gir cows. Naturally rich in A2 beta-casein for smooth digestion.',
      iconType: 'milk-bottle'
    },
    {
      id: 'bilona-ghee-500ml',
      name: 'Vedic Bilona Cultured Desi Ghee',
      kannadaName: 'ಸಾಂಪ್ರದಾಯಿಕ ಬಿಲೋನಾ ತುಪ್ಪ',
      category: 'ghee',
      price: 740,
      unit: '500ml Heritage Jar',
      origin: 'Malnad Rain-fed Pastures',
      fat: '99.8%',
      snf: '0.2%',
      badge: 'Heritage Recipe',
      description: 'Slow-crafted on earthen chulhas using the 5-samskara curd-churning method. Granular golden aroma with high smoke point and pure nutrition.',
      iconType: 'ghee-pot'
    },
    {
      id: 'malnad-gidda-milk',
      name: 'Malnad Gidda High-Altitude Milk',
      kannadaName: 'ಮಲೆನಾಡು ಗಿಡ್ಡ ಹಸುವಿನ ಹಾಲು',
      category: 'milk',
      price: 110,
      unit: '1 Litre Glass Bottle',
      origin: 'Shivamogga Western Ghats',
      fat: '5.2%',
      snf: '9.2%',
      badge: 'Rare Native Breed',
      description: 'Extracted from native dwarf cows foraging on medicinal Western Ghat herbs. Unmatched restorative micronutrients and deep creamy profile.',
      iconType: 'milk-bottle'
    },
    {
      id: 'malai-paneer-500g',
      name: 'Farmstead Soft Malai Paneer',
      kannadaName: 'ತಾಜಾ ಮಲೈ ಪನೀರ್',
      category: 'paneer',
      price: 240,
      unit: '500g Vacuum Block',
      origin: 'Mysuru Dairy Unit',
      fat: '26%',
      protein: '19.5g / 100g',
      badge: 'Unpressed Velvet',
      description: 'Curdled with organic lemon extract, never chemically set. Melts delicately in local curries, saag, and tandoors.',
      iconType: 'paneer-block'
    },
    {
      id: 'filter-coffee-milk',
      name: 'South Indian Filter Coffee Special Milk',
      kannadaName: 'ಫಿಲ್ಟರ್ ಕಾಫಿ ಸ್ಪೆಷಲ್ ಹಾಲು',
      category: 'milk',
      price: 76,
      unit: '1 Litre Bottle',
      origin: 'Chikkamagaluru Foothills',
      fat: '6.0%',
      snf: '9.5%',
      badge: 'Roast Master Choice',
      description: 'Specially standardized high-density whole milk crafted for creating dense golden crema with chicory-coffee decoction.',
      iconType: 'coffee-milk'
    },
    {
      id: 'thick-set-curd',
      name: 'Clay-Pot Set Probiotic Dahi (Curd)',
      kannadaName: 'ಮಣ್ಣಿನ ಮಡಕೆ ಮೊಸರು',
      category: 'curd',
      price: 95,
      unit: '1kg Clay Earthen Vat',
      origin: 'Mandya Farmstead',
      fat: '5.0%',
      probiotics: 'Active Lactobacillus',
      badge: 'Natural Alkaline',
      description: 'Traditional slow-fermented curd set in porous terracotta pots. Thick, velvety texture with natural cooling digestive enzymes.',
      iconType: 'curd-vat'
    },
    {
      id: 'artisanal-butter-250g',
      name: 'Hand-Churned White Makkhan / Butter',
      kannadaName: 'ಕೈಕಡೆದ ಬಿಳಿ ಬೆಣ್ಣೆ',
      category: 'butter',
      price: 210,
      unit: '250g Fresh Pack',
      origin: 'Davanagere Grasslands',
      fat: '82%',
      salt: 'Unsalted Pure',
      badge: 'Melted Fresh',
      description: 'Traditional Benne churned daily from cultured A2 cream. Ideal accompaniment for Davanagere dosas and hot rotis.',
      iconType: 'butter-block'
    },
    {
      id: 'heritage-mysore-pak',
      name: 'Pure Desi Ghee Royal Mysore Pak',
      kannadaName: 'ಅರಮನೆ ಶೈಲಿಯ ಮೈಸೂರು ಪಾಕ್',
      category: 'sweets',
      price: 360,
      unit: '400g Imperial Gift Tin',
      origin: 'Mysuru Royal Heritage Kitchen',
      fat: 'Pure Cow Ghee',
      sweetness: 'Moderate Refined Cane',
      badge: 'Royal Confection',
      description: 'Prepared strictly according to 19th-century royal court proportions: pure besan, single-origin desi ghee, and saffron threads.',
      iconType: 'sweet-tin'
    }
  ],

  labBatches: {
    'KV-2026-081': {
      date: 'Today (Morning Harvest)',
      breed: 'Hallikar & Gir 100%',
      farm: 'Mandya Valley Unit 4',
      fat: '4.62%',
      snf: '8.91%',
      chillingTemp: '3.6°C',
      adulterants: '0.00% (Lab Certified Zero)',
      a2BetaCasein: '99.9%',
      certifier: 'Karnataka State Veterinary Lab & FSSAI'
    },
    'KV-2026-080': {
      date: 'Yesterday (Evening Harvest)',
      breed: 'Malnad Gidda Pure',
      farm: 'Shivamogga Hill Range',
      fat: '5.31%',
      snf: '9.28%',
      chillingTemp: '3.8°C',
      adulterants: '0.00% (Lab Certified Zero)',
      a2BetaCasein: '100.0%',
      certifier: 'Karnataka State Veterinary Lab & FSSAI'
    },
    'KV-2026-079': {
      date: 'Earlier Harvest',
      breed: 'Indi Buffalo & A2 Cow',
      farm: 'Hassan Farmstead',
      fat: '6.15%',
      snf: '9.45%',
      chillingTemp: '3.5°C',
      adulterants: '0.00% (Lab Certified Zero)',
      a2BetaCasein: '99.8%',
      certifier: 'Karnataka State Veterinary Lab & FSSAI'
    }
  },

  serviceLocations: [
    'Bengaluru (Indiranagar, Jayanagar, Malleshwaram, Koramangala, Whitefield, Sadashivanagar, JP Nagar)',
    'Mysuru (Gokulam, Saraswathipuram, Jayalakshmipuram, Vijayanagar)',
    'Shivamogga (Vidyanagar, Tilak Nagar)',
    'Hassan (Channarayapatna Corridor)',
    'Mangaluru (Kadri, Bejai, Urwa)',
    'Hubballi-Dharwad (Vidyanagar, Keshwapur)'
  ],

  testimonials: [
    {
      quote: 'For our household in Jayanagar, finding authentic unadulterated milk with natural A2 protein without antibiotic residues was crucial. Kaveri Dairy has delivered consistently at 5:45 AM for 4 years.',
      name: 'Dr. Srinivas Murthy',
      title: 'Senior Cardiologist, Bengaluru (Age 54)',
      initials: 'SM'
    },
    {
      quote: 'The aroma of their Bilona ghee reminds me of my grandmother’s kitchen in Mandya. Real granular texture, no artificial coloring, and the glass bottle return model is truly responsible.',
      name: 'Geetha Radhakrishna',
      title: 'Heritage Food Researcher, Mysuru (Age 48)',
      initials: 'GR'
    },
    {
      quote: 'We use their Filter Coffee Special Milk for our morning blend. The dense foam and natural sweetness make everyday coffee taste like traditional high-roast decoction perfection.',
      name: 'Anand & Malini Rao',
      title: 'Architects & Coffee Connoisseurs, Malleshwaram (Age 42)',
      initials: 'AR'
    }
  ]
};
