import { ReactNode } from "react";

export const navItems = [
  { name: "About Me", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Pricing", link: "/pricing" },
  { name: "Products", link: "/products" },
  { name: "Gallery", link: "/gallery" },
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
  // {
  //   quote:
  //     "Most developers just write code. Merveille solves business problems. He automated our entire client onboarding process, reducing manual work by 15 hours per week. The system he built is reliable, easy to use, and has scaled perfectly as we've grown. He's more than a developer - he's a strategic partner.",
  //   name: "Marcus Thorne",
  //   title: "Operations Director at ScaleRight Inc",
  //   avatar: "/avatars/logo-abcd.jpg",
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
  localPrice?: number; // Fixed TND
  deliveryTime: string;
  popular?: boolean;
  features: Feature[];
}


export const services: Service[] = [
  {
    id: 'business-website',
    title: 'Business Website',
    description: 'Premium website with conversion-focused design and guaranteed performance',
    basePrice: 1750,
    localPrice: 5500,
    deliveryTime: '2-3 weeks',
    popular: true,
    features: [
      {
        id: 'bw-core-1',
        name: 'Custom High-End Design',
        description: 'Figma-designed UI with 3 revisions',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'bw-core-2',
        name: 'Advanced SEO Setup',
        description: 'Technical SEO + content strategy',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'bw-core-3',
        name: 'Mobile-Optimized',
        description: 'Perfect scores on all devices',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'bw-addon-1',
        name: 'Fast Loading (90+ Lighthouse)',
        price: 200,
        category: 'addon'
      },
      {
        id: 'bw-addon-2',
        name: 'Blog Integration',
        price: 250,
        category: 'addon'
      },
      {
        id: 'bw-addon-3',
        name: 'Newsletter System',
        price: 300,
        category: 'addon'
      },
      {
        id: 'bw-addon-4',
        name: 'Google Maps Integration',
        price: 150,
        category: 'addon'
      },
      {
        id: 'bw-addon-5',
        name: 'Social Media Integration',
        price: 225,
        category: 'addon'
      },
      {
        id: 'bw-addon-6',
        name: 'Google Analytics Setup',
        price: 175,
        category: 'addon'
      },
      {
        id: 'bw-addon-7',
        name: 'AI Chatbot Integration',
        price: 600,
        category: 'addon'
      },
      {
        id: 'bw-addon-8',
        name: 'Premium Security Suite',
        price: 450,
        category: 'addon'
      }
    ]
  },
  {
    id: 'showcase-website',
    title: 'Showcase Website',
    description: 'High-end portfolio with premium presentation features',
    basePrice: 1500,
    localPrice: 4700,
    deliveryTime: '2-3 weeks',
    features: [
      {
        id: 'sw-core-1',
        name: 'Minimalist Premium UI',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'sw-core-2',
        name: 'Performance Optimized',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'sw-core-3',
        name: 'Contact Form',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'sw-addon-1',
        name: 'Gallery & Portfolio System',
        price: 300,
        category: 'addon'
      },
      {
        id: 'sw-addon-2',
        name: 'Video Backgrounds',
        price: 350,
        category: 'addon'
      },
      {
        id: 'sw-addon-3',
        name: 'Parallax Scrolling',
        price: 250,
        category: 'addon'
      },
      {
        id: 'sw-addon-4',
        name: '3D Model Integration',
        price: 600,
        category: 'addon'
      },
      {
        id: 'sw-addon-5',
        name: 'Client Testimonial System',
        price: 200,
        category: 'addon'
      }
    ]
  },
  {
    id: 'ecommerce-store',
    title: 'E-Commerce Store',
    description: 'Enterprise-grade online store with premium integrations',
    basePrice: 4000,
    localPrice: 12500,
    deliveryTime: '4-6 weeks',
    popular: true,
    features: [
      {
        id: 'ec-core-1',
        name: 'Product Management (100 SKUs)',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'ec-core-2',
        name: 'Payment Gateways',
        description: 'Stripe/PayPal/Local options',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'ec-core-3',
        name: 'Cart & Checkout System',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'ec-addon-1',
        name: 'Inventory Management',
        price: 600,
        category: 'addon'
      },
      {
        id: 'ec-addon-2',
        name: 'Product Search & Filters',
        price: 500,
        category: 'addon'
      },
      {
        id: 'ec-addon-3',
        name: 'Abandoned Cart Recovery',
        price: 400,
        category: 'addon'
      },
      {
        id: 'ec-addon-4',
        name: 'AI Product Recommendations',
        price: 900,
        category: 'addon'
      },
      {
        id: 'ec-addon-5',
        name: 'AR Product Previews',
        price: 1500,
        category: 'addon'
      },
      {
        id: 'ec-addon-6',
        name: 'Subscription System',
        price: 800,
        category: 'addon'
      }
    ]
  },
  {
    id: 'elearning-platform',
    title: 'E-Learning Platform',
    description: 'Complete LMS with advanced course management',
    basePrice: 6000,
    localPrice: 19000,
    deliveryTime: '6-8 weeks',
    features: [
      {
        id: 'el-core-1',
        name: 'Student Dashboard',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'el-core-2',
        name: 'Payment Gateway Integration',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'el-core-3',
        name: 'Course Management',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'el-addon-1',
        name: 'Video Streaming',
        price: 1000,
        category: 'addon'
      },
      {
        id: 'el-addon-2',
        name: 'Gamification System',
        price: 900,
        category: 'addon'
      },
      {
        id: 'el-addon-3',
        name: 'AI Tutor Integration',
        price: 1200,
        category: 'addon'
      },
      {
        id: 'el-addon-4',
        name: 'SCORM Compliance',
        price: 800,
        category: 'addon'
      },
      {
        id: 'el-addon-5',
        name: 'Certification Automation',
        price: 700,
        category: 'addon'
      }
    ]
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform',
    description: 'Custom cloud solution with microservices architecture',
    basePrice: 10000,
    deliveryTime: '8-12 weeks',
    features: [
      {
        id: 'saas-core-1',
        name: 'Cloud Hosting Setup',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'saas-core-2',
        name: 'User Authentication',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'saas-core-3',
        name: 'API Integrations',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'saas-addon-1',
        name: 'Admin Dashboard',
        price: 1250,
        category: 'addon'
      },
      {
        id: 'saas-addon-2',
        name: 'Custom Analytics',
        price: 1500,
        category: 'addon'
      },
      {
        id: 'saas-addon-3',
        name: 'White-label Solution',
        price: 2000,
        category: 'addon'
      },
      {
        id: 'saas-addon-4',
        name: 'AI Module Integration',
        price: 2500,
        category: 'addon'
      }
    ]
  },
  {
    id: 'plugin-development',
    title: 'Plugin Development',
    description: 'High-quality plugins with premium support',
    basePrice: 1000,
    localPrice: 3100,
    deliveryTime: '3-4 weeks',
    features: [
      {
        id: 'pd-core-1',
        name: 'Custom Functionality',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'pd-core-2',
        name: 'Seamless Integration',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'pd-addon-1',
        name: 'Security Enhancements',
        price: 250,
        category: 'addon'
      },
      {
        id: 'pd-addon-2',
        name: 'Multisite Compatibility',
        price: 300,
        category: 'addon'
      },
      {
        id: 'pd-addon-3',
        name: 'Performance Optimization',
        price: 350,
        category: 'addon'
      },
      {
        id: 'pd-addon-4',
        name: 'Auto-update System',
        price: 200,
        category: 'addon'
      }
    ]
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Comprehensive technical and content SEO',
    basePrice: 1250,
    localPrice: 3900,
    deliveryTime: '2 weeks',
    features: [
      {
        id: 'seo-core-1',
        name: 'Keyword Research',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'seo-core-2',
        name: 'Technical Audit',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'seo-addon-1',
        name: 'Competitor Analysis',
        price: 400,
        category: 'addon'
      },
      {
        id: 'seo-addon-2',
        name: 'Monthly SEO Reports',
        price: 250,
        category: 'addon'
      },
      {
        id: 'seo-addon-3',
        name: 'International SEO Setup',
        price: 600,
        category: 'addon'
      },
      {
        id: 'seo-addon-4',
        name: 'Content Strategy Plan',
        price: 500,
        category: 'addon'
      }
    ]
  },
  {
    id: 'custom-crm',
    title: 'Custom CRM',
    description: 'Tailored sales pipeline management system',
    basePrice: 7500,
    localPrice: 23500,
    deliveryTime: '8-12 weeks',
    features: [
      {
        id: 'crm-core-1',
        name: 'Lead Management',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'crm-core-2',
        name: 'Analytics Dashboard',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'crm-addon-1',
        name: 'Email Campaign Integration',
        price: 1000,
        category: 'addon'
      },
      {
        id: 'crm-addon-2',
        name: 'Custom Workflows',
        price: 1250,
        category: 'addon'
      },
      {
        id: 'crm-addon-3',
        name: 'Mobile App Sync',
        price: 1500,
        category: 'addon'
      },
      {
        id: 'crm-addon-4',
        name: 'AI Lead Scoring',
        price: 1800,
        category: 'addon'
      }
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Add cutting-edge AI capabilities to your systems',
    basePrice: 3500,
    localPrice: 11000,
    deliveryTime: '4-5 weeks',
    features: [
      {
        id: 'ai-core-1',
        name: 'LLM Integration (GPT/Claude)',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'ai-addon-1',
        name: 'Custom Model Fine-Tuning',
        price: 1500,
        category: 'addon'
      },
      {
        id: 'ai-addon-2',
        name: 'Voice Interface',
        price: 1200,
        category: 'addon'
      },
      {
        id: 'ai-addon-3',
        name: 'Automated Content Generation',
        price: 900,
        category: 'addon'
      }
    ]
  },
  {
    id: 'web3-development',
    title: 'Web3 Development',
    description: 'Blockchain and smart contract solutions',
    basePrice: 6000,
    deliveryTime: '6-10 weeks',
    features: [
      {
        id: 'web3-core-1',
        name: 'Smart Contract Development',
        price: 0,
        checked: true,
        category: 'core'
      },
      {
        id: 'web3-addon-1',
        name: 'Tokenomics Design',
        price: 2000,
        category: 'addon'
      },
      {
        id: 'web3-addon-2',
        name: 'NFT Marketplace',
        price: 3000,
        category: 'addon'
      },
      {
        id: 'web3-addon-3',
        name: 'DAO Integration',
        price: 2500,
        category: 'addon'
      }
    ]
  }
];

// Conversion utility (1.57 TND = 1 USD)
export const convertToTnd = (usd: number) => Math.round(usd * 1.57);


// Complete list of 9 projects
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
    id: 5,
    title: "GGTE Sarl",
    category: "Nextjs",
    img: "/avatars/logo-ggte.jpg",
    github: "https://github.com/AlexGMAY/ggtesarl",
    live: "https://ggtesarl.gemsalex.com",
    techStack: ["/next.svg", "/tail.svg", "/re.svg", "/git.svg"],
  },
  {
    id: 6,
    title: "Zando Market",
    category: "Nextjs",
    img: "/p2.svg",
    github: "https://github.com/AlexGMAY/Zando-Central-Market",
    live: "https://yourlivewebsite.com",
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
    github: "https://github.com/AlexGMAY/Cyberperformance-Review-App",
    live: "https://cyberperformance.gemsalex.com",
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
    title: "Esley Logistics",
    category: "WordPress",
    img: "/projects/esley-logistics.jpg",
    github: "#",
    live: "https://esleylogistics.fr/",
    techStack: [
      "/html.png",
      "/jquery.svg",
      "/js.svg",
      "/wordpress.svg",
      "/php.svg",
      "/css.svg",
      "/mysql.svg",
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