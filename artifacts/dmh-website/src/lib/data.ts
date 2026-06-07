import { 
  Users, Share2, PenTool, Video, Briefcase, 
  TrendingUp, Globe, LineChart, Camera, Zap 
} from "lucide-react";

export const services = [
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    shortDesc: "Connect with audiences through powerful voices.",
    icon: Users,
    image: "/service-influencer.png",
    subServices: [
      "Influencer Marketing Campaigns",
      "Brand Collaborations",
      "Product Promotions",
      "Sponsored Content",
      "Brand Ambassador Programs",
      "Event Promotions",
      "Influencer Outreach & Management",
      "Influencer Campaign Strategy",
      "Local Influencer Promotions",
      "Celebrity Collaborations"
    ],
    benefits: [
      "Authentic brand storytelling",
      "Higher engagement rates",
      "Targeted demographic reach",
      "Increased brand trust"
    ]
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortDesc: "Dominating feeds with strategic content.",
    icon: Share2,
    image: "/service-social.png",
    subServices: [
      "Facebook Page Management",
      "Instagram Account Management",
      "YouTube Channel Management",
      "LinkedIn Management",
      "X Management",
      "Content Planning",
      "Content Calendar",
      "Posting & Scheduling",
      "Community Management",
      "Comment Handling",
      "Growth Strategy",
      "Social Media Audit"
    ],
    benefits: [
      "Consistent brand presence",
      "Community growth",
      "Data-driven content strategy",
      "Reputation management"
    ]
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    shortDesc: "Scroll-stopping visuals and narratives.",
    icon: PenTool,
    image: "/service-content.png",
    subServices: [
      "Professional Reels Creation",
      "Short Video Production",
      "Promotional Videos",
      "Corporate Videos",
      "Product Videos",
      "Brand Story Videos",
      "Testimonial Videos",
      "Explainer Videos",
      "Motion Graphics",
      "Graphic Design",
      "Carousel Posts",
      "Banner Design",
      "Thumbnail Design"
    ],
    benefits: [
      "High-converting creatives",
      "Platform-optimized formats",
      "Distinct visual identity",
      "Rapid turnaround"
    ]
  },
  {
    slug: "video-production",
    title: "Video Production",
    shortDesc: "Cinematic storytelling for modern brands.",
    icon: Video,
    image: "/service-video.png",
    subServices: [
      "Video Shoot",
      "Drone Videography",
      "Event Coverage",
      "Interview Recording",
      "Podcast Recording",
      "Video Editing",
      "Reel Editing",
      "YouTube Editing",
      "Color Grading",
      "Motion Effects",
      "Subtitles"
    ],
    benefits: [
      "Cinema-grade quality",
      "End-to-end production",
      "Expert color grading",
      "Engaging narratives"
    ]
  },
  {
    slug: "branding",
    title: "Branding Services",
    shortDesc: "Building unforgettable brand identities.",
    icon: Briefcase,
    image: "/service-branding.png",
    subServices: [
      "Logo Design",
      "Brand Identity",
      "Business Profile",
      "Company Portfolio",
      "Brand Guidelines",
      "Visiting Cards",
      "Brochures",
      "Flyers",
      "Packaging",
      "Personal Branding"
    ],
    benefits: [
      "Memorable visual identity",
      "Cohesive brand guidelines",
      "Premium market positioning",
      "Scalable design systems"
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Data-driven growth and acquisition.",
    icon: TrendingUp,
    image: "/service-digital.png",
    subServices: [
      "Social Media Marketing",
      "Facebook Ads",
      "Instagram Ads",
      "Google Ads",
      "YouTube Ads",
      "Lead Generation",
      "WhatsApp Marketing",
      "Email Marketing",
      "Remarketing",
      "Conversion Optimization",
      "Performance Marketing"
    ],
    benefits: [
      "Measurable ROI",
      "Optimized ad spend",
      "Scalable acquisition",
      "Advanced audience targeting"
    ]
  },
  {
    slug: "web-technology",
    title: "Website & Tech",
    shortDesc: "High-performance digital experiences.",
    icon: Globe,
    image: "/service-web.png",
    subServices: [
      "Business Websites",
      "E-Commerce Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Website Redesign",
      "Website Maintenance",
      "SEO",
      "Domain Setup",
      "Hosting",
      "Security",
      "Custom Web Solutions"
    ],
    benefits: [
      "Lightning-fast load times",
      "Mobile-first architecture",
      "Conversion-optimized UI/UX",
      "Robust security"
    ]
  },
  {
    slug: "business-growth",
    title: "Business Growth",
    shortDesc: "Strategic scaling for established companies.",
    icon: LineChart,
    image: "/service-digital.png",
    subServices: [
      "Digital Presence Building",
      "Online Reputation Management",
      "Google Business Profile",
      "Reviews Management",
      "Local Promotion",
      "Consultation",
      "Marketing Strategy",
      "Competitor Analysis",
      "Brand Awareness"
    ],
    benefits: [
      "Market dominance",
      "Defensible moat building",
      "Data-backed consulting",
      "Long-term valuation growth"
    ]
  },
  {
    slug: "photography",
    title: "Photography",
    shortDesc: "Capturing the essence of your product.",
    icon: Camera,
    image: "/portfolio-2.png",

    subServices: [
      "Product Photography",
      "Commercial Photography",
      "Corporate Photography",
      "Event Photography",
      "Social Media Photography",
      "Food Photography",
      "Fashion Photography"
    ],
    benefits: [
      "Studio-quality lighting",
      "Flawless retouching",
      "Commercial usage rights",
      "Art direction included"
    ]
  },
  {
    slug: "advanced-services",
    title: "Advanced Services",
    shortDesc: "Specialized solutions for unique challenges.",
    icon: Zap,
    image: "/clients-bg.png",
    subServices: [
      "Political Campaign Promotion",
      "Real Estate Marketing",
      "Hotel Promotion",
      "Restaurant Promotion",
      "Educational Marketing",
      "Healthcare Marketing",
      "Startup Launch Campaigns",
      "PR & Media Coverage",
      "Podcast Production",
      "AI Content Creation",
      "AI Voiceovers",
      "Influencer Training"
    ],
    benefits: [
      "Industry-specific expertise",
      "Cutting-edge AI adoption",
      "Discreet execution",
      "High-stakes campaign management"
    ]
  }
];

export const portfolio = [
  { id: 1, title: "Lumina Skincare", category: "Branding", image: "/portfolio-1.png" },
  { id: 2, title: "Apex Financial", category: "Websites", image: "/service-web.png" },
  { id: 3, title: "Velocity Motors", category: "Videography", image: "/service-video.png" },
  { id: 4, title: "Aura Fragrances", category: "Photography", image: "/portfolio-2.png" },
  { id: 5, title: "Nexus Tech Campaign", category: "Marketing Campaigns", image: "/service-influencer.png" },
  { id: 6, title: "Elevate Fitness Brand", category: "Branding", image: "/service-branding.png" },
  { id: 7, title: "CreatorCo Launch", category: "Marketing Campaigns", image: "/service-social.png" },
  { id: 8, title: "SilkHouse Editorial", category: "Photography", image: "/service-content.png" },
  { id: 9, title: "UrbanPulse Reels", category: "Videography", image: "/about-teaser.png" },
];

export const testimonials = [
  {
    quote: "DMH completely transformed our digital presence. Their cinematic approach to our brand story increased engagement by 400% in just one quarter.",
    author: "Sarah Jenkins",
    company: "Global Tech Innovations"
  },
  {
    quote: "Working with Darshan Media House is like having an elite Hollywood production team combined with top-tier growth hackers. Unmatched quality.",
    author: "Marcus Chen",
    company: "Aura Lifestyle"
  },
  {
    quote: "The precision and luxury feel they brought to our rebranding exceeded our expectations. They truly understand premium market positioning.",
    author: "Elena Rodriguez",
    company: "Vertex Financial"
  }
];

export const clients = [
  "Acme Corp", "Nexus", "Stark Industries", "Wayne Enterprises", 
  "Cyberdyne", "Umbrella Corp", "Massive Dynamic", "InGen"
];

export const blogPosts = [
  { id: 1, title: "The Future of AI in Premium Branding", category: "Insights", excerpt: "How top agencies are leveraging artificial intelligence without losing the human touch.", date: "Oct 12, 2023" },
  { id: 2, title: "Cinematic Storytelling in B2B Marketing", category: "Strategy", excerpt: "Why the corporate world is moving away from stale presentations to narrative-driven video.", date: "Sep 28, 2023" },
  { id: 3, title: "Navigating the Influencer Economy in 2024", category: "Marketing", excerpt: "Micro vs Macro influencers and where the real ROI lies for luxury brands.", date: "Sep 15, 2023" },
  { id: 4, title: "Designing for Dark Mode: A Luxury Approach", category: "Design", excerpt: "Why charcoal and gold continues to dominate premium digital experiences.", date: "Aug 30, 2023" },
];
