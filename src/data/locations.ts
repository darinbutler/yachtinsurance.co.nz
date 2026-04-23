export interface Location {
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  boatingContext: string;
  coverageAdvice: string;
  localFacts: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const locations: Location[] = [
  {
    slug: "auckland",
    name: "Auckland",
    region: "Auckland",
    heroImage: "https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Auckland | Marine Cover",
    metaDescription: "Protect your boat in Auckland's busy harbours. Get comprehensive yacht and marine insurance tailored to Hauraki Gulf conditions.",
    intro: "Auckland is New Zealand's marine playground, home to hundreds of moored yachts and a thriving cruising community. The Waitemata Harbour, Hauraki Gulf, and countless inner harbour anchorages make Auckland a paradise for both casual weekend sailors and serious ocean cruisers. With so much activity on the water, comprehensive yacht insurance isn't just recommended—it's essential for protecting your investment and managing the risks of one of the Southern Hemisphere's busiest maritime regions.\n\nWhether you're berthing at Westhaven Marina, exploring the Motukorea Islands, or venturing out to Great Barrier Island, Auckland's dynamic boating environment demands robust insurance coverage. The combination of commercial shipping traffic, variable weather patterns, and high-value vessels creates a complex risk landscape that makes specialised marine insurance crucial for every boat owner.",
    boatingContext: "Auckland's boating conditions are defined by the Waitemata Harbour's proximity to open ocean and the Hauraki Gulf's exposure to southwesterly swells. The harbour itself is crowded with commercial and recreational traffic, requiring constant vigilance and defensive sailing. The Hauraki Gulf offers excellent cruising grounds to islands like Waiheke, Great Barrier, and the Noises, but conditions can change rapidly with strong winds and unpredictable tidal flows. Summer sailing is generally benign, but autumn and winter swells from the Tasman can create challenging conditions, particularly for boats venturing beyond the gulf's sheltered waters.\n\nPopular cruising destinations include the Motukorea Islands, Kawai Purapura anchorages, and Tiritiri Matangi. However, the gulf's reputational hazards include shallow reefs, strong currents in narrow channels, and sudden weather changes that can surprise unwary mariners. Commercial shipping lanes intersect popular yacht routes, making position awareness and collision avoidance critical skills for Auckland-based vessels.",
    coverageAdvice: "Auckland's bustling maritime environment makes comprehensive third-party liability insurance essential. With dozens of vessels in any given anchorage and significant commercial traffic, the risk of collision or damage to other property is substantially higher than in rural harbours. Cover4You recommends that Auckland-based yacht owners prioritise hull and machinery coverage, including detailed loss of earnings clauses for boats used commercially or in charter scenarios. Galvanic corrosion is accelerated in Auckland's salty, busy harbours, so make sure your policy explicitly covers electrolysis damage and that your vessel's cathodic protection systems are regularly serviced and inspected.\n\nFor yachts frequenting the Hauraki Gulf, ensure your policy includes offshore cover for operations up to at least 30 nautical miles from the coast. Storm damage and loss of engine cover become increasingly valuable the further you venture from shelter. Consider additional cover for salvage liability, particularly if you're sailing near commercial shipping lanes. Personal accident cover for crew is also recommended, especially for instructional or charter operations.",
    localFacts: [
      "Waitemata Harbour hosts over 6,000 moored yachts, making collision and contact damage a genuine risk.",
      "Hauraki Gulf's weather can change in 30 minutes—sudden squalls and whitecaps catch unprepared sailors regularly.",
      "Great Barrier Island is a popular overnight destination, placing many Auckland yachts 25+ nautical miles offshore regularly.",
      "Marina berth fees in central Auckland exceed $3,000 annually, making comprehensive insurance a cost-effective risk mitigation investment.",
    ],
    faqs: [
      {
        question: "Do I need offshore cover for Hauraki Gulf sailing?",
        answer: "Yes. Most insurers require explicit offshore cover for any sailing beyond 12 nautical miles, which many Auckland yachts regularly exceed when cruising the Hauraki Gulf. Offshore cover is essential for trips to Great Barrier Island, the Noises, or the upper gulf. Ensure your policy covers at least 30 nautical miles.",
      },
      {
        question: "How does commercial traffic in the Waitemata Harbour affect my insurance?",
        answer: "The presence of large commercial vessels, ferries, and fishing boats increases collision risk significantly. Insurers expect Auckland yacht owners to maintain excellent watch-keeping practices and collision avoidance skills. Some policies require professional training certification. Third-party liability limits are typically higher for vessels operating in busy harbours.",
      },
      {
        question: "What's the cost difference between mooring in the Waitemata and outer harbours?",
        answer: "Vessels at outer anchorages like Kawai Purapura or Karekare Bay may qualify for modest premium reductions due to lower traffic density and reduced collision risk. However, the savings are typically 5–10%. Remote mooring may increase exposure to weather and theft risks, offsetting some savings.",
      },
      {
        question: "Does my Auckland yacht insurance cover summer racing in the gulf?",
        answer: "Racing cover is typically a separate endorsement or policy schedule. If you're racing competitively, inform your insurer immediately and ensure a racing clause is explicitly included. Cover4You recommends racing cover for all boats participating in organised events.",
      },
    ],
  },
  {
    slug: "wellington",
    name: "Wellington",
    region: "Wellington",
    heroImage: "https://images.unsplash.com/photo-1625045641924-3c15809b6689?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Wellington | Cook Strait Cover",
    metaDescription: "Specialist yacht insurance for Wellington's challenging Cook Strait conditions. Protect your vessel in Wellington Harbour.",
    intro: "Wellington's maritime character is defined by Cook Strait—a notorious stretch of water that demands respect and comprehensive insurance protection. The capital's harbours offer accessible cruising for experienced sailors, but the Strait's reputation for turbulent seas, strong currents, and sudden weather changes makes thorough insurance planning non-negotiable. Whether you're berthing in Wellington Harbour's relative shelter or planning a crossing to Picton, your yacht insurance must be tailored to these specific and formidable conditions.\n\nThe harbour itself is relatively protected and welcoming, with excellent facilities at the waterfront and numerous anchoring opportunities in Lyall Bay and Baring Head. However, the moment you venture beyond the harbour heads into Cook Strait proper, you're entering one of the Southern Hemisphere's most challenging maritime environments. Smart Wellington boat owners invest in insurance that specifically addresses the unique perils of strait sailing.",
    boatingContext: "Cook Strait is famous for its tidal currents, which can exceed 3 knots and create standing waves and overfalls in certain conditions. The Strait's natural funnelling effect accelerates wind speeds, turning even moderate southwesterlies into challenging conditions. Tidal timing is critical—a crossing attempted against the tide in moderate wind becomes a severe weather scenario within hours. The Strait's popularity with commercial ferries and cargo vessels adds another layer of hazard; yacht traffic regularly intermixes with large, fast-moving commercial shipping.\n\nWellington Harbour itself offers reasonably sheltered anchorages, though the harbour mouth remains exposed to southerly swells. Lyall Bay provides good holding and protection from westerlies, while Baring Head anchorage is preferred for northeasterly weather. Many Wellington-based cruising yachts regularly venture to the Sounds, requiring passage through the Strait's most challenging waters. Summer conditions are generally manageable, but winter Strait crossings demand meticulous planning and robust vessel preparation.",
    coverageAdvice: "Cook Strait requires offshore cover as a non-negotiable baseline. Your insurance must explicitly cover operations in waters up to at least 50 nautical miles from Wellington, with particular emphasis on strait-specific hazards. Heavy weather cover is essential—the Strait's reputation for sudden squalls and dangerous seas means weather damage claims are statistically higher. Ensure your policy includes loss of engine cover, as engine failure in a Strait crossing is catastrophic. Hull and machinery coverage should explicitly address the risk of knockdown or partial capsize in extreme conditions.\n\nConsider additional liability coverage, particularly if you transit commercial shipping lanes. Salvage liability and towage cover are valuable—the Strait's strong currents and poor holding ground make vessel recovery expensive if things go wrong. Crew accident cover is important for any boat regularly transiting the Strait with family or friends aboard. Personal locator beacon (PLB) and emergency communication equipment may attract modest premium discounts.",
    localFacts: [
      "Cook Strait tidal currents can reach 3+ knots, creating chaotic seas when wind opposes tide.",
      "Commercial ferries transit the Strait hourly, and yacht-ferry collisions are reportable incidents that drive insurance costs.",
      "Picton crossing attempts are common among Wellington-based yachts; the average crossing takes 4–6 hours depending on conditions.",
      "Wellington Harbour's outer anchorages are exposed to southerly swells, creating dynamic holding challenges.",
    ],
    faqs: [
      {
        question: "What offshore cover limits do I need for Cook Strait crossing?",
        answer: "Minimum 50 nautical miles is essential for Strait crossing. Most insurers recommend 100+ nautical miles for Wellington-based yachts, given the frequency of Sounds cruising. Some policies exclude the Strait entirely unless specifically endorsed; always clarify this with your broker before purchase.",
      },
      {
        question: "Do I need special heavy weather training to insure a Wellington yacht?",
        answer: "Not mandatory, but it's increasingly recommended. Some insurers offer modest premium discounts for crews holding heavy weather or ocean sailing qualifications. Given the Strait's challenges, professional training demonstrates competence and risk awareness, making you a more insurable proposition.",
      },
      {
        question: "Are Wellington Harbour anchorages covered equally under my insurance?",
        answer: "Coverage is typically uniform across the harbour, but some insurers adjust premiums based on mooring location. Exposed outer anchorages may attract higher premiums than inner harbour berths. Discuss your specific anchorage location with your broker when obtaining quotes.",
      },
      {
        question: "What happens if my engine fails in Cook Strait?",
        answer: "Loss of engine cover includes towing and emergency assistance costs, which are substantial in the Strait ($2,000–$5,000+). Without explicit cover, you'll bear these costs personally. Always confirm loss of engine and emergency towing are included in your policy schedule.",
      },
    ],
  },
  {
    slug: "christchurch",
    name: "Christchurch",
    region: "Canterbury",
    heroImage: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Christchurch | Marine Cover Canterbury",
    metaDescription: "Comprehensive yacht and boat insurance for Christchurch and Canterbury waterways. Protect your vessel in Banks Peninsula.",
    intro: "Christchurch's maritime character is shaped by the dramatic Banks Peninsula, Lyttelton Harbour, and access to the open waters of the Pacific. This region offers sailors a unique combination of sheltered harbours and challenging offshore waters, with Akaroa and Lyttelton serving as primary cruising destinations. The Canterbury coastline's reputation for variable weather and strong currents demands careful insurance planning—your coverage must reflect both the protected inner harbours and the exposed outer waters where many Christchurch-based yachts regularly venture.\n\nWhether you're berthing in historic Lyttelton Harbour, exploring the scenic cruising grounds of Akaroa Harbour, or venturing further to the Otago Peninsula and beyond, Christchurch's boating environment presents distinct challenges. The region's relatively remote location and the marine hazards specific to Canterbury waters make tailored insurance essential for every boat owner.",
    boatingContext: "Lyttelton Harbour provides excellent shelter and is the primary cruising hub for Christchurch-based yachts. The harbour entrance is relatively straightforward, though southerly swells can create a challenging bar in poor conditions. The harbour itself offers good holding ground and multiple anchorage options. Akaroa Harbour, on the other side of Banks Peninsula, provides scenic cruising and excellent protection, though the passage around Banks Peninsula's western point exposes yachts to strong currents and frequent southwesterly winds.\n\nThe Canterbury coast beyond Banks Peninsula is notably exposed and remote, with limited shelter and significant distances between safe harbours. Otago Harbour is 150+ nautical miles to the south, creating a major passage for any Christchurch yacht venturing further down the coast. Winter conditions in Canterbury waters can be severe, with strong southwesterly swells and unpredictable weather patterns. Summer offers excellent cruising conditions but requires vigilance for sudden weather changes.",
    coverageAdvice: "Christchurch yacht owners should prioritise hull and machinery coverage with explicit offshore extensions—many local vessels regularly venture beyond 20 nautical miles from shelter. Heavy weather cover is crucial given Canterbury's exposure to severe southwesterlies and the region's reputation for rapid weather deterioration. Ensure your policy explicitly addresses the hazards of Banks Peninsula passage, including strong currents and variable wind patterns around the headlands.\n\nConsider additional cover for loss of engine, as mechanical failure in exposed Canterbury waters creates significant towage costs. Third-party liability should be comprehensive—the remote nature of outer Canterbury waters means collision with other vessels is less likely, but damage to commercial fishing operations or marine farms must be covered. Salvage liability is particularly valuable for any yacht regularly venturing beyond Otago Peninsula.",
    localFacts: [
      "Banks Peninsula's waters are home to Hector's dolphins, adding scenic value but requiring careful navigation and situational awareness.",
      "Akaroa Harbour offers superb shelter and is a 40-minute sail from Lyttelton—a perfect cruising destination for weekend trips.",
      "Canterbury's offshore waters are increasingly home to marine farms; routes must account for prohibited areas.",
      "Lyttelton Harbour's inner anchorages can be exposed to significant swell during southeasterly storms.",
    ],
    faqs: [
      {
        question: "Is Akaroa a safe cruising destination from Christchurch?",
        answer: "Yes, for experienced sailors. The passage around Banks Peninsula requires navigation skills and careful timing to avoid strong currents. Akaroa Harbour itself is well-sheltered. Your yacht insurance should include full offshore coverage for Banks Peninsula passage and the journey out and back.",
      },
      {
        question: "What coverage do I need for berths in Lyttelton Harbour?",
        answer: "Full third-party liability and hull coverage is standard for Lyttelton. The harbour has good holding but can experience swell during southeasterly storms. Ensure your policy covers storm damage and collision with other vessels in crowded anchorages.",
      },
      {
        question: "Are Christchurch yachts regularly sailing to Otago?",
        answer: "Yes, many do for extended cruising. The 150+ nautical mile passage is typically a 2–3 day journey depending on conditions. Your insurance must include offshore cover extending at least 100 nautical miles for these passages.",
      },
      {
        question: "Do I need special knowledge for Banks Peninsula sailing?",
        answer: "Local knowledge of tidal currents and weather patterns is valuable. Some insurers offer modest discounts for skippers with demonstrated experience on the Peninsula. Professional training in passage planning is recommended for any yacht regularly circumnavigating Banks Peninsula.",
      },
    ],
  },
  {
    slug: "bay-of-islands",
    name: "Bay of Islands",
    region: "Northland",
    heroImage: "https://images.unsplash.com/photo-1696028354827-0d36454dcaa8?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Bay of Islands | Northland Marine",
    metaDescription: "Specialist yacht insurance for Bay of Islands cruising. Perfect for island exploration and extended coastal passages.",
    intro: "The Bay of Islands is New Zealand's premier cruising destination—a stunning natural harbour with over 140 islands, pristine anchorages, and exceptional boating conditions that attract yachties from around the world. Located in the Far North, the Bay offers accessible, sheltered waters ideal for both family cruising and serious ocean sailing. However, the Bay's popularity, combined with the challenges of island navigation and passage planning for boats venturing north to Australia or offshore, demands comprehensive insurance tailored to this unique region.\n\nWhether you're mooring in Russell, cruising the islands, or planning a long-distance passage to the North Island's eastern coast or beyond, your yacht insurance must reflect the Bay of Islands' specific marine environment and the diverse risks associated with this iconic cruising ground.",
    boatingContext: "The Bay of Islands is famously protected by Kermadec-facing headlands and the long natural breakwater of Orokawa Island, creating a vast natural harbour with dozens of sheltered anchorages. Popular island destinations include Urupukapuka, Moturua, and Motukiekie, each offering excellent holding and protection. Russell, on the bay's western shore, provides waterfront amenities and serves as the region's primary hub. The Bay's inner waters are generally calm and forgiving, making them perfect for family cruising and sailing instruction.\n\nHowever, the entrance to the Bay can be challenging in strong northeasterly winds or heavy southwesterly swells. The Hole in the Rock passage, at the northern end of Kermadec Island, is a famous scenic route but requires careful tide and swell management. Many Bay of Islands yachts venture further north to the Cavalli Islands or offshore to the Poor Knights and Three Kings Islands, exposing them to more challenging open-water conditions.",
    coverageAdvice: "Bay of Islands yacht owners should ensure their policies include comprehensive third-party liability—the Bay is crowded during summer months, and collision risk in popular anchorages is genuine. Hull and machinery coverage is essential, though the Bay's protected waters mean storm damage is less likely than in exposed regions. However, any boat planning to venture north to the Cavallis, Poor Knights, or beyond requires explicit offshore cover extending at least 50+ nautical miles.\n\nConsider additional cover for loss of engine and towing, particularly for yachts making the offshore passages to remote island destinations. Crew accident cover is valuable for any boat used for teaching or guiding. Salvage liability becomes important for vessels operating in the more remote northern waters where rescue resources are limited. Local knowledge of island anchorages and tidal patterns is advantageous and may attract modest insurance discounts.",
    localFacts: [
      "The Bay of Islands has 144 islands and countless perfectly sheltered anchorages, making it ideal for extended family cruising.",
      "Russell is New Zealand's oldest European settlement and provides the Bay's primary waterfront facilities and services.",
      "The Hole in the Rock is a famous scenic passage through Kermadec Island, but it requires careful swell and tide planning.",
      "Poor Knights Islands, 20+ nautical miles northeast, are a popular diving and cruising destination but require good weather windows.",
    ],
    faqs: [
      {
        question: "Is the Bay of Islands safe for family cruising?",
        answer: "Absolutely. The inner Bay is calm and forgiving, with dozens of family-friendly anchorages. Urupukapuka Island is perfect for safe exploration. Your insurance should cover family crew with personal accident protection and emergency evacuation to nearby Russell if needed.",
      },
      {
        question: "What offshore cover do I need for Poor Knights sailing?",
        answer: "Poor Knights Islands are 20–25 nautical miles from Russell, requiring explicit offshore cover of at least 30 nautical miles. Weather conditions around the islands can be more challenging than the inner Bay. Ensure your policy covers passages to remote northern islands.",
      },
      {
        question: "Do I need special training to navigate island anchorages?",
        answer: "Local knowledge is valuable but not mandatory. The Bay's anchorages are well-charted and relatively forgiving. However, some insurers offer modest discounts for skippers with demonstrated cruising experience. Professional navigation and passage planning training is recommended.",
      },
      {
        question: "What's the risk profile for sailing through the Hole in the Rock?",
        answer: "It's a scenic but relatively straightforward passage if conditions are appropriate. Swell and tide must be carefully managed. Your yacht insurance should cover the passage, but inform your broker if you're regularly using it as a route to the northern islands.",
      },
    ],
  },
  {
    slug: "tauranga",
    name: "Tauranga",
    region: "Bay of Plenty",
    heroImage: "https://images.unsplash.com/photo-1701979343436-37b840cba400?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Tauranga | Bay of Plenty Boat Cover",
    metaDescription: "Comprehensive yacht and marine insurance for Tauranga and Bay of Plenty. Protect your boat in New Zealand's busiest port.",
    intro: "Tauranga is New Zealand's busiest port, combining commercial shipping operations with a thriving recreational boating community. The region offers excellent berthing facilities, access to sheltered inner harbour waters, and gateways to extended cruising on the Bay of Plenty and beyond. However, the coexistence of heavy commercial traffic, variable weather patterns, and the dynamic tidal environment demands carefully tailored insurance. Your yacht insurance must account for both the protected inner harbour conditions and the more exposed waters frequented by Bay of Plenty cruising yachts.\n\nWhether you're mooring at Mount Maunganui, cruising the scenic Tauranga Moana waterways, or venturing offshore to Mayor Island or the Whakatane Bar, Tauranga's unique maritime character requires comprehensive, location-specific coverage.",
    boatingContext: "Tauranga Harbour proper is protected from ocean swells and offers excellent holding in numerous anchorages around the Tauranga Moana. Mount Maunganui Marina is the region's primary hub, offering full facilities and protection from most weather conditions. The harbour has shifting sand bars at the entrance, which can be challenging during strong tidal flows or swell events. Inside the harbour, waters are generally calm and forgiving. Mayor Island, 20 nautical miles northeast, is a popular cruising destination with sheltered anchorages and thermal springs. The island's accessibility and relative proximity to Tauranga make it a common weekend destination for local yachts.\n\nThe Bay of Plenty's outer waters are more exposed, particularly to easterly swells. Whakatane Harbour, 40+ nautical miles to the east, provides alternative shelter but requires a substantial passage. Many Tauranga-based yachts venture east toward White Island and beyond for extended cruising, exposing them to significant offshore conditions.",
    coverageAdvice: "Tauranga yacht owners should prioritise comprehensive third-party liability coverage due to the harbour's heavy commercial traffic. The mixing of large container vessels, bulk carriers, and recreational yachts creates collision risk that's higher than typical New Zealand harbours. Hull and machinery coverage is essential, with particular attention to storm damage provisions—Bay of Plenty weather can deteriorate rapidly, bringing strong winds and significant swell.\n\nFor any boat regularly venturing beyond Mount Maunganui—particularly to Mayor Island or the eastern Bay—explicit offshore cover of at least 30+ nautical miles is non-negotiable. Loss of engine cover is valuable, especially for yachts making the passage to Whakatane or further east. Salvage liability becomes important for vessels operating in the more remote eastern Bay of Plenty waters.",
    localFacts: [
      "Tauranga is NZ's busiest port, with commercial vessels transiting daily—yacht collision risk is measurably higher than other regions.",
      "Mayor Island's anchorages are 20 nautical miles offshore and offer excellent shelter and unique thermal features.",
      "Tauranga Moana's inner waters are protected and ideal for family cruising, but the harbour entrance has shifting sand bars.",
      "White Island, an active volcano 50+ nautical miles east, is a popular but exposed cruising destination.",
    ],
    faqs: [
      {
        question: "How does commercial shipping traffic affect Tauranga yacht insurance?",
        answer: "Substantially. Insurance premiums for Tauranga-based yachts are typically 10–15% higher due to collision risk with commercial vessels. Insurers expect excellent watch-keeping, collision avoidance skills, and regular professional training. Third-party liability limits are higher than regional harbours.",
      },
      {
        question: "Is Mayor Island worth the 20-nautical-mile passage?",
        answer: "Absolutely—it's a world-class cruising destination. Your insurance must cover the passage with explicit offshore protection. Weather windows are important; the passage is straightforward in calm conditions but challenging in easterly winds.",
      },
      {
        question: "What coverage do I need for Tauranga Harbour anchorages?",
        answer: "Full third-party liability and collision coverage. The harbour is crowded in summer, and boat-to-boat contact happens regularly. Ensure your policy covers collision damage and covers your liability to other vessels.",
      },
      {
        question: "Do sand bar conditions in Tauranga Harbour affect insurance?",
        answer: "Not directly, but grounding is a potential risk during strong tidal flows or swell events. Ensure your hull coverage includes grounding damage. Many insurers recommend crossing the bar at slack water in uncertain conditions.",
      },
    ],
  },
  {
    slug: "whangarei",
    name: "Whangarei",
    region: "Northland",
    heroImage: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Whangarei | Northland Boat Cover",
    metaDescription: "Specialist marine insurance for Whangarei and the Northland coast. Cover for exploring New Zealand's northern cruising grounds.",
    intro: "Whangarei offers one of New Zealand's most accessible and well-protected harbours, combined with gateways to some of the country's finest cruising grounds. Located halfway between Auckland and the Bay of Islands, Whangarei serves as a strategic hub for yachts exploring Northland's spectacular coast. The harbour itself provides excellent shelter and modern marina facilities, while the surrounding region offers access to the dramatic Poor Knights Islands, Bream Head passages, and extended offshore cruising opportunities. Your yacht insurance must reflect both the protected inner harbour conditions and the more challenging waters frequented by boats venturing to remote northern destinations.\n\nWhether you're berthing in the town basin, exploring the Whangarei Heads, or preparing for longer passages north, comprehensive, location-specific insurance is essential.",
    boatingContext: "Whangarei Harbour is one of New Zealand's finest natural harbours, offering multiple sheltered anchorages and excellent holding. The inner harbour, around the town basin, is protected and ideal for casual cruising. The Whangarei Heads—the dramatic headlands guarding the harbour entrance—create a scenic but navigable passage. Once outside the harbour, the waters become more exposed to northeasterly swells and southwesterly winds. Bream Head, to the north, marks the entrance to a dramatic coastal region with limited shelter until the Bay of Islands.\n\nPoor Knights Islands, 20+ nautical miles offshore, are among New Zealand's premier diving and scenic cruising destinations. However, the passage from Whangarei exposes yachts to open ocean conditions and significant swell. Many Whangarei-based yachts regularly venture offshore, making the harbour a hub for blue-water cruising preparation.",
    coverageAdvice: "Whangarei yacht owners should ensure their policies include comprehensive third-party liability and hull coverage tailored to both protected harbour conditions and offshore passage-making. For any boat regularly venturing beyond the Whangarei Heads—particularly to Poor Knights Islands or further—explicit offshore cover of at least 50+ nautical miles is essential. Heavy weather cover is important, as the waters north of the Heads can deteriorate rapidly in southwesterly or northeasterly swells.\n\nLoss of engine cover is valuable for any boat making offshore passages. Crew accident cover is recommended for yachts used for cruising instruction or family sailing. Salvage liability becomes increasingly important the further north vessels venture. Consider additional cover for extended offshore cruising if boats regularly venture beyond 30 nautical miles.",
    localFacts: [
      "Whangarei Harbour is often called New Zealand's most beautiful harbour and offers excellent protection and modern facilities.",
      "Poor Knights Islands are 20+ nautical miles offshore and require good weather windows but offer world-class diving and scenic cruising.",
      "The Whangarei Heads passage is navigable but requires careful timing, particularly in strong northeasterly swells.",
      "Many offshore cruising boats use Whangarei as a provisioning and preparation hub before longer passages.",
    ],
    faqs: [
      {
        question: "Is Whangarei Harbour safe for all types of yachts?",
        answer: "Yes. The inner harbour is well-protected and suitable for family cruising of any experience level. Multiple anchorages offer excellent holding. Your insurance should cover harbour operations, collision with other vessels, and mooring-related incidents.",
      },
      {
        question: "What offshore cover is required for Poor Knights sailing?",
        answer: "Minimum 30–50 nautical miles for the passage and operations around the islands. Poor Knights weather can be challenging; ensure your policy includes heavy weather cover and loss of engine provisions. Some insurers require professional offshore training endorsement.",
      },
      {
        question: "Do I need special training for Bream Head passage?",
        answer: "Local knowledge is valuable but not mandatory. The passage is navigable in moderate conditions but can be challenging in strong northeasterly swells. Professional passage planning training is recommended for regular Bream Head transits.",
      },
      {
        question: "Is Whangarei a good base for extended offshore cruising?",
        answer: "Yes. The harbour offers full provisioning, repair facilities, and weather forecasting resources. Many offshore cruising boats use Whangarei for final preparation. Ensure your yacht insurance covers extended passages and offshore operations beyond New Zealand waters if you're planning longer voyages.",
      },
    ],
  },
  {
    slug: "queenstown",
    name: "Queenstown",
    region: "Otago",
    heroImage: "https://images.unsplash.com/photo-1626869710563-be671a0cd919?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Queenstown | Lake Wakatipu Boat Cover",
    metaDescription: "Specialist yacht and boat insurance for Lake Wakatipu and Queenstown. Adventure sports and lake cruising coverage.",
    intro: "Queenstown offers a unique cruising environment—Lake Wakatipu, a spectacular alpine fjord lake surrounded by dramatic scenery and accessible only to vessels capable of navigating its deep, cold waters. This isn't traditional sea sailing; it's a specialized freshwater boating environment with distinct challenges including sudden katabatic wind funnelling, rapid temperature changes, and limited rescue resources. Whether you're sailing a traditional yacht, racing a catamaran, or operating a power cruiser, your boat insurance must reflect the specific conditions of alpine lake sailing and the adventure sports culture that defines Queenstown's boating community.\n\nLake Wakatipu is a bucket-list destination for many New Zealand sailors, but its dramatic topography and variable weather patterns demand carefully tailored insurance coverage.",
    boatingContext: "Lake Wakatipu is a deep, cold alpine lake that can be deceptively dangerous despite its scenic beauty. The lake is famous for sudden katabatic wind events—strong downslope winds funnelled down the surrounding valleys that can arrive with little warning and turn calm conditions into challenging seas within minutes. The lake's length (80+ kilometres) and the surrounding mountain terrain create a dynamic and unpredictable wind environment. Water temperature remains cold year-round (rarely exceeding 13°C), making extended immersion in cold water a serious risk.\n\nThe lake's northern section around Queenstown is relatively accessible, with good holding and multiple anchorages. The southern section around Glenorchy is more remote and exposed to katabatic winds. Many Queenstown-based vessels operate commercially as tourist cruisers or adventure sports platforms, adding complexity to insurance requirements.",
    coverageAdvice: "Queenstown yacht owners face unique insurance challenges due to the lake's specific hazards. Standard marine policies may exclude or heavily restrict freshwater lake operations, so explicit Lake Wakatipu coverage is essential. Katabatic wind damage is a realistic hazard—policies should include heavy weather and storm damage provisions with specific reference to sudden wind events. Hypothermia and cold water immersion are significant crew safety concerns; personal accident cover with extended emergency evacuation provisions is highly recommended.\n\nFor commercial operations (tourist cruising, adventure sports platforms), policies must explicitly address the commercial use and any specific activities (jet skiing, parasailing, diving) your vessel supports. Liability limits should be appropriate to the number of paying passengers or commercial operations. Loss of engine cover is valuable in the lake's remote southern sections where rescue resources are limited. Personal locator beacons and emergency communication equipment may attract premium discounts.",
    localFacts: [
      "Lake Wakatipu's sudden katabatic wind events can generate 30+ knot squalls from calm conditions in 5 minutes.",
      "The lake's water temperature rarely exceeds 13°C even in summer—cold water immersion is a serious hazard.",
      "The lake is 80+ kilometres long with limited escape routes in its southern section, requiring careful passage planning.",
      "Glenorchy, at the lake's southern end, is home to remote anchorages and is a destination for adventure cruising and scenic exploration.",
    ],
    faqs: [
      {
        question: "Does standard yacht insurance cover Lake Wakatipu sailing?",
        answer: "Not typically. Most policies exclude or heavily restrict freshwater lake operations. You need explicit Lake Wakatipu coverage, often as a specialized freshwater or alpine lake endorsement. Some insurers won't cover the lake at all, so shop carefully.",
      },
      {
        question: "How do katabatic winds affect my insurance premium?",
        answer: "Substantially. Katabatic wind risk increases premiums significantly and requires professional training acknowledgment. Some insurers offer modest discounts for skippers holding alpine lake sailing certifications. Storm damage claims are statistically higher on Lake Wakatipu.",
      },
      {
        question: "Is cold water immersion covered under personal accident insurance?",
        answer: "Yes, if your policy includes crew personal accident cover. Ensure it covers hypothermia treatment and extended emergency evacuation. Cold water immersion is a documented risk on Lake Wakatipu, and specialized crew protection is essential.",
      },
      {
        question: "What commercial operation coverage does Queenstown require?",
        answer: "Commercial tourist or adventure operations require explicit commercial liability cover, passenger injury protection, and activity-specific endorsements (parasailing, jet skiing, diving). Standard recreational policies don't cover commercial use—inform your insurer immediately if you're operating commercially.",
      },
    ],
  },
  {
    slug: "marlborough",
    name: "Marlborough Sounds",
    region: "Marlborough",
    heroImage: "https://images.unsplash.com/photo-1643476821614-33ae2ec8092b?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Marlborough Sounds | South Island Cover",
    metaDescription: "Specialist yacht insurance for Marlborough Sounds cruising. Coverage for remote island anchorages and scenic waterways.",
    intro: "The Marlborough Sounds represent New Zealand's most pristine and remote cruising destination—a vast network of interconnected waterways, fjord-like arms, and hundreds of sheltered island anchorages accessible only to dedicated cruising yachts. This region is the ultimate bucket-list destination for serious sailors, offering multi-week cruising opportunities with minimal commercial traffic, pristine anchorages, and extraordinary scenic beauty. However, the Sounds' remoteness, limited rescue resources, and exposure to Southern Ocean swells through Queen Charlotte Sound demand comprehensive insurance tailored to extended backcountry sailing.\n\nWhether you're exploring the scenic wonders of Pelorus Sound, discovering remote anchorages in Mahau or Kenepuru Sounds, or preparing for the challenging passage through Queen Charlotte Sound, your yacht insurance must reflect this unique and demanding cruising environment.",
    boatingContext: "The Marlborough Sounds are a drowned river valley system with deeply protected waterways offering some of New Zealand's finest sheltered anchorages. Queen Charlotte Sound, the main access route, provides the primary gateway—a scenic fjord-like passage that can, however, be challenging in strong southwesterly winds or heavy Southern Ocean swells. Once inside the Sounds, waters are dramatically more protected, with Pelorus Sound, Mahau Sound, and Kenepuru Sound offering extensive cruising with countless island anchorages and holding grounds.\n\nThe Sounds' isolation is their defining characteristic. Towns like Picton and Havelock provide resupply opportunities, but once committed to extended cruising, yachts may be 40+ nautical miles from help. Many cruising yachts spend weeks exploring the Sounds' remote arms and island anchorages. Northern Sounds (Kenepuru, Mahau) can be particularly remote; rescue resources and medical evacuation options are severely limited.",
    coverageAdvice: "Marlborough Sounds yachting demands specialist insurance that acknowledges the region's remoteness and extended cruising patterns. Hull and machinery coverage must be comprehensive, as repair facilities are limited and salvage costs in remote anchorages can be extraordinary. Loss of engine cover is essential—mechanical failure in a remote Sounds anchorage can maroon a yacht for days or weeks while waiting for professional assistance.\n\nMedical evacuation cover is critical for extended Sounds cruising. Remote anchorages may be 50+ nautical miles from medical facilities, making helicopter evacuation expensive but potentially life-saving. Crew personal accident cover should include extended coverage for remote location scenarios. Consider additional salvage liability coverage—if a yacht runs aground in a remote Sounds anchorage, rescue costs can exceed $10,000 without professional salvage. Ensure your policy covers extended passages through Queen Charlotte Sound with explicit heavy weather provisions.",
    localFacts: [
      "Marlborough Sounds offer 200+ sheltered island anchorages—potentially weeks of remote cruising from a single base.",
      "Queen Charlotte Sound's passage can be challenging in southwesterly swells; many yachts time passages carefully.",
      "Picton and Havelock are the only resupply points; stocks should be provisioned carefully before extended Sounds cruising.",
      "Medical evacuation from remote Sounds anchorages can cost $5,000+; helicopter evacuation insurance is strongly recommended.",
    ],
    faqs: [
      {
        question: "How remote is extended Marlborough Sounds cruising?",
        answer: "Very. Remote anchorages in Kenepuru or Mahau Sounds can be 50+ nautical miles from Picton. Rescue resources are limited. Your yacht must be fully self-sufficient, and crew personal accident cover should include medical evacuation provisions.",
      },
      {
        question: "What coverage is essential for week-long Sounds cruising?",
        answer: "Loss of engine cover, medical evacuation, comprehensive crew accident coverage, and extended salvage liability. The Sounds are unforgiving for mechanical breakdowns. Budget generously for potential rescue and repair costs, and ensure your policy covers extended remote anchorage scenarios.",
      },
      {
        question: "Is Queen Charlotte Sound passage dangerous?",
        answer: "Not in calm conditions, but southwesterly swells can create challenging seas. Timing passages for weather windows is essential. Your insurance must cover the passage with explicit heavy weather provisions.",
      },
      {
        question: "Do I need special navigation training for Sounds cruising?",
        answer: "Excellent local knowledge and passage planning skills are valuable. Charts are detailed, but some anchorages require careful navigation. Professional navigation training is recommended for first-time Sounds cruisers.",
      },
    ],
  },
  {
    slug: "nelson",
    name: "Nelson",
    region: "Nelson / Tasman",
    heroImage: "https://images.unsplash.com/photo-1768722688751-5d995b9e6393?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Nelson | Tasman Bay Boat Cover",
    metaDescription: "Comprehensive yacht and boat insurance for Nelson and Tasman Bay. Protect your vessel in the sunny north.",
    intro: "Nelson is New Zealand's sunniest region and offers excellent cruising access to Tasman Bay, stunning Abel Tasman National Park, and the gateway to extended South Island cruising. The region combines accessible inner harbour sailing with exposure to the challenging Tasman Sea and its notorious weather patterns. Nelson serves as a crucial hub for yachts provisioning for longer passages to the Sounds or ventures south down the west coast. Whether you're exploring the beaches and anchorages of Abel Tasman, making the passage to Pelorus Sound, or preparing for the formidable journey to Westland's glaciers, your yacht insurance must account for both Nelson's relatively protected waters and the more exposed Tasman Bay and open-water conditions.\n\nNelson's maritime culture is rich and active, with a vibrant cruising community and excellent facilities supporting both local sailing and longer-distance voyaging.",
    boatingContext: "Nelson Harbour provides protected waters and excellent holding, serving as the region's primary cruising hub. The harbour entrance is generally straightforward, though northwesterly swells can create a challenging bar. Tasman Bay extends to the west, bounded by Abel Tasman National Park's dramatic coastline and providing numerous scenic anchorages and day-trip destinations. The Bay is relatively exposed to westerly and northwesterly weather, particularly in winter, when Southern Ocean swells can reach the anchorages.\n\nAbel Tasman's famous sandy beaches and turquoise waters provide excellent sheltered anchorages for day trips and short cruises. However, many Nelson-based yachts venture further afield—across Cook Strait to Marlborough Sounds, south down the West Coast toward Westland, or north toward the central North Island. These passages expose vessels to challenging Tasman Sea conditions.",
    coverageAdvice: "Nelson yacht owners should ensure comprehensive third-party liability and hull coverage reflecting both protected harbour conditions and the more exposed Tasman Bay environment. For any boat regularly venturing beyond Abel Tasman or across Cook Strait to Marlborough—explicit offshore cover of at least 50+ nautical miles is essential. Heavy weather cover is important; Tasman Bay can deteriorate rapidly in westerly or northwesterly wind events, bringing significant swells.\n\nLoss of engine cover is valuable, particularly for yachts making longer south-coast passages where mechanical failure is expensive and potentially dangerous. Salvage liability is important for any vessel regularly operating in Tasman Bay's more remote northern reaches or planning extended West Coast passages. Consider additional cover for extended cruising if yachts regularly venture beyond 40 nautical miles from Nelson Harbour.",
    localFacts: [
      "Abel Tasman National Park's beaches offer world-class anchorages and scenic cruising within 20 nautical miles of Nelson.",
      "Tasman Bay can develop significant swells rapidly in westerly or northwesterly wind events.",
      "Nelson Harbour entrance can be challenging in northwesterly swells but is generally navigable.",
      "Many Nelson-based yachts provision here before longer South Island passages or Cook Strait crossing to Marlborough.",
    ],
    faqs: [
      {
        question: "Is Abel Tasman suitable for family day cruising?",
        answer: "Yes. The park's anchorages are scenic, well-sheltered, and suitable for family boats of moderate size. Ensure your insurance covers day-trip operations and brief anchoring in national park waters.",
      },
      {
        question: "What coverage do I need for Cook Strait crossing to Marlborough from Nelson?",
        answer: "Explicit offshore cover of at least 50 nautical miles, with heavy weather provisions. The passage is 20+ nautical miles and conditions can be challenging. This is a significant ocean passage requiring careful planning and comprehensive insurance.",
      },
      {
        question: "How does Tasman Bay weather affect sailing operations?",
        answer: "Westerly and northwesterly wind events can generate significant swells rapidly. Winter conditions are challenging. Ensure your policy includes storm damage and loss of engine cover. Many Nelson yachts time passages for weather windows.",
      },
      {
        question: "Is Nelson a good provisioning hub for longer cruising?",
        answer: "Excellent. Nelson offers full facilities, fresh food markets, and repair services. Many Nelson yachts use it as a provisioning base for South Island passages or Marlborough Sounds expeditions.",
      },
    ],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "Waikato",
    heroImage: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Hamilton | Waikato Waterways Boat Cover",
    metaDescription: "Specialist boat and yacht insurance for Hamilton and Waikato waterways. Inland cruising and river navigation coverage.",
    intro: "Hamilton offers a unique inland boating environment, providing access to the Waikato River and its extensive cruising networks through the Waikato region's lakes and waterways. Unlike coastal sailing, Hamilton-based boating emphasizes river navigation, lake cruising, and protected inland waters with distinct hazards including riverine obstacles, variable currents, and weather patterns unique to inland waterways. Your yacht insurance must reflect this specialized inland environment, which presents challenges quite different from traditional sea sailing.\n\nWhether you're cruising the Waikato River, exploring the region's interconnected lakes, or preparing for longer river passages, comprehensive inland waterway insurance is essential.",
    boatingContext: "The Waikato River is a substantial waterway suitable for modest-sized cruising yachts and launch vessels, flowing northward through pastoral and increasingly urban landscapes toward the Tasman Sea near Port Waikato. The river features lock systems at various points, creating a navigable passage with both challenges and opportunities for exploring inland waterways. Lakes like Lake Taupo (though technically a separate system) and various smaller Waikato lakes provide protected cruising and scenic anchorages. However, the river itself can present hazards including variable currents, shallow sections, and obstacles like submerged logs and debris.\n\nWeather patterns in inland Waikato are generally less severe than coastal regions, but rapid wind changes and afternoon thermals can surprise unwary sailors. Flooding periods can make river navigation dangerous.",
    coverageAdvice: "Hamilton yacht owners navigating inland waterways require specialized insurance that addresses riverine hazards specifically. Standard coastal marine policies may not adequately cover river operations, locks, or inland hazards. Ensure your policy explicitly covers river navigation, including lock operations and potential damage from river debris or grounding in shallow water. Comprehensive third-party liability is important in shared waterways where other vessels and commercial barge traffic operate.\n\nHull coverage should address the specific hazards of river cruising—grounding in shallow water, collision with submerged debris, and lock gate contact damage are realistic risks. Storm damage provisions for inland waters are less critical than coastal operations, but sudden wind events can still present dangers. Consider liability coverage specifically addressing any commercial tour operations if boats are used for passenger cruising.",
    localFacts: [
      "The Waikato River is navigable for modest cruising vessels and offers access to inland lakes and scenic rural landscapes.",
      "Lock systems on the Waikato River require careful operation and timing, adding complexity to passage planning.",
      "Flooding periods can create dangerous river conditions, requiring monitoring and potential passage restrictions.",
      "Port Waikato, at the river's mouth, serves as the gateway to open Tasman Sea sailing for inland-based vessels.",
    ],
    faqs: [
      {
        question: "Does standard yacht insurance cover Waikato River navigation?",
        answer: "Not necessarily. River operations may not be covered under standard coastal policies. Verify your policy explicitly covers river navigation, lock operations, and inland waterway hazards. Some insurers require specialized inland waterway endorsements.",
      },
      {
        question: "What are the main hazards of Waikato River cruising?",
        answer: "Submerged logs, debris, shallow sections, and lock gate operations are primary hazards. Variable currents and sudden wind events are possible. Flooding during high-water periods can make navigation dangerous. Always monitor river conditions before planning passages.",
      },
      {
        question: "Can I transit to the Tasman Sea from Hamilton?",
        answer: "Yes, via Port Waikato. However, this is a significant journey requiring careful planning. Ensure your policy covers both inland river operations and coastal offshore operations for the final segment to open water.",
      },
      {
        question: "Do lock operations affect my insurance?",
        answer: "Not directly, but lock gate contact damage or operational delays are potential incidents. Your policy should explicitly cover lock transits and any minor damage that might occur during lock operations.",
      },
    ],
  },
  {
    slug: "dunedin",
    name: "Dunedin",
    region: "Otago",
    heroImage: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Dunedin | Otago Coastal Boat Cover",
    metaDescription: "Comprehensive yacht and marine insurance for Dunedin and Otago waters. Coastal and offshore sailing coverage.",
    intro: "Dunedin's maritime heritage and picturesque harbour make it an attractive destination for New Zealand yachters, offering protected inner harbour waters, access to the Otago Peninsula's dramatic coastline, and gateways to extended offshore cruising down the rugged South Island west coast. The region combines relatively accessible harbour conditions with exposure to the Southern Ocean's formidable weather patterns and challenging offshore environments. Dunedin serves as a hub for boats provisioning for longer passages and an excellent base for exploring Otago's unique coastal environment.\n\nWhether you're berthing in Dunedin Harbour, exploring the Otago Peninsula's wildlife-rich anchorages, or preparing for longer passages to Fiordland or beyond, your yacht insurance must reflect both the protected harbour conditions and the more exposed offshore waters.",
    boatingContext: "Dunedin Harbour is a substantial natural harbour with good holding and protection from most wind directions. The harbour entrance is relatively straightforward, though southeasterly swells can create a challenging bar. The Otago Peninsula forms a dramatic natural breakwater, extending southward and creating scenic cruising opportunities. The Peninsula's waters are rich in marine wildlife—seals, penguins, and albatrosses are common—and offer spectacular anchorages for wildlife viewing.\n\nHowever, beyond the Peninsula lies the open Southern Ocean, with exposure to significant swells and challenging weather patterns. Many Dunedin-based yachts venture south toward Fiordland, a multi-day passage through increasingly remote and exposed waters. Winter conditions in Otago waters can be severe, with strong southwesterly swells and unpredictable weather.",
    coverageAdvice: "Dunedin yacht owners should ensure comprehensive third-party liability and hull coverage reflecting both harbour and offshore operations. For any boat regularly venturing beyond the Otago Peninsula—particularly toward Fiordland—explicit offshore cover of at least 100+ nautical miles is essential. Heavy weather cover is crucial; Southern Ocean conditions can be formidable, and weather damage claims are statistically higher for Dunedin vessels operating offshore.\n\nLoss of engine cover is valuable for any boat making longer south-coast passages. Salvage liability becomes increasingly important the further south vessels venture, where rescue resources are minimal and salvage costs can be extraordinary. Crew accident cover with extended emergency evacuation provisions is recommended for any boat regularly operating in Southern Ocean waters.",
    localFacts: [
      "Otago Peninsula's waters are home to rare albatrosses, seals, and penguins—a world-class wildlife viewing destination.",
      "Dunedin Harbour is well-protected but the harbour entrance can be challenging in southeasterly swells.",
      "Fiordland passages from Dunedin are 150+ nautical miles and require multi-day planning and offshore competence.",
      "Southern Ocean swells can reach Dunedin waters, requiring careful monitoring and weather awareness.",
    ],
    faqs: [
      {
        question: "Is Otago Peninsula cruising safe for all vessel types?",
        answer: "Yes, for well-equipped vessels with competent crews. The Peninsula's waters are scenic but exposed to southeasterly swells. Ensure your insurance covers offshore operations and potential weather damage. Plan passages for favourable weather windows.",
      },
      {
        question: "What offshore cover is needed for Fiordland sailing from Dunedin?",
        answer: "Minimum 100+ nautical miles, with comprehensive heavy weather provisions. Fiordland passages are significant ocean voyages requiring excellent seamanship and comprehensive insurance. Some insurers require professional offshore training endorsement.",
      },
      {
        question: "How does Otago Peninsula wildlife affect sailing operations?",
        answer: "Marine wildlife viewing enhances the cruising experience but requires careful navigation. Ensure your policy covers lengthy stationary periods in anchorages. No impact on insurance costs, but exercise care around wildlife.",
      },
      {
        question: "Is Dunedin a good base for extended South Island cruising?",
        answer: "Yes. Dunedin offers full provisioning and repair facilities. Many South Island cruising yachts use it as a provisioning hub. Ensure your insurance covers extended offshore passages and Southern Ocean conditions.",
      },
    ],
  },
  {
    slug: "napier",
    name: "Napier",
    region: "Hawke's Bay",
    heroImage: "https://images.unsplash.com/photo-1701979343436-37b840cba400?w=1920&h=1080&fit=crop",
    metaTitle: "Yacht Insurance Napier | Hawke's Bay Boat Cover",
    metaDescription: "Specialist yacht and marine insurance for Napier and Hawke's Bay. Coastal and offshore sailing coverage for the east coast.",
    intro: "Napier is the gateway to Hawke's Bay's rich maritime heritage, offering protected harbour facilities combined with access to the North Island's dramatic east coast. The region provides excellent cruising opportunities with Mahia Peninsula, Cape Kidnappers, and the scenic bays and anchorages along Hawke's Bay's coastline. Napier serves as a strategic hub for yachts provisioning for longer North Island passages or venturing offshore. Your yacht insurance must reflect both the relatively protected inner harbour conditions and the more exposed east-coast waters where many Napier-based yachts regularly operate.\n\nWhether you're berthing in Napier Harbour, exploring Mahia Peninsula's sheltered anchorages, or preparing for longer passages north toward the Wairarapa or south toward Masterton, comprehensive location-specific insurance is essential.",
    boatingContext: "Napier Harbour offers good protection and excellent facilities serving both cruising and commercial vessels. The harbour entrance is relatively straightforward in most conditions. Hawke's Bay itself is reasonably protected from southwesterly swells by Mahia Peninsula, which extends eastward and creates a natural breakwater. Mahia Peninsula's eastern and southern coasts offer numerous scenic anchorages and cruising opportunities, though passage around the Peninsula requires careful planning to avoid strong currents and variable wind patterns.\n\nBeyond Mahia lies the open Pacific, with exposure to easterly swells. Many Napier-based yachts venture south along the east coast toward Wellington or north toward the central North Island. These passages expose vessels to longer fetch exposure and more challenging weather patterns than Hawke's Bay's relatively protected waters.",
    coverageAdvice: "Napier yacht owners should ensure comprehensive third-party liability and hull coverage reflecting both protected harbour conditions and east-coast offshore exposure. For any boat regularly venturing beyond Mahia Peninsula—particularly south toward Wellington or north toward Wairarapa—explicit offshore cover of at least 50+ nautical miles is essential. Heavy weather cover is important; easterly swells can affect Hawke's Bay during weather pattern changes, and more exposed waters further offshore can present significant challenges.\n\nLoss of engine cover is valuable for any boat making longer east-coast passages. Consider additional salvage liability for vessels regularly operating in the more exposed offshore waters. Crew accident cover is recommended for any boat regularly transiting between major harbour systems.",
    localFacts: [
      "Mahia Peninsula is a scenic cruising destination offering dramatic anchorages and protection from northwesterly winds.",
      "Cape Kidnappers is a spectacular coastal feature but requires careful navigation and passage timing.",
      "Napier Harbour is well-protected but can be exposed to surge during large easterly swells.",
      "Hawke's Bay's east-coast location provides good exposure to northeasterly weather patterns and moderate swell exposure.",
    ],
    faqs: [
      {
        question: "Is Mahia Peninsula cruising suitable for moderate-sized cruising yachts?",
        answer: "Yes, for competent crews. The Peninsula's eastern and southern coasts offer scenic anchorages, but passage around the Peninsula requires navigation skills and careful current management. Ensure your insurance covers the Peninsula passage and offshore operations.",
      },
      {
        question: "What coverage do I need for Wellington passages from Napier?",
        answer: "Explicit offshore cover of at least 50 nautical miles, with heavy weather provisions. The passage is 200+ nautical miles depending on the route. This is a significant east-coast voyage requiring careful planning.",
      },
      {
        question: "How does Hawke's Bay's east-coast location affect weather?",
        answer: "Hawke's Bay is exposed to easterly swells and can experience rapid weather changes. Ensure your policy covers storm damage and loss of engine provisions for passages exposed to open-ocean conditions.",
      },
      {
        question: "Is Napier a good provisioning hub for North Island passages?",
        answer: "Yes. Napier offers full facilities and is a natural stopping point for yachts transiting the North Island east coast. Many vessels use it as a provisioning base for longer north or south passages.",
      },
    ],
  },
];
