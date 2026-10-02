
const products = [
  {
    id: 1,
    name: "REVITA BEAUTY Skin,Hair & Nails Gummies",
    price: 4500,
    image: "image/136.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 2,
    name: "Adult Multivitamin Gummies",
    price: 3000,
    image: "image/137.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 3,
    name: "Omega 3 Brain Health Chewable Capsules for kids",
    price: 4000,
    image: "image/138.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 4,
    name: " GLUCOSAMINE SULPHATE Two Month Supply",
    price: 5800,
    image: "image/139.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 5,
    name: "AMPLEX DEODORANT FOR MEN",
    price: 550,
    image: "image/140.jpeg",
    description: `<p>Stay fresh and confident all day with this long-lasting deodorant, offering superior protection against odor and wetness.</p><br><p><strong>Primary Uses:</strong> Apply to underarms for all-day freshness and a subtle, clean scent.</p>`
  },
  {
    id: 6,
    name: "CIEN DEODORANT Pure Freshness",
    price: 550,
    image: "image/141.jpeg",
    description: `<p>Stay fresh and confident all day with this long-lasting deodorant, offering superior protection against odor and wetness.</p><br><p><strong>Primary Uses:</strong> Apply to underarms for all-day freshness and a subtle, clean scent.</p>`
  },

  {
    id: 7,
    name: "(Brightening Vitamin C) EYE GEL PATCHES",
    price: 2800,
    image: "image/142.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 8,
    name: "CHERRY BLISS RADIANCE GLOW MIST",
    price: 2260,
    image: "image/143.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },

  {
    id: 9,
    name: "OSIRIS AVISE RecoveryOil",
    price: 2200,
    image: "image/144.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },


  {
    id: 10,
    name: "Strech Mark Oil",
    price: 2500,
    image: "image/145.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },



  {
    id: 11,
    name: "COCOA BUTTER FORMULA with Vitamin E Body Oil",
    price: 2300,
    image: "image/146.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },



  {
    id: 12,
    name: "Aveeno Skin Relief Body Oil Spray",
    price: 1650,
    image: "image/147.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },






  {
    id: 13,
    name: "brazilian love Glow body butter",
    price: 2300,
    image: "image/148.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },




  {
    id: 14,
    name: " Cera Ve Moisturising Cream",
    price: 4200,
    image: "image/149.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },



  {
    id: 15,
    name: "CYCLAX NATURE  PURE",
    price: 1650,
    image: "image/150.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },




  {
    id: 16,
    name: "MOISTURISING CREAM FACE NECK & HANDS Retinol",
    price: 3000,
    image: "image/151.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },



  {
    id: 17,
    name: "Body Butter LAVENDER VANILLA",
    price: 3600,
    image: "image/152.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },



  {
    id: 18,
    name: " SANDAWOOD & VETIVER hnd and body lotion",
    price: 3200,
    image: "image/153.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },




  {
    id: 19,
    name: "INTENSIVE HYDRATING OVERNIGHT RECOVERY for every dry skin",
    price: 2350,
    image: "image/154.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 20,
    name: "SANCTUARY SPA",
    price: 2500,
    image: "image/155.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },



  {
    id: 21,
    name: "SebaMed Moisturising Body Lotion",
    price: 3300,
    image: "image/156.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },



  {
    id: 22,
    name: "XBC Feminine Spray",
    price: 1800,
    image: "image/157.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },




  {
    id: 23,
    name: "POENY EAU DE PARFUM",
    price: 5650,
    image: "image/158.jpeg",
    description: `<p>Experience a captivating and long-lasting scent that leaves a memorable, elegant impression wherever you go.</p><br><p><strong>Primary Uses:</strong> Spray onto pulse points such as wrists and neck for a beautifully balanced, all-day fragrance.</p>`
  },




  {
    id: 24,
    name: "(Eternal Romance) EAU DE PARFUM For Women",
    price: 5650,
    image: "image/159.jpeg",
    description: `<p>Experience a captivating and long-lasting scent that leaves a memorable, elegant impression wherever you go.</p><br><p><strong>Primary Uses:</strong> Spray onto pulse points such as wrists and neck for a beautifully balanced, all-day fragrance.</p>`
  },


  {
    id: 25,
    name: "Eternal Romance For Women",
    price: 5650,
    image: "image/160.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 26,
    name: "(Story Of Flower) EAU DE PARFUM Natural Spray",
    price: 2850,
    image: "image/161.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },



  {
    id: 27,
    name: "Blue Stratos Original Blue  EAU DE TOILETTE",
    price: 4860,
    image: "image/162.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },



  {
    id: 28,
    name: "OH YES! pour Femme",
    price: 4200,
    image: "image/163.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },



  {
    id: 29,
    name: "Face facts Ceramide Hydrating Gentle Cleanser",
    price: 3800,
    image: "image/164.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },




  {
    id: 30,
    name: " Simple Purifying Cleansing Lotion",
    price: 1800,
    image: "image/165.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },






  {
    id: 31,
    name: "Garnier SkinActive Rose Soothing Milk (For dry and sensitive skin)",
    price: 2000,
    image: "image/170.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },






  {
    id: 32,
    name: "Vitamin e Foaming Facial Wash",
    price: 1850,
    image: "image/171.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },






  {
    id: 33,
    name: "Cien Cleansing Milk Soothing",
    price: 2260,
    image: "image/172.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },






  {
    id: 34,
    name: " L'OREAL AGE PERFECT cleansing Milk fortified skin",
    price: 2260,
    image: "image/173.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },






  {
    id: 35,
    name: "NIVEA MEN SENSITIVE FACE WASH",
    price: 1650,
    image: "image/174.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },






  {
    id: 36,
    name: " Deep Cleaning Face Wash NIVEA MEN",
    price: 1800,
    image: "image/175.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },






  {
    id: 37,
    name: "NIVEA MEN Rehydrating Moisturiser",
    price: 1650,
    image: "image/176.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 38,
    name: "Salicylic Acid Foaming Clay Cleanser",
    price: 2000,
    image: "image/177.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 39,
    name: "BULL DOG skin Care For Men Moisturiser",
    price: 200,
    image: "image/178.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 40,
    name: "BULL DOG skin care For Men Face Wash",
    price: 1800,
    image: "image/179.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 41,
    name: " L'oreal Men Expert Face Wash",
    price: 1800,
    image: "image/180.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 42,
    name: "Tea Tree Facial srcub",
    price: 2200,
    image: "image/181.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 43,
    name: "BRIGHTENING Vitamin C Micro-Polishing Facial Scrub",
    price: 2000,
    image: "image/182.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 44,
    name: "Apricot Scrub",
    price: 1600,
    image: "image/183.jpeg",
    description: `<p>Exfoliate dead skin cells and reveal a smoother, brighter complexion with this gentle yet effective formula.</p><br><p><strong>Primary Uses:</strong> Apply to skin as directed to polish, renew your skin texture, and unclog pores.</p>`
  },


  {
    id: 45,
    name: "Blemish Control Scrub",
    price: 1800,
    image: "image/184.jpeg",
    description: `<p>Exfoliate dead skin cells and reveal a smoother, brighter complexion with this gentle yet effective formula.</p><br><p><strong>Primary Uses:</strong> Apply to skin as directed to polish, renew your skin texture, and unclog pores.</p>`
  },


  {
    id: 46,
    name: "Face Scrub Glycolic Acid Exfoliating & Brightening",
    price: 2200,
    image: "image/185.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 47,
    name: "Salicylic Acid Exfoliating Tonic",
    price: 2400,
    image: "image/186.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 48,
    name: "Salicylic Acid +Zinc Clarifying Toner",
    price: 2600,
    image: "image/187.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 49,
    name: "Revolution Glycolic Acid Toner Ltion Technique",
    price: 2200,
    image: "image/188.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 50,
    name: "Medisphere Skincare",
    price: 3300,
    image: "image/189.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 51,
    name: "BRIGHTENING VITAMIN C FACIAL TONIC",
    price: 1860,
    image: "image/190.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 52,
    name: "TEA TREE FACIAL TONIC",
    price: 1800,
    image: "image/191.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 53,
    name: "GLORIOUS MAD FACIAL MASK",
    price: 2000,
    image: "image/192.jpeg",
    description: `<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>`
  },


  {
    id: 54,
    name: "CHERRY BLISS BRIGHTENING",
    price: 2400,
    image: "image/193.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 55,
    name: "L'OREAL AGE PERFECT",
    price: 1860,
    image: "image/194.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 56,
    name: "LACURA MARINE MASK",
    price: 2200,
    image: "image/195.jpeg",
    description: `<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>`
  },


  {
    id: 57,
    name: "NIVEA SUN PREOTECT AND MOISTURE",
    price: 2800,
    image: "image/196.jpeg",
    description: `<p>Protect your skin from harmful UVA and UVB rays with this lightweight, non-greasy sunscreen.</p><br><p><strong>Primary Uses:</strong> Apply generously 15 minutes before sun exposure to prevent sunburn and premature skin aging.</p>`
  },

  {
    id: 58,
    name: "SOIL PROTECT MOISTURISING LOTION",
    price: 3000,
    image: "image/197.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },


  {
    id: 59,
    name: "CALYPSO AFTER SUN MOISTURIZING LOTION",
    price: 3300,
    image: "image/198.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 60,
    name: "MALIBU SOOTHING AFTER SUN LOTION",
    price: 3500,
    image: "image/199.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 61,
    name: "MALIBU LOTION HIGH PROTECTION",
    price: 3500,
    image: "image/200.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 62,
    name: "VASELINE TOTAL MOISTURE BAR SOAP",
    price: 500,
    image: "image/201.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },

  {
    id: 63,
    name: "DOVE SUMMER CARE",
    price: 2000,
    image: "image/202.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 64,
    name: "BAYLIS&HARDING lUXURY BODY WASH",
    price: 2200,
    image: "image/203.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 65,
    name: "NIVEA MEN SHOWER GEL",
    price: 1800,
    image: "image/205.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },
  {
    id: 66,
    name: "CETRABEN INTENSIVE HYDRATING BODY CREAM",
    price: 2800,
    image: "image/206.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 67,
    name: "COLLAGEN BODY LOTION",
    price: 3300,
    image: "image/207.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },

  {
    id: 68,
    name: "LACURA MEN NOIR SHOWER GELL",
    price: 1800,
    image: "image/208.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 69,
    name: "BELUX SHOWER GEL",
    price: 2200,
    image: "image/209.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 70,
    name: "E45 MOISTURISING LOTION",
    price: 3300,
    image: "image/210.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 71,
    name: "AMERICAN TOUCH VITAMIN E BODY CREAM",
    price: 1500,
    image: "image/211.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 72,
    name: "E45 HYDRATING LOTION",
    price: 2600,
    image: "image/212.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },

  {
    id: 73,
    name: "AVEENO DAILY MOISTURISING BODY LOTION",
    price: 3300,
    image: "image/213.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 74,
    name: "AVEENO DAILY MOISTURISING BODY LOTION",
    price: 3800,
    image: "image/214.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 75,
    name: "AVEENO DAILY MOISTURISING BODY LOTION",
    price: 2800,
    image: "image/215.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 76,
    name: "AVEENO DAILY MOISTURISING BODY LOTION",
    price: 3300,
    image: "image/216.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 77,
    name: "JOHNSON'S VITA-RICH BODY LOTION",
    price: 2800,
    image: "image/217.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },

  {
    id: 78,
    name: "FEMFRESH DAILY WASH",
    price: 3200,
    image: "image/218.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 79,
    name: "FEMFRESH DAILY FEMININE WASH",
    price: 2500,
    image: "image/219.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 80,
    name: "NEUTROGENA DEEP MOISTURE",
    price: 2800,
    image: "image/220.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 81,
    name: "THE NATURAL CLINIC FACE SCRUB",
    price: 2670,
    image: "image/221.jpeg",
    description: `<p>Exfoliate dead skin cells and reveal a smoother, brighter complexion with this gentle yet effective formula.</p><br><p><strong>Primary Uses:</strong> Apply to skin as directed to polish, renew your skin texture, and unclog pores.</p>`
  },


  {
    id: 82,
    name: "CURALENE GLYCERIN SOAP",
    price: 500,
    image: "image/222.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 83,
    name: "WESTLAB SLEEP BATH SALT",
    price: 3650,
    image: "image/223.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 84,
    name: "TEA TREE ESSENTIAL OIL",
    price: 1470,
    image: "image/224.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },

  {
    id: 85,
    name: "GRACE&STELLA HYALURONIC ACID",
    price: 1650,
    image: "image/225.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 86,
    name: "DUDU-OSUM BLACK SOAP",
    price: 1500,
    image: "image/226.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 87,
    name: "CHEWABLE VITAMIN-C one A day",
    price: 4200,
    image: "image/227.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },

  {
    id: 88,
    name: "HIGH STRENGTH VITAMIN C EMMUNE SUPPORT",
    price: 4200,
    image: "image/228.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 89,
    name: "VITAMIN E 400iu",
    price: 4200,
    image: "image/229.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 90,
    name: "Iron 14mg",
    price: 4500,
    image: "image/230.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 91,
    name: "BEAUTY COLLAGEN VITAMIN C& BIOTIN 3000MG Collagen Tablets",
    price: 4500,
    image: "image/231.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 92,
    name: "KIDS HEALTH MULTIVITAMIN FRIUT GUMMIES",
    price: 4200,
    image: "image/233.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 93,
    name: "BOOTS everyday COD LIVER OIL",
    price: 6800,
    image: "image/234.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },

  {
    id: 94,
    name: "VITAMIN C & ZINC",
    price: 4800,
    image: "image/235.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 95,
    name: "COLLAGEN PEPTIDES SKIN AND GLOW",
    price: 4800,
    image: "image/236.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 96,
    name: "COLLAGEN POWDER",
    price: 5200,
    image: "image/237.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },

  {
    id: 97,
    name: "HAIR,SKIN,AND NAILS GUMMIES",
    price: 3500,
    image: "image/238.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 98,
    name: "MIRACLE PURE concealer",
    price: 1450,
    image: "image/71.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },


  {
    id: 99,
    name: "MAYBELLINE concealer",
    price: 1550,
    image: "image/72.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },

  {
    id: 100,
    name: "DAZZLE concealer",
    price: 1300,
    image: "image/73.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },


  {
    id: 101,
    name: "DAZZLE foundation",
    price: 1850,
    image: "image/74.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },


  {
    id: 102,
    name: "LORIEL PARIS INFAILLIBLE matte cover",
    price: 700,
    image: "image/75.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 103,
    name: "MAYBELLINE concealer",
    price: 1550,
    image: "image/72.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },

  {
    id: 104,
    name: "DAZZLE concealer",
    price: 1300,
    image: "image/73.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },


  {
    id: 105,
    name: "DAZZLE foundation",
    price: 1850,
    image: "image/74.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },


  {
    id: 106,
    name: "LORIEL PARIS INFAILLIBLE matte cover",
    price: 2200,
    image: "image/75.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 107,
    name: "FACEFINITY 3in1 concealer foundation",
    price: 2450,
    image: "image/76.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },

  {
    id: 108,
    name: "Beautiful Matte Foundation",
    price: 2360,
    image: "image/77.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },


  {
    id: 109,
    name: "RIMMEL FINISH foundation",
    price: 2460,
    image: "image/78.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },


  {
    id: 110,
    name: "DAZZLE BRONZER",
    price: 1450,
    image: "image/79.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 111,
    name: "ARMOR BLINDING GLOW",
    price: 1800,
    image: "image/80.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 112,
    name: "AMOR x SIAN",
    price: 1470,
    image: "image/81.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 113,
    name: "BEAUTY MATE FINISH",
    price: 1300,
    image: "image/82.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 114,
    name: "0PP0SITE ATTRACT",
    price: 1740,
    image: "image/83.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 115,
    name: "PRO HD BROW PALETTE",
    price: 1600,
    image: "image/84.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },

  {
    id: 116,
    name: "BEAUTY PALLETTE",
    price: 1960,
    image: "image/85.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 117,
    name: "MAYBELINE TATOO BROW",
    price: 1270,
    image: "image/86.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 118,
    name: "NUDE EGO BLASH",
    price: 1480,
    image: "image/87.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 119,
    name: "NUDE EGO",
    price: 1480,
    image: "image/88.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 120,
    name: "REVOLUTION CHOCOLATE MINT",
    price: 2200,
    image: "image/89.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 121,
    name: "LACURA ILLUMINATING PRIMING MOISTURISER",
    price: 2600,
    image: "image/90.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 122,
    name: "LACURA VITAMIN C SERUM",
    price: 2800,
    image: "image/91.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 123,
    name: "LACURA HYALURONIC ACID",
    price: 2800,
    image: "image/92.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },

  {
    id: 124,
    name: "LACURA MARINE FACIAL OIL",
    price: 2370,
    image: "image/94.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },


  {
    id: 125,
    name: "COLLAGEN AND GOLD SERUM",
    price: 2800,
    image: "image/95.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 126,
    name: "MOISTURE SERUM",
    price: 2600,
    image: "image/96.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 127,
    name: "GLOWING SERUM 2% VITAMIN C",
    price: 2700,
    image: "image/97.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },

  {
    id: 128,
    name: "REPAIRING SERUM CERAMIDES",
    price: 2700,
    image: "image/98.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 129,
    name: "ANTI WRINKLE 60+ EXTRA NOURISH",
    price: 2800,
    image: "image/99.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 130,
    name: "NIVEA Q10 ANTI-WRINKLE POWER eye cream",
    price: 1640,
    image: "image/100.jpeg",
    description: `<p>Revitalize your under-eye area with these cooling and brightening eye patches, designed to reduce puffiness and dark circles.</p><br><p><strong>Primary Uses:</strong> Apply under the eyes to refresh, hydrate, and brighten tired-looking skin.</p>`
  },


  {
    id: 131,
    name: "HYDRATING DAY CREAM",
    price: 3000,
    image: "image/102.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },

  {
    id: 132,
    name: "FACE FACTS CHERRY BLISS HYALURONIC HYDRO CREAM",
    price: 3200,
    image: "image/103.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 133,
    name: "LOREAL PARIS AGE PERFECT collagen Expert Anti-Sagging",
    price: 3500,
    image: "image/104.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 134,
    name: "LORIEL PARIS WRINKLE EXPERT 65+ multivitamins",
    price: 3500,
    image: "image/105.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 135,
    name: "LOREAL PARIS Wrinkle Expert 45+",
    price: 3500,
    image: "image/106.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 136,
    name: "DERMAVIO Aloe vera Gel cooling soothing and Moisturizing",
    price: 1800,
    image: "image/108.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 137,
    name: "grace & stella HYALURONIC ACID",
    price: 1870,
    image: "image/109.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 138,
    name: "SALICYLIC ACID SOOTHING LOTION",
    price: 2200,
    image: "image/110.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 139,
    name: "SNAIL HYDRATING SERUM",
    price: 3400,
    image: "image/111.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },

  {
    id: 140,
    name: "GLOWING SNAIL CREAM",
    price: 3360,
    image: "image/112.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 141,
    name: "COLLAGEN FACIAL SERUM",
    price: 2800,
    image: "image/113.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 142,
    name: "MEDISPHERE SKINCARE COLLAGEN CAPSULE CREAM",
    price: 3350,
    image: "image/114.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 143,
    name: "THE NATURAL CLINIC FACE SERUM",
    price: 2800,
    image: "image/115.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },

  {
    id: 144,
    name: "FACEFACTS CERAMIDE REPAIRING SERUM CREAM",
    price: 2000,
    image: "image/116.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 145,
    name: "FACEFACTS CERAMIDE MOISTURISING GEL CREAM",
    price: 2300,
    image: "image/117.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 146,
    name: "HYALURONIC DEEP MOISTURE SERUM",
    price: 2600,
    image: "image/118.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 147,
    name: "VITAMIN C BRIGHTENING SERUM",
    price: 2600,
    image: "image/119.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },

  {
    id: 148,
    name: "SKIN TECHNIQUES GOLD COLLAGEN SERUM",
    price: 2600,
    image: "image/120.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 149,
    name: "SALICYLIC ACID INTENSE SERUM",
    price: 2800,
    image: "image/121.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },


  {
    id: 150,
    name: "REVOLUTION SKIN HYALURONIC ACID",
    price: 2600,
    image: "image/122.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },

  {
    id: 151,
    name: "GOLD + VEGAN COLLAGEN FIRMING SERUM",
    price: 2600,
    image: "image/123.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },

  {
    id: 152,
    name: "COOL mint Mouth Wash",
    price: 1350,
    image: "image/124.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 153,
    name: "FRESH mint Mouth Wash",
    price: 1350,
    image: "image/125.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },


  {
    id: 154,
    name: "Niacinamide Blemish Recovery Serum",
    price: 2600,
    image: "image/126.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 155,
    name: "LISTERINE FLAVOURS SPEARMINT mouth wash",
    price: 1800,
    image: "image/127.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },

  {
    id: 156,
    name: "BREATH SPRAY Dental Care",
    price: 1300,
    image: "image/128.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },


  {
    id: 157,
    name: "Vaseline lip Therapy",
    price: 800,
    image: "image/129.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },


  {
    id: 158,
    name: "DOVE beauty Cream bar",
    price: 500,
    image: "image/130.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 159,
    name: "SIMPLE PURE soap for sensitive skin",
    price: 800,
    image: "image/131.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },

  {
    id: 160,
    name: "Sensitive anti-perspirant 48hr Protection",
    price: 1670,
    image: "image/132.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 161,
    name: "ROCK FACE ANTI-PERSPIRANT deodorant 48hr Protection",
    price: 1800,
    image: "image/133.jpeg",
    description: `<p>Stay fresh and confident all day with this long-lasting deodorant, offering superior protection against odor and wetness.</p><br><p><strong>Primary Uses:</strong> Apply to underarms for all-day freshness and a subtle, clean scent.</p>`
  },


  {
    id: 162,
    name: "AIR FRESHNER",
    price: 1240,
    image: "image/134.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 163,
    name: "LOREAL PARIS WRINKLE EXPERT Anti-wrinkle Strengthening Care Day 65+",
    price: 3500,
    image: "image/135.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 164,
    name: "ULTA HYDRATION HAND CREAM",
    price: 1100,
    image: "image/500.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },

  {
    id: 165,
    name: "LACURA INTENSIVE HAND CREAM",
    price: 1000,
    image: "image/501.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 166,
    name: "BIO GLOW HAND CREAM ROSE",
    price: 1100,
    image: "image/502.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  }, {
    id: 167,
    name: "NOURISHING HAND CREAM ORGAN OIL",
    price: 1100,
    image: "image/503.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },

  {
    id: 168,
    name: "NULAN Q10 ENZYM HAND CREAM",
    price: 1300,
    image: "image/504.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 169,
    name: "MANGO HAND CREAM MOISTURIZING",
    price: 1100,
    image: "image/505.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 170,
    name: "CIEN HAND CREAM Q10",
    price: 1300,
    image: "image/506.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },

  {
    id: 171,
    name: "CIEN HAND CREAM MOISTURIZING",
    price: 1200,
    image: "image/507.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 172,
    name: "LACURA MOISTURISING HAND CREAM",
    price: 1100,
    image: "image/508.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 173,
    name: "FLOELLA CONCENTRATED DISINFECTANT",
    price: 1650,
    image: "image/509.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 174,
    name: "ZIFLORA CONCENTRATED DISINFECTANT",
    price: 1870,
    image: "image/510.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },


  {
    id: 175,
    name: "ANTI FUNGAL FOOT POWDER",
    price: 1650,
    image: "image/511.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  }, {
    id: 176,
    name: "FOOT CARE",
    price: 1350,
    image: "image/512.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 177,
    name: "HAND CREAM REDUCING BALM FOOT CARE",
    price: 1100,
    image: "image/513.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 178,
    name: "ROUGH SKIN REMOVER FOOT CARE",
    price: 1350,
    image: "image/514.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 179,
    name: "INTENSIVE FOOT CREAM",
    price: 1200,
    image: "image/515.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },

  {
    id: 180,
    name: "SOFTENING FOOT LOTION FOOT CARE",
    price: 1050,
    image: "image/516.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },


  {
    id: 181,
    name: "SOAP & GLORY BRIGHTENING SHEET MASK",
    price: 700,
    image: "image/517.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },
  {
    id: 182,
    name: "CIEN MOISTURISING & RELAXING SHEET MASK",
    price: 500,
    image: "image/518.jpeg",
    description: `<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>`
  },

  {
    id: 183,
    name: "HYDRO BOOST TISUE MASK",
    price: 500,
    image: "image/519.jpeg",
    description: `<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>`
  },


  {
    id: 184,
    name: "PEACH&GINGER SMOOTHING (SANTA PRINTED SHEET MASK)",
    price: 800,
    image: "image/520.jpeg",
    description: `<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>`
  },
  {
    id: 185,
    name: "SKINACADEMY INK'D TATOO CARE",
    price: 2280,
    image: "image/521.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 186,
    name: "RASP BERRY FLAVOUR VITAMIN C",
    price: 2500,
    image: "image/522.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },


  {
    id: 187,
    name: "EA45 DAILY CARE RICH CREAM",
    price: 3000,
    image: "image/523.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 188,
    name: "COCOA BUTTER FORMULA BODY OIL",
    price: 1350,
    image: "image/525.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },

  {
    id: 189,
    name: "PEEL OFF MASK WITH CHARCOAL",
    price: 2100,
    image: "image/527.jpeg",
    description: `<p>Exfoliate dead skin cells and reveal a smoother, brighter complexion with this gentle yet effective formula.</p><br><p><strong>Primary Uses:</strong> Apply to skin as directed to polish, renew your skin texture, and unclog pores.</p>`
  },


  {
    id: 190,
    name: "GARNIER PURE ACTIVE 3 IN 1 CHARCOAL",
    price: 2200,
    image: "image/528.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 191,
    name: "GRACE & STELLA FACE MASK",
    price: 1630,
    image: "image/529.jpeg",
    description: `<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>`
  },

  {
    id: 192,
    name: "LACURA MARINE MASK",
    price: 2200,
    image: "image/530.jpeg",
    description: `<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>`
  },
  {
    id: 193,
    name: "GARNIER VITAMIN C",
    price: 2600,
    image: "image/524.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 194,
    name: "SANDAL WOOD & VETIVER",
    price: 3200,
    image: "image/600.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 195,
    name: "SEBA MED MOISTURISING BODY LOTION",
    price: 3300,
    image: "image/601.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 196,
    name: "FEMININE SPRAY",
    price: 1800,
    image: "image/602.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 197,
    name: "DAZZLE MASCARA",
    price: 1550,
    image: "image/603.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 198,
    name: "DAZZLE LIP GLOSS",
    price: 1050,
    image: "image/604.jpeg",
    description: `<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>`
  },
  {
    id: 199,
    name: "DAZZLE LIPSTICK",
    price: 800,
    image: "image/605.jpeg",
    description: `<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>`
  },
  {
    id: 200,
    name: "LIP SPLASH",
    price: 1200,
    image: "image/606.jpeg",
    description: `<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>`
  },
  {
    id: 201,
    name: "NUDE LON LIPSTICK",
    price: 1850,
    image: "image/607.jpeg",
    description: `<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>`
  },
  {
    id: 202,
    name: "SAFRON LIPSTICK",
    price: 600,
    image: "image/608.jpeg",
    description: `<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>`
  },
  {
    id: 203,
    name: "BUTTER GLOSS",
    price: 1300,
    image: "image/609.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },
  {
    id: 204,
    name: "LIP GLOSS",
    price: 800,
    image: "image/610.jpeg",
    description: `<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>`
  },
  {
    id: 205,
    name: "LIP CARE BALM",
    price: 1000,
    image: "image/611.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 206,
    name: "DERMARVIO LIP BALM",
    price: 700,
    image: "image/612.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 207,
    name: "DERMAVIO LIP BALM",
    price: 700,
    image: "image/613.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 208,
    name: "SECRET ADMIRER LIP BALM",
    price: 700,
    image: "image/614.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 209,
    name: "CIEN CARING LIP BALM",
    price: 700,
    image: "image/615.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 210,
    name: "CIEN CARING LIP BALM",
    price: 1000,
    image: "image/616.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 211,
    name: "NIVEA CARING LIP BALM",
    price: 600,
    image: "image/617.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 212,
    name: "THE MASCARA REVOLUTION",
    price: 1550,
    image: "image/618.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 213,
    name: "INTENSIFY LASH LIFTING MASCARA",
    price: 1400,
    image: "image/619.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 214,
    name: "AMOR GOLDEN ELIXIR",
    price: 1800,
    image: "image/620.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 215,
    name: "CERAMIDE REPLENISHING EYE CREAM",
    price: 1460,
    image: "image/621.jpeg",
    description: `<p>Revitalize your under-eye area with these cooling and brightening eye patches, designed to reduce puffiness and dark circles.</p><br><p><strong>Primary Uses:</strong> Apply under the eyes to refresh, hydrate, and brighten tired-looking skin.</p>`
  },
  {
    id: 216,
    name: "CERAMIDE REPAIRING SERUM CREAM",
    price: 2000,
    image: "image/622.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 217,
    name: "CERAMIDE MOISTURISING GEL CREAM",
    price: 2300,
    image: "image/623.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 218,
    name: "REVOLUTION SKIN HYALURONIC ACID SERUM",
    price: 2600,
    image: "image/624.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 219,
    name: "GOLD VEGAN COLLAGEN FIRMING SERUM",
    price: 2600,
    image: "image/625.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 220,
    name: "NIACINAMIDE BLEMISH RECOVERY SERUM",
    price: 2600,
    image: "image/626.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 221,
    name: "CHERRY BLISS RADIANCE GLOW MIST",
    price: 2260,
    image: "image/627.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 222,
    name: "CERAMIDE NOURISHING BODY CREAM",
    price: 2600,
    image: "image/628.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 223,
    name: "BRAZILIAN GLOW BODY BUTTER",
    price: 2300,
    image: "image/629.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },
  {
    id: 224,
    name: "INTENSELY HYDRATING OVERNIGHT RECOVERY BODY CREAM",
    price: 2350,
    image: "image/630.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 225,
    name: "SANCTUARY SPA BODY BUTTER",
    price: 2500,
    image: "image/631.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },
  {
    id: 226,
    name: "BREATH SPRAY DENTAL CARE",
    price: 1300,
    image: "image/632.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 227,
    name: "GARNIAR CERAMIDE NOURISHING BODY CREAM",
    price: 2600,
    image: "image/633.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 228,
    name: "TED BAKER JASMINE & LIME BLOSSOM BODY SPRAY",
    price: 4650,
    image: "image/634.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 229,
    name: "BOUM CANDY LAND PERFUME",
    price: 5800,
    image: "image/635.jpeg",
    description: `<p>Experience a captivating and long-lasting scent that leaves a memorable, elegant impression wherever you go.</p><br><p><strong>Primary Uses:</strong> Spray onto pulse points such as wrists and neck for a beautifully balanced, all-day fragrance.</p>`
  },
  {
    id: 230,
    name: "GLOW VANILLA ALMOND PERFUME MIST",
    price: 2500,
    image: "image/636.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 231,
    name: "SO...? UNIQUE PERFUME",
    price: 1600,
    image: "image/637.jpeg",
    description: `<p>Experience a captivating and long-lasting scent that leaves a memorable, elegant impression wherever you go.</p><br><p><strong>Primary Uses:</strong> Spray onto pulse points such as wrists and neck for a beautifully balanced, all-day fragrance.</p>`
  },
  {
    id: 232,
    name: "ANTI-AGING +MOISTURE INTENSE SERUM",
    price: 2800,
    image: "image/638.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 233,
    name: "CIEN VITAMIN C GLOW SERUM",
    price: 2800,
    image: "image/639.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 234,
    name: "NULAB FEELIN' BLISS ANTI-PERSPIRANT",
    price: 550,
    image: "image/640.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 235,
    name: "LACURA MEN SENSITIVE ANTI-PERSPIRANT DEODORANT",
    price: 550,
    image: "image/641.jpeg",
    description: `<p>Stay fresh and confident all day with this long-lasting deodorant, offering superior protection against odor and wetness.</p><br><p><strong>Primary Uses:</strong> Apply to underarms for all-day freshness and a subtle, clean scent.</p>`
  },
  {
    id: 236,
    name: "ALPHA ARBUTIN SOAP VITAMIN E",
    price: 1500,
    image: "image/642.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 237,
    name: "LACURA SHIMMER HYDRATING FACIAL MIST",
    price: 2350,
    image: "image/643.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 238,
    name: "HOT CLOTH CEANSER WITH VITAMIN C",
    price: 2850,
    image: "image/644.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 239,
    name: "LACURA ORIGINAL HOT CLOTH CLEANSER",
    price: 2850,
    image: "image/645.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },
  {
    id: 240,
    name: "REVOLUTION SKIN HYALURONIC ACID SERUM",
    price: 2600,
    image: "image/646.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 241,
    name: "INTENSELY HYDRATING OVERNIGHT RECOVERY BODY CREAM",
    price: 2350,
    image: "image/647.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 242,
    name: "KYRA ALPHA ARBUTIN RICE FERMENT BOOST POWDER",
    price: 500,
    image: "image/648.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },
  {
    id: 243,
    name: "FEMFRESH ACTIVE DEODORANT",
    price: 2200,
    image: "image/649.jpeg",
    description: `<p>Stay fresh and confident all day with this long-lasting deodorant, offering superior protection against odor and wetness.</p><br><p><strong>Primary Uses:</strong> Apply to underarms for all-day freshness and a subtle, clean scent.</p>`
  },
  {
    id: 244,
    name: "CLINICAL FORMULATIONS",
    price: 3000,
    image: "image/A.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 245,
    name: "SOMEBY MI",
    price: 2600,
    image: "image/B.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 246,
    name: "LOREAL PARIS BRIGHT REVEAL",
    price: 3300,
    image: "image/C.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 247,
    name: "ADVANCED SNAIL 92 ALL IN ONE CREAM",
    price: 3200,
    image: "image/D.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 248,
    name: "HYALURONIC ACID INTENSIVE CREAM",
    price: 3200,
    image: "image/E.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 249,
    name: "BRIGHTENING CARE",
    price: 3200,
    image: "image/F.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 250,
    name: "SEOUL 1988",
    price: 3200,
    image: "image/G.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 251,
    name: "CENTELLA",
    price: 3200,
    image: "image/H.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 252,
    name: "ABIB DARK SPORT SERUM",
    price: 3000,
    image: "image/I.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 253,
    name: "SOMEBYMI",
    price: 3000,
    image: "image/K.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 254,
    name: "SOMEBYMI",
    price: 2800,
    image: "image/L.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 255,
    name: "GALACTOMYSES",
    price: 2800,
    image: "image/M.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 256,
    name: "RELIEF CREAM MIST",
    price: 3200,
    image: "image/N.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 257,
    name: "CENTELLA",
    price: 3200,
    image: "image/O.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 258,
    name: "CENTELLA",
    price: 3200,
    image: "image/P.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 259,
    name: "RELIEF CREAM MIST",
    price: 2400,
    image: "image/Q.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 260,
    name: "DARK SPORT CORRECTING GLOW",
    price: 3000,
    image: "image/R.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 261,
    name: "YOUTHFULL EYE SERUM",
    price: 2500,
    image: "image/S.jpeg",
    description: `<p>Revitalize your under-eye area with these cooling and brightening eye patches, designed to reduce puffiness and dark circles.</p><br><p><strong>Primary Uses:</strong> Apply under the eyes to refresh, hydrate, and brighten tired-looking skin.</p>`
  },
  {
    id: 262,
    name: "PURITO MIGHTY BAMBOO PANTHENOL",
    price: 3200,
    image: "image/T.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 263,
    name: "SEOUL 1988 RETINAL LIPOSOME",
    price: 3000,
    image: "image/U.jpeg",
    description: `<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>`
  },
  {
    id: 264,
    name: "SEOUL 1988SUNPINE TREE CERAMIDE",
    price: 3200,
    image: "image/V.jpeg",
    description: `<p>Protect your skin from harmful UVA and UVB rays with this lightweight, non-greasy sunscreen.</p><br><p><strong>Primary Uses:</strong> Apply generously 15 minutes before sun exposure to prevent sunburn and premature skin aging.</p>`
  },
  {
    id: 265,
    name: "MEDICUBE COLLAGEN NIGHT CREAM",
    price: 3200,
    image: "image/W.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 266,
    name: "MEDICUBE COLLAGEN JELLY CREAM",
    price: 3600,
    image: "image/X.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },
  {
    id: 267,
    name: "RETINAL SHOT TIGHTENING BOOSTER",
    price: 2800,
    image: "image/Y.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 268,
    name: "AQUAPHOR",
    price: 3600,
    image: "image/Z.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 269,
    name: "EUCERINE ORIGINAL HEALING CREAM",
    price: 3500,
    image: "image/ZA.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 270,
    name: "OLAY VITAMIN C",
    price: 3600,
    image: "image/ZE.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  },
  {
    id: 271,
    name: "PALMER COCOA BUTTER FORMULA",
    price: 2800,
    image: "image/ZI.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },

  {
    id: 272,
    name: "COCOA BUTTER FORMULA FIRMING BUTTER",
    price: 2300,
    image: "image/ZO.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },
  {
    id: 273,
    name: "SKIN SUCCESS FADE MILK",
    price: 2200,
    image: "image/ZU.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 274,
    name: "24H MOISTURE BODY LOTION",
    price: 3300,
    image: "image/SA.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 275,
    name: "MEDIX 5.5",
    price: 4300,
    image: "image/SE.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 276,
    name: "JERGENS SKIN LIGHTENING",
    price: 3200,
    image: "image/SI.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 277,
    name: "SUDO CREAM ANTISEPTIC HEALING CREAM",
    price: 1450,
    image: "image/SO.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 278,
    name: "EUCERIN ANTI WRINKLE",
    price: 3500,
    image: "image/SU.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 279,
    name: "ULTRA DERM HAND CREAM",
    price: 1200,
    image: "image/BA.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 280,
    name: "AQUAPHOR HEALING OINTMENT",
    price: 1600,
    image: "image/BE.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },

  {
    id: 281,
    name: "MEDICUBE NIACINEMIDE 15 CERUM",
    price: 3000,
    image: "image/BI.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },



  {
    id: 282,
    name: "ANUA HEARTLEAF 77%",
    price: 3200,
    image: "image/BO.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 283,
    name: "Balea 5in1 Protection Anti-Transpirant",
    price: 650,
    image: "image/01.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 284,
    name: "AVEO Sensitiv Rasierschaum",
    price: 850,
    image: "image/02.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 285,
    name: "Oh So Heavenly Anti-Perspirant",
    price: 650,
    image: "image/03.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 286,
    name: "Mitchum Triple Odour Protection Anti-Perspirant",
    price: 650,
    image: "image/04.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 287,
    name: "L'Oreal True Match Foundation",
    price: 2200,
    image: "image/05.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },
  {
    id: 288,
    name: "Fenty Beauty Gloss Bomb",
    price: 1800,
    image: "image/06.jpeg",
    description: `<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>`
  },
  {
    id: 289,
    name: "Maybelline Super Stay Active Wear 30H Foundation",
    price: 2400,
    image: "image/07.jpeg",
    description: `<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>`
  },
  {
    id: 290,
    name: "ISANA Cremedusche Shower Gell",
    price: 900,
    image: "image/08.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },
  {
    id: 291,
    name: "Balea Cremedusche Shower Gell",
    price: 900,
    image: "image/09.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },
  {
    id: 292,
    name: "Balea MEN Duschgel",
    price: 850,
    image: "image/010.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },
  {
    id: 293,
    name: "ISANA MEN Duschgel",
    price: 850,
    image: "image/011.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },
  {
    id: 294,
    name: "ISANA MEN Parfum Deodorant Body Appeal",
    price: 850,
    image: "image/012.jpeg",
    description: `<p>Stay fresh and confident all day with this long-lasting deodorant, offering superior protection against odor and wetness.</p><br><p><strong>Primary Uses:</strong> Apply to underarms for all-day freshness and a subtle, clean scent.</p>`
  },
  {
    id: 295,
    name: "ISANA Handcreme Grüne Olive",
    price: 850,
    image: "image/013.jpeg",
    description: `<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>`
  },
  {
    id: 296,
    name: "Aveeno Skin Relief Body Oil Spray",
    price: 3200,
    image: "image/014.jpeg",
    description: `<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>`
  },
  {
    id: 297,
    name: "facefacts Ceramide Blemish Gel Moisturiser",
    price: 2650,
    image: "image/015.jpeg",
    description: `<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>`
  },
  {
    id: 298,
    name: "facefacts Gel Serum Illuminates + Smooths",
    price: 3000,
    image: "image/016.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 299,
    name: "Cien Q10 Intense Tagespflege",
    price: 3200,
    image: "image/017.jpeg",
    description: `<p>Protect your skin from harmful UVA and UVB rays with this lightweight, non-greasy sunscreen.</p><br><p><strong>Primary Uses:</strong> Apply generously 15 minutes before sun exposure to prevent sunburn and premature skin aging.</p>`
  },
  {
    id: 300,
    name: "facefacts Salicylic Acid Serum",
    price: 2800,
    image: "image/018.jpeg",
    description: `<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>`
  },
  {
    id: 301,
    name: "gisou honey infused lip oil",
    price: 2000,
    image: "image/019.jpeg",
    description: `<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>`
  },
  {
    id: 302,
    name: "Fresh & GLOW Anti-aging 50+ Moisture Sunscreen",
    price: 2200,
    image: "image/020.jpeg",
    description: `<p>Protect your skin from harmful UVA and UVB rays with this lightweight, non-greasy sunscreen.</p><br><p><strong>Primary Uses:</strong> Apply generously 15 minutes before sun exposure to prevent sunburn and premature skin aging.</p>`
  },
  {
    id: 303,
    name: "Malibu 50 SPF Lotion High Protection",
    price: 2500,
    image: "image/021.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 304,
    name: "Sundance After Sun Lotion",
    price: 1650,
    image: "image/022.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 305,
    name: "Balea Leichte Bodylotion",
    price: 1350,
    image: "image/023.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 306,
    name: "ISANA Bodylotion Aloe Vera",
    price: 1350,
    image: "image/024.jpeg",
    description: `<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>`
  },
  {
    id: 307,
    name: "ISANA Straffende Bodylotion Q10 + Vitamin C",
    price: 1550,
    image: "image/025.jpeg",
    description: `<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>`
  }
];

const productsGrid = document.getElementById("products-grid");
const featuredProductsGrid = document.getElementById("featured-products-grid");
const featuredProductIds = [1, 2, 3, 5, 14, 23, 7, 10, 16];
const productSearchInput = document.getElementById("product-search-input");

let cart = JSON.parse(localStorage.getItem("cart")) || {};

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCheckoutLinkCount();
}

function getCartItemCount() {
  return Object.values(cart).reduce((total, item) => total + (item.qty || 0), 0);
}

function updateCheckoutLinkCount() {
  const checkoutLink = document.getElementById("checkout-link");
  if (!checkoutLink) return;
  const totalItems = getCartItemCount();
  checkoutLink.textContent = totalItems > 0 ? `Checkout (${totalItems})` : "Checkout";
}

function increaseQty(id, name, price, image) {
  if (!cart[id]) {
    cart[id] = { id, name, price, image, qty: 0 };
  }

  cart[id].qty += 1;
  saveCart();
  updateUI(id);
}

function decreaseQty(id) {
  if (!cart[id]) return;

  cart[id].qty -= 1;

  if (cart[id].qty <= 0) {
    delete cart[id];
  }

  saveCart();
  updateUI(id);
}

function updateUI(id) {
  const cards = document.querySelectorAll(`[data-id="${id}"]`);
  if (!cards.length) return;

  const qty = cart[id] ? cart[id].qty : 0;

  cards.forEach(card => {
    const qtyEl = card.querySelector(".qty");
    const addBtn = card.querySelector(".add-cart-btn");
    const decBtn = card.querySelector(".dec-btn");

    if (qtyEl) qtyEl.textContent = qty;
    if (addBtn) {
      addBtn.textContent = qty > 0 ? "+" : "Add to Cart";
      addBtn.classList.toggle("plus-btn", qty > 0);
      addBtn.title = qty > 0 ? "Add more" : "Add to cart";
    }
    if (decBtn) decBtn.disabled = qty === 0;
  });
}

// --- Smart Category & Modal Logic ---
function getCategory(name) {
  const n = name.toLowerCase();
  if ((n.includes("men") || n.includes("homme")) && !n.includes("women")) return "men";
  if (n.includes("kid") || n.includes("baby") || n.includes("child")) return "kids";
  return "women"; // Default for a beauty shop
}

// Modal Elements
const productModal = document.getElementById("product-modal");
const closeModalBtn = document.querySelector(".close-modal");

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    productModal.classList.remove("show");
  });
}
window.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.classList.remove("show");
  }
});

function openModal(product) {
  if (!productModal) return;
  const modalImg = document.getElementById("modal-image");
  modalImg.src = product.image;
  modalImg.alt = product.name;
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-price").textContent = "Ksh " + product.price;

  // Display the static description from products.js
  const article = product.description ? product.description : "Experience luxury skincare designed to leave you feeling confident, refreshed, and beautifully authentic.";
  document.getElementById("modal-article").innerHTML = article;

  const qty = cart[product.id] ? cart[product.id].qty : 0;
  const cartControls = document.getElementById("modal-cart-controls");
  cartControls.innerHTML = `
    <button class="dec-btn" onclick="decreaseQty(${product.id}); openModal(products.find(p => p.id === ${product.id}))" ${qty === 0 ? "disabled" : ""}>-</button>
    <span class="qty">${qty}</span>
    <button class="add-cart-btn ${qty > 0 ? "plus-btn" : ""}" onclick='increaseQty(${product.id}, ${JSON.stringify(product.name).replace(/'/g, "&#39;")}, ${product.price}, "${product.image}"); openModal(products.find(p => p.id === ${product.id}))'>
      ${qty === 0 ? "Add to Cart" : "+"}
    </button>
  `;

  productModal.classList.add("show");
}

function renderProductCard(product, container) {
  const qty = cart[product.id] ? cart[product.id].qty : 0;
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.setAttribute("data-id", product.id);
  productCard.setAttribute("data-category", getCategory(product.name));

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("product-image-wrapper", "clickable-card");
  imageWrapper.innerHTML = `<img src="${product.image}" alt="${product.name.replace(/"/g, '&quot;')}" loading="lazy">`;

  const title = document.createElement("h3");
  title.classList.add("clickable-card");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = " @ Ksh " + product.price;

  const cartControls = document.createElement("div");
  cartControls.classList.add("cart-controls");
  cartControls.innerHTML = `
    <button class="dec-btn" onclick="decreaseQty(${product.id})" ${qty === 0 ? "disabled" : ""}>-</button>
    <span class="qty">${qty}</span>
    <button class="add-cart-btn ${qty > 0 ? "plus-btn" : ""}" onclick='increaseQty(${product.id}, ${JSON.stringify(product.name).replace(/'/g, "&#39;")}, ${product.price}, "${product.image}")'>
      ${qty === 0 ? "Add to Cart" : "+"}
    </button>
  `;

  // Attach safe click listeners to redirect to the new product page using localStorage & URL query for SEO
  imageWrapper.addEventListener("click", () => {
    localStorage.setItem('selectedProductId', product.id);
    window.location.href = `product.html?id=${product.id}`;
  });
  title.addEventListener("click", () => {
    localStorage.setItem('selectedProductId', product.id);
    window.location.href = `product.html?id=${product.id}`;
  });

  productCard.appendChild(imageWrapper);
  productCard.appendChild(title);
  productCard.appendChild(price);
  productCard.appendChild(cartControls);

  container.appendChild(productCard);
}

function displayProducts(filteredProducts = products) {
  if (!productsGrid) return;
  productsGrid.innerHTML = "";
  filteredProducts.forEach(product => renderProductCard(product, productsGrid));
  updateCheckoutLinkCount();
  injectProductSchema(filteredProducts.slice(0, 20)); // Limit schema to top 20 to avoid massive payload
}

function injectProductSchema(schemaProducts) {
  let existingScript = document.getElementById('dynamic-product-schema');
  if (existingScript) existingScript.remove();

  const schemaData = schemaProducts.map(p => ({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": p.name,
    "image": "https://hellenacosmetics.co.ke/" + p.image,
    "description": p.description ? p.description.replace(/<[^>]*>?/gm, '') : "Premium cosmetic and skincare product",
    "offers": {
      "@type": "Offer",
      "url": "https://hellenacosmetics.co.ke/products.html",
      "priceCurrency": "KES",
      "price": p.price,
      "availability": "https://schema.org/InStock"
    }
  }));

  const script = document.createElement('script');
  script.id = 'dynamic-product-schema';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
}

// Category Filter Logic
const catButtons = document.querySelectorAll(".cat-btn");
let currentCategory = "all";
let currentSearch = "";

function applyFilters() {
  const filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(currentSearch);
    const matchesCategory = currentCategory === "all" || getCategory(product.name) === currentCategory;
    return matchesSearch && matchesCategory;
  });
  displayProducts(filtered);
}

if (catButtons.length > 0) {
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      applyFilters();
    });
  });
}

if (productSearchInput) {
  productSearchInput.addEventListener("input", () => {
    currentSearch = productSearchInput.value.trim().toLowerCase();
    applyFilters();
  });
}

function displayFeaturedProducts() {
  if (!featuredProductsGrid) return;
  featuredProductsGrid.innerHTML = "";
  const featuredProducts = products.filter(product => featuredProductIds.includes(product.id));
  featuredProducts.forEach(product => renderProductCard(product, featuredProductsGrid));
  updateCheckoutLinkCount();
}

function fixProductDescriptions() {
  products.forEach(p => {
    // Only overwrite if it's the default generic fallback description
    if (p.description && !p.description.includes("premium cosmetic essential")) {
      return; // Skip overwriting because a custom description exists
    }

    const n = p.name.toLowerCase();

    // Supplements & Edibles ALWAYS take top priority
    if (['gumm', 'supplement', 'vitamin', 'glucosamine', 'capsule', 'omega', 'health', 'tablet', 'pill'].some(k => n.includes(k)) && !n.includes('vitamin c serum') && !n.includes('vitamin e body')) {
      p.description = '<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>';
    }
    // Deodorants
    else if (['deodorant', 'antiperspirant', 'roll on', 'roll-on', 'deo'].some(k => n.includes(k))) {
      p.description = '<p>Stay fresh and confident all day with this long-lasting deodorant, offering superior protection against odor and wetness.</p><br><p><strong>Primary Uses:</strong> Apply to underarms for all-day freshness and a subtle, clean scent.</p>';
    }
    // Mists & Sprays
    else if (['mist', 'spray', 'spritz', 'setting'].some(k => n.includes(k))) {
      p.description = '<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>';
    }
    // Oils & Butters
    else if (['oil', 'butter', 'stretch mark', 'vaseline', 'jelly', 'petroleum'].some(k => n.includes(k))) {
      p.description = '<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>';
    }
    // Lotions & Creams
    else if (['lotion', 'cream', 'moisturizer', 'balm'].some(k => n.includes(k))) {
      p.description = '<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>';
    }
    // Serums
    else if (['serum', 'acid', 'retinol', 'niacinamide', 'hyaluronic', 'snail', 'mucin'].some(k => n.includes(k))) {
      p.description = '<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>';
    }
    // Cleansers
    else if (['cleanser', 'wash', 'soap', 'gel', 'foam', 'micellar'].some(k => n.includes(k))) {
      p.description = '<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>';
    }
    // Scrubs & Toners
    else if (['scrub', 'exfoliat', 'peel', 'toner'].some(k => n.includes(k))) {
      p.description = '<p>Exfoliate dead skin cells and reveal a smoother, brighter complexion with this gentle yet effective formula.</p><br><p><strong>Primary Uses:</strong> Apply to skin as directed to polish, renew your skin texture, and unclog pores.</p>';
    }
    // Hair care
    else if (['shampoo', 'conditioner', 'hair', 'leave in', 'leave-in', 'wig'].some(k => n.includes(k))) {
      p.description = '<p>Nourish and strengthen your hair from root to tip with this premium hair care formula designed for healthy, luscious locks.</p><br><p><strong>Primary Uses:</strong> Apply to hair, massage thoroughly, and style or rinse as directed for soft, manageable, and vibrant hair.</p>';
    }
    // Perfumes
    else if (['perfume', 'fragrance', 'cologne', 'scent', 'eau de'].some(k => n.includes(k))) {
      p.description = '<p>Experience a captivating and long-lasting scent that leaves a memorable, elegant impression wherever you go.</p><br><p><strong>Primary Uses:</strong> Spray onto pulse points such as wrists and neck for a beautifully balanced, all-day fragrance.</p>';
    }
    // Masks
    else if (['mask', 'masque'].some(k => n.includes(k))) {
      p.description = '<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>';
    }
    // Lips
    else if (['lip', 'gloss', 'lipstick'].some(k => n.includes(k))) {
      p.description = '<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>';
    }
    // Makeup
    else if (['palette', 'eyeshadow', 'powder', 'foundation', 'concealer', 'blush', 'makeup', 'primer'].some(k => n.includes(k))) {
      p.description = '<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>';
    }
    // Sunscreen
    else if (['sunscreen', 'spf', 'sun'].some(k => n.includes(k))) {
      p.description = '<p>Protect your skin from harmful UVA and UVB rays with this lightweight, non-greasy sunscreen.</p><br><p><strong>Primary Uses:</strong> Apply generously 15 minutes before sun exposure to prevent sunburn and premature skin aging.</p>';
    }
    // Default Fallback
    else {
      p.description = '<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>';
    }
  });
}
fixProductDescriptions();
displayProducts();
displayFeaturedProducts();