export interface Insurer {
  name: string;
  description: string;
  features: string[];
  rating: number;
  minPremium: string;
  specialties: string[];
}

export const insurers: Insurer[] = [
  {
    name: "Mariner",
    description:
      "Specialist marine insurer with over 40 years of experience in New Zealand waters. Mariner offers comprehensive yacht and boat insurance with expert claims handling and dedicated marine underwriters.",
    features: [
      "24/7 claims support",
      "Specialist marine underwriters",
      "Flexible coverage options",
      "New for old replacement",
      "Salvage rights included",
      "International coverage available",
    ],
    rating: 4.7,
    minPremium: "$400 p.a.",
    specialties: [
      "Yacht insurance",
      "Sailing vessels",
      "Offshore cruising",
      "Marine liability",
    ],
  },
  {
    name: "Nautilus Marine Insurance (NMI)",
    description:
      "Leading specialist in recreational marine insurance across New Zealand. NMI provides tailored policies for all vessel types with competitive premiums and responsive customer service.",
    features: [
      "Competitive rates",
      "Claim assessment within 48 hours",
      "Cover for racing yachts",
      "Accidental damage optional",
      "Agreed value policies",
      "No excess for third-party claims",
    ],
    rating: 4.6,
    minPremium: "$350 p.a.",
    specialties: [
      "Recreational boats",
      "Sailing yachts",
      "Racing coverage",
      "Jet ski insurance",
    ],
  },
  {
    name: "Tower Insurance",
    description:
      "Major NZ insurer offering comprehensive boat insurance across all vessel types. Tower combines competitive pricing with excellent customer support and straightforward claim processes.",
    features: [
      "Simple online quotes",
      "Accidental damage cover",
      "Third-party liability",
      "Towing and assistance",
      "Personal effects coverage",
      "Multi-policy discounts",
    ],
    rating: 4.4,
    minPremium: "$380 p.a.",
    specialties: [
      "Motorboats",
      "Recreational vessels",
      "Boat trailers",
      "Personal watercraft",
    ],
  },
  {
    name: "AMI",
    description:
      "Customer-focused insurance provider offering boat insurance with flexible coverage and competitive rates. AMI is known for straightforward policies and fast claim resolution.",
    features: [
      "Clear policy documents",
      "Flexible excess options",
      "Boat safety discounts",
      "Medical expenses cover",
      "Legal liability protection",
      "Online policy management",
    ],
    rating: 4.3,
    minPremium: "$360 p.a.",
    specialties: [
      "Small boats",
      "Day cruisers",
      "Fishing vessels",
      "Budget coverage",
    ],
  },
  {
    name: "Gallagher",
    description:
      "International insurance broker with extensive marine expertise in the NZ market. Gallagher specializes in complex marine risks and provides personalized insurance solutions.",
    features: [
      "Expert broker advice",
      "Commercial vessel coverage",
      "Charter boat insurance",
      "Agreed value options",
      "International claims support",
      "Bespoke policy design",
    ],
    rating: 4.7,
    minPremium: "$500 p.a.",
    specialties: [
      "Commercial vessels",
      "Charter boats",
      "Large yachts",
      "Complex risks",
    ],
  },
  {
    name: "Baileys Insurance",
    description:
      "Family-owned marine insurance specialist with deep knowledge of New Zealand boating. Baileys provides personal service and expert advice for all marine insurance needs.",
    features: [
      "Personal service",
      "Local expertise",
      "Agreed value marine",
      "Salvage rights",
      "Cover for all conditions",
      "Responsive claims team",
    ],
    rating: 4.5,
    minPremium: "$420 p.a.",
    specialties: [
      "Yacht insurance",
      "Classic boats",
      "High-value vessels",
      "Specialist covers",
    ],
  },
  {
    name: "NZI",
    description:
      "Major NZ insurance provider offering comprehensive marine coverage. NZI provides reliable yacht and boat insurance with strong claims support and competitive pricing.",
    features: [
      "Broad coverage options",
      "Accidental damage available",
      "Third-party liability",
      "Quick claim settlement",
      "Online adjustments",
      "Bundle discounts available",
    ],
    rating: 4.3,
    minPremium: "$370 p.a.",
    specialties: [
      "All vessel types",
      "Motor yachts",
      "Cruising boats",
      "Standard coverage",
    ],
  },
  {
    name: "Star Insurance",
    description:
      "Dedicated yacht insurance specialist focusing on quality cover and competitive premiums. Star offers comprehensive policies with expert support and flexible claim options.",
    features: [
      "Yacht specialist focus",
      "Sailing-specific covers",
      "Agreed value policies",
      "No excess offshore",
      "Racing yacht options",
      "Premium financing available",
    ],
    rating: 4.6,
    minPremium: "$450 p.a.",
    specialties: [
      "Sailing yachts",
      "Racing vessels",
      "Offshore coverage",
      "Cruising insurance",
    ],
  },
];
