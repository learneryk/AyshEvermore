import proposalHero from '../assets/proposal_hero.jpg';
import weddingGold from '../assets/wedding_gold.jpg';
import birthdayLuxury from '../assets/birthday_luxury.jpg';
import corporateGala from '../assets/corporate_gala.jpg';
import surpriseGarden from '../assets/surprise_garden.jpg';

export interface SubService {
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export interface ServiceCategory {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  deliverables: string[];
  subServices: SubService[];
}

export const servicesData: ServiceCategory[] = [
  {
    name: "Love & Relationships",
    slug: "love-relationships",
    tagline: "Because some feelings deserve a moment of their own.",
    description: "Deeply personal experiences designed to nurture, celebrate, and rekindle relationships. From candle-lit setups to grand surprises, we translate your feelings into physical realities.",
    image: proposalHero,
    icon: "Heart",
    deliverables: [
      "Venue Selection",
      "Decoration & Styling",
      "Cake & Gifts Curation",
      "Photography & Videography",
      "Surprise Coordination",
      "Complete Event Management"
    ],
    subServices: [
      {
        title: "Proposal Experience",
        tagline: "A once-in-a-lifetime moment, crafted with love, planning & perfect timing.",
        description: "Whether on a private beach, a luxury rooftop, or an intimate garden, we create the perfect romantic atmosphere for your big question. Complete with candlelit paths, fresh floral setups, and glowing neon signs.",
        details: ["Candlelit pathways", "Neon 'Marry Me?' sign options", "Floral arches", "Violin/Acoustic live music booking", "Photographer coordination"]
      },
      {
        title: "Romantic Date Experience",
        tagline: "Thoughtful details, beautiful setting & memories to last a lifetime.",
        description: "Transform an ordinary evening into an extraordinary memory. We set up luxury dinner tables for two in premium private locations, complete with personalized menus and upscale styling.",
        details: ["Private dining layouts", "Customized table scape design", "Ambient fairy lights", "Cordon bleu catering connection", "Personalized keepsakes"]
      },
      {
        title: "Anniversary Experience",
        tagline: "Celebrate your journey together with elegance, emotion & unforgettable details.",
        description: "Re-live the magic of your love story. We style custom backdrops that narrate your journey together, complete with vintage themes or contemporary gold elements.",
        details: ["Memory walls", "Personalized video projections", "Premium floral decor", "Custom cakes", "Live music entertainment"]
      },
      {
        title: "Apology Experience",
        tagline: "Because every relationship deserves a second chance & a sincere moment.",
        description: "Express your heart with sincerity. We coordinate thoughtful, soft-toned, and intimate surprise setups to convey your apologies in a meaningful, stress-free setting.",
        details: ["Intimate garden configurations", "Custom apology note presentations", "Soothing light decoration", "Handpicked gifts", "Private setting assurance"]
      },
      {
        title: "Reunion Surprise",
        tagline: "Thoughtful surprises that heal, reconnect & bring hearts closer than ever.",
        description: "Welcome back someone special or bring old friends together. A warm, nostalgic ambiance decorated with photographs and shared memories.",
        details: ["Memory-lane picture hangers", "Nostalgic playlist curation", "Warm ambient styling", "Welcome-back packages", "Comfort food setups"]
      }
    ]
  },
  {
    name: "Celebration Experiences",
    slug: "celebrations",
    tagline: "Because every milestone deserves to be celebrated beautifully.",
    description: "Mark your milestones with high-end designs. Whether it's the joy of a newborn, a hard-earned graduation, or a warm housewarming, we bring family together in style.",
    image: birthdayLuxury,
    icon: "Sparkles",
    deliverables: [
      "Theme Planning",
      "Decorations & Styling",
      "Cakes & Desserts",
      "Photography & Videography",
      "Customized Gifts Curation",
      "Complete Event Coordination"
    ],
    subServices: [
      {
        title: "Birthday Experience",
        tagline: "From intimate gatherings to grand parties, we create birthdays that spark joy and unforgettable moments.",
        description: "Custom balloon arches in pastel and champagne tones, luxury table setups, and thematic backdrops designed to capture the guest of honor's personality.",
        details: ["Bespoke thematic backdrops", "Designer tier-cakes", "Upscale balloon styling", "Fun interactive booths", "Candid photography packages"]
      },
      {
        title: "Baby Shower Experience",
        tagline: "Celebrate new beginnings with tender moments, elegant themes and a touch of magic for the mom-to-be.",
        description: "Soft cream, gold, and floral backdrops, comfortable custom seating for the mom-to-be, and premium catering options to pamper guests.",
        details: ["Premium floral garlands", "Cozy lounge setups", "Baby-themed candy bar", "Mocktail drink station", "Guest memory-book station"]
      },
      {
        title: "Housewarming Experience",
        tagline: "We turn your new space into a celebration of love, warmth and beautiful beginnings with family and friends.",
        description: "Bless your new home with elegant, welcoming decor. We curate custom entryways and warm lighting to make your guests feel right at home.",
        details: ["Traditional/Contemporary entrance styling", "Warm ambient spot-lights", "High-end buffet setups", "Live instrumental music options", "Thank-you favor boxes"]
      },
      {
        title: "Graduation Experience",
        tagline: "Honor achievements and new journeys with celebrations that reflect hard work, dreams and bright futures.",
        description: "Celebrate educational milestones with sleek, modern, and inspiring setups. Graduation cap decorations, photogenic memory-walls, and fun guest layouts.",
        details: ["Academic-themed details", "Sleek photobooths", "Milestone memory walls", "Premium finger food catering", "Custom cake options"]
      },
      {
        title: "Farewell Experience",
        tagline: "Thoughtful send-offs that cherish memories, celebrate bonds and wish loved ones a journey filled with success.",
        description: "Saying goodbye is never easy, but we make the moment beautiful. Cozy setups emphasizing shared moments and well-wishes.",
        details: ["Wishes and messages board", "Nostalgic photoclips backdrop", "Elegant sit-down styling", "Personalized farewell gifts", "Warm speech setups"]
      },
      {
        title: "Family Celebration Experience",
        tagline: "Whether big or small, we bring your family together to celebrate love, laughter and the bonds that last a lifetime.",
        description: "Cousin meetups, golden anniversaries, or traditional gatherings. We build spaces that facilitate warmth, dining, and conversations.",
        details: ["Multi-generational design layouts", "Elegant sit-down banquet decor", "Family history slide presentation setup", "Interactive group games", "Family portrait photobooth"]
      }
    ]
  },
  {
    name: "The Beginning of Always (Weddings)",
    slug: "weddings",
    tagline: "Two families. Two hearts. One unforgettable beginning.",
    description: "Flawless, stress-free wedding management from pre-wedding shoots to the grand reception. We harmonize traditions, floral design, and guest management into a luxury tapestry.",
    image: weddingGold,
    icon: "Ring",
    deliverables: [
      "Venue Selection & Liaison",
      "Wedding Styling & Decor",
      "Floral Arrangements & Arches",
      "Photography & Cinematic Films",
      "Entertainment Coordination",
      "Guest Concierge & Management",
      "Complete Wedding Planning & Execution"
    ],
    subServices: [
      {
        title: "Engagement Celebration",
        tagline: "The first step towards forever.",
        description: "Elegant stages, custom ring-holder presentations, and intimate dining experiences designed to initiate the wedding journey beautifully.",
        details: ["Luxe stage design", "Ring presentation design", "Grand family banquet layout", "Traditional setup options", "Guest welcome kits"]
      },
      {
        title: "Wedding Day Experience",
        tagline: "A day you'll relive in your heart for a lifetime.",
        description: "Complete hands-on curation of your big day. We ensure everything from structural logistics to the smallest floral details run in perfect harmony.",
        details: ["Full day-of-event coordination", "Bride and groom concierge", "Exquisite bridal mandaps/altars", "Grand entry styling", "Coordination of structural vendors"]
      },
      {
        title: "Reception Celebration",
        tagline: "Where love, laughter, and family come together.",
        description: "An evening of luxury, toasts, and dancing. We design gorgeous reception stages, coordinate premium multi-cuisine banquets, and integrate light displays.",
        details: ["Chandelier & luxury lighting design", "Grand reception backdrop", "Bar & catering design", "DJs and live band setups", "Premium guest layouts"]
      },
      {
        title: "Pre-Wedding Experience",
        tagline: "Capturing the moments before the vows.",
        description: "From setting up scenic backdrops for shoots to planning intimate pre-wedding cocktail parties or traditional Haldi and Mehendi layouts.",
        details: ["Haldi & Mehendi styling", "Pre-shoot location setups", "Cocktail party themes", "Vibrant colors integration", "Custom signages"]
      },
      {
        title: "Bridal Surprise Experience",
        tagline: "Because every bride deserves her own magical moment.",
        description: "A surprise room setup or a private pampering session with bridesmaids before the big day. We execute magical moments specifically for the bride.",
        details: ["Surprise bridal suite decor", "Personalized letters & gifts placement", "Pampering setup", "Exclusive photo shoot styling", "Champagne toast arrangements"]
      },
      {
        title: "Bespoke Wedding Experience",
        tagline: "Your story. Your traditions. Your forever.",
        description: "For couples seeking unique destination weddings or completely custom-themed celebrations that don't fit traditional molds.",
        details: ["Custom destination scouting", "Cross-cultural theme integration", "Tailored styling guidelines", "Custom guest accommodation styling", "End-to-end luxury management"]
      }
    ]
  },
  {
    name: "Success Deserves a Stage",
    slug: "corporate",
    tagline: "Professional. Seamless. Memorable.",
    description: "Elevate your corporate brand. We plan team-building retreats, product launches, annual days, and awards ceremonies with pristine logistics and state-of-the-art audiovisual support.",
    image: corporateGala,
    icon: "Award",
    deliverables: [
      "Venue Selection",
      "Corporate Branding Setup",
      "AV Support & Stage Lighting",
      "Photography & Videography",
      "Registration Management",
      "Hosting & Entertainment Curation",
      "Complete Event Execution"
    ],
    subServices: [
      {
        title: "Employee Appreciation Events",
        tagline: "Celebrate your people and inspire a culture of gratitude and motivation.",
        description: "Create memorable evenings filled with dinner, entertainment, and customized gifts to show your appreciation for your workforce.",
        details: ["Fun themed dinners", "Employee photo zones", "Custom plaque & gift boxes", "Interactive live voting/games", "Relaxed acoustic bands"]
      },
      {
        title: "Product Launch Events",
        tagline: "Create excitement and build impact with launches that leave a lasting impression.",
        description: "We handle premium audio-visual reveal sequences, dynamic stage design, and media walls to showcase your new product to key stakeholders.",
        details: ["Dynamic curtain-drop/reveal systems", "Sleek lighting sequences", "Custom press wall backdrops", "Branded food & beverages", "Host & MC booking"]
      },
      {
        title: "Annual Day Celebrations",
        tagline: "Mark milestones and celebrate achievements with energy, pride and purpose.",
        description: "Large scale multi-tier entertainment evenings showing appreciation of the company's annual journey. From high-tech screens to elaborate catering.",
        details: ["LED visual mapping backdrop", "Custom banquet dining layouts", "Cultural performance coordination", "Statutory award support", "Professional sound setups"]
      },
      {
        title: "Team Building Experiences",
        tagline: "Stronger teams. Better collaboration. Lasting connections.",
        description: "Retreats in luxury resorts, outdoor sports events, and indoor interactive workshops tailored to enhance collaboration and bond your team.",
        details: ["Resort venue coordination", "Collaborative team games coordination", "Custom branding badges & caps", "Speaker bookings", "Evening campfire setups"]
      },
      {
        title: "Awards & Recognition Ceremonies",
        tagline: "Honour excellence and celebrate achievements that drive future success.",
        description: "Red carpet arrivals, luxury table setups, custom trophies, and pristine stage hosting to celebrate high performers.",
        details: ["Red carpet & stanchion entryways", "Premium trophy showcase design", "Elegant banquet styles", "Professional photography & media kits", "Custom music cues"]
      },
      {
        title: "Training & Workshop Events",
        tagline: "Empower minds and drive growth through engaging and goal-focused sessions.",
        description: "Intimate and focused layouts. Comfortable seating, sound clarity, presentation equipment, and high-quality refreshments.",
        details: ["Classroom/U-shape seating layouts", "Pristine acoustic setups", "Projector & screen packages", "Continuous gourmet tea/coffee bar", "Branded note-taking packages"]
      }
    ]
  },
  {
    name: "Your Dream. Our Creation.",
    slug: "surprises",
    tagline: "Some moments don't fit into a category. That's where we begin.",
    description: "For the dreamers, the experimentalists, and the planners of impossible surprises. We make custom themes, midnight surprises, and memories across the globe.",
    image: surpriseGarden,
    icon: "Gift",
    deliverables: [
      "Concept Creation",
      "Theme Design & Blueprint",
      "Decorations & Styling",
      "Gifts & Personal Touches",
      "Photography & Videography",
      "Surprise Coordination",
      "Complete Event Management"
    ],
    subServices: [
      {
        title: "Theme-Based Celebrations",
        tagline: "Step into a world of imagination. Custom themes crafted to bring your dream celebration beautifully to life.",
        description: "Vintage Hollywood, Parisian garden, bohemian picnic, or futuristic black-tie. We conceptualize, procure, and install specific detailed worlds.",
        details: ["Unique material procurement", "Complete set construction", "Thematic props design", "Coordinated dress code prompts", "Immersive caterer matching"]
      },
      {
        title: "Midnight Surprise Experiences",
        tagline: "Unexpected. Magical. Unforgettable. We create enchanting surprises that transform ordinary nights into extraordinary memories.",
        description: "A complete room transformation, flash mobs, or roadside candle lit setups at the stroke of midnight. Handled with absolute stealth.",
        details: ["Stealth crew logistics", "Room setup transformation while away", "LED light arrays & balloons", "Midnight custom cake deliveries", "Musician stealth booking"]
      },
      {
        title: "Personalized Dream Events",
        tagline: "Thoughtful. Intimate. Yours. Every detail is personal, because your story deserves a celebration as unique as you are.",
        description: "A private movie screening for two in an outdoor garden, a custom memory room detailing every year of friendship, or an artistic showcase.",
        details: ["Outdoor cinema projection setups", "Personalized timelines display", "Private butler dining service", "Curated gifts from around the world", "Private location sourcing"]
      },
      {
        title: "Destination Surprise Experiences",
        tagline: "Love. Adventure. Discovery. We take your celebrations places—creating unforgettable memories across the globe.",
        description: "Surprise vacations, proposals on cliffs, or luxury getaways to beautiful spots around the world. We handle flights, hotels, and local surprises.",
        details: ["Travel booking liaison", "Global vendor coordination", "Custom logistics mapping", "On-site planner support", "Local culture integration styling"]
      },
      {
        title: "Memory Lane Experiences",
        tagline: "A walk down memory lane, beautifully recreated. We celebrate your journey with nostalgia, love & meaning.",
        description: "We collect old letters, voicemails, photographs, and records, and display them in a gallery setup, transforming recollections into a tactile reality.",
        details: ["Artistic photo gallery grid installations", "Voice record playboxes", "Vintage framing design", "Warm nostalgic candlelight setups", "Handmade custom journal keepsakes"]
      },
      {
        title: "The Impossible Idea Experience",
        tagline: "You dream it. We make it real. From the unthinkable to the extraordinary—there's no limit to what we can create.",
        description: "Have a crazy idea? A surprise flash mob, a helicopter reveal, or a customized quest around the city? We design and execute complex concepts.",
        details: ["Sourcing rare materials/permits", "City-wide timeline mapping", "Actor/Performer coordination", "Secret communications channel design", "Precision execution team"]
      }
    ]
  }
];
