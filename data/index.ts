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
    basePrice: 2500, // USD - INCREASED from $1,750
    localPrice: 7750, // TND - INCREASED from 5,500 (using 3.1 rate)
    euroPrice: 2300, // EUR - INCREASED from €1,610
    deliveryTime: "3-4 weeks", // More realistic
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
        id: "bw-core-4",
        name: "Contact & Lead Capture System",
        description: "Advanced forms with CRM integration",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bw-addon-1",
        name: "Fast Loading (95+ Lighthouse Score)",
        description: "Advanced performance optimization",
        price: 400,
        category: "addon",
      },
      {
        id: "bw-addon-2",
        name: "Blog/CMS Integration",
        description: "WordPress or headless CMS setup",
        price: 750,
        category: "addon",
      },
      {
        id: "bw-addon-3",
        name: "Newsletter & Email Marketing",
        description: "Mailchimp/Klaviyo integration + automation",
        price: 500,
        category: "addon",
      },
      {
        id: "bw-addon-4",
        name: "Google Maps & Location Services",
        description: "Interactive maps + store locator",
        price: 300,
        category: "addon",
      },
      {
        id: "bw-addon-5",
        name: "Social Media Integration",
        description: "Auto-posting + social feeds + sharing",
        price: 400,
        category: "addon",
      },
      {
        id: "bw-addon-6",
        name: "Google Analytics 4 + Tag Manager",
        description: "Complete tracking setup with dashboards",
        price: 350,
        category: "addon",
      },
      {
        id: "bw-addon-7",
        name: "AI Chatbot Integration",
        description: "Custom-trained chatbot with 24/7 support",
        price: 1200,
        category: "addon",
      },
      {
        id: "bw-addon-8",
        name: "Premium Security Suite",
        description: "SSL, firewall, malware protection, backups",
        price: 600,
        category: "addon",
      },
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
        price: 600,
        category: "addon",
      },
      {
        id: "bw-addon-12",
        name: "E-commerce Lite Features",
        description: "Simple product listing + payment",
        price: 1500,
        category: "addon",
      },
    ],
  },
  {
    id: "showcase-website",
    title: "Showcase Website",
    description: "High-end portfolio with premium presentation features",
    basePrice: 2000, // USD - INCREASED from $1,500
    localPrice: 6200, // TND - INCREASED from 4,700
    euroPrice: 1840, // EUR - INCREASED from €1,380
    deliveryTime: "3-4 weeks", // More realistic
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
        price: 800,
        category: "addon",
      },
      {
        id: "sw-addon-2",
        name: "Video Backgrounds & Animations",
        description: "Custom animations & video integration",
        price: 600,
        category: "addon",
      },
      {
        id: "sw-addon-3",
        name: "Parallax & Scroll Effects",
        description: "Advanced scroll-triggered animations",
        price: 350,
        category: "addon",
      },
      {
        id: "sw-addon-4",
        name: "3D Model & AR Integration",
        description: "Three.js models with AR viewing",
        price: 1200,
        category: "addon",
      },
      {
        id: "sw-addon-5",
        name: "Client Testimonial System",
        description: "Ratings, reviews, and trust badges",
        price: 450,
        category: "addon",
      },
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
        price: 500,
        category: "addon",
      },
      {
        id: "sw-addon-8",
        name: "PDF Portfolio Generator",
        description: "Automated PDF export of portfolio",
        price: 650,
        category: "addon",
      },
      {
        id: "sw-addon-9",
        name: "Video Introductions",
        description: "Embedded video presentations",
        price: 400,
        category: "addon",
      },
      {
        id: "sw-addon-10",
        name: "Social Proof Integration",
        description: "Live visitor counts, trust signals",
        price: 300,
        category: "addon",
      },
    ],
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    description: "Enterprise-grade online store with premium integrations",
    basePrice: 8500, // USD - INCREASED from $6,000
    localPrice: 26350, // TND - INCREASED from 12,500
    euroPrice: 7820, // EUR - INCREASED from €5,520
    deliveryTime: "6-8 weeks", // More realistic
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
        id: "ec-core-4",
        name: "Responsive & Mobile-Optimized",
        description: "Perfect mobile shopping experience",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ec-addon-1",
        name: "Advanced Inventory Management",
        description: "Low stock alerts, bulk imports",
        price: 2200,
        category: "addon",
      },
      {
        id: "ec-addon-2",
        name: "Smart Product Search & Filters",
        description: "AI-powered search with faceted filtering",
        price: 900,
        category: "addon",
      },
      {
        id: "ec-addon-3",
        name: "Abandoned Cart Recovery System",
        description: "Email/SMS sequences + automation",
        price: 800,
        category: "addon",
      },
      {
        id: "ec-addon-4",
        name: "AI Product Recommendations",
        description: "Personalized recommendations engine",
        price: 2800,
        category: "addon",
      },
      {
        id: "ec-addon-5",
        name: "AR/VR Product Previews",
        description: "3D product viewing + virtual try-on",
        price: 3500,
        category: "addon",
      },
      {
        id: "ec-addon-6",
        name: "Marketplace Multi-seller System",
        description: "Vendor dashboards + commission system",
        price: 7500,
        category: "addon",
      },
      {
        id: "ec-addon-7",
        name: "Subscription & Recurring Payments",
        description: "Membership boxes, SaaS billing",
        price: 1500,
        category: "addon",
      },
      {
        id: "ec-addon-8",
        name: "POS System Integration",
        description: "Connect online & physical store",
        price: 2000,
        category: "addon",
      },
      {
        id: "ec-addon-9",
        name: "Advanced Shipping Solutions",
        description: "Real-time rates, label printing",
        price: 1000,
        category: "addon",
      },
      {
        id: "ec-addon-10",
        name: "Customer Loyalty Program",
        description: "Points, rewards, referral system",
        price: 1600,
        category: "addon",
      },
      {
        id: "ec-addon-11",
        name: "B2B Wholesale Features",
        description: "Price lists, minimum orders, quotes",
        price: 3200,
        category: "addon",
      },
      {
        id: "ec-addon-12",
        name: "Multi-currency & Tax Support",
        description: "Automatic currency + tax calculations",
        price: 1200,
        category: "addon",
      },
    ],
  },
  {
    id: "elearning-platform",
    title: "E-Learning Platform",
    description: "Complete LMS with advanced course management",
    basePrice: 12000, // USD - INCREASED from $8,000
    localPrice: 37200, // TND - INCREASED from 20,000
    euroPrice: 11040, // EUR - INCREASED from €7,360
    deliveryTime: "8-12 weeks", // More realistic
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
        id: "el-core-4",
        name: "Video Hosting & Streaming",
        description: "Secure video delivery",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "el-addon-1",
        name: "Advanced Video Streaming & DRM",
        description: "Secure video hosting with protection",
        price: 2200,
        category: "addon",
      },
      {
        id: "el-addon-2",
        name: "Gamification & Engagement",
        description: "Badges, leaderboards, points",
        price: 1800,
        category: "addon",
      },
      {
        id: "el-addon-3",
        name: "AI Tutor & Personalization",
        description: "Adaptive learning paths",
        price: 3200,
        category: "addon",
      },
      {
        id: "el-addon-4",
        name: "SCORM/xAPI Compliance",
        description: "Enterprise LMS compatibility",
        price: 1500,
        category: "addon",
      },
      {
        id: "el-addon-5",
        name: "Certification & Badge Automation",
        description: "Digital certificates with verification",
        price: 1200,
        category: "addon",
      },
      {
        id: "el-addon-6",
        name: "Live Class Integration",
        description: "Zoom, Teams, interactive whiteboard",
        price: 1600,
        category: "addon",
      },
      {
        id: "el-addon-7",
        name: "Assignment & Grading System",
        description: "Auto-grading, peer reviews",
        price: 1400,
        category: "addon",
      },
      {
        id: "el-addon-8",
        name: "Discussion Forums & Community",
        description: "Q&A, groups, social learning",
        price: 1100,
        category: "addon",
      },
      {
        id: "el-addon-9",
        name: "Mobile App Development",
        description: "iOS & Android companion apps",
        price: 5000,
        category: "addon",
      },
      {
        id: "el-addon-10",
        name: "Corporate Training Features",
        description: "Team management, reporting",
        price: 2500,
        category: "addon",
      },
    ],
  },
  {
    id: "saas-platform",
    title: "SaaS Platform",
    description: "Custom cloud solution with microservices architecture",
    basePrice: 18000, // USD - INCREASED from $10,000
    localPrice: 55800, // TND - INCREASED from 31,000
    euroPrice: 16560, // EUR - INCREASED from €9,200
    deliveryTime: "12-16 weeks", // More realistic
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
        price: 3500,
        category: "addon",
      },
      {
        id: "saas-addon-2",
        name: "Custom Analytics & Reporting",
        description: "Real-time dashboards, exports",
        price: 3000,
        category: "addon",
      },
      {
        id: "saas-addon-3",
        name: "White-label & Branding",
        description: "Custom domains, branding, themes",
        price: 4500,
        category: "addon",
      },
      {
        id: "saas-addon-4",
        name: "AI/ML Module Integration",
        description: "Predictive analytics, automation",
        price: 5000,
        category: "addon",
      },
      {
        id: "saas-addon-5",
        name: "Multi-tenancy Architecture",
        description: "Data isolation, custom instances",
        price: 6500,
        category: "addon",
      },
      {
        id: "saas-addon-6",
        name: "WebSocket & Real-time Features",
        description: "Live notifications, chat, updates",
        price: 2500,
        category: "addon",
      },
      {
        id: "saas-addon-7",
        name: "Payment & Billing System",
        description: "Stripe/Braintree integration",
        price: 2800,
        category: "addon",
      },
      {
        id: "saas-addon-8",
        name: "API Rate Limiting & Monitoring",
        description: "Usage tracking, alerts, analytics",
        price: 1800,
        category: "addon",
      },
      {
        id: "saas-addon-9",
        name: "Database Optimization",
        description: "Sharding, replication, caching",
        price: 3200,
        category: "addon",
      },
      {
        id: "saas-addon-10",
        name: "Mobile App Integration",
        description: "Native iOS/Android apps",
        price: 7500,
        category: "addon",
      },
    ],
  },
  {
    id: "plugin-development",
    title: "Plugin Development",
    description: "High-quality plugins with premium support",
    basePrice: 1800, // USD - INCREASED from $1,000
    localPrice: 5580, // TND - INCREASED from 3,100
    euroPrice: 1656, // EUR - INCREASED from €920
    deliveryTime: "4-6 weeks", // More realistic
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
        price: 1200,
        category: "addon",
      },
      {
        id: "pd-addon-2",
        name: "Multisite & Network Compatibility",
        description: "Tested on large installations",
        price: 1000,
        category: "addon",
      },
      {
        id: "pd-addon-3",
        name: "Performance Optimization",
        description: "Caching, lazy loading, minification",
        price: 1000,
        category: "addon",
      },
      {
        id: "pd-addon-4",
        name: "Auto-update & License System",
        description: "Secure licensing with updates",
        price: 1400,
        category: "addon",
      },
      {
        id: "pd-addon-5",
        name: "REST API Endpoints",
        description: "Custom API for integration",
        price: 900,
        category: "addon",
      },
      {
        id: "pd-addon-6",
        name: "Import/Export & Migration",
        description: "Data migration tools",
        price: 800,
        category: "addon",
      },
      {
        id: "pd-addon-7",
        name: "Documentation & User Guides",
        description: "Comprehensive documentation",
        price: 600,
        category: "addon",
      },
      {
        id: "pd-addon-8",
        name: "Multi-language Support",
        description: "Translation-ready architecture",
        price: 700,
        category: "addon",
      },
      {
        id: "pd-addon-9",
        name: "Premium Support Package",
        description: "6 months priority support",
        price: 800,
        category: "addon",
      },
    ],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Comprehensive technical and content SEO",
    basePrice: 2000, // USD - INCREASED from $1,500
    localPrice: 6200, // TND - INCREASED from 4,900
    euroPrice: 1840, // EUR - INCREASED from €1,380
    deliveryTime: "3-4 weeks", // More realistic
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
        price: 1200,
        category: "addon",
      },
      {
        id: "seo-addon-2",
        name: "Monthly SEO Performance Reports",
        description: "3 months of tracking + recommendations",
        price: 500,
        category: "addon",
      },
      {
        id: "seo-addon-3",
        name: "International & Local SEO",
        description: "hreflang, geo-targeting, GMB",
        price: 1500,
        category: "addon",
      },
      {
        id: "seo-addon-4",
        name: "Content Strategy & Optimization",
        description: "10 pages optimized with copywriting",
        price: 1800,
        category: "addon",
      },
      {
        id: "seo-addon-5",
        name: "Schema Markup Implementation",
        description: "Rich snippets for better CTR",
        price: 900,
        category: "addon",
      },
      {
        id: "seo-addon-6",
        name: "Core Web Vitals Optimization",
        description: "Fix LCP, FID, CLS issues",
        price: 1100,
        category: "addon",
      },
      {
        id: "seo-addon-7",
        name: "Backlink Audit & Strategy",
        description: "Link profile analysis + outreach plan",
        price: 1600,
        category: "addon",
      },
      {
        id: "seo-addon-8",
        name: "E-commerce SEO Specialization",
        description: "Product page optimization",
        price: 1300,
        category: "addon",
      },
      {
        id: "seo-addon-9",
        name: "SEO Training Session",
        description: "2-hour training for your team",
        price: 400,
        category: "addon",
      },
    ],
  },
  {
    id: "custom-crm",
    title: "Custom CRM",
    description: "Tailored sales pipeline management system",
    basePrice: 14000, // USD - INCREASED from $8,500
    localPrice: 43400, // TND - INCREASED from 23,500
    euroPrice: 12880, // EUR - INCREASED from €7,820
    deliveryTime: "12-16 weeks", // More realistic
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
        price: 3500,
        category: "addon",
      },
      {
        id: "crm-addon-2",
        name: "Custom Workflows & Automation",
        description: "Visual workflow builder",
        price: 2800,
        category: "addon",
      },
      {
        id: "crm-addon-3",
        name: "Mobile App & Offline Sync",
        description: "iOS/Android app with sync",
        price: 4500,
        category: "addon",
      },
      {
        id: "crm-addon-4",
        name: "AI Lead Scoring & Prioritization",
        description: "Predictive scoring + recommendations",
        price: 3200,
        category: "addon",
      },
      {
        id: "crm-addon-5",
        name: "Calendar & Meeting Scheduling",
        description: "Google/Outlook sync, booking pages",
        price: 1800,
        category: "addon",
      },
      {
        id: "crm-addon-6",
        name: "Document & Contract Management",
        description: "E-signatures, templates, storage",
        price: 2200,
        category: "addon",
      },
      {
        id: "crm-addon-7",
        name: "Integration with 3rd Party Tools",
        description: "API connections to your stack",
        price: 2000,
        category: "addon",
      },
      {
        id: "crm-addon-8",
        name: "Custom Reporting & Dashboards",
        description: "Advanced analytics and visualization",
        price: 2500,
        category: "addon",
      },
      {
        id: "crm-addon-9",
        name: "Voice & Call Integration",
        description: "VoIP integration, call recording",
        price: 1800,
        category: "addon",
      },
      {
        id: "crm-addon-10",
        name: "Team Collaboration Features",
        description: "Notes, tasks, internal messaging",
        price: 1500,
        category: "addon",
      },
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Add cutting-edge AI capabilities to your systems",
    basePrice: 5500, // USD - INCREASED from $3,800
    localPrice: 17050, // TND - INCREASED from 11,500
    euroPrice: 5060, // EUR - INCREASED from €3,496
    deliveryTime: "5-7 weeks", // More realistic
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
        price: 6000,
        category: "addon",
      },
      {
        id: "ai-addon-2",
        name: "Voice & Speech Interface",
        description: "Speech-to-text, voice commands",
        price: 3200,
        category: "addon",
      },
      {
        id: "ai-addon-3",
        name: "Automated Content Generation",
        description: "Articles, social media, product descriptions",
        price: 1800,
        category: "addon",
      },
      {
        id: "ai-addon-4",
        name: "Computer Vision & Image Analysis",
        description: "Image recognition, OCR, analysis",
        price: 4500,
        category: "addon",
      },
      {
        id: "ai-addon-5",
        name: "Predictive Analytics Dashboard",
        description: "Forecasting, trend analysis, insights",
        price: 3800,
        category: "addon",
      },
      {
        id: "ai-addon-6",
        name: "Chatbot Training & Optimization",
        description: "Conversation flows, NLP tuning",
        price: 2200,
        category: "addon",
      },
      {
        id: "ai-addon-7",
        name: "AI-Powered Search",
        description: "Semantic search, natural language queries",
        price: 2800,
        category: "addon",
      },
      {
        id: "ai-addon-8",
        name: "Sentiment Analysis Integration",
        description: "Customer feedback, social media monitoring",
        price: 1900,
        category: "addon",
      },
      {
        id: "ai-addon-9",
        name: "Document Processing Automation",
        description: "PDF parsing, data extraction",
        price: 2500,
        category: "addon",
      },
    ],
  },
  {
    id: "web3-development",
    title: "Web3 Development",
    description: "Blockchain and smart contract solutions",
    basePrice: 12000, // USD - INCREASED from $8,000
    localPrice: 37200, // TND - INCREASED from 24,800
    euroPrice: 11040, // EUR - INCREASED from €7,360
    deliveryTime: "8-16 weeks", // More realistic
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
        price: 7500,
        category: "addon",
      },
      {
        id: "web3-addon-2",
        name: "NFT Marketplace Development",
        description: "Minting, trading, royalties",
        price: 10000,
        category: "addon",
      },
      {
        id: "web3-addon-3",
        name: "DAO Integration & Governance",
        description: "Voting, proposals, treasury management",
        price: 4000,
        category: "addon",
      },
      {
        id: "web3-addon-4",
        name: "DeFi Protocol Integration",
        description: "Liquidity pools, yield farming",
        price: 9000,
        category: "addon",
      },
      {
        id: "web3-addon-5",
        name: "Cross-chain Bridge Development",
        description: "Multi-chain compatibility",
        price: 12000,
        category: "addon",
      },
      {
        id: "web3-addon-6",
        name: "Web3 Authentication (Wallet Connect)",
        description: "Crypto wallet login, non-custodial",
        price: 2800,
        category: "addon",
      },
      {
        id: "web3-addon-7",
        name: "Blockchain Analytics Dashboard",
        description: "Transaction tracking, analytics",
        price: 3500,
        category: "addon",
      },
      {
        id: "web3-addon-8",
        name: "Gas Optimization Service",
        description: "Reduce transaction costs",
        price: 2200,
        category: "addon",
      },
      {
        id: "web3-addon-9",
        name: "Audit & Security Review",
        description: "Comprehensive security assessment",
        price: 5000,
        category: "addon",
      },
    ],
  },
  // NEW: Booking & Appointment System
  {
    id: "booking-system",
    title: "Booking & Appointment Platform",
    description:
      "Complete scheduling system with calendar integration and automated reminders",
    basePrice: 6500, // USD
    localPrice: 20150, // TND (6500 × 3.1)
    euroPrice: 5980, // EUR (6500 × 0.92)
    deliveryTime: "5-7 weeks",
    popular: true,
    features: [
      {
        id: "bs-core-1",
        name: "Multi-calendar Integration",
        description: "Sync with Google, Outlook, Apple calendars",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bs-core-2",
        name: "Automated Reminders",
        description: "Email & SMS reminders, confirmations",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bs-core-3",
        name: "Online Payment Integration",
        description: "Stripe, PayPal, payment processing",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bs-addon-1",
        name: "Mobile App for Providers",
        price: 4500,
        category: "addon",
      },
      {
        id: "bs-addon-2",
        name: "CRM Integration",
        price: 1800,
        category: "addon",
      },
      {
        id: "bs-addon-3",
        name: "Waitlist Management",
        price: 900,
        category: "addon",
      },
      {
        id: "bs-addon-4",
        name: "Video Consultation Integration",
        price: 1500,
        category: "addon",
      },
      {
        id: "bs-addon-5",
        name: "Multi-location Support",
        price: 1200,
        category: "addon",
      },
      {
        id: "bs-addon-6",
        name: "Class/Group Booking",
        price: 1100,
        category: "addon",
      },
      {
        id: "bs-addon-7",
        name: "Resource Management",
        price: 1600,
        category: "addon",
      },
    ],
  },
  {
    id: "real-estate-portal",
    title: "Real Estate Platform",
    description: "Property listings with virtual tours and agent management",
    basePrice: 9500, // USD
    localPrice: 29450, // TND
    euroPrice: 8740, // EUR
    deliveryTime: "8-10 weeks",
    popular: true,
    features: [
      {
        id: "re-core-1",
        name: "Property Listing Management",
        description: "Unlimited listings with advanced filters",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "re-core-2",
        name: "Virtual Tour Integration",
        description: "360° tours, video walkthroughs",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "re-core-3",
        name: "Agent & Broker CRM",
        description: "Lead management, client tracking",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "re-addon-1",
        name: "Mortgage Calculator & Tools",
        price: 1200,
        category: "addon",
      },
      {
        id: "re-addon-2",
        name: "Interactive Map Integration",
        price: 1800,
        category: "addon",
      },
      {
        id: "re-addon-3",
        name: "AI Property Recommendations",
        price: 2500,
        category: "addon",
      },
      {
        id: "re-addon-4",
        name: "Document Management (e-sign)",
        price: 1600,
        category: "addon",
      },
      {
        id: "re-addon-5",
        name: "Mobile App for Agents",
        price: 5000,
        category: "addon",
      },
      {
        id: "re-addon-6",
        name: "Neighborhood & School Data",
        price: 1400,
        category: "addon",
      },
      {
        id: "re-addon-7",
        name: "Multi-language Support",
        price: 2000,
        category: "addon",
      },
    ],
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    description: "Complete event planning, ticketing, and management solution",
    basePrice: 7500, // USD
    localPrice: 23250, // TND
    euroPrice: 6900, // EUR
    deliveryTime: "6-8 weeks",
    features: [
      {
        id: "em-core-1",
        name: "Ticketing & Registration",
        description: "Multiple ticket types, promo codes",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "em-core-2",
        name: "Event Calendar & Scheduling",
        description: "Recurring events, series management",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "em-core-3",
        name: "Attendee Management",
        description: "Check-in, badges, networking",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "em-addon-1",
        name: "Virtual Event Capabilities",
        price: 2800,
        category: "addon",
      },
      {
        id: "em-addon-2",
        name: "Sponsorship Management",
        price: 1500,
        category: "addon",
      },
      {
        id: "em-addon-3",
        name: "Mobile Event App",
        price: 4200,
        category: "addon",
      },
      {
        id: "em-addon-4",
        name: "Session & Speaker Management",
        price: 1300,
        category: "addon",
      },
      {
        id: "em-addon-5",
        name: "Venue & Floor Plan Management",
        price: 1100,
        category: "addon",
      },
      {
        id: "em-addon-6",
        name: "Networking & Matchmaking",
        price: 1900,
        category: "addon",
      },
      {
        id: "em-addon-7",
        name: "Post-event Analytics",
        price: 1400,
        category: "addon",
      },
    ],
  },
  {
    id: "membership-site",
    title: "Membership & Subscription Platform",
    description: "Gated content with recurring payments and member management",
    basePrice: 7000, // USD
    localPrice: 21700, // TND
    euroPrice: 6440, // EUR
    deliveryTime: "6-8 weeks",
    popular: true,
    features: [
      {
        id: "ms-core-1",
        name: "Recurring Payment System",
        description: "Stripe, PayPal subscriptions",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ms-core-2",
        name: "Content Gating & Dripping",
        description: "Schedule content release",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ms-core-3",
        name: "Member Directory & Profiles",
        description: "Custom member profiles",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ms-addon-1",
        name: "Multiple Membership Tiers",
        price: 1200,
        category: "addon",
      },
      {
        id: "ms-addon-2",
        name: "Community Forums",
        price: 1800,
        category: "addon",
      },
      {
        id: "ms-addon-3",
        name: "Learning Management Integration",
        price: 2200,
        category: "addon",
      },
      {
        id: "ms-addon-4",
        name: "Private Messaging System",
        price: 1500,
        category: "addon",
      },
      {
        id: "ms-addon-5",
        name: "Member Analytics Dashboard",
        price: 1300,
        category: "addon",
      },
      {
        id: "ms-addon-6",
        name: "Automated Onboarding Sequences",
        price: 1100,
        category: "addon",
      },
      {
        id: "ms-addon-7",
        name: "Webinar & Live Stream Integration",
        price: 1900,
        category: "addon",
      },
    ],
  },
  {
    id: "logistics-platform",
    title: "Logistics & Delivery Platform",
    description:
      "Complete order management, route optimization, and fleet tracking system",
    basePrice: 12000, // USD - High complexity
    localPrice: 37200, // TND
    euroPrice: 11040, // EUR
    deliveryTime: "12-16 weeks",
    features: [
      {
        id: "log-core-1",
        name: "Order & Shipment Management",
        description: "Real-time tracking, status updates",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "log-core-2",
        name: "Route Optimization Engine",
        description: "AI-powered delivery routes",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "log-core-3",
        name: "Fleet & Driver Management",
        description: "Vehicle tracking, driver assignments",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "log-addon-1",
        name: "Warehouse Management",
        price: 3500,
        category: "addon",
      },
      {
        id: "log-addon-2",
        name: "Carrier API Integrations",
        price: 2800,
        category: "addon",
      },
      {
        id: "log-addon-3",
        name: "Proof of Delivery System",
        price: 1600,
        category: "addon",
      },
      {
        id: "log-addon-4",
        name: "Mobile Driver App",
        price: 5000,
        category: "addon",
      },
      {
        id: "log-addon-5",
        name: "Billing & Invoicing Automation",
        price: 2200,
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