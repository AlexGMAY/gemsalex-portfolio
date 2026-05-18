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
    title: "CEO at Elinsas Loans and Microfinance - RD Congo",
    avatar: "/avatars/logo-elin.jpg",
  },
  {
    quote:
      "Working with Alexander was a game-changer for our marketing agency. He built our entire website from scratch - the design is stunning, and it's mobile friendly but more importantly, it loads fast and converts visitors into clients. The custom CMS he created saves us hours of work daily. We worked together in collaboration for 1 month, I was creating website contents and Merveille was building the technical infrastructure - the website. Truly a partner who understands business needs.",
    name: "Hayfa Khalil",
    title: "Marketing Director at ABC Digitale - Tunisia",
    avatar: "/avatars/logo-abcd.jpg",
  },
  {
    quote:
      "GGTE needed a modern, professional website that reflected our construction expertise. Mr Alexander delivered a stunning platform that showcases our projects beautifully. The site performance is exceptional, and the admin panel makes content updates effortless. Our project inquiries have doubled since launch.",
    name: "Mr Dieu Tankwe Mulundu",
    title: "CEO at GGTE Construction - RD Congo",
    avatar: "/avatars/logo-ggte.jpg",
  },
  {
    quote:
      "As a microfinance SaaS startup, we needed both technical excellence and business acumen. Merveille built our entire microfinance platform architecture, implemented secure communication systems, and created an intuitive user experience. And he delivered an exceptional product. Now our company runs smoothly, our clients love the platform, and we've seen a 30% increase in user retention. Our company management is easier, and Merveille maintains the system with care.",
    name: "Mr Guelor Songie",
    title: "CEO and Founder at Vision Business Microfinance - RD Congo",
    avatar: "./logo-MA.png",
  },
  {
    quote:
      "Mr Merveille Alexandre, who is also our Instructor, solved our business problems. He build our website soutien scolaire in 1 week and, he helped with SEO 100%(pagespeed result) and performance optimization 98%(pagespeed result). The Website he built is reliable, easy to use. He's our instructor and strategic partner.",
    name: "Raoudha Bhira",
    title: "Director at centre formation Leaderforma - France",
    avatar: "/avatars/logo-leader-forma.png",
  },

  // {
  //   quote:
  //     "I met Mr Alexandre in a cafe to buy an iphone from him and his brother and it didn't work but we discovered our mutual profession. We ended up working together on our showcase website ONE-BEAT RECORDS which was ugly and unprofessional. We discussed the redesign and more freelacnce works. He redesigned our website with little contents using of course our old ones. And I loved the result. The design is stunning, minimal, but more importantly, it loads fast and converts visitors into clients seamlessly which is great for Records since we work with many artists. So, I recommend him for any website project, he is a partner who delivers results.",
  //   name: "John Doe",
  //   title: "Director at ONE-BEAT RECORDS - England (UK)",
  //   avatar: "/avatars/logo-one-beat.png",
  // },
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
  gbpPrice?: number; // GBP price (optional - can be set manually or calculated)
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
    basePrice: 2500, // USD
    gbpPrice: 1969, // GBP (2500 ÷ 1.27)
    euroPrice: 2300, // EUR
    deliveryTime: "3-4 weeks",
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
    basePrice: 2000, // USD
    gbpPrice: 1575, // GBP (2000 ÷ 1.27)
    euroPrice: 1840, // EUR
    deliveryTime: "3-4 weeks",
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
    basePrice: 8500, // USD
    gbpPrice: 6693, // GBP (8500 ÷ 1.27)
    euroPrice: 7820, // EUR
    deliveryTime: "6-8 weeks",
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
    basePrice: 12000, // USD
    gbpPrice: 9449, // GBP (12000 ÷ 1.27)
    euroPrice: 11040, // EUR
    deliveryTime: "8-12 weeks",
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
    basePrice: 18000, // USD
    gbpPrice: 14173, // GBP (18000 ÷ 1.27)
    euroPrice: 16560, // EUR
    deliveryTime: "12-16 weeks",
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
    basePrice: 1800, // USD
    gbpPrice: 1417, // GBP (1800 ÷ 1.27)
    euroPrice: 1656, // EUR
    deliveryTime: "4-6 weeks",
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
    basePrice: 2000, // USD
    gbpPrice: 1575, // GBP (2000 ÷ 1.27)
    euroPrice: 1840, // EUR
    deliveryTime: "3-4 weeks",
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
    basePrice: 14000, // USD
    gbpPrice: 11024, // GBP (14000 ÷ 1.27)
    euroPrice: 12880, // EUR
    deliveryTime: "12-16 weeks",
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
    basePrice: 5500, // USD
    gbpPrice: 4331, // GBP (5500 ÷ 1.27)
    euroPrice: 5060, // EUR
    deliveryTime: "5-7 weeks",
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
    basePrice: 12000, // USD
    gbpPrice: 9449, // GBP (12000 ÷ 1.27)
    euroPrice: 11040, // EUR
    deliveryTime: "8-16 weeks",
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
  {
    id: "booking-system",
    title: "Booking & Appointment Platform",
    description:
      "Complete scheduling system with calendar integration and automated reminders",
    basePrice: 6500, // USD
    gbpPrice: 5118, // GBP (6500 ÷ 1.27)
    euroPrice: 5980, // EUR
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
        price: 5500,
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
    gbpPrice: 7480, // GBP (9500 ÷ 1.27)
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
    gbpPrice: 5906, // GBP (7500 ÷ 1.27)
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
    gbpPrice: 5512, // GBP (7000 ÷ 1.27)
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
    basePrice: 12000, // USD
    gbpPrice: 9449, // GBP (12000 ÷ 1.27)
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
    title: "Believe Patisserie",
    category: "Nextjs",
    img: "/projects/believe_patisserie.png",
    github: "#",
    live: "https://chezbelieve.com/",
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
    title: "Leader Soutien Scolaire",
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
    title: "Leaderforma Institute",
    category: "Nextjs",
    img: "/projects/leaderformaweb.png",
    github: "#",
    live: "https://leaderforma.com",
    techStack: [
      "/next.svg",
      "/tail.svg",
      "/re.svg",
      "/git.svg",
      "/mongodb.svg",
    ],
  },
  // {
  //   id: 7,
  //   title: "Cyberperformance Review Platform",
  //   category: "Mern",
  //   img: "/p3.svg",
  //   github: "#",
  //   live: "https://cyberperformance.vercel.app",
  //   techStack: [
  //     "/re.svg",
  //     "/tail.svg",
  //     "/git.svg",
  //     "/node.png",
  //     "/express.png",
  //     "/mongodb.svg",
  //   ],
  // },
  {
    id: 7,
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
    id: 8,
    title: "RDCEMPLOIS Platform",
    category: "SaaS",
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
    id: 9,
    title: "Zando Market",
    category: "Nextjs",
    img: "/projects/zandokin.png",
    github: "https://github.com/AlexGMAY/Zando-Central-Market",
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
    id: 10,
    title: "Suburbia Skateboard Store",
    category: "Nextjs",
    img: "/projects/suburbia-skateboard-store.png",
    github: "#", // https://github.com/AlexGMAY/skateboards-store
    live: "https://suburbia-store.vercel.app/",
    techStack: ["/next.svg", "/tail.svg", "/re.svg", "/git.svg"],
  },
  {
    id: 11,
    title: "SkyRise Banking Platform",
    category: "SaaS",
    img: "/projects/skyrise-finance-dashboard-pro.png",
    github: "#", // https://github.com/AlexGMAY/skyrise
    live: "https://skyriseweb.vercel.app/",
    techStack: [
      "/next.svg",
      "/tail.svg",
      "/re.svg",
      "/git.svg",
      "/app.svg",
      "/vercel.svg",
    ],
  },
  {
    id: 12,
    title: "Unidate : University Dating Platform",
    category: "Nextjs",
    img: "/projects/unidate.png",
    github: "https://github.com/AlexGMAY/unidate-main",
    live: "https://unidate-one.vercel.app/",
    techStack: [
      "/next.svg",
      "/tail.svg",
      "/re.svg",
      "/git.svg",
      "/mongodb.svg",
    ],
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


export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "english" | "excel" | "vba" | "amo";
}

// /data/index.ts - Version avec placeholders Unsplash
export const courseGalleryImages: GalleryImage[] = [
  // ENGLISH
  { id: "eng-001", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop", alt: "English class", title: "Business English", category: "english" },
  { id: "eng-002", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop", alt: "English conversation", title: "Conversation Practice", category: "english" },
  { id: "eng-003", src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop", alt: "Writing workshop", title: "Business Writing", category: "english" },
  { id: "eng-004", src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop", alt: "Speaking practice", title: "Public Speaking", category: "english" },
  { id: "eng-005", src: "https://images.unsplash.com/photo-1544717305-996b815c338c?w=800&h=600&fit=crop", alt: "Grammar session", title: "Grammar Mastery", category: "english" },
  { id: "eng-006", src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop", alt: "Interview prep", title: "Interview Preparation", category: "english" },

  // EXCEL
  { id: "exc-001", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", alt: "Excel dashboard", title: "Excel Dashboards", category: "excel" },
  { id: "exc-002", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", alt: "Data analysis", title: "Data Analysis", category: "excel" },
  { id: "exc-003", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", alt: "Excel formulas", title: "Advanced Formulas", category: "excel" },
  { id: "exc-004", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", alt: "Pivot tables", title: "Pivot Tables Mastery", category: "excel" },
  { id: "exc-005", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", alt: "Excel charts", title: "Data Visualization", category: "excel" },
  { id: "exc-006", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", alt: "Financial modeling", title: "Financial Modeling", category: "excel" },

  // VBA
  { id: "vba-001", src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop", alt: "VBA coding", title: "VBA Programming", category: "vba" },
  { id: "vba-002", src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop", alt: "Automation", title: "Workflow Automation", category: "vba" },
  { id: "vba-003", src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=600&fit=crop", alt: "Excel macros", title: "Macro Development", category: "vba" },
  { id: "vba-004", src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop", alt: "UserForms", title: "Custom Interfaces", category: "vba" },
  { id: "vba-005", src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=600&fit=crop", alt: "Database integration", title: "Database Connectivity", category: "vba" },

  // AMO
  { id: "amo-001", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", alt: "AMO training", title: "AMO Fundamentals", category: "amo" },
  { id: "amo-002", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", alt: "Advanced AMO", title: "Advanced Techniques", category: "amo" },
  { id: "amo-003", src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop", alt: "AMO workshop", title: "Practical Applications", category: "amo" },
  { id: "amo-004", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", alt: "Optimization", title: "Performance Optimization", category: "amo" },
  { id: "amo-005", src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop", alt: "Integration", title: "System Integration", category: "amo" },
];


// export const courseGalleryImages: GalleryImage[] = [
//   // ENGLISH COURSES (6 images)
//   {
//     id: "eng-001",
//     src: "/gallery/courses/english-business-speaking.jpg",
//     alt: "Business English speaking session",
//     title: "Business English Communication",
//     category: "english",
//   },
//   {
//     id: "eng-002",
//     src: "/gallery/courses/english-pronunciation.jpg",
//     alt: "English pronunciation coaching",
//     title: "Accent Reduction & Pronunciation",
//     category: "english",
//   },
//   {
//     id: "eng-003",
//     src: "/gallery/courses/english-writing.jpg",
//     alt: "English writing workshop",
//     title: "Professional Email & Report Writing",
//     category: "english",
//   },
//   {
//     id: "eng-004",
//     src: "/gallery/courses/english-interview.jpg",
//     alt: "English interview preparation",
//     title: "Job Interview Preparation",
//     category: "english",
//   },
//   {
//     id: "eng-005",
//     src: "/gallery/courses/english-conversation.jpg",
//     alt: "English conversation practice",
//     title: "Fluent Conversation Practice",
//     category: "english",
//   },
//   {
//     id: "eng-006",
//     src: "/gallery/courses/english-grammar.jpg",
//     alt: "English grammar intensive",
//     title: "Grammar Intensive Workshop",
//     category: "english",
//   },

//   // EXCEL COURSES (6 images)
//   {
//     id: "exc-001",
//     src: "/gallery/courses/excel-basics.jpg",
//     alt: "Excel basics training",
//     title: "Excel Fundamentals",
//     category: "excel",
//   },
//   {
//     id: "exc-002",
//     src: "/gallery/courses/excel-dashboard.jpg",
//     alt: "Excel dashboard creation",
//     title: "Interactive Dashboards",
//     category: "excel",
//   },
//   {
//     id: "exc-003",
//     src: "/gallery/courses/excel-pivot.jpg",
//     alt: "Excel pivot tables training",
//     title: "Advanced Pivot Tables",
//     category: "excel",
//   },
//   {
//     id: "exc-004",
//     src: "/gallery/courses/excel-charts.jpg",
//     alt: "Excel charts and graphs",
//     title: "Data Visualization Mastery",
//     category: "excel",
//   },
//   {
//     id: "exc-005",
//     src: "/gallery/courses/excel-power-query.jpg",
//     alt: "Excel Power Query training",
//     title: "Power Query & Data Transformation",
//     category: "excel",
//   },
//   {
//     id: "exc-006",
//     src: "/gallery/courses/excel-financial.jpg",
//     alt: "Excel financial modeling",
//     title: "Financial Modeling",
//     category: "excel",
//   },

//   // VBA COURSES (5 images)
//   {
//     id: "vba-001",
//     src: "/gallery/courses/vba-automation.jpg",
//     alt: "VBA automation session",
//     title: "Excel VBA Automation",
//     category: "vba",
//   },
//   {
//     id: "vba-002",
//     src: "/gallery/courses/vba-macro.jpg",
//     alt: "VBA macro development",
//     title: "Advanced Macro Development",
//     category: "vba",
//   },
//   {
//     id: "vba-003",
//     src: "/gallery/courses/vba-userform.jpg",
//     alt: "VBA UserForm design",
//     title: "Custom UserForm Interfaces",
//     category: "vba",
//   },
//   {
//     id: "vba-004",
//     src: "/gallery/courses/vba-database.jpg",
//     alt: "VBA database integration",
//     title: "Database Integration",
//     category: "vba",
//   },
//   {
//     id: "vba-005",
//     src: "/gallery/courses/vba-debugging.jpg",
//     alt: "VBA debugging session",
//     title: "Debugging & Error Handling",
//     category: "vba",
//   },

//   // AMO COURSES (5 images)
//   {
//     id: "amo-001",
//     src: "/gallery/courses/amo-fundamentals.jpg",
//     alt: "AMO fundamentals training",
//     title: "AMO Fundamentals",
//     category: "amo",
//   },
//   {
//     id: "amo-002",
//     src: "/gallery/courses/amo-advanced.jpg",
//     alt: "AMO advanced techniques",
//     title: "Advanced AMO Techniques",
//     category: "amo",
//   },
//   {
//     id: "amo-003",
//     src: "/gallery/courses/amo-practical.jpg",
//     alt: "AMO practical application",
//     title: "Practical Applications",
//     category: "amo",
//   },
//   {
//     id: "amo-004",
//     src: "/gallery/courses/amo-optimization.jpg",
//     alt: "AMO optimization session",
//     title: "Performance Optimization",
//     category: "amo",
//   },
//   {
//     id: "amo-005",
//     src: "/gallery/courses/amo-integration.jpg",
//     alt: "AMO integration workshop",
//     title: "System Integration",
//     category: "amo",
//   },
// ];