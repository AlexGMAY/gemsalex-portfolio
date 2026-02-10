import { ReactNode } from "react";

export const navItems = [
  { name: "About Me", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Solutions & Pricing", link: "/solutions" },
  { name: "Courses", link: "/courses" },
  { name: "Products", link: "/products" },  
  { name: "Resources", link: "/resources" },
  { name: "Contact", link: "/contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Your vision, delivered with precision",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available in your timezone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Proven tech stack",
    description: "Built for results",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by your success",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building revenue-driving SaaS platforms",
    description: "Client success stories",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to grow your business?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];



export const testimonials = [
  {
    quote:
      "Mr Alexander transformed our loan enterprise website with SEO-optimized content that actually converts. Our online applications increased by 40% within 3 months. His strategic approach to onmine visibility combined with client-centered design delivered real business results.",
    name: "John Batubenga",
    title: "CEO at Elinsas Loans",
    avatar: "/avatars/logo-elin.jpg",
  },
  {
    quote:
      "Working with Alexander was a game-changer for our marketing agency. He built our entire website from scratch - the design is stunning, but more importantly, it loads instantly and converts visitors into clients seamlessly. The custom CMS he created saves us hours of work daily. Truly a partner who understands business needs.",
    name: "Sarah Chen",
    title: "Marketing Director at ABC Digitale",
    avatar: "/avatars/logo-abcd.jpg",
  },
  {
    quote:
      "GGTE needed a modern, professional website that reflected our construction expertise. Mr Merveille Alexander delivered a stunning platform that showcases our projects beautifully. The site performance is exceptional, and the admin panel makes content updates effortless. Our project inquiries have doubled since launch.",
    name: "Dieu Tankwe Mulundu",
    title: "CEO at GGTE Construction",
    avatar: "/avatars/logo-ggte.jpg",
  },
  {
    quote:
      "As a SaaS startup, we needed both technical excellence and business acumen. Merveille built our entire platform architecture, implemented secure payment systems, and created an intuitive user experience. His code is clean, scalable, and he delivered at schedule. One of the best technical investment we've made.",
    name: "Alex Rivera",
    title: "Founder at CloudFlow SaaS",
    avatar: "/avatars/logo-abcd.jpg",
  },
  {
    quote:
      "Most developers just write code. Merveille solves business problems. He automated our entire client onboarding process, reducing manual work by 15 hours per week. The system he built is reliable, easy to use, and has scaled perfectly as we've grown. He's more than a developer - he's a strategic partner.",
    name: "Raoudha Bhira",
    title: "Director at centre formation Leaderforma",
    avatar: "/avatars/logo-leader-forma.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
];



interface SocialMediaItem {
  id: number;
  img: string;
  alt: string;
  link?: string;
}

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: "/git.svg",
    alt: "GitHub Profile - Merveille Alexander - Fullstack Software Engineer",
    link: "https://github.com/AlexGMAY/",
  },
  {
    id: 2,
    img: "/twit.svg",
    alt: "X Profile - Merveille Alexander - Fullstack Software Engineer",
    link: "https://x.com/@themarvelbiz/",
  },
  {
    id: 3,
    img: "/link.svg",
    alt: "LinkedIn Profile - Merveille Alexander - Fullstack Software Engineer",
    link: "https://www.linkedin.com/in/alexandre-merveille-may/",
  },
];


export interface Feature {
  id: string;
  name: string;
  description?: string;
  price: number; // USD
  checked?: boolean;
  category: 'core' | 'addon';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  basePrice: number; // USD
  localPrice?: number; // TND price
  euroPrice?: number; // EUR price 
  deliveryTime: string;
  popular?: boolean;
  features: Feature[];
}


export const services: Service[] = [
  {
    id: "business-website",
    title: "Business Website",
    description:
      "Premium website with conversion-focused design and guaranteed performance",
    basePrice: 1750, // USD
    localPrice: 5500, // TND
    euroPrice: 1610, // EUR
    deliveryTime: "3-4 weeks", // Increased from 2-3 weeks (more realistic)
    popular: true,
    features: [
      {
        id: "bw-core-1",
        name: "Custom High-End Design",
        description: "Figma-designed UI with 3 revision rounds",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bw-core-2",
        name: "Advanced SEO Setup",
        description: "Technical SEO audit + on-page optimization",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bw-core-3",
        name: "Mobile-Optimized & Responsive",
        description: "Perfect scores on all devices & screen sizes",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bw-addon-1",
        name: "Fast Loading (95+ Lighthouse Score)",
        description: "Advanced performance optimization",
        price: 400, // Increased from $200
        category: "addon",
      },
      {
        id: "bw-addon-2",
        name: "Blog/CMS Integration",
        description: "WordPress or headless CMS setup",
        price: 750, // Increased from $550
        category: "addon",
      },
      {
        id: "bw-addon-3",
        name: "Newsletter & Email Marketing",
        description: "Mailchimp/Klaviyo integration + automation",
        price: 450, // Increased from $300
        category: "addon",
      },
      {
        id: "bw-addon-4",
        name: "Google Maps & Location Services",
        description: "Interactive maps + store locator",
        price: 250, // Increased from $150
        category: "addon",
      },
      {
        id: "bw-addon-5",
        name: "Social Media Integration",
        description: "Auto-posting + social feeds + sharing",
        price: 350, // Increased from $225
        category: "addon",
      },
      {
        id: "bw-addon-6",
        name: "Google Analytics 4 + Tag Manager",
        description: "Complete tracking setup with dashboards",
        price: 300, // Increased from $200
        category: "addon",
      },
      {
        id: "bw-addon-7",
        name: "AI Chatbot Integration",
        description: "Custom-trained chatbot with 24/7 support",
        price: 1200, // Increased from $800
        category: "addon",
      },
      {
        id: "bw-addon-8",
        name: "Premium Security Suite",
        description: "SSL, firewall, malware protection, backups",
        price: 600, // Increased from $450
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "bw-addon-9",
        name: "Multilingual Support",
        description: "2 additional languages (i18n setup)",
        price: 900,
        category: "addon",
      },
      {
        id: "bw-addon-10",
        name: "Accessibility Compliance (WCAG 2.1)",
        description: "ADA compliant for all users",
        price: 800,
        category: "addon",
      },
      {
        id: "bw-addon-11",
        name: "Website Maintenance (3 months)",
        description: "Updates, security patches, backups",
        price: 500,
        category: "addon",
      },
    ],
  },
  {
    id: "showcase-website",
    title: "Showcase Website",
    description: "High-end portfolio with premium presentation features",
    basePrice: 1500, // USD
    localPrice: 4700, // TND
    euroPrice: 1380, // EUR
    deliveryTime: "3-4 weeks", // Increased from 2-3 weeks
    features: [
      {
        id: "sw-core-1",
        name: "Premium Minimalist UI Design",
        description: "Award-winning design aesthetics",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "sw-core-2",
        name: "Performance Optimized",
        description: "95+ PageSpeed scores guaranteed",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "sw-core-3",
        name: "Contact & Lead Capture System",
        description: "Advanced forms with CRM integration",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "sw-addon-1",
        name: "Interactive Gallery & Portfolio",
        description: "Lightbox, filtering, categories",
        price: 850, // Increased from $650
        category: "addon",
      },
      {
        id: "sw-addon-2",
        name: "Video Backgrounds & Animations",
        description: "Custom animations & video integration",
        price: 550, // Increased from $350
        category: "addon",
      },
      {
        id: "sw-addon-3",
        name: "Parallax & Scroll Effects",
        description: "Advanced scroll-triggered animations",
        price: 300, // Increased from $150
        category: "addon",
      },
      {
        id: "sw-addon-4",
        name: "3D Model & AR Integration",
        description: "Three.js models with AR viewing",
        price: 1200, // Increased from $800
        category: "addon",
      },
      {
        id: "sw-addon-5",
        name: "Client Testimonial System",
        description: "Ratings, reviews, and trust badges",
        price: 400, // Increased from $250
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "sw-addon-6",
        name: "Case Study Presentation",
        description: "Interactive case studies with metrics",
        price: 700,
        category: "addon",
      },
      {
        id: "sw-addon-7",
        name: "Dark/Light Mode Toggle",
        description: "Custom theme switching",
        price: 450,
        category: "addon",
      },
      {
        id: "sw-addon-8",
        name: "PDF Portfolio Generator",
        description: "Automated PDF export of portfolio",
        price: 600,
        category: "addon",
      },
    ],
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    description: "Enterprise-grade online store with premium integrations",
    basePrice: 8000, // USD - CONSIDER INCREASING TO $8,000+
    localPrice: 18500, // TND
    euroPrice: 6520, // EUR
    deliveryTime: "6-8 weeks", // Increased from 4-6 weeks
    popular: true,
    features: [
      {
        id: "ec-core-1",
        name: "Product Management (Up to 200 SKUs)",
        description: "Categories, variants, inventory",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ec-core-2",
        name: "Payment Gateway Integration",
        description: "Stripe, PayPal, Apple/Google Pay",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ec-core-3",
        name: "Cart & Checkout System",
        description: "One-page checkout, guest checkout",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ec-addon-1",
        name: "Advanced Inventory Management",
        description: "Low stock alerts, bulk imports",
        price: 2200, // Increased from $1600
        category: "addon",
      },
      {
        id: "ec-addon-2",
        name: "Smart Product Search & Filters",
        description: "AI-powered search with faceted filtering",
        price: 800, // Increased from $500
        category: "addon",
      },
      {
        id: "ec-addon-3",
        name: "Abandoned Cart Recovery System",
        description: "Email/SMS sequences + automation",
        price: 700, // Increased from $400
        category: "addon",
      },
      {
        id: "ec-addon-4",
        name: "AI Product Recommendations",
        description: "Personalized recommendations engine",
        price: 2500, // Increased from $1900
        category: "addon",
      },
      {
        id: "ec-addon-5",
        name: "AR/VR Product Previews",
        description: "3D product viewing + virtual try-on",
        price: 3500, // Increased from $2500
        category: "addon",
      },
      {
        id: "ec-addon-6",
        name: "Marketplace Multi-seller System",
        description: "Vendor dashboards + commission system",
        price: 6500, // Increased from $4800
        category: "addon",
      },
      {
        id: "ec-addon-7",
        name: "Subscription & Recurring Payments",
        description: "Membership boxes, SaaS billing",
        price: 1200, // Increased from $800
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "ec-addon-8",
        name: "POS System Integration",
        description: "Connect online & physical store",
        price: 1800,
        category: "addon",
      },
      {
        id: "ec-addon-9",
        name: "Advanced Shipping Solutions",
        description: "Real-time rates, label printing",
        price: 900,
        category: "addon",
      },
      {
        id: "ec-addon-10",
        name: "Customer Loyalty Program",
        description: "Points, rewards, referral system",
        price: 1400,
        category: "addon",
      },
      {
        id: "ec-addon-11",
        name: "B2B Wholesale Features",
        description: "Price lists, minimum orders, quotes",
        price: 2800,
        category: "addon",
      },
    ],
  },
  {
    id: "elearning-platform",
    title: "E-Learning Platform",
    description: "Complete LMS with advanced course management",
    basePrice: 8000, // USD
    localPrice: 20000, // TND
    euroPrice: 7360, // EUR
    deliveryTime: "8-10 weeks", // Increased from 6-8 weeks
    features: [
      {
        id: "el-core-1",
        name: "Student & Instructor Dashboards",
        description: "Progress tracking, analytics",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "el-core-2",
        name: "Payment & Enrollment System",
        description: "One-time, subscriptions, bundles",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "el-core-3",
        name: "Course Management System",
        description: "Modules, lessons, quizzes",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "el-addon-1",
        name: "Video Streaming & DRM",
        description: "Secure video hosting with protection",
        price: 1800, // Increased from $1200
        category: "addon",
      },
      {
        id: "el-addon-2",
        name: "Gamification & Engagement",
        description: "Badges, leaderboards, points",
        price: 1600, // Increased from $1200
        category: "addon",
      },
      {
        id: "el-addon-3",
        name: "AI Tutor & Personalization",
        description: "Adaptive learning paths",
        price: 2500, // Increased from $1800
        category: "addon",
      },
      {
        id: "el-addon-4",
        name: "SCORM/xAPI Compliance",
        description: "Enterprise LMS compatibility",
        price: 1200, // Increased from $800
        category: "addon",
      },
      {
        id: "el-addon-5",
        name: "Certification & Badge Automation",
        description: "Digital certificates with verification",
        price: 1000, // Increased from $700
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "el-addon-6",
        name: "Live Class Integration",
        description: "Zoom, Teams, interactive whiteboard",
        price: 1400,
        category: "addon",
      },
      {
        id: "el-addon-7",
        name: "Assignment & Grading System",
        description: "Auto-grading, peer reviews",
        price: 1100,
        category: "addon",
      },
      {
        id: "el-addon-8",
        name: "Discussion Forums & Community",
        description: "Q&A, groups, social learning",
        price: 900,
        category: "addon",
      },
    ],
  },
  {
    id: "saas-platform",
    title: "SaaS Platform",
    description: "Custom cloud solution with microservices architecture",
    basePrice: 15000, // USD - CONSIDER INCREASING TO $15,000+
    localPrice: 38000, // TND
    euroPrice: 12500, // EUR
    deliveryTime: "12-16 weeks", // Increased from 8-12 weeks
    features: [
      {
        id: "saas-core-1",
        name: "Cloud Infrastructure Setup",
        description: "AWS/Azure/GCP with CI/CD",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "saas-core-2",
        name: "User Authentication & Roles",
        description: "OAuth, JWT, RBAC, SSO ready",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "saas-core-3",
        name: "API Development & Integration",
        description: "REST/GraphQL with documentation",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "saas-addon-1",
        name: "Advanced Admin Dashboard",
        description: "Analytics, user management, logs",
        price: 2500, // Increased from $1850
        category: "addon",
      },
      {
        id: "saas-addon-2",
        name: "Custom Analytics & Reporting",
        description: "Real-time dashboards, exports",
        price: 2200, // Increased from $1500
        category: "addon",
      },
      {
        id: "saas-addon-3",
        name: "White-label & Branding",
        description: "Custom domains, branding, themes",
        price: 3000, // Increased from $2000
        category: "addon",
      },
      {
        id: "saas-addon-4",
        name: "AI/ML Module Integration",
        description: "Predictive analytics, automation",
        price: 3500, // Increased from $2500
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "saas-addon-5",
        name: "Multi-tenancy Architecture",
        description: "Data isolation, custom instances",
        price: 4500,
        category: "addon",
      },
      {
        id: "saas-addon-6",
        name: "WebSocket & Real-time Features",
        description: "Live notifications, chat, updates",
        price: 1800,
        category: "addon",
      },
      {
        id: "saas-addon-7",
        name: "Payment & Billing System",
        description: "Stripe/Braintree integration",
        price: 2000,
        category: "addon",
      },
      {
        id: "saas-addon-8",
        name: "API Rate Limiting & Monitoring",
        description: "Usage tracking, alerts, analytics",
        price: 1200,
        category: "addon",
      },
    ],
  },
  {
    id: "plugin-development",
    title: "Plugin Development",
    description: "High-quality plugins with premium support",
    basePrice: 1000, // USD - CONSIDER INCREASING TO $1500+
    localPrice: 3100, // TND
    euroPrice: 920, // EUR
    deliveryTime: "4-5 weeks", // Increased from 3-4 weeks
    features: [
      {
        id: "pd-core-1",
        name: "Custom Functionality Development",
        description: "Tailored to your specific needs",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "pd-core-2",
        name: "Seamless Integration",
        description: "Tested with latest versions",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "pd-addon-1",
        name: "Enterprise Security Features",
        description: "Vulnerability scanning, encryption",
        price: 1200, // Increased from $850
        category: "addon",
      },
      {
        id: "pd-addon-2",
        name: "Multisite & Network Compatibility",
        description: "Tested on large installations",
        price: 900, // Increased from $650
        category: "addon",
      },
      {
        id: "pd-addon-3",
        name: "Performance Optimization",
        description: "Caching, lazy loading, minification",
        price: 900, // Increased from $650
        category: "addon",
      },
      {
        id: "pd-addon-4",
        name: "Auto-update & License System",
        description: "Secure licensing with updates",
        price: 1200, // Increased from $850
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "pd-addon-5",
        name: "REST API Endpoints",
        description: "Custom API for integration",
        price: 800,
        category: "addon",
      },
      {
        id: "pd-addon-6",
        name: "Import/Export & Migration",
        description: "Data migration tools",
        price: 700,
        category: "addon",
      },
      {
        id: "pd-addon-7",
        name: "Documentation & User Guides",
        description: "Comprehensive documentation",
        price: 500,
        category: "addon",
      },
    ],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Comprehensive technical and content SEO",
    basePrice: 1500, // USD
    localPrice: 4900, // TND
    euroPrice: 1380, // EUR
    deliveryTime: "3-4 weeks", // Increased from 2 weeks
    features: [
      {
        id: "seo-core-1",
        name: "Comprehensive Keyword Research",
        description: "500+ keywords with competition analysis",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "seo-core-2",
        name: "Technical SEO Audit & Fixes",
        description: "Full site audit with implementation",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "seo-addon-1",
        name: "Competitor Analysis Report",
        description: "10 competitors, gap analysis",
        price: 1100, // Increased from $800
        category: "addon",
      },
      {
        id: "seo-addon-2",
        name: "Monthly SEO Performance Reports",
        description: "3 months of tracking + recommendations",
        price: 400, // Increased from $250
        category: "addon",
      },
      {
        id: "seo-addon-3",
        name: "International & Local SEO",
        description: "hreflang, geo-targeting, GMB",
        price: 1200, // Increased from $850
        category: "addon",
      },
      {
        id: "seo-addon-4",
        name: "Content Strategy & Optimization",
        description: "10 pages optimized with copywriting",
        price: 1500, // Increased from $1000
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "seo-addon-5",
        name: "Schema Markup Implementation",
        description: "Rich snippets for better CTR",
        price: 700,
        category: "addon",
      },
      {
        id: "seo-addon-6",
        name: "Core Web Vitals Optimization",
        description: "Fix LCP, FID, CLS issues",
        price: 900,
        category: "addon",
      },
      {
        id: "seo-addon-7",
        name: "Backlink Audit & Strategy",
        description: "Link profile analysis + outreach plan",
        price: 1300,
        category: "addon",
      },
    ],
  },
  {
    id: "custom-crm",
    title: "Custom CRM",
    description: "Tailored sales pipeline management system",
    basePrice: 8500, // USD - CONSIDER INCREASING TO $12,000+
    localPrice: 23500, // TND
    euroPrice: 7820, // EUR
    deliveryTime: "12-16 weeks", // Increased from 8-12 weeks
    features: [
      {
        id: "crm-core-1",
        name: "Lead & Contact Management",
        description: "Import, segmentation, tracking",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "crm-core-2",
        name: "Sales Pipeline & Analytics",
        description: "Funnel visualization, forecasting",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "crm-addon-1",
        name: "Email & SMS Campaign Integration",
        description: "Automated sequences, templates",
        price: 2800, // Increased from $2000
        category: "addon",
      },
      {
        id: "crm-addon-2",
        name: "Custom Workflows & Automation",
        description: "Visual workflow builder",
        price: 2200, // Increased from $1500
        category: "addon",
      },
      {
        id: "crm-addon-3",
        name: "Mobile App & Offline Sync",
        description: "iOS/Android app with sync",
        price: 2200, // Increased from $1500
        category: "addon",
      },
      {
        id: "crm-addon-4",
        name: "AI Lead Scoring & Prioritization",
        description: "Predictive scoring + recommendations",
        price: 2500, // Increased from $1800
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "crm-addon-5",
        name: "Calendar & Meeting Scheduling",
        description: "Google/Outlook sync, booking pages",
        price: 1200,
        category: "addon",
      },
      {
        id: "crm-addon-6",
        name: "Document & Contract Management",
        description: "E-signatures, templates, storage",
        price: 1800,
        category: "addon",
      },
      {
        id: "crm-addon-7",
        name: "Integration with 3rd Party Tools",
        description: "API connections to your stack",
        price: 1500,
        category: "addon",
      },
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Add cutting-edge AI capabilities to your systems",
    basePrice: 3800, // USD
    localPrice: 11500, // TND
    euroPrice: 3496, // EUR
    deliveryTime: "5-7 weeks", // Increased from 4-5 weeks
    features: [
      {
        id: "ai-core-1",
        name: "LLM Integration (GPT-4/Claude/Gemini)",
        description: "API integration with prompt engineering",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ai-addon-1",
        name: "Custom Model Fine-Tuning & Training",
        description: "Train on your data, private hosting",
        price: 5000, // Increased from $3500
        category: "addon",
      },
      {
        id: "ai-addon-2",
        name: "Voice & Speech Interface",
        description: "Speech-to-text, voice commands",
        price: 2500, // Increased from $1800
        category: "addon",
      },
      {
        id: "ai-addon-3",
        name: "Automated Content Generation",
        description: "Articles, social media, product descriptions",
        price: 1400, // Increased from $900
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "ai-addon-4",
        name: "Computer Vision & Image Analysis",
        description: "Image recognition, OCR, analysis",
        price: 3200,
        category: "addon",
      },
      {
        id: "ai-addon-5",
        name: "Predictive Analytics Dashboard",
        description: "Forecasting, trend analysis, insights",
        price: 2800,
        category: "addon",
      },
      {
        id: "ai-addon-6",
        name: "Chatbot Training & Optimization",
        description: "Conversation flows, NLP tuning",
        price: 1600,
        category: "addon",
      },
    ],
  },
  {
    id: "web3-development",
    title: "Web3 Development",
    description: "Blockchain and smart contract solutions",
    basePrice: 12000, // USD - CONSIDER INCREASING TO $12,000+
    localPrice: 30800, // TND
    euroPrice: 10060, // EUR
    deliveryTime: "8-16 weeks", // Already good range
    features: [
      {
        id: "web3-core-1",
        name: "Smart Contract Development & Audit",
        description: "Security-focused, gas-optimized",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "web3-addon-1",
        name: "Tokenomics Design & Implementation",
        description: "ERC-20/721/1155, staking, rewards",
        price: 6000, // Increased from $4000
        category: "addon",
      },
      {
        id: "web3-addon-2",
        name: "NFT Marketplace Development",
        description: "Minting, trading, royalties",
        price: 8500, // Increased from $6000
        category: "addon",
      },
      {
        id: "web3-addon-3",
        name: "DAO Integration & Governance",
        description: "Voting, proposals, treasury management",
        price: 3500, // Increased from $2500
        category: "addon",
      },
      // NEW ADDONS:
      {
        id: "web3-addon-4",
        name: "DeFi Protocol Integration",
        description: "Liquidity pools, yield farming",
        price: 7500,
        category: "addon",
      },
      {
        id: "web3-addon-5",
        name: "Cross-chain Bridge Development",
        description: "Multi-chain compatibility",
        price: 9500,
        category: "addon",
      },
      {
        id: "web3-addon-6",
        name: "Web3 Authentication (Wallet Connect)",
        description: "Crypto wallet login, non-custodial",
        price: 2000,
        category: "addon",
      },
    ],
  },
];

// Conversion utility (3.0 TND = 1 USD)
export const convertToTnd = (usd: number) => Math.round(usd * 3.00);


// Complete list of 10 projects
export const projects = [
  {
    id: 1,
    title: "Collaboration Capital",
    category: "WordPress",
    img: "/projects/collaboration-capital.jpg",
    github: "#",
    live: "https://collaborationcapital.org",
    techStack: [
      "/html.png",
      "/css.svg",
      "/js.svg",
      "/wordpress.svg",
      "/seo.svg",
      "/php.svg",
      "/mysql.svg",
      "/jquery.svg",
    ],
  },
  {
    id: 2,
    title: "Elinsas Platform",
    category: "WordPress",
    img: "/projects/elinsas.jpg",
    github: "#",
    live: "https://elinsas.co",
    techStack: [
      "/html.png",
      "/css.svg",
      "/js.svg",
      "/wordpress.svg",
      "/seo.svg",
      "/php.svg",
      "/mysql.svg",
      "/jquery.svg",
    ],
  },
  {
    id: 3,
    title: "One Beat Records",
    category: "WordPress",
    img: "/projects/one-beat.jpg",
    github: "#",
    live: "https://one-beat.co",
    techStack: [
      "/html.png",
      "/css.svg",
      "/js.svg",
      "/jquery.svg",
      "/wordpress.svg",
      "/php.svg",
      "/mysql.svg",
    ],
  },
  {
    id: 4,
    title: "Unidate : University Dating Platform",
    category: "Nextjs",
    img: "/projects/unidate.png",
    github: "#",
    live: "https://unidate-one.vercel.app/",
    techStack: [
      "/next.svg",
      "/tail.svg",
      "/re.svg",
      "/git.svg",
      "/mongodb.svg",
    ],
  },
  {
    id: 5,
    title: "Leaderforma Soutien Scolaire",
    category: "Nextjs",
    img: "/projects/leaderforma.png",
    github: "#",
    live: "https://leader-soutien-scolaire.com/",
    techStack: [
      "/next.svg",
      "/tail.svg",
      "/re.svg",
      "/git.svg",
      "/mongodb.svg",
    ],
  },
  {
    id: 6,
    title: "Zando Market",
    category: "Nextjs",
    img: "/projects/zandokin.png",
    github: "#",
    live: "https://zandokin.vercel.app",
    techStack: [
      "/next.svg",
      "/tail.svg",
      "/re.svg",
      "/git.svg",
      "/mongodb.svg",
    ],
  },
  {
    id: 7,
    title: "Cyberperformance Review Platform",
    category: "Mern",
    img: "/p3.svg",
    github: "#",
    live: "https://cyberperformance.vercel.app",
    techStack: [
      "/re.svg",
      "/tail.svg",
      "/git.svg",
      "/node.png",
      "/express.png",
      "/mongodb.svg",
    ],
  },
  {
    id: 8,
    title: "Big Click Digitals",
    category: "WordPress",
    img: "/projects/big-click.jpg",
    github: "#",
    live: "https://abc-digitale.com",
    techStack: [
      "/html.png",
      "/css.svg",
      "/js.svg",
      "/jquery.svg",
      "/wordpress.svg",
      "/php.svg",
      "/mysql.svg",
    ],
  },
  {
    id: 9,
    title: "RDCEMPLOIS Platform",
    category: "WordPress",
    img: "/projects/rdcemplois.webp",
    github: "#",
    live: "https://rdcemplois.com",
    techStack: [
      "/html.png",
      "/css.svg",
      "/js.svg",
      "/jquery.svg",
      "/wordpress.svg",
      "/php.svg",
      "/mysql.svg",
    ],
  },
  {
    id: 10,
    title: "GGTE Sarl",
    category: "Nextjs",
    img: "/avatars/logo-ggte.jpg",
    github: "#",
    live: "https://ggtesarl.gemsalex.com",
    techStack: ["/next.svg", "/tail.svg", "/re.svg", "/git.svg"],
  },
];

export const categories = [
  "All",
  "WordPress",
  "React",
  "Nextjs",  
  "Mern",
  "SaaS",
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime: string;
  tag: string;
  category?: string;
  featured?: boolean;
  views?: number;
  progress?: number;
}


export const educationBoard = [
  {
    degree: "Secondary Diploma: Baccalauréat in Literature, Latin & Philosophy",
    institution: "Petit Séminaire de Katende, PSK CONGO RDC",
    year: "June 2013",
  },
  {
    degree: "BTS in Computer Maintenance & Networking",
    institution:
      "Institut National de Preparations Professionnelles, INPP CONGO RDC",
    year: "July 2013-2014",
  },
  {
    degree: "BTS in Applied IT for Management",
    institution: "Ecole des Formations des Cadres, EFC TUNIS, TN",
    year: "2014-2016",
  },
  {
    degree: "Bachelor in Information Systems & Software Engineering",
    institution: "Université Méditerraneene Libre de Tunis, TUNIS, TN",
    year: "2016-2019",
  },
];

export const certificationBoard = [  
  {
    name: "Google Analytics Certified",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
  {
    name: "Certified Email Marketing",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
  {
    name: "Certified Agile Scrum Master (CSM)",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
  {
    name: "Certified Agile Practioner (ACP)",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
  {
    name: "Pay Per Click (PPC)",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
];

export const courseBoard = [
  {
    name: "Advanced React",
    platform: "Udemy",
    year: "2023",
    link: "#",
  },
  {
    name: "Fullstack Web Development",
    platform: "Coursera",
    year: "2022",
    link: "#",
  },
  {
    name: "Node.js / Express: The Complete Guide",
    platform: "Udemy",
    year: "2021",
  },
  {
    name: "Android / Kotlin Development",
    platform: "Freecodecamp",
    year: "2020",
    link: "#",
  },
  {
    name: "UI/UX Design Fundamentals",
    platform: "Skillshare",
    year: "2019",
    link: "#",
  },
];

export const skills = [
  { name: "Next.js", level: 95, category: "Frontend", icon: "🅱️" },
  { name: "React", level: 90, category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", level: 88, category: "Language", icon: "📘" },
  { name: "Node.js", level: 85, category: "Backend", icon: "🟢" },
  { name: "Tailwind CSS", level: 92, category: "Frontend", icon: "🎨" },
  { name: "MongoDB", level: 80, category: "Database", icon: "🍃" },
  { name: "GraphQL", level: 75, category: "API", icon: "📊" },
  { name: "AWS", level: 70, category: "DevOps", icon: "☁️" },
];

export interface ContactMethod {
  id: string;
  name: string;
  icon: ReactNode;
  responseTime: string;
  bestFor: string[];
  action: {
    label: string;
    url: string;
  };
  colorScheme: {
    bg: string;
    text: string;
    border: string;
  };
}