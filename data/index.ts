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


export const courseGalleryImages: GalleryImage[] = [
  // ENGLISH COURSES
  {
    id: "eng-001",
    src: "/courses-pics/anglais-abdou-ali.png",
    alt: "Beginner English Learner Abdou Ali",
    title: "Beginner English Learner Abdou Ali",
    category: "english",
  },
  {
    id: "eng-002",
    src: "/courses-pics/anglais-alexandra-hansart.png",
    alt: "Intermediate English coaching",
    title: "Intermediate English coaching",
    category: "english",
  },
  {
    id: "eng-003",
    src: "/courses-pics/anglais-camus-eddy.png",
    alt: "Beginner English coaching Camus Eddy",
    title: "Beginner English coaching Camus Eddy",
    category: "english",
  },
  {
    id: "eng-004",
    src: "/courses-pics/anglais-celine-herve.png",
    alt: "English for sports professionals",
    title: "English for sports professionals",
    category: "english",
  },
  {
    id: "eng-005",
    src: "/courses-pics/anglais-Daouda-faye.png",
    alt: "Beginner English lessons with Daouda Faye",
    title: "Beginner English lessons with Daouda Faye",
    category: "english",
  },
  {
    id: "eng-006",
    src: "/courses-pics/anglais-dominique-eon.png",
    alt: "Beginner English lessons with Dominique Eon",
    title: "Beginner English lessons with Dominique Eon",
    category: "english",
  },
 {
    id: "eng-007",
    src: "/courses-pics/anglais-estaban-martinez.png",
    alt: "Advanced English Conversations with Estaban Martinez",
    title: "Advanced English Conversations with Estaban Martinez",
    category: "english",
  },
  {
    id: "eng-008",
    src: "/courses-pics/anglais-julien-philippe.png",
    alt: "Beginner English Conversations with Julien Philippe",
    title: "Beginner English Conversations with Julien Philippe",
    category: "english",
  },
 {
    id: "eng-009",
    src: "/courses-pics/anglais-estelle-moreau-v1.png",
    alt: "Beginner English Conversations with Estelle Moreau",
    title: "Beginner English Conversations with Estelle Moreau",
    category: "english",
  },
 {
    id: "eng-010",
    src: "/courses-pics/anglais-estelle-moreau-v2.png",
    alt: "Beginner English Conversations with Estelle Moreau",
    title: "Beginner English Conversations with Estelle Moreau",
    category: "english",
  },
 {
    id: "eng-011",
    src: "/courses-pics/anglais-gambaro-valentin.png",
    alt: "Intermediate English Lessons with Valentin Gambaro",
    title: "Intermediate English Lessons with Valentin Gambaro",
    category: "english",
  },
 {
    id: "eng-012",
    src: "/courses-pics/anglais-herve-meubry.png",
    alt: "Beginner English Conversations with Herve Meubry",
    title: "Beginner English Conversations with Herve Meubry",
    category: "english",
  },
 {
    id: "eng-013",
    src: "/courses-pics/anglais-todde-jeremyy.png",
    alt: "Beginner English Lessons with Todde Jeremy",
    title: "Beginner English Lessons with Todde Jeremy",
    category: "english",
  },
 {
    id: "eng-014",
    src: "/courses-pics/benoit-anglais-cours.png",
    alt: "Beginner English Lessons with Benoit",
    title: "Beginner English Lessons with Benoit",
    category: "english",
  },
 {
    id: "eng-015",
    src: "/courses-pics/brice-lof-english-course.png",
    alt: "Advanced English Lessons with Brice Lof",
    title: "Advanced English Lessons with Brice Lof",
    category: "english",
  },
 {
    id: "eng-016",
    src: "/courses-pics/irastorza-christine-english.png",
    alt: "Beginner English Lessons with Christine",
    title: "Beginner English Lessons with Christine",
    category: "english",
  },
 {
    id: "eng-017",
    src: "/courses-pics/massimo-usai-english.png",
    alt: "Beginner English Lessons with Usai Massimo",
    title: "Beginner English Lessons with Usai Massimo",
    category: "english",
  },
 {
    id: "eng-018",
    src: "/courses-pics/thomas-pascal-english.png",
    alt: "Beginner English Lessons with Thomas Pascal",
    title: "Beginner English Lessons with Thomas Pascal",
    category: "english",
  },
 {
    id: "eng-019",
    src: "/courses-pics/mathias-albaladejo-anglais.png",
    alt: "Beginner English Lessons with Mathias Albaladejo",
    title: "Beginner English Lessons with Mathias Albaladejo",
    category: "english",
  },


  // EXCEL COURSES (6 images)
  {
    id: "exc-001",
    src: "/courses-pics/excel-avec-lakhlifi.png",
    alt: "Excel basics training with Lakhlifi",
    title: "Excel Fundamentals",
    category: "excel",
  },
  {
    id: "exc-002",
    src: "/courses-pics/excel-hamel-antoine-2.png",
    alt: "Intermediate Excel lessons with Hamel Antoine",
    title: "Intermediate Excel lessons with Hamel Antoine",
    category: "excel",
  }
];

export interface PricingPack {
  hours: number;
  price: number;
  discount: number;
  contents: string[];
}

export interface PricingCourse {
  id: string;
  name: string;
  hourlyRate: number;
  packs: PricingPack[];
  icon: React.ReactNode;
  color: string;
  colorName: string;
  category: string;
}

// Données de prix pour chaque cours et pack
export const pricingCourses: PricingCourse[] = [
  // LANGUAGES & COMMUNICATION
  {
    id: "english",
    name: "English",
    hourlyRate: 35,
    category: "languages",
    packs: [
      {
        hours: 5,
        price: 165,
        discount: 6,
        contents: [
          "Needs assessment & goal setting",
          "Basic conversation skills",
          "Business vocabulary fundamentals",
          "Email writing basics",
          "Progress review & next steps",
        ],
      },
      {
        hours: 10,
        price: 310,
        discount: 11,
        contents: [
          "Professional email & report writing",
          "Presentation skills training",
          "Meeting facilitation",
          "Negotiation vocabulary",
          "Cultural business etiquette",
          "Final assessment & certification",
        ],
      },
      {
        hours: 20,
        price: 580,
        discount: 17,
        contents: [
          "All 10h pack contents",
          "Advanced business negotiations",
          "Executive presentation coaching",
          "Cross-cultural communication",
          "Crisis communication strategies",
          "Personal branding",
          "Final project",
        ],
      },
    ],
    icon: null,
    color: "from-blue-500 to-cyan-500",
    colorName: "blue",
  },
  {
   id: "French",
    name: "French",
    hourlyRate: 35,
    category: "languages",
    packs: [
      {
        hours: 5,
        price: 165,
        discount: 6,
        contents: [
          "Needs assessment & goal setting",
          "Basic conversation skills",
          "Business vocabulary fundamentals",
          "French writing basics",
          "Progress review & next steps",
        ],
      },
      {
        hours: 10,
        price: 310,
        discount: 11,
        contents: [
          "Professional French & report writing",
          "Presentation skills training",
          "Meeting facilitation",
          "Negotiation vocabulary",
          "Cultural business etiquette",
          "Final assessment & certification",
        ],
      },
      {
        hours: 20,
        price: 580,
        discount: 17,
        contents: [
          "All 10h pack contents",
          "Advanced business negotiations",
          "Executive presentation coaching",
          "Cross-cultural communication",
          "Crisis communication strategies",
          "Personal branding",
          "Final project",
        ],
      },
    ],
    icon: null,
    color: "from-cyan-500 to-green-500",
    colorName: "cyan",
  },  

  // OFFICE & PRODUCTIVITY
  {
    id: "excel",
    name: "Excel",
    hourlyRate: 40,
    category: "office",
    packs: [
      {
        hours: 5,
        price: 190,
        discount: 5,
        contents: [
          "Interface & basic navigation",
          "Essential formulas & functions",
          "Data entry & formatting",
          "Basic charts & graphs",
          "Printing & sharing",
        ],
      },
      {
        hours: 10,
        price: 360,
        discount: 10,
        contents: [
          "Advanced formulas (VLOOKUP, IF, SUMIFS)",
          "PivotTables & PivotCharts",
          "Data validation & protection",
          "Conditional formatting",
          "Basic macros introduction",
          "Dashboard creation",
        ],
      },
      {
        hours: 20,
        price: 680,
        discount: 15,
        contents: [
          "All 10h pack contents",
          "Power Query & data transformation",
          "Advanced macro development",
          "Power Pivot & data modeling",
          "Automation with VBA",
          "Integration with other Office apps",
          "Complete business dashboard project",
        ],
      },
    ],
    icon: null,
    color: "from-green-500 to-emerald-500",
    colorName: "green",
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    hourlyRate: 50,
    category: "office",
    packs: [
      {
        hours: 5,
        price: 240,
        discount: 5,
        contents: [
          "Data analysis fundamentals",
          "Excel for data analysis",
          "Basic statistical concepts",
          "Data visualization basics",
          "Reporting & presentation skills",
        ],
      },
      {
        hours: 10,
        price: 460,
        discount: 10,
        contents: [
          "Advanced data analysis techniques",
          "Statistical modeling",
          "Predictive analytics",
          "Machine learning introduction",
          "Data storytelling",
          "Advanced visualization tools",
        ],
      },
      {
        hours: 20,
        price: 880,
        discount: 15,
        contents: [
          "All 10h pack contents",
          "Complete data analysis projects",
          "Capstone project & portfolio development",
        ],
      },
    ],
    icon: null,
    color: "from-green-500 to-cyan-500",
    colorName: "green",
  },
  {
    id: "ms-office",
    name: "MS Office Suite",
    hourlyRate: 45,
    category: "office",
    packs: [
      {
        hours: 5,
        price: 215,
        discount: 4,
        contents: [
          "Word document formatting",
          "PowerPoint presentation basics",
          "Outlook email management",
          "Teams collaboration intro",
          "Office integration fundamentals",
        ],
      },
      {
        hours: 10,
        price: 410,
        discount: 9,
        contents: [
          "Advanced Word templates & mail merge",
          "Professional PowerPoint design",
          "Outlook calendar & task management",
          "Teams advanced features",
          "OneDrive & SharePoint basics",
          "Office automation with Power Automate",
        ],
      },
      {
        hours: 20,
        price: 780,
        discount: 13,
        contents: [
          "All 10h pack contents",
          "Complete Office ecosystem mastery",
          "Advanced Power Automate flows",
          "Power Apps basics",
          "Document management systems",
          "Enterprise collaboration strategies",
          "Office productivity certification",
        ],
      },
    ],
    icon: null,
    color: "from-teal-500 to-green-500",
    colorName: "teal",
  },

  // WEB & DIGITAL MARKETING
  {
    id: "wordpress",
    name: "WordPress",
    hourlyRate: 50,
    category: "web",
    packs: [
      {
        hours: 5,
        price: 240,
        discount: 4,
        contents: [
          "WordPress installation & setup",
          "Theme selection & customization",
          "Essential plugins installation",
          "Basic page & post creation",
          "SEO fundamentals",
        ],
      },
      {
        hours: 10,
        price: 460,
        discount: 8,
        contents: [
          "Custom theme development",
          "Advanced plugin configuration",
          "E-commerce with WooCommerce",
          "Performance optimization",
          "Security best practices",
          "Google Analytics & SEO tools",
        ],
      },
      {
        hours: 20,
        price: 880,
        discount: 12,
        contents: [
          "All 10h pack contents",
          "Custom plugin development",
          "API integrations",
          "Headless WordPress setup",
          "Advanced SEO strategies",
          "Marketing automation",
          "Complete website launch",
        ],
      },
    ],
    icon: null,
    color: "from-blue-600 to-cyan-600",
    colorName: "blue",
  },
  {
    id: "seo",
    name: "SEO & Google Ads",
    hourlyRate: 50,
    category: "web",
    packs: [
      {
        hours: 5,
        price: 240,
        discount: 4,
        contents: [
          "SEO fundamentals",
          "Keyword research basics",
          "On-page optimization",
          "Google Search Console setup",
          "Competitor analysis intro",
        ],
      },
      {
        hours: 10,
        price: 460,
        discount: 8,
        contents: [
          "Advanced keyword strategy",
          "Technical SEO audit",
          "Link building strategies",
          "Google Ads campaign setup",
          "PPC optimization",
          "Analytics & reporting",
        ],
      },
      {
        hours: 20,
        price: 880,
        discount: 12,
        contents: [
          "All 10h pack contents",
          "Enterprise SEO strategy",
          "International SEO",
          "Advanced Google Ads tactics",
          "Conversion rate optimization",
          "Full marketing funnel strategy",
          "SEO certification prep",
        ],
      },
    ],
    icon: null,
    color: "from-yellow-500 to-orange-500",
    colorName: "yellow",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    hourlyRate: 55,
    category: "web",
    packs: [
      {
        hours: 5,
        price: 265,
        discount: 4,
        contents: [
          "Digital marketing overview",
          "Social media strategy basics",
          "Content marketing fundamentals",
          "Email marketing setup",
          "Analytics introduction",
        ],
      },
      {
        hours: 10,
        price: 500,
        discount: 9,
        contents: [
          "Full social media strategy",
          "Content calendar creation",
          "Email automation campaigns",
          "Google Analytics mastery",
          "Marketing funnel optimization",
          "ROI measurement",
        ],
      },
      {
        hours: 20,
        price: 960,
        discount: 13,
        contents: [
          "All 10h pack contents",
          "Omnichannel marketing strategy",
          "Marketing automation platforms",
          "Advanced analytics & attribution",
          "Budget allocation strategy",
          "Team leadership in marketing",
          "Digital marketing certification",
        ],
      },
    ],
    icon: null,
    color: "from-pink-500 to-rose-500",
    colorName: "pink",
  },

  // DEVELOPMENT & AUTOMATION
  {
    id: "web-dev",
    name: "Web Development",
    hourlyRate: 60,
    category: "development",
    packs: [
      {
        hours: 5,
        price: 290,
        discount: 3,
        contents: [
          "HTML/CSS fundamentals",
          "JavaScript basics",
          "Responsive design principles",
          "Introduction to React",
          "Version control with Git",
        ],
      },
      {
        hours: 10,
        price: 560,
        discount: 7,
        contents: [
          "Advanced JavaScript (ES6+)",
          "React.js components & hooks",
          "API integration",
          "State management",
          "Building full-stack applications",
          "Project: Portfolio website",
        ],
      },
      {
        hours: 20,
        price: 1080,
        discount: 10,
        contents: [
          "All 10h pack contents",
          "Next.js framework mastery",
          "Database design & management",
          "Authentication & security",
          "Deployment & CI/CD",
          "Performance optimization",
          "Complete SaaS project",
        ],
      },
    ],
    icon: null,
    color: "from-purple-500 to-pink-500",
    colorName: "purple",
  },
  {
    id: "vba",
    name: "VBA Automation",
    hourlyRate: 60,
    category: "development",
    packs: [
      {
        hours: 5,
        price: 290,
        discount: 3,
        contents: [
          "VBA editor & basics",
          "Variable declaration & data types",
          "Procedures & functions",
          "Basic loops & conditions",
          "Simple macro recording",
        ],
      },
      {
        hours: 10,
        price: 560,
        discount: 7,
        contents: [
          "Advanced programming concepts",
          "UserForm creation",
          "Error handling",
          "File system automation",
          "Email automation via Outlook",
          "Database connections",
        ],
      },
      {
        hours: 20,
        price: 1080,
        discount: 10,
        contents: [
          "All 10h pack contents",
          "Complete application development",
          "Class modules & OOP",
          "API integrations",
          "Add-in development",
          "Performance optimization",
          "Professional automation project",
        ],
      },
    ],
    icon: null,
    color: "from-indigo-500 to-purple-500",
    colorName: "indigo",
  },
  {
    id: "ms-access",
    name: "MS Access Database",
    hourlyRate: 55,
    category: "development",
    packs: [
      {
        hours: 5,
        price: 265,
        discount: 4,
        contents: [
          "Database design principles",
          "Table creation & relationships",
          "Basic queries (Select, Update)",
          "Form design basics",
          "Report generation",
        ],
      },
      {
        hours: 10,
        price: 500,
        discount: 9,
        contents: [
          "Advanced query design",
          "Complex form development",
          "Subforms & navigation forms",
          "Advanced reporting",
          "Macro programming",
          "Data import/export automation",
        ],
      },
      {
        hours: 20,
        price: 960,
        discount: 13,
        contents: [
          "All 10h pack contents",
          "Full application development",
          "SQL mastery",
          "Integration with Excel & SharePoint",
          "Security & user management",
          "Database maintenance",
          "Complete business solution",
        ],
      },
    ],
    icon: null,
    color: "from-blue-800 to-indigo-800",
    colorName: "blue",
  },

  // MANAGEMENT & CERTIFICATION
  {
    id: "amo",
    name: "AMO (French PM)",
    hourlyRate: 70,
    category: "management",
    packs: [
      {
        hours: 5,
        price: 340,
        discount: 3,
        contents: [
          "AMO methodology fundamentals",
          "French project management standards",
          "Client requirements analysis",
          "Documentation basics",
          "Stakeholder identification",
        ],
      },
      {
        hours: 10,
        price: 660,
        discount: 6,
        contents: [
          "Complete AMO framework mastery",
          "Risk management strategies",
          "Quality assurance processes",
          "Budget & timeline management",
          "Regulatory compliance",
          "Real case studies",
        ],
      },
      {
        hours: 20,
        price: 1280,
        discount: 9,
        contents: [
          "All 10h pack contents",
          "Advanced stakeholder management",
          "Crisis & conflict resolution",
          "Audit preparation",
          "Certification exam prep",
          "Complete project simulation",
          "Professional certification",
        ],
      },
    ],
    icon: null,
    color: "from-indigo-500 to-purple-500",
    colorName: "indigo",
  },
  {
    id: "pmp",
    name: "PMP Certification",
    hourlyRate: 75,
    category: "management",
    packs: [
      {
        hours: 5,
        price: 365,
        discount: 3,
        contents: [
          "PMP exam overview",
          "Process groups introduction",
          "Basic terminology",
          "Study strategy development",
          "Sample questions",
        ],
      },
      {
        hours: 10,
        price: 710,
        discount: 5,
        contents: [
          "All 10 knowledge areas",
          "Process groups deep dive",
          "ITTOs mastery",
          "Practice exams",
          "Weakness analysis",
          "Exam-taking strategies",
        ],
      },
      {
        hours: 20,
        price: 1380,
        discount: 8,
        contents: [
          "All 10h pack contents",
          "Full exam simulation",
          "Complex scenario analysis",
          "Formulas & calculations mastery",
          "Agile practice guide",
          "Application assistance",
          "Exam readiness certification",
        ],
      },
    ],
    icon: null,
    color: "from-red-500 to-orange-500",
    colorName: "red",
  },

  // ADVANCED TECH & DEVOPS
  {
    id: "devops",
    name: "DevOps Engineering",
    hourlyRate: 85,
    category: "advanced",
    packs: [
      {
        hours: 5,
        price: 410,
        discount: 3,
        contents: [
          "DevOps culture & principles",
          "Version control advanced",
          "CI/CD pipeline basics",
          "Containerization with Docker",
          "Infrastructure as Code intro",
        ],
      },
      {
        hours: 10,
        price: 800,
        discount: 6,
        contents: [
          "Advanced CI/CD pipelines",
          "Kubernetes orchestration",
          "Cloud platforms (AWS/Azure/GCP)",
          "Monitoring & logging",
          "Security in DevOps",
          "Automation scripts",
        ],
      },
      {
        hours: 20,
        price: 1560,
        discount: 8,
        contents: [
          "All 10h pack contents",
          "Microservices architecture",
          "Infrastructure as Code advanced",
          "Disaster recovery planning",
          "Team collaboration strategies",
          "Complete DevOps implementation",
          "Enterprise-level project",
        ],
      },
    ],
    icon: null,
    color: "from-cyan-500 to-blue-500",
    colorName: "cyan",
  },
  {
    id: "custom-software",
    name: "Custom Software",
    hourlyRate: 85,
    category: "advanced",
    packs: [
      {
        hours: 5,
        price: 410,
        discount: 3,
        contents: [
          "Requirements analysis",
          "Architecture design",
          "Technology stack selection",
          "MVP planning",
          "Development environment setup",
        ],
      },
      {
        hours: 10,
        price: 800,
        discount: 6,
        contents: [
          "Full-stack development",
          "API design & implementation",
          "Database architecture",
          "Authentication & authorization",
          "Testing strategies",
          "Deployment setup",
        ],
      },
      {
        hours: 20,
        price: 1560,
        discount: 8,
        contents: [
          "All 10h pack contents",
          "Advanced features development",
          "Performance optimization",
          "Security hardening",
          "Scalability planning",
          "Maintenance strategy",
          "Production-ready solution",
        ],
      },
    ],
    icon: null,
    color: "from-gray-500 to-gray-700",
    colorName: "gray",
  },
];

// Grouper les cours par catégorie pour l'affichage
export const pricingCategories = [
  {
    id: "languages",
    name: "Languages & Communication",
    icon: null,
    courses: pricingCourses.filter(c => c.category === "languages"),
  },
  {
    id: "office",
    name: "Office & Productivity",
    icon: null,
    courses: pricingCourses.filter(c => c.category === "office"),
  },
  {
    id: "web",
    name: "Web & Digital Marketing",
    icon: null,
    courses: pricingCourses.filter(c => c.category === "web"),
  },
  {
    id: "development",
    name: "Development & Automation",
    icon: null,
    courses: pricingCourses.filter(c => c.category === "development"),
  },
  {
    id: "management",
    name: "Management & Certification",
    icon: null,
    courses: pricingCourses.filter(c => c.category === "management"),
  },
  {
    id: "advanced",
    name: "Advanced Tech & DevOps",
    icon: null,
    courses: pricingCourses.filter(c => c.category === "advanced"),
  },
];
