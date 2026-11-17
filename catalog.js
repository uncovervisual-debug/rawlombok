const rawProductsDatabase = [
    {
        id: "rinjani-summit",
        title: "Mount Rinjani Crater Rim & Summit Expedition",
        cluster: "east",
        badge: "Trekking & Volcano",
        duration: "4 Days / 3 Nights",
        rating: "4.9 (124)",
        priceVal: 3250000,
        priceStr: "IDR 3.250.000",
        shortDesc: "Conquer Indonesia's majestic volcano, camp above the clouds at Segara Anak lake rim, and witness an unforgettable sunrise.",
        images: [
            "./assets/images/destinations/east/rinjani/rinjani-summit-sunrise.jpg",
            "./assets/images/destinations/east/rinjani/rinjani-summit-sunrise1.jpg",
            "./assets/images/destinations/east/rinjani/rinjani-segara-anak-camp.jpg",
            "./assets/images/destinations/east/rinjani/rinjani-trail-savannah.jpg",
            "./assets/images/destinations/east/rinjani/rinjani-trail-savannah1.jpg",
            "./assets/images/destinations/east/rinjani/rinjani-trail-savannah2.jpg",
            "./assets/images/destinations/east/rinjani/rinjani-porter-team.jpg",
            "./assets/images/destinations/east/rinjani/rinjani-porter-team1.jpg"
        ],
        highlights: [
            "Professional licensed mountain guide and local porters from Sembalun village.",
            "High-quality camping gear provided: tents, thick sleeping mats, and warm sleeping bags.",
            "Nutritious, freshly prepared meals served hot on the mountain by our camp cooks.",
            "Breathtaking sunrise view from the 3,726m summit and turquoise crater lake."
        ],
        itinerary: [
            { day: "Day 1", title: "Sembalun Village to Crater Rim", desc: "Start early morning trek through savannah hills, steep ridges, arriving at Crater Rim for sunset." },
            { day: "Day 2", title: "Summit Attack & Segara Anak Lake", desc: "Pre-dawn summit push at 3:00 AM, descend to the crater lake and hot springs." },
            { day: "Day 3", title: "Lake to Senaru Crater Rim", desc: "Climb up to Senaru rim, enjoy panoramic views of the northern coast." },
            { day: "Day 4", title: "Senaru Rim Descent & Transfer", desc: "Descend through tropical rainforest, transfer back to your hotel." }
        ]
    },
    {
        id: "sembalun-highlands",
        title: "Sembalun Valley & Cultural Highland Safari",
        cluster: "east",
        badge: "Valley & Culture",
        duration: "2 Days / 1 Night",
        rating: "4.8 (48)",
        priceVal: 1750000,
        priceStr: "IDR 1.750.000",
        shortDesc: "Explore the lush agricultural plateau nestled at the foot of Rinjani, featuring strawberry farms, traditional villages, and rolling hills.",
        images: [
            "./assets/images/destinations/east/sembalun/east-sembalun.jpg",
            "./assets/images/destinations/east/sembalun/east-sembalun1.jpg"
        ],
        highlights: [
            "Scenic drives through volcanic agricultural valleys.",
            "Visit local organic farming and strawberry picking plots.",
            "Panoramic photography of surrounding hills and traditional hillside houses."
        ],
        itinerary: [
            { day: "Day 1", title: "Valley Arrival & Farm Exploration", desc: "Arrive in Sembalun, explore local farming communities and viewpoints." },
            { day: "Day 2", title: "Hill Sunrise & Return", desc: "Morning light over the valley, followed by local breakfast and transfer." }
        ]
    },
    {
        id: "kuta-mandalika-coast",
        title: "Kuta Mandalika & Tanjung Aan Coastal Odyssey",
        cluster: "center",
        badge: "Coastal & Beach",
        duration: "3 Days / 2 Nights",
        rating: "4.9 (86)",
        priceVal: 2400000,
        priceStr: "IDR 2.400.000",
        shortDesc: "Discover white sand curves, turquoise waters at Tanjung Aan, and modern coastal culture around Mandalika.",
        images: [
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan.jpg",
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan1.jpg",
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan2.jpg",
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan3.jpg",
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan4.jpg",
            "./assets/images/destinations/center/mandalika/center-mandalika.jpg"
        ],
        highlights: [
            "Relax on the pristine white sands of Tanjung Aan and Seger beach.",
            "Explore the scenic coastal curves of the Mandalika Special Economic Zone.",
            "Swimming and coastal leisure in crystal clear southern waters."
        ],
        itinerary: [
            { day: "Day 1", title: "Mandalika Circuit & Coastal Setup", desc: "Arrive in South Lombok, coastal drive, and sunset view." },
            { day: "Day 2", title: "Tanjung Aan Full Beach Experience", desc: "Swimming, relaxing, and drone photography spots along Tanjung Aan bays." },
            { day: "Day 3", title: "Souvenir & Departure", desc: "Final morning by the coast before heading out." }
        ]
    },
    {
        id: "sade-sasak-heritage",
        title: "Sade & Ende Indigenous Sasak Heritage",
        cluster: "center",
        badge: "Culture & Tradition",
        duration: "1 Day Trip",
        rating: "4.7 (73)",
        priceVal: 950000,
        priceStr: "IDR 950.000",
        shortDesc: "Step back in time at traditional Sasak weaving villages, witness live Presean stick-fighting exhibitions, and experience indigenous architecture.",
        images: [
            "./assets/images/destinations/center/sade/center-sade-kain.jpg",
            "./assets/images/destinations/center/sade/center-sade-presean.jpg"
        ],
        highlights: [
            "Guided walk through centuries-old traditional thatch-roof houses.",
            "Watch skilled local artisans weaving intricate traditional Lombok cloth (Kain Sasak).",
            "Experience cultural performances including the traditional Presean martial art."
        ],
        itinerary: [
            { day: "Day 1", title: "Sasak Village Immersive Tour", desc: "Full day exploring Sade and Ende villages, learning traditions, weaving, and stick fighting." }
        ]
    },
    {
        id: "selong-belanak-bay",
        title: "Selong Belanak Surf & Crescent Bay",
        cluster: "center",
        badge: "Surf & Relax",
        duration: "2 Days / 1 Night",
        rating: "4.8 (64)",
        priceVal: 1600000,
        priceStr: "IDR 1.600.000",
        shortDesc: "Unwind on the gentle sloping white sands of Selong Belanak, famous for beginner-friendly surf breaks and iconic buffalo afternoon walks.",
        images: [
            "./assets/images/destinations/center/selong-belanak/center-sekongbelanak.jpg"
        ],
        highlights: [
            "Ideal gentle waves for surfing lessons and water relaxation.",
            "Witness the iconic daily parade of water buffaloes crossing the beach at sunset.",
            "Fresh seafood dining right on the beachfront."
        ],
        itinerary: [
            { day: "Day 1", title: "Bay Arrival & Surf Session", desc: "Check-in, relax by the crescent bay, optional surf lesson." },
            { day: "Day 2", title: "Buffalo Sunset & Departure", desc: "Morning beach walk, coastal lunch, and transfer." }
        ]
    },
    {
        id: "gili-matra-snorkeling",
        title: "Gili Matra Islands Marine & Snorkeling Safari",
        cluster: "north",
        badge: "Marine & Island",
        duration: "2 Days / 1 Night",
        rating: "4.9 (110)",
        priceVal: 2100000,
        priceStr: "IDR 2.100.000",
        shortDesc: "Snorkel with sea turtles in crystal-clear turquoise waters across Gili Trawangan, Meno, and Air, surrounded by vibrant coral reefs.",
        images: [
            "./assets/images/destinations/north/snorkeling/gili-matra-snorkling.jpg",
            "./assets/images/destinations/north/snorkeling/gili-matra-snorkling1.jpg",
            "./assets/images/destinations/north/snorkeling/gili-matra-snorkling2.jpg",
            "./assets/images/destinations/north/snorkeling/gili-matra-snorkling3.jpg"
        ],
        highlights: [
            "Private boat charter for snorkeling at iconic turtle points and underwater statues.",
            "Crystal-clear visibility with vibrant marine life and coral gardens.",
            "Island-hop across the famous Gili Triad (Trawangan, Meno, Air)."
        ],
        itinerary: [
            { day: "Day 1", title: "North Coast Transfer & Island Hopping", desc: "Board private boat to Gili islands, afternoon snorkeling and sunset beach dinner." },
            { day: "Day 2", title: "Coral Reef Exploration & Return", desc: "Morning turtle spotting swim, island cycle, and mainland transfer." }
        ]
    },
    {
        id: "bukit-merese-sunset",
        title: "Bukit Merese Golden Hour & South Coast Ridge",
        cluster: "south",
        badge: "Scenic & Sunset",
        duration: "1 Day Trip",
        rating: "4.9 (95)",
        priceVal: 850000,
        priceStr: "IDR 850.000",
        shortDesc: "Hike the grassy rolling hills of Bukit Merese for panoramic vistas over hidden coves and breathtaking sunset oceans.",
        images: [
            "./assets/images/destinations/south/mereje/south-mereje1.jpg",
            "./assets/images/destinations/south/mereje/south-mereje2.jpg",
            "./assets/images/destinations/south/mereje/south-mereje3.jpg",
            "./assets/images/destinations/south/mereje/south-mereje4.jpg"
        ],
        highlights: [
            "Gentle hillside trek with sweeping 360-degree ocean views.",
            "Premier sunset photography spot overlooking Tanjung Aan and Batu Payung.",
            "Relaxed coastal atmosphere with local coconut vendors on the ridge."
        ],
        itinerary: [
            { day: "Day 1", title: "Afternoon Ridge Trek & Sunset", desc: "Depart late afternoon, walk the green ridge of Bukit Merese, and watch the sun dip into the Indian Ocean." }
        ]
    }
];