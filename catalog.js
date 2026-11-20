const rawProductsDatabase = [
    {
        id: "rinjani-summit-2d1n",
        cluster: "east",
        badge: "Volcanic Expedition",
        title: "Mount Rinjani Crater Rim & Summit — 2D1N",
        duration: "2 Days / 1 Night",
        rating: "4.9",
        priceVal: 3200000,
        priceStr: "IDR 3.200.000",
        shortDesc: "Guided high-altitude trek through savannah trails, crater rim camp, and sunrise summit views with dedicated local mountain support.",
        images: [
            "./assets/images/destinations/east/rinjani/rinjani-summit-sunrise.webp",
            "./assets/images/destinations/east/rinjani/rinjani-summit-sunrise1.webp",
            "./assets/images/destinations/east/rinjani/rinjani-segara-anak-camp.webp",
            "./assets/images/destinations/east/rinjani/rinjani-trail-savannah.webp",
            "./assets/images/destinations/east/rinjani/rinjani-trail-savannah1.webp",
            "./assets/images/destinations/east/rinjani/rinjani-trail-savannah2.webp",
            "./assets/images/destinations/east/rinjani/rinjani-porter-team.webp",
            "./assets/images/destinations/east/rinjani/rinjani-porter-team1.webp"
        ],
        highlights: [
            "Licensed mountain guide and experienced porter team",
            "Savannah ascent, crater rim camp, and summit sunrise experience",
            "Structured pacing and mountain camp logistics"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Savannah Trail to Crater Rim Camp",
                desc: "Trek across open savannah and mountain ridges with full guide and porter support to camp."
            },
            {
                day: "Day 2",
                title: "Summit Sunrise & Descent",
                desc: "Early summit push for sunrise panoramas, return for breakfast, and descend safely."
            }
        ]
    },
    {
        id: "sembalun-highland-escape",
        cluster: "east",
        badge: "Highland & Views",
        title: "Sembalun Highland & Valley Escape",
        duration: "Full Day",
        rating: "4.8",
        priceVal: 950000,
        priceStr: "IDR 950.000",
        shortDesc: "Experience cool mountain air, sweeping highland views, and scenic valleys at the foot of Mount Rinjani.",
        images: [
            "./assets/images/destinations/east/sembalun/east-sembalun.webp",
            "./assets/images/destinations/east/sembalun/east-sembalun1.webp"
        ],
        highlights: [
            "Panoramic highland views across Sembalun",
            "Private transport and relaxed day pacing",
            "Ideal option for travelers seeking mountain scenery without multi-day trekking"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Sembalun Highland Exploration",
                desc: "Scenic drive into Sembalun, explore viewpoint spots and valley landscapes, and return comfortably."
            }
        ]
    },
    {
        id: "gili-matra-snorkeling",
        cluster: "north",
        badge: "Turquoise & Reefs",
        title: "Gili Islands Snorkeling & Reef Expedition",
        duration: "Full Day",
        rating: "4.8",
        priceVal: 1450000,
        priceStr: "IDR 1.450.000",
        shortDesc: "Explore clear waters and marine life across the Gili islands with flexible snorkeling stops and coastal time.",
        images: [
            "./assets/images/destinations/north/snorkeling/gili-matra-snorkeling.webp",
            "./assets/images/destinations/north/snorkeling/gili-matra-snorkeling1.webp",
            "./assets/images/destinations/north/snorkeling/gili-matra-snorkeling2.webp",
            "./assets/images/destinations/north/snorkeling/gili-matra-snorkeling3.webp"
        ],
        highlights: [
            "Multiple snorkeling spots around the Gilis",
            "Clear tropical water and marine scenery",
            "Private boat coordination and unhurried schedule"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Gili Snorkeling & Island Hopping",
                desc: "Boat departure to key snorkeling sites, time in the water, and island break before returning."
            }
        ]
    },
    {
        id: "sade-sasak-heritage",
        cluster: "center",
        badge: "Living Culture",
        title: "Sade Sasak Village, Weaving & Presean Heritage",
        duration: "Half / Full Day",
        rating: "4.9",
        priceVal: 750000,
        priceStr: "IDR 750.000",
        shortDesc: "Discover traditional Sasak architecture, handwoven textiles, and living cultural traditions like Presean.",
        images: [
            "./assets/images/destinations/center/sade/center-sade.webp",
            "./assets/images/destinations/center/sade/center-sade-kain.webp",
            "./assets/images/destinations/center/sade/center-sade-presean.webp"
        ],
        highlights: [
            "Authentic Sasak village setting and traditional compounds",
            "Insight into traditional woven cloth (kain) and local heritage",
            "Cultural context with local guidance"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Sasak Heritage & Traditional Crafts",
                desc: "Walk through Sade village, explore traditional weaving heritage, and learn about local cultural practices."
            }
        ]
    },
    {
        id: "mandalika-coastline-journey",
        cluster: "center",
        badge: "Coastal & Modern Hub",
        title: "Mandalika Coastal & Scenic Drive",
        duration: "Half / Full Day",
        rating: "4.8",
        priceVal: 800000,
        priceStr: "IDR 800.000",
        shortDesc: "Enjoy clean coastal roads, open ocean views, and easy access around the Mandalika area.",
        images: [
            "./assets/images/destinations/center/mandalika/center-mandalika.webp"
        ],
        highlights: [
            "Scenic coastal views around Mandalika",
            "Comfortable private vehicle transfers",
            "Easy to combine with nearby bays or cultural stops"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Mandalika Scenic Route",
                desc: "Explore the Mandalika coastal area at a relaxed pace with photo and viewpoint stops."
            }
        ]
    },
    {
        id: "selong-belanak-bay-escape",
        cluster: "center",
        badge: "Gentle Bay & Surf",
        title: "Selong Belanak Bay Day Experience",
        duration: "Half / Full Day",
        rating: "4.9",
        priceVal: 850000,
        priceStr: "IDR 850.000",
        shortDesc: "Spend a relaxed day by the sweeping curve of Selong Belanak—ideal for swimming, coastal walks, and beachside downtime.",
        images: [
            "./assets/images/destinations/center/selong-belanak/center-selongbelanak.webp"
        ],
        highlights: [
            "Wide, welcoming bay with calm coastal atmosphere",
            "Great for beginner surf, swimming, or relaxing by the shore",
            "Flexible private schedule"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Coastal Time at Selong Belanak",
                desc: "Arrive at Selong Belanak for beach time, ocean views, and a relaxed afternoon before heading back."
            }
        ]
    },
    {
        id: "tanjung-aan-bays-headlands",
        cluster: "center",
        badge: "Bays & Headlands",
        title: "Tanjung Aan Bays & Headland Views",
        duration: "Full Day",
        rating: "4.9",
        priceVal: 850000,
        priceStr: "IDR 850.000",
        shortDesc: "Explore turquoise waters, curved bays, and scenic coastal viewpoints around Tanjung Aan.",
        images: [
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan.webp",
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan1.webp",
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan2.webp",
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan3.webp",
            "./assets/images/destinations/center/tanjung-aan/center-tanjungaan4.webp"
        ],
        highlights: [
            "Multiple angles and coastal viewpoints around Tanjung Aan",
            "Clear turquoise water and dramatic headlands",
            "Private transport and flexible photo/rest stops"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Tanjung Aan Bays & Viewpoints",
                desc: "Explore the bays and headlands around Tanjung Aan with time for coastal walks and photography."
            }
        ]
    },
    {
        id: "mereje-secluded-south-coves",
        cluster: "south",
        badge: "Hidden Coves",
        title: "Mereje & Secluded Southern Coves",
        duration: "Full Day",
        rating: "4.9",
        priceVal: 1150000,
        priceStr: "IDR 1.150.000",
        shortDesc: "Venture into quieter southern coves and rugged coastal scenery for a slower, more private island experience.",
        images: [
            "./assets/images/destinations/south/mereje/south-mereje1.webp",
            "./assets/images/destinations/south/mereje/south-mereje2.webp",
            "./assets/images/destinations/south/mereje/south-mereje3.webp",
            "./assets/images/destinations/south/mereje/south-mereje4.webp"
        ],
        highlights: [
            "Quiet, less crowded southern cove atmosphere",
            "Distinctive coastal landscapes suited for slow travel and photography",
            "Private local routing and transport"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Secluded Southern Cove Exploration",
                desc: "Head to the southern coves around Mereje for tranquil coastal views, exploration, and a calm return."
            }
        ]
    }
];