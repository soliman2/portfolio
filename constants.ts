import { ExpertiseCard, Testimonial, WorkMethod, Stat, FeaturedCaseStudy, MoreExpertiseCard } from './types';

// BRAND TOKENS
export const BRAND_COLORS = {
  PRIMARY_BLUE: '#4169E1',
  NAVY_DARK: '#2B3544',
  BACKGROUND_LIGHT: '#F8F9FA',
  TEXT_PRIMARY: '#1A1D23',
  TEXT_SECONDARY: '#6B7280',
  SUCCESS_AVAILABLE: '#10B981',
  WARNING_GOLD: '#F59E0B',
};

// HERO SKILL CARDS
export const HERO_SKILL_CARDS = [
  {
    id: 1,
    title: 'Design Systems',
    screenshot: 'RTA Portal DS',
    stat1: '5+ Systems',
    stat2: '12M+ Users',
    bgColor: 'bg-slate-900',
  },
  {
    id: 2,
    title: 'AI Projects',
    screenshot: 'AI Urban Tool',
    stat1: '3 AI Tools',
    stat2: '93% Faster',
    bgColor: 'bg-slate-900',
  },
  {
    id: 3,
    title: 'Dashboards',
    screenshot: 'DG Dashboard',
    stat1: '4+ Dashboards',
    stat2: 'Executive-Level',
    bgColor: 'bg-slate-900',
  },
  {
    id: 4,
    title: 'GITEX 2025',
    screenshot: 'Your GITEX photo',
    stat1: '🏆 Official',
    stat2: 'Recognition',
    bgColor: 'bg-gradient-to-br from-blue-900 to-purple-900',
  },
];

export const HERO_TAGLINES = [
  "Senior Product Designer — Design Systems · AI · UX Research · Service Design"
];

export const IMPACT_STATS_ROW_1: Stat[] = [
  { value: "12M+", label: "Users Served" },
  { value: "8+", label: "Years Experience" },
  { value: "93%", label: "Time Saved" },
  { value: "5+", label: "Design Systems" }
];

export const IMPACT_STATS_ROW_2: Stat[] = [
  { value: "50+", label: "Workshops Delivered" },
  { value: "500+", label: "Designers Trained" },
  { value: "🏆", label: "Official Recognition", sub: "RTA AI Center" }
];

export const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    id: 1,
    icon: "🤖",
    title: "GenAI Products",
    tagline: "Building AI-powered tools recognized for strategic impact",
    description: "Creating intelligent experiences officially recognized by RTA's AI & Data Science Center. From 'Urbanist in GITEX' to AI service platforms driving data-driven decisions.",
    stats: ["3+ AI products delivered", "🏆 Official RTA AI Center recognition", "GITEX Dubai 2025 showcase", "Strategic objectives contribution"],
    buttonText: "View GenAI Projects",
    imageAlt: "AI Urban Planning Tool Screenshot",
    imageUrl: "/thumbnails/AI Urban Design Tool thumbnail.png"
  },
  {
    id: 2,
    icon: "🎨",
    title: "Design Systems",
    tagline: "Scalable systems serving millions of users",
    description: "Building enterprise design systems for government and fintech—from RTA's mobile system serving 12M+ users to Fawry's payment platform.",
    stats: ["4 Major systems built", "12M+ users served daily", "iOS, Android, Web platforms", "RTL/LTR bilingual support"],
    buttonText: "View Design Systems",
    imageAlt: "RTA Design System in Figma",
    imageUrl: "/thumbnails/Design systm.png"
  },
  {
    id: 3,
    icon: "🏛️",
    title: "Government Services",
    tagline: "360° services connecting citizens and government",
    description: "Designing multi-stakeholder platforms handling licensing, permits, fines, and public engagement across Dubai.",
    stats: ["8+ Services designed", "80.77% user approval rate", "Multi-role journeys", "Bilingual Arabic/English"],
    buttonText: "View Government Work",
    imageAlt: "Licensing Platform Interface",
    imageUrl: "/thumbnails/Frame 1321315531.png"
  },
  {
    id: 4,
    icon: "🔬",
    title: "UX Research & Testing",
    tagline: "Research that drives executive decisions",
    description: "Leading usability testing in RTA's UX Lab—creating protocols, moderating sessions, delivering insights that influence strategy.",
    stats: ["50+ Usability sessions led", "8+ Major products tested", "Executive-ready reports", "Nielsen's heuristics applied"],
    buttonText: "View Research Approach",
    imageAlt: "UX Lab Testing Session",
    imageUrl: "/thumbnails/UX Research & Usability Lab.png"
  },
  {
    id: 5,
    icon: "👨‍🏫",
    title: "Teaching & Workshops",
    tagline: "Empowering 500+ designers across MENA",
    description: "Delivering live design systems workshops—teaching Figma mastery, systems thinking, and real-world UX practices.",
    stats: ["20+ Live sessions delivered", "500+ Designers trained", "Bilingual instruction (AR/EN)", "Real-world case studies"],
    buttonText: "View Workshop Content",
    imageAlt: "Workshop Zoom Session",
    imageUrl: "/thumbnails/Teaching & Mentorship..png"
  },
  {
    id: 6,
    icon: "📊",
    title: "Dashboards & Analytics",
    tagline: "Data-driven insights earning official recognition",
    description: "Designing executive and operational dashboards officially recognized by RTA's AI & Data Science Center for 'significantly enhancing innovation'.",
    stats: ["5+ Dashboard systems", "🏆 Official RTA AI Center recognition", "Executive to operational levels", "Real-time KPIs & insights"],
    buttonText: "View Dashboard Work",
    imageAlt: "Executive Dashboard Interface",
    imageUrl: "/thumbnails/Gemini_Generated_Image_k7ize6k7ize6k7iz.png"
  }
];

export const WORK_METHODS: WorkMethod[] = [
  {
    title: "AI-First Design",
    icon: "🤖",
    description: "I leverage GenAI to prototype faster, explore more options, and push creative boundaries. Tools like v0, Bolt, and Claude help me turn abstract ideas into working products in hours."
  },
  {
    title: "Systems Thinking",
    icon: "🎨",
    description: "Every design is part of a larger ecosystem. I build scalable, documented systems that grow with teams and maintain consistency across platforms—from mobile apps to government portals."
  },
  {
    title: "Research-Driven",
    icon: "🔬",
    description: "Real users, real testing, real insights. I've led 50+ usability sessions in RTA's UX Lab, turning findings into executive-ready recommendations that drive strategic decisions."
  },
  {
    title: "Teaching & Mentoring",
    icon: "👨‍🏫",
    description: "Knowledge scales through sharing. I've delivered 20+ workshops teaching 500+ designers across MENA to think in systems, not just screens."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "His contributions are significantly enhancing our sector's image and reputation amongst other sectors and agencies, showcasing our commitment to innovation and data excellence. These dashboards are directly contributing to RTA's strategic objectives.",
    name: "Hamad Ahmed Abdullah Abdulrahman Dhiyab",
    title: "Director, AI and Data Science Center",
    company: "Roads & Transport Authority, Dubai",
    isFeatured: true,
    badge: "🏆 Official Recognition | December 2025",
    link: "View Official Letter →"
  },
  {
    id: 2,
    quote: "His contributions to User Research and Design System were truly exceptional—he brought a deep understanding of user experience and design principles, ensuring the system was both robust and intuitive.",
    name: "Kausar Jahan",
    title: "Lead UX&CX & Product Design",
    company: "RTA Dubai"
  },
  {
    id: 3,
    quote: "One of the most reliable and detail-oriented designers I've worked with. He has strong UX thinking, a great eye for detail, and always approaches problems with a user-first mindset.",
    name: "Hesham Farag",
    title: "Chief UX Designer",
    company: "RTA Dubai"
  }
];

// FEATURED CASE STUDIES (Keep only 4 core projects)
export const FEATURED_CASE_STUDIES: FeaturedCaseStudy[] = [
  {
    id: 1,
    category: "GENAI PRODUCTS",
    headline: "AI Urban Design Tool",
    valueStatement: "First GenAI Design Lab in Dubai Government. Reduced urban planning visualization from 5 days to 8 hours — officially recognized at GITEX 2025.",
    stats: [
      { value: "93%", label: "Time Saved", context: "Processing time reduction" },
      { value: "5→8hrs", label: "TURNAROUND", context: "Days to hours" },
      { value: "GITEX", label: "2025", context: "Live demonstration" }
    ],
    ctaText: "View Case Study →",
    ctaLink: "/work/ai-urban-tool",
    imageAlt: "AI tool interface showing before/after urban visualization",
    backgroundColor: "white",
    imageUrl: "/thumbnails/AI Urban Design Tool thumbnail.png",
    gitexBadge: true
  },
  {
    id: 2,
    category: "SYSTEMS & SCALE",
    headline: "Enterprise Design Systems",
    valueStatement: "Built and maintained design systems serving 12M+ users across RTA Portal, Mobile Apps, and Licensing platforms — with full RTL/LTR bilingual support.",
    stats: [
      { value: "12M+", label: "USERS Served", context: "Across platforms" },
      { value: "5", label: "SYSTEMS", context: "Portal, Mobile, Licensing, S'hail, DDA" },
      { value: "RTL/LTR", label: "BILINGUAL", context: "Arabic & English" }
    ],
    ctaText: "View Case Study →",
    ctaLink: "/work/rta-design-system",
    imageAlt: "Design system component library showcase",
    backgroundColor: "light",
    imageUrl: "/thumbnails/Design systm.png"
  },
  {
    id: 3,
    category: "SERVICE DESIGN",
    headline: "Beach Locker Service Redesign",
    valueStatement: "Redesigned the end-to-end beach locker experience for Dubai Municipality — from mobile app to physical lockers to call center support. Delivered service blueprints, user flows, and stakeholder recommendations across digital and physical touchpoints.",
    stats: [
      { value: "360°", label: "SERVICE DESIGN", context: "Full service ecosystem" },
      { value: "11", label: "JOURNEY PHASES", context: "Discovery to re-access" },
      { value: "DM", label: "DUBAI MUNICIPALITY", context: "Government client" }
    ],
    ctaText: "View Case Study →",
    ctaLink: "/work/beach-locker",
    imageAlt: "Service blueprint showing beach locker journey across touchpoints",
    backgroundColor: "light",
    imageUrl: "/thumbnails/Thumail Beach Locker Service Redesign.png"
  },
  {
    id: 6,
    category: "UX RESEARCH",
    headline: "Leading UX Research at RTA Dubai",
    valueStatement: "Built the UX research practice from scratch — protocols, moderated and unmoderated testing, storytelling reports that drive executive decisions across 8+ government products serving 12M+ users.",
    stats: [
      { value: "50+", label: "Sessions", context: "Usability testing" },
      { value: "8", label: "Products", context: "Tested platforms" },
      { value: "12M+", label: "Users Served", context: "Total impact" }
    ],
    ctaText: "View Case Study →",
    ctaLink: "/work/ux-research-rta",
    imageAlt: "Research composition with sticky notes, screenshots, and annotation markers",
    backgroundColor: "white",
    customBadges: ["50+ Sessions", "8 Products", "12M+ Users"]
  }
];

// MORE EXPERTISE CARDS (3-card section)
export const MORE_EXPERTISE_CARDS: MoreExpertiseCard[] = [
  {
    id: 1,
    icon: "BarChart3",
    headline: "Executive Dashboards",
    description: "Data visualization for leadership decisions. Designed DG-level dashboards with AI-powered insights, KPIs, and real-time anomaly detection.",
    tags: ["Data Viz", "AI Insights", "KPIs"],
    miniStat: "DG-Level"
  },
  {
    id: 2,
    icon: "GraduationCap",
    headline: "Teaching & Mentorship",
    description: "Training the next generation of designers. Live workshops on design systems, Figma, and UX methodology for 100+ designers across MENA.",
    tags: ["Workshops", "Bootcamps", "MENA"],
    miniStat: "100+ Designers"
  },
  {
    id: 3,
    icon: "Languages",
    headline: "Bilingual Design",
    description: "Native Arabic/English design with full RTL/LTR support. Interfaces, documentation, and usability testing in both languages for diverse government audiences.",
    tags: ["Arabic", "English", "RTL/LTR"],
    miniStat: "2 Languages"
  }
];