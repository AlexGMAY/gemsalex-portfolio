import { ReactNode } from "react";

export const getNavItems = (isFrench: boolean) => [
  { name: isFrench ? "À Propos" : "About Me", link: "/about" },
  { name: isFrench ? "Projets" : "Projects", link: "/projects" },
  {
    name: isFrench ? "Solutions & Tarifs" : "Solutions & Pricing",
    link: "/solutions",
  },
  { name: isFrench ? "Cours" : "Courses", link: "/courses" },
  { name: isFrench ? "Produits" : "Products", link: "/products" },
  { name: isFrench ? "Ressources" : "Resources", link: "/resources" },
  { name: isFrench ? "Contact" : "Contact", link: "/contact" },
];

export const getGridItems = (isFrench: boolean) => [
  {
    id: 1,
    title: isFrench
      ? "Votre vision, livrée avec précision"
      : "Your vision, delivered with precision",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: isFrench
      ? "Disponible dans votre fuseau horaire"
      : "Available in your timezone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: isFrench ? "Stack technique éprouvée" : "Proven tech stack",
    description: isFrench ? "Conçu pour les résultats" : "Built for results",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: isFrench ? "Guidé par votre succès" : "Driven by your success",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: isFrench
      ? "Création de plateformes SaaS génératrices de revenus"
      : "Building revenue-driving SaaS platforms",
    description: isFrench
      ? "Témoignages de réussite clients"
      : "Client success stories",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: isFrench
      ? "Prêt à développer votre entreprise ?"
      : "Ready to grow your business?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const getTestimonials = (isFrench: boolean) => [
  {
    quote: isFrench
      ? "M. Alexander a transformé notre site d'entreprise de prêt avec un contenu optimisé SEO qui convertit réellement. Nos demandes en ligne ont augmenté de 40% en 3 mois. Son approche stratégique de la visibilité en ligne combinée à un design centré sur le client a produit de vrais résultats commerciaux."
      : "Mr Alexander transformed our loan enterprise website with SEO-optimized content that actually converts. Our online applications increased by 40% within 3 months. His strategic approach to onmine visibility combined with client-centered design delivered real business results.",
    name: "John Batubenga",
    title: "CEO at Elinsas Loans and Microfinance - RD Congo",
    avatar: "/avatars/logo-elin.jpg",
  },
  {
    quote: isFrench
      ? "Travailler avec Alexander a changé la donne pour notre agence de marketing. Il a construit notre site web entier de zéro - le design est magnifique, et il est mobile friendly mais plus important encore, il se charge rapidement et convertit les visiteurs en clients. Le CMS personnalisé qu'il a créé nous fait gagner des heures de travail chaque jour. Nous avons collaboré pendant 1 mois, je créais le contenu du site et Merveille construisait l'infrastructure technique - le site web. Vraiment un partenaire qui comprend les besoins business."
      : "Working with Alexander was a game-changer for our marketing agency. He built our entire website from scratch - the design is stunning, and it's mobile friendly but more importantly, it loads fast and converts visitors into clients. The custom CMS he created saves us hours of work daily. We worked together in collaboration for 1 month, I was creating website contents and Merveille was building the technical infrastructure - the website. Truly a partner who understands business needs.",
    name: "Hayfa Khalil",
    title: "Marketing Director at ABC Digitale - Tunisia",
    avatar: "/avatars/logo-abcd.jpg",
  },
  {
    quote: isFrench
      ? "GGTE avait besoin d'un site web moderne et professionnel qui reflète notre expertise en construction. M. Alexander a livré une plateforme magnifique qui présente nos projets de manière superbe. La performance du site est exceptionnelle, et le panneau d'administration rend les mises à jour de contenu faciles. Nos demandes de projets ont doublé depuis le lancement."
      : "GGTE needed a modern, professional website that reflected our construction expertise. Mr Alexander delivered a stunning platform that showcases our projects beautifully. The site performance is exceptional, and the admin panel makes content updates effortless. Our project inquiries have doubled since launch.",
    name: "Mr Dieu Tankwe Mulundu",
    title: "CEO at GGTE Construction - RD Congo",
    avatar: "/avatars/logo-ggte.jpg",
  },
  {
    quote: isFrench
      ? "En tant que startup SaaS de microfinance, nous avions besoin à la fois d'excellence technique et de sens des affaires. Merveille a construit toute l'architecture de notre plateforme de microfinance, implémenté des systèmes de communication sécurisés et créé une expérience utilisateur intuitive. Et il a livré un produit exceptionnel. Maintenant notre entreprise fonctionne bien, nos clients adorent la plateforme, et nous avons vu une augmentation de 30% de la rétention des utilisateurs. La gestion de notre entreprise est plus facile, et Merveille maintient le système avec soin."
      : "As a microfinance SaaS startup, we needed both technical excellence and business acumen. Merveille built our entire microfinance platform architecture, implemented secure communication systems, and created an intuitive user experience. And he delivered an exceptional product. Now our company runs smoothly, our clients love the platform, and we've seen a 30% increase in user retention. Our company management is easier, and Merveille maintains the system with care.",
    name: "Mr Guelor Songie",
    title: "CEO and Founder at Vision Business Microfinance - RD Congo",
    avatar: "./logo-MA.png",
  },
  {
    quote: isFrench
      ? "M. Merveille Alexandre, qui est aussi notre instructeur, a résolu nos problèmes commerciaux. Il a construit notre site web de soutien scolaire en 1 semaine et il a aidé avec le SEO à 100% (résultat pagespeed) et l'optimisation des performances à 98% (résultat pagespeed). Le site web qu'il a construit est fiable, facile à utiliser. C'est notre instructeur et partenaire stratégique."
      : "Mr Merveille Alexandre, who is also our Instructor, solved our business problems. He build our website soutien scolaire in 1 week and, he helped with SEO 100%(pagespeed result) and performance optimization 98%(pagespeed result). The Website he built is reliable, easy to use. He's our instructor and strategic partner.",
    name: "Raoudha Bhira",
    title: "Director at centre formation Leaderforma - France",
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

export const getSocialMedia = (isFrench: boolean): SocialMediaItem[] => [
  {
    id: 1,
    img: "/git.svg",
    alt: isFrench
      ? "Profil GitHub - Merveille Alexander - Ingénieur Logiciel Fullstack"
      : "GitHub Profile - Merveille Alexander - Fullstack Software Engineer",
    link: "https://github.com/AlexGMAY/",
  },
  {
    id: 2,
    img: "/twit.svg",
    alt: isFrench
      ? "Profil X - Merveille Alexander - Ingénieur Logiciel Fullstack"
      : "X Profile - Merveille Alexander - Fullstack Software Engineer",
    link: "https://x.com/@themarvelbiz/",
  },
  {
    id: 3,
    img: "/link.svg",
    alt: isFrench
      ? "Profil LinkedIn - Merveille Alexander - Ingénieur Logiciel Fullstack"
      : "LinkedIn Profile - Merveille Alexander - Fullstack Software Engineer",
    link: "https://www.linkedin.com/in/alexandre-merveille-may/",
  },
];

export interface Feature {
  id: string;
  name: string;
  description?: string;
  price: number;
  checked?: boolean;
  category: "core" | "addon";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  gbpPrice?: number;
  euroPrice?: number;
  deliveryTime: string;
  popular?: boolean;
  features: Feature[];
}

export const getServices = (isFrench: boolean): Service[] => [
  {
    id: "business-website",
    title: isFrench ? "Site Web Business" : "Business Website",
    description: isFrench
      ? "Site web premium avec design orienté conversion et performance garantie"
      : "Premium website with conversion-focused design and guaranteed performance",
    basePrice: 2500,
    gbpPrice: 1969,
    euroPrice: 2300,
    deliveryTime: isFrench ? "3-4 semaines" : "3-4 weeks",
    popular: true,
    features: [
      {
        id: "bw-core-1",
        name: isFrench
          ? "Design Haut de Gamme Personnalisé"
          : "Custom High-End Design",
        description: isFrench
          ? "UI conçue sur Figma avec 3 séries de révisions"
          : "Figma-designed UI with 3 revision rounds",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bw-core-2",
        name: isFrench ? "Configuration SEO Avancée" : "Advanced SEO Setup",
        description: isFrench
          ? "Audit SEO technique + optimisation on-page"
          : "Technical SEO audit + on-page optimization",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bw-core-3",
        name: isFrench
          ? "Optimisé Mobile & Responsive"
          : "Mobile-Optimized & Responsive",
        description: isFrench
          ? "Scores parfaits sur tous les appareils"
          : "Perfect scores on all devices & screen sizes",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bw-core-4",
        name: isFrench
          ? "Système de Contact & Capture de Leads"
          : "Contact & Lead Capture System",
        description: isFrench
          ? "Formulaires avancés avec intégration CRM"
          : "Advanced forms with CRM integration",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bw-addon-1",
        name: isFrench
          ? "Chargement Rapide (Score Lighthouse 95+)"
          : "Fast Loading (95+ Lighthouse Score)",
        description: isFrench
          ? "Optimisation avancée des performances"
          : "Advanced performance optimization",
        price: 400,
        category: "addon",
      },
      {
        id: "bw-addon-2",
        name: isFrench ? "Intégration Blog/CMS" : "Blog/CMS Integration",
        description: isFrench
          ? "Configuration WordPress ou CMS headless"
          : "WordPress or headless CMS setup",
        price: 750,
        category: "addon",
      },
      {
        id: "bw-addon-3",
        name: isFrench
          ? "Newsletter & Email Marketing"
          : "Newsletter & Email Marketing",
        description: isFrench
          ? "Intégration Mailchimp/Klaviyo + automatisation"
          : "Mailchimp/Klaviyo integration + automation",
        price: 500,
        category: "addon",
      },
      {
        id: "bw-addon-4",
        name: isFrench
          ? "Google Maps & Services de Localisation"
          : "Google Maps & Location Services",
        description: isFrench
          ? "Cartes interactives + localisateur de magasin"
          : "Interactive maps + store locator",
        price: 300,
        category: "addon",
      },
      {
        id: "bw-addon-5",
        name: isFrench
          ? "Intégration Réseaux Sociaux"
          : "Social Media Integration",
        description: isFrench
          ? "Publication auto + fils sociaux + partage"
          : "Auto-posting + social feeds + sharing",
        price: 400,
        category: "addon",
      },
      {
        id: "bw-addon-6",
        name: isFrench
          ? "Google Analytics 4 + Tag Manager"
          : "Google Analytics 4 + Tag Manager",
        description: isFrench
          ? "Configuration complète avec tableaux de bord"
          : "Complete tracking setup with dashboards",
        price: 350,
        category: "addon",
      },
      {
        id: "bw-addon-7",
        name: isFrench ? "Intégration Chatbot IA" : "AI Chatbot Integration",
        description: isFrench
          ? "Chatbot personnalisé avec support 24/7"
          : "Custom-trained chatbot with 24/7 support",
        price: 1200,
        category: "addon",
      },
      {
        id: "bw-addon-8",
        name: isFrench ? "Suite de Sécurité Premium" : "Premium Security Suite",
        description: isFrench
          ? "SSL, pare-feu, protection malware, sauvegardes"
          : "SSL, firewall, malware protection, backups",
        price: 600,
        category: "addon",
      },
      {
        id: "bw-addon-9",
        name: isFrench ? "Support Multilingue" : "Multilingual Support",
        description: isFrench
          ? "2 langues supplémentaires (configuration i18n)"
          : "2 additional languages (i18n setup)",
        price: 900,
        category: "addon",
      },
      {
        id: "bw-addon-10",
        name: isFrench
          ? "Conformité Accessibilité (WCAG 2.1)"
          : "Accessibility Compliance (WCAG 2.1)",
        description: isFrench
          ? "Conforme ADA pour tous les utilisateurs"
          : "ADA compliant for all users",
        price: 800,
        category: "addon",
      },
      {
        id: "bw-addon-11",
        name: isFrench
          ? "Maintenance du Site (3 mois)"
          : "Website Maintenance (3 months)",
        description: isFrench
          ? "Mises à jour, correctifs sécurité, sauvegardes"
          : "Updates, security patches, backups",
        price: 600,
        category: "addon",
      },
      {
        id: "bw-addon-12",
        name: isFrench
          ? "Fonctionnalités E-commerce Lite"
          : "E-commerce Lite Features",
        description: isFrench
          ? "Liste de produits simple + paiement"
          : "Simple product listing + payment",
        price: 1500,
        category: "addon",
      },
    ],
  },
  {
    id: "showcase-website",
    title: isFrench ? "Site Vitrine" : "Showcase Website",
    description: isFrench
      ? "Portfolio haut de gamme avec fonctionnalités de présentation premium"
      : "High-end portfolio with premium presentation features",
    basePrice: 2000,
    gbpPrice: 1575,
    euroPrice: 1840,
    deliveryTime: isFrench ? "3-4 semaines" : "3-4 weeks",
    features: [
      {
        id: "sw-core-1",
        name: isFrench
          ? "Design UI Minimaliste Premium"
          : "Premium Minimalist UI Design",
        description: isFrench
          ? "Esthétique de design primée"
          : "Award-winning design aesthetics",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "sw-core-2",
        name: isFrench ? "Performance Optimisée" : "Performance Optimized",
        description: isFrench
          ? "Scores PageSpeed 95+ garantis"
          : "95+ PageSpeed scores guaranteed",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "sw-core-3",
        name: isFrench
          ? "Système de Contact & Capture de Leads"
          : "Contact & Lead Capture System",
        description: isFrench
          ? "Formulaires avancés avec intégration CRM"
          : "Advanced forms with CRM integration",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "sw-addon-1",
        name: isFrench
          ? "Galerie Interactive & Portfolio"
          : "Interactive Gallery & Portfolio",
        description: isFrench
          ? "Lightbox, filtrage, catégories"
          : "Lightbox, filtering, categories",
        price: 800,
        category: "addon",
      },
      {
        id: "sw-addon-2",
        name: isFrench
          ? "Arrière-plans Vidéo & Animations"
          : "Video Backgrounds & Animations",
        description: isFrench
          ? "Animations personnalisées & intégration vidéo"
          : "Custom animations & video integration",
        price: 600,
        category: "addon",
      },
      {
        id: "sw-addon-3",
        name: isFrench
          ? "Effets Parallax & Scroll"
          : "Parallax & Scroll Effects",
        description: isFrench
          ? "Animations avancées déclenchées au défilement"
          : "Advanced scroll-triggered animations",
        price: 350,
        category: "addon",
      },
      {
        id: "sw-addon-4",
        name: isFrench ? "Intégration 3D & AR" : "3D Model & AR Integration",
        description: isFrench
          ? "Modèles Three.js avec visualisation AR"
          : "Three.js models with AR viewing",
        price: 1200,
        category: "addon",
      },
      {
        id: "sw-addon-5",
        name: isFrench
          ? "Système de Témoignages Clients"
          : "Client Testimonial System",
        description: isFrench
          ? "Notes, avis et badges de confiance"
          : "Ratings, reviews, and trust badges",
        price: 450,
        category: "addon",
      },
      {
        id: "sw-addon-6",
        name: isFrench
          ? "Présentation d'Études de Cas"
          : "Case Study Presentation",
        description: isFrench
          ? "Études de cas interactives avec métriques"
          : "Interactive case studies with metrics",
        price: 700,
        category: "addon",
      },
      {
        id: "sw-addon-7",
        name: isFrench ? "Bascule Mode Sombre/Clair" : "Dark/Light Mode Toggle",
        description: isFrench
          ? "Commutation de thème personnalisée"
          : "Custom theme switching",
        price: 500,
        category: "addon",
      },
      {
        id: "sw-addon-8",
        name: isFrench
          ? "Générateur de Portfolio PDF"
          : "PDF Portfolio Generator",
        description: isFrench
          ? "Export PDF automatisé du portfolio"
          : "Automated PDF export of portfolio",
        price: 650,
        category: "addon",
      },
      {
        id: "sw-addon-9",
        name: isFrench ? "Présentations Vidéo" : "Video Introductions",
        description: isFrench
          ? "Présentations vidéo intégrées"
          : "Embedded video presentations",
        price: 400,
        category: "addon",
      },
      {
        id: "sw-addon-10",
        name: isFrench
          ? "Intégration Preuve Sociale"
          : "Social Proof Integration",
        description: isFrench
          ? "Compteurs de visiteurs en direct, signaux de confiance"
          : "Live visitor counts, trust signals",
        price: 300,
        category: "addon",
      },
    ],
  },
  {
    id: "ecommerce-store",
    title: isFrench ? "Boutique E-Commerce" : "E-Commerce Store",
    description: isFrench
      ? "Boutique en ligne de niveau entreprise avec intégrations premium"
      : "Enterprise-grade online store with premium integrations",
    basePrice: 8500,
    gbpPrice: 6693,
    euroPrice: 7820,
    deliveryTime: isFrench ? "6-8 semaines" : "6-8 weeks",
    popular: true,
    features: [
      {
        id: "ec-core-1",
        name: isFrench
          ? "Gestion de Produits (Jusqu'à 200 SKU)"
          : "Product Management (Up to 200 SKUs)",
        description: isFrench
          ? "Catégories, variantes, inventaire"
          : "Categories, variants, inventory",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ec-core-2",
        name: isFrench
          ? "Intégration Passerelle de Paiement"
          : "Payment Gateway Integration",
        description: isFrench
          ? "Stripe, PayPal, Apple/Google Pay"
          : "Stripe, PayPal, Apple/Google Pay",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ec-core-3",
        name: isFrench ? "Système Panier & Paiement" : "Cart & Checkout System",
        description: isFrench
          ? "Paiement en une page, paiement invité"
          : "One-page checkout, guest checkout",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ec-core-4",
        name: isFrench
          ? "Responsive & Optimisé Mobile"
          : "Responsive & Mobile-Optimized",
        description: isFrench
          ? "Expérience d'achat mobile parfaite"
          : "Perfect mobile shopping experience",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ec-addon-1",
        name: isFrench
          ? "Gestion d'Inventaire Avancée"
          : "Advanced Inventory Management",
        description: isFrench
          ? "Alertes de stock bas, imports en masse"
          : "Low stock alerts, bulk imports",
        price: 2200,
        category: "addon",
      },
      {
        id: "ec-addon-2",
        name: isFrench
          ? "Recherche de Produits Intelligente & Filtres"
          : "Smart Product Search & Filters",
        description: isFrench
          ? "Recherche IA avec filtrage à facettes"
          : "AI-powered search with faceted filtering",
        price: 900,
        category: "addon",
      },
      {
        id: "ec-addon-3",
        name: isFrench
          ? "Système de Récupération de Panier Abandonné"
          : "Abandoned Cart Recovery System",
        description: isFrench
          ? "Séquences Email/SMS + automatisation"
          : "Email/SMS sequences + automation",
        price: 800,
        category: "addon",
      },
      {
        id: "ec-addon-4",
        name: isFrench
          ? "Recommandations de Produits IA"
          : "AI Product Recommendations",
        description: isFrench
          ? "Moteur de recommandations personnalisées"
          : "Personalized recommendations engine",
        price: 2800,
        category: "addon",
      },
      {
        id: "ec-addon-5",
        name: isFrench ? "Aperçus Produits AR/VR" : "AR/VR Product Previews",
        description: isFrench
          ? "Visualisation 3D + essayage virtuel"
          : "3D product viewing + virtual try-on",
        price: 3500,
        category: "addon",
      },
      {
        id: "ec-addon-6",
        name: isFrench
          ? "Système Multi-vendeurs Marketplace"
          : "Marketplace Multi-seller System",
        description: isFrench
          ? "Tableaux de bord vendeurs + système de commission"
          : "Vendor dashboards + commission system",
        price: 7500,
        category: "addon",
      },
      {
        id: "ec-addon-7",
        name: isFrench
          ? "Abonnement & Paiements Récurrents"
          : "Subscription & Recurring Payments",
        description: isFrench
          ? "Box d'abonnement, facturation SaaS"
          : "Membership boxes, SaaS billing",
        price: 1500,
        category: "addon",
      },
      {
        id: "ec-addon-8",
        name: isFrench ? "Intégration Système POS" : "POS System Integration",
        description: isFrench
          ? "Connecter boutique en ligne & physique"
          : "Connect online & physical store",
        price: 2000,
        category: "addon",
      },
      {
        id: "ec-addon-9",
        name: isFrench
          ? "Solutions d'Expédition Avancées"
          : "Advanced Shipping Solutions",
        description: isFrench
          ? "Tarifs en temps réel, impression d'étiquettes"
          : "Real-time rates, label printing",
        price: 1000,
        category: "addon",
      },
      {
        id: "ec-addon-10",
        name: isFrench
          ? "Programme de Fidélité Client"
          : "Customer Loyalty Program",
        description: isFrench
          ? "Points, récompenses, système de parrainage"
          : "Points, rewards, referral system",
        price: 1600,
        category: "addon",
      },
      {
        id: "ec-addon-11",
        name: isFrench
          ? "Fonctionnalités B2B Grossiste"
          : "B2B Wholesale Features",
        description: isFrench
          ? "Listes de prix, commandes minimum, devis"
          : "Price lists, minimum orders, quotes",
        price: 3200,
        category: "addon",
      },
      {
        id: "ec-addon-12",
        name: isFrench
          ? "Support Multi-devises & Taxes"
          : "Multi-currency & Tax Support",
        description: isFrench
          ? "Calculs automatiques de devises et taxes"
          : "Automatic currency + tax calculations",
        price: 1200,
        category: "addon",
      },
    ],
  },
  {
    id: "elearning-platform",
    title: isFrench ? "Plateforme E-Learning" : "E-Learning Platform",
    description: isFrench
      ? "LMS complet avec gestion avancée des cours"
      : "Complete LMS with advanced course management",
    basePrice: 12000,
    gbpPrice: 9449,
    euroPrice: 11040,
    deliveryTime: isFrench ? "8-12 semaines" : "8-12 weeks",
    features: [
      {
        id: "el-core-1",
        name: isFrench
          ? "Tableaux de Bord Étudiants & Instructeurs"
          : "Student & Instructor Dashboards",
        description: isFrench
          ? "Suivi de progression, analytique"
          : "Progress tracking, analytics",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "el-core-2",
        name: isFrench
          ? "Système de Paiement & Inscription"
          : "Payment & Enrollment System",
        description: isFrench
          ? "Paiement unique, abonnements, packs"
          : "One-time, subscriptions, bundles",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "el-core-3",
        name: isFrench
          ? "Système de Gestion de Cours"
          : "Course Management System",
        description: isFrench
          ? "Modules, leçons, quiz"
          : "Modules, lessons, quizzes",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "el-core-4",
        name: isFrench
          ? "Hébergement Vidéo & Streaming"
          : "Video Hosting & Streaming",
        description: isFrench
          ? "Diffusion vidéo sécurisée"
          : "Secure video delivery",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "el-addon-1",
        name: isFrench
          ? "Streaming Vidéo Avancé & DRM"
          : "Advanced Video Streaming & DRM",
        description: isFrench
          ? "Hébergement vidéo sécurisé avec protection"
          : "Secure video hosting with protection",
        price: 2200,
        category: "addon",
      },
      {
        id: "el-addon-2",
        name: isFrench
          ? "Gamification & Engagement"
          : "Gamification & Engagement",
        description: isFrench
          ? "Badges, classements, points"
          : "Badges, leaderboards, points",
        price: 1800,
        category: "addon",
      },
      {
        id: "el-addon-3",
        name: isFrench
          ? "Tuteur IA & Personnalisation"
          : "AI Tutor & Personalization",
        description: isFrench
          ? "Parcours d'apprentissage adaptatifs"
          : "Adaptive learning paths",
        price: 3200,
        category: "addon",
      },
      {
        id: "el-addon-4",
        name: isFrench ? "Conformité SCORM/xAPI" : "SCORM/xAPI Compliance",
        description: isFrench
          ? "Compatibilité LMS entreprise"
          : "Enterprise LMS compatibility",
        price: 1500,
        category: "addon",
      },
      {
        id: "el-addon-5",
        name: isFrench
          ? "Automatisation Certification & Badges"
          : "Certification & Badge Automation",
        description: isFrench
          ? "Certificats numériques avec vérification"
          : "Digital certificates with verification",
        price: 1200,
        category: "addon",
      },
      {
        id: "el-addon-6",
        name: isFrench
          ? "Intégration Classes en Direct"
          : "Live Class Integration",
        description: isFrench
          ? "Zoom, Teams, tableau blanc interactif"
          : "Zoom, Teams, interactive whiteboard",
        price: 1600,
        category: "addon",
      },
      {
        id: "el-addon-7",
        name: isFrench
          ? "Système de Devoirs & Notation"
          : "Assignment & Grading System",
        description: isFrench
          ? "Correction auto, évaluations par les pairs"
          : "Auto-grading, peer reviews",
        price: 1400,
        category: "addon",
      },
      {
        id: "el-addon-8",
        name: isFrench
          ? "Forums de Discussion & Communauté"
          : "Discussion Forums & Community",
        description: isFrench
          ? "Q&R, groupes, apprentissage social"
          : "Q&A, groups, social learning",
        price: 1100,
        category: "addon",
      },
      {
        id: "el-addon-9",
        name: isFrench
          ? "Développement d'Application Mobile"
          : "Mobile App Development",
        description: isFrench
          ? "Applications compagnon iOS & Android"
          : "iOS & Android companion apps",
        price: 5000,
        category: "addon",
      },
      {
        id: "el-addon-10",
        name: isFrench
          ? "Fonctionnalités de Formation Corporate"
          : "Corporate Training Features",
        description: isFrench
          ? "Gestion d'équipe, reporting"
          : "Team management, reporting",
        price: 2500,
        category: "addon",
      },
    ],
  },
  {
    id: "saas-platform",
    title: isFrench ? "Plateforme SaaS" : "SaaS Platform",
    description: isFrench
      ? "Solution cloud personnalisée avec architecture microservices"
      : "Custom cloud solution with microservices architecture",
    basePrice: 18000,
    gbpPrice: 14173,
    euroPrice: 16560,
    deliveryTime: isFrench ? "12-16 semaines" : "12-16 weeks",
    features: [
      {
        id: "saas-core-1",
        name: isFrench
          ? "Configuration Infrastructure Cloud"
          : "Cloud Infrastructure Setup",
        description: isFrench
          ? "AWS/Azure/GCP avec CI/CD"
          : "AWS/Azure/GCP with CI/CD",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "saas-core-2",
        name: isFrench
          ? "Authentification Utilisateur & Rôles"
          : "User Authentication & Roles",
        description: isFrench
          ? "OAuth, JWT, RBAC, prêt pour SSO"
          : "OAuth, JWT, RBAC, SSO ready",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "saas-core-3",
        name: isFrench
          ? "Développement API & Intégration"
          : "API Development & Integration",
        description: isFrench
          ? "REST/GraphQL avec documentation"
          : "REST/GraphQL with documentation",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "saas-addon-1",
        name: isFrench
          ? "Tableau de Bord Admin Avancé"
          : "Advanced Admin Dashboard",
        description: isFrench
          ? "Analytique, gestion utilisateurs, logs"
          : "Analytics, user management, logs",
        price: 3500,
        category: "addon",
      },
      {
        id: "saas-addon-2",
        name: isFrench
          ? "Analytique & Reporting Personnalisés"
          : "Custom Analytics & Reporting",
        description: isFrench
          ? "Tableaux de bord temps réel, exports"
          : "Real-time dashboards, exports",
        price: 3000,
        category: "addon",
      },
      {
        id: "saas-addon-3",
        name: isFrench ? "White-label & Branding" : "White-label & Branding",
        description: isFrench
          ? "Domaines personnalisés, branding, thèmes"
          : "Custom domains, branding, themes",
        price: 4500,
        category: "addon",
      },
      {
        id: "saas-addon-4",
        name: isFrench
          ? "Intégration Module IA/ML"
          : "AI/ML Module Integration",
        description: isFrench
          ? "Analytique prédictive, automatisation"
          : "Predictive analytics, automation",
        price: 5000,
        category: "addon",
      },
      {
        id: "saas-addon-5",
        name: isFrench
          ? "Architecture Multi-tenant"
          : "Multi-tenancy Architecture",
        description: isFrench
          ? "Isolation des données, instances personnalisées"
          : "Data isolation, custom instances",
        price: 6500,
        category: "addon",
      },
      {
        id: "saas-addon-6",
        name: isFrench
          ? "Fonctionnalités WebSocket & Temps Réel"
          : "WebSocket & Real-time Features",
        description: isFrench
          ? "Notifications en direct, chat, mises à jour"
          : "Live notifications, chat, updates",
        price: 2500,
        category: "addon",
      },
      {
        id: "saas-addon-7",
        name: isFrench
          ? "Système de Paiement & Facturation"
          : "Payment & Billing System",
        description: isFrench
          ? "Intégration Stripe/Braintree"
          : "Stripe/Braintree integration",
        price: 2800,
        category: "addon",
      },
      {
        id: "saas-addon-8",
        name: isFrench
          ? "Limitation de Débit API & Monitoring"
          : "API Rate Limiting & Monitoring",
        description: isFrench
          ? "Suivi d'utilisation, alertes, analytique"
          : "Usage tracking, alerts, analytics",
        price: 1800,
        category: "addon",
      },
      {
        id: "saas-addon-9",
        name: isFrench
          ? "Optimisation de Base de Données"
          : "Database Optimization",
        description: isFrench
          ? "Sharding, réplication, mise en cache"
          : "Sharding, replication, caching",
        price: 3200,
        category: "addon",
      },
      {
        id: "saas-addon-10",
        name: isFrench
          ? "Intégration Application Mobile"
          : "Mobile App Integration",
        description: isFrench
          ? "Applications natives iOS/Android"
          : "Native iOS/Android apps",
        price: 7500,
        category: "addon",
      },
    ],
  },
  {
    id: "plugin-development",
    title: isFrench ? "Développement de Plugin" : "Plugin Development",
    description: isFrench
      ? "Plugins de haute qualité avec support premium"
      : "High-quality plugins with premium support",
    basePrice: 1800,
    gbpPrice: 1417,
    euroPrice: 1656,
    deliveryTime: isFrench ? "4-6 semaines" : "4-6 weeks",
    features: [
      {
        id: "pd-core-1",
        name: isFrench
          ? "Développement de Fonctionnalités Personnalisées"
          : "Custom Functionality Development",
        description: isFrench
          ? "Adapté à vos besoins spécifiques"
          : "Tailored to your specific needs",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "pd-core-2",
        name: isFrench ? "Intégration Transparente" : "Seamless Integration",
        description: isFrench
          ? "Testé avec les dernières versions"
          : "Tested with latest versions",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "pd-addon-1",
        name: isFrench
          ? "Fonctionnalités de Sécurité Entreprise"
          : "Enterprise Security Features",
        description: isFrench
          ? "Scan de vulnérabilités, chiffrement"
          : "Vulnerability scanning, encryption",
        price: 1200,
        category: "addon",
      },
      {
        id: "pd-addon-2",
        name: isFrench
          ? "Compatibilité Multisite & Réseau"
          : "Multisite & Network Compatibility",
        description: isFrench
          ? "Testé sur de grandes installations"
          : "Tested on large installations",
        price: 1000,
        category: "addon",
      },
      {
        id: "pd-addon-3",
        name: isFrench
          ? "Optimisation des Performances"
          : "Performance Optimization",
        description: isFrench
          ? "Mise en cache, lazy loading, minification"
          : "Caching, lazy loading, minification",
        price: 1000,
        category: "addon",
      },
      {
        id: "pd-addon-4",
        name: isFrench
          ? "Système de Licence & Mise à Jour Auto"
          : "Auto-update & License System",
        description: isFrench
          ? "Licences sécurisées avec mises à jour"
          : "Secure licensing with updates",
        price: 1400,
        category: "addon",
      },
      {
        id: "pd-addon-5",
        name: isFrench ? "Endpoints API REST" : "REST API Endpoints",
        description: isFrench
          ? "API personnalisée pour l'intégration"
          : "Custom API for integration",
        price: 900,
        category: "addon",
      },
      {
        id: "pd-addon-6",
        name: isFrench
          ? "Import/Export & Migration"
          : "Import/Export & Migration",
        description: isFrench
          ? "Outils de migration de données"
          : "Data migration tools",
        price: 800,
        category: "addon",
      },
      {
        id: "pd-addon-7",
        name: isFrench
          ? "Documentation & Guides Utilisateur"
          : "Documentation & User Guides",
        description: isFrench
          ? "Documentation complète"
          : "Comprehensive documentation",
        price: 600,
        category: "addon",
      },
      {
        id: "pd-addon-8",
        name: isFrench ? "Support Multi-langues" : "Multi-language Support",
        description: isFrench
          ? "Architecture prête pour la traduction"
          : "Translation-ready architecture",
        price: 700,
        category: "addon",
      },
      {
        id: "pd-addon-9",
        name: isFrench ? "Pack Support Premium" : "Premium Support Package",
        description: isFrench
          ? "Support prioritaire de 6 mois"
          : "6 months priority support",
        price: 800,
        category: "addon",
      },
    ],
  },
  {
    id: "seo-optimization",
    title: isFrench ? "Optimisation SEO" : "SEO Optimization",
    description: isFrench
      ? "SEO technique et de contenu complet"
      : "Comprehensive technical and content SEO",
    basePrice: 2000,
    gbpPrice: 1575,
    euroPrice: 1840,
    deliveryTime: isFrench ? "3-4 semaines" : "3-4 weeks",
    features: [
      {
        id: "seo-core-1",
        name: isFrench
          ? "Recherche de Mots-clés Complète"
          : "Comprehensive Keyword Research",
        description: isFrench
          ? "500+ mots-clés avec analyse de concurrence"
          : "500+ keywords with competition analysis",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "seo-core-2",
        name: isFrench
          ? "Audit SEO Technique & Corrections"
          : "Technical SEO Audit & Fixes",
        description: isFrench
          ? "Audit complet du site avec implémentation"
          : "Full site audit with implementation",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "seo-addon-1",
        name: isFrench
          ? "Rapport d'Analyse Concurrentielle"
          : "Competitor Analysis Report",
        description: isFrench
          ? "10 concurrents, analyse des écarts"
          : "10 competitors, gap analysis",
        price: 1200,
        category: "addon",
      },
      {
        id: "seo-addon-2",
        name: isFrench
          ? "Rapports SEO Mensuels"
          : "Monthly SEO Performance Reports",
        description: isFrench
          ? "3 mois de suivi + recommandations"
          : "3 months of tracking + recommendations",
        price: 500,
        category: "addon",
      },
      {
        id: "seo-addon-3",
        name: isFrench
          ? "SEO International & Local"
          : "International & Local SEO",
        description: isFrench
          ? "hreflang, géo-ciblage, GMB"
          : "hreflang, geo-targeting, GMB",
        price: 1500,
        category: "addon",
      },
      {
        id: "seo-addon-4",
        name: isFrench
          ? "Stratégie de Contenu & Optimisation"
          : "Content Strategy & Optimization",
        description: isFrench
          ? "10 pages optimisées avec rédaction"
          : "10 pages optimized with copywriting",
        price: 1800,
        category: "addon",
      },
      {
        id: "seo-addon-5",
        name: isFrench
          ? "Implémentation Schema Markup"
          : "Schema Markup Implementation",
        description: isFrench
          ? "Rich snippets pour un meilleur CTR"
          : "Rich snippets for better CTR",
        price: 900,
        category: "addon",
      },
      {
        id: "seo-addon-6",
        name: isFrench
          ? "Optimisation Core Web Vitals"
          : "Core Web Vitals Optimization",
        description: isFrench
          ? "Correction des problèmes LCP, FID, CLS"
          : "Fix LCP, FID, CLS issues",
        price: 1100,
        category: "addon",
      },
      {
        id: "seo-addon-7",
        name: isFrench
          ? "Audit Backlink & Stratégie"
          : "Backlink Audit & Strategy",
        description: isFrench
          ? "Analyse du profil de liens + plan d'outreach"
          : "Link profile analysis + outreach plan",
        price: 1600,
        category: "addon",
      },
      {
        id: "seo-addon-8",
        name: isFrench
          ? "Spécialisation SEO E-commerce"
          : "E-commerce SEO Specialization",
        description: isFrench
          ? "Optimisation des pages produits"
          : "Product page optimization",
        price: 1300,
        category: "addon",
      },
      {
        id: "seo-addon-9",
        name: isFrench ? "Session de Formation SEO" : "SEO Training Session",
        description: isFrench
          ? "Formation de 2 heures pour votre équipe"
          : "2-hour training for your team",
        price: 400,
        category: "addon",
      },
    ],
  },
  {
    id: "custom-crm",
    title: isFrench ? "CRM Personnalisé" : "Custom CRM",
    description: isFrench
      ? "Système de gestion de pipeline de vente sur mesure"
      : "Tailored sales pipeline management system",
    basePrice: 14000,
    gbpPrice: 11024,
    euroPrice: 12880,
    deliveryTime: isFrench ? "12-16 semaines" : "12-16 weeks",
    features: [
      {
        id: "crm-core-1",
        name: isFrench
          ? "Gestion des Leads & Contacts"
          : "Lead & Contact Management",
        description: isFrench
          ? "Import, segmentation, suivi"
          : "Import, segmentation, tracking",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "crm-core-2",
        name: isFrench
          ? "Pipeline de Vente & Analytique"
          : "Sales Pipeline & Analytics",
        description: isFrench
          ? "Visualisation de l'entonnoir, prévisions"
          : "Funnel visualization, forecasting",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "crm-addon-1",
        name: isFrench
          ? "Intégration Campagnes Email & SMS"
          : "Email & SMS Campaign Integration",
        description: isFrench
          ? "Séquences automatisées, modèles"
          : "Automated sequences, templates",
        price: 3500,
        category: "addon",
      },
      {
        id: "crm-addon-2",
        name: isFrench
          ? "Workflows Personnalisés & Automatisation"
          : "Custom Workflows & Automation",
        description: isFrench
          ? "Constructeur visuel de workflow"
          : "Visual workflow builder",
        price: 2800,
        category: "addon",
      },
      {
        id: "crm-addon-3",
        name: isFrench
          ? "Application Mobile & Sync Hors Ligne"
          : "Mobile App & Offline Sync",
        description: isFrench
          ? "Application iOS/Android avec sync"
          : "iOS/Android app with sync",
        price: 4500,
        category: "addon",
      },
      {
        id: "crm-addon-4",
        name: isFrench
          ? "Score de Lead IA & Priorisation"
          : "AI Lead Scoring & Prioritization",
        description: isFrench
          ? "Score prédictif + recommandations"
          : "Predictive scoring + recommendations",
        price: 3200,
        category: "addon",
      },
      {
        id: "crm-addon-5",
        name: isFrench
          ? "Calendrier & Planification de Réunions"
          : "Calendar & Meeting Scheduling",
        description: isFrench
          ? "Sync Google/Outlook, pages de réservation"
          : "Google/Outlook sync, booking pages",
        price: 1800,
        category: "addon",
      },
      {
        id: "crm-addon-6",
        name: isFrench
          ? "Gestion de Documents & Contrats"
          : "Document & Contract Management",
        description: isFrench
          ? "Signatures électroniques, modèles, stockage"
          : "E-signatures, templates, storage",
        price: 2200,
        category: "addon",
      },
      {
        id: "crm-addon-7",
        name: isFrench
          ? "Intégration avec Outils Tiers"
          : "Integration with 3rd Party Tools",
        description: isFrench
          ? "Connexions API à votre stack"
          : "API connections to your stack",
        price: 2000,
        category: "addon",
      },
      {
        id: "crm-addon-8",
        name: isFrench
          ? "Reporting & Tableaux de Bord Personnalisés"
          : "Custom Reporting & Dashboards",
        description: isFrench
          ? "Analytique avancée et visualisation"
          : "Advanced analytics and visualization",
        price: 2500,
        category: "addon",
      },
      {
        id: "crm-addon-9",
        name: isFrench
          ? "Intégration Voix & Appels"
          : "Voice & Call Integration",
        description: isFrench
          ? "Intégration VoIP, enregistrement d'appels"
          : "VoIP integration, call recording",
        price: 1800,
        category: "addon",
      },
      {
        id: "crm-addon-10",
        name: isFrench
          ? "Fonctionnalités de Collaboration d'Équipe"
          : "Team Collaboration Features",
        description: isFrench
          ? "Notes, tâches, messagerie interne"
          : "Notes, tasks, internal messaging",
        price: 1500,
        category: "addon",
      },
    ],
  },
  {
    id: "ai-integration",
    title: isFrench ? "Intégration IA" : "AI Integration",
    description: isFrench
      ? "Ajoutez des capacités IA de pointe à vos systèmes"
      : "Add cutting-edge AI capabilities to your systems",
    basePrice: 5500,
    gbpPrice: 4331,
    euroPrice: 5060,
    deliveryTime: isFrench ? "5-7 semaines" : "5-7 weeks",
    features: [
      {
        id: "ai-core-1",
        name: isFrench
          ? "Intégration LLM (GPT-4/Claude/Gemini)"
          : "LLM Integration (GPT-4/Claude/Gemini)",
        description: isFrench
          ? "Intégration API avec ingénierie de prompt"
          : "API integration with prompt engineering",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ai-addon-1",
        name: isFrench
          ? "Fine-Tuning & Entraînement de Modèle Personnalisé"
          : "Custom Model Fine-Tuning & Training",
        description: isFrench
          ? "Entraînez sur vos données, hébergement privé"
          : "Train on your data, private hosting",
        price: 6000,
        category: "addon",
      },
      {
        id: "ai-addon-2",
        name: isFrench ? "Interface Voix & Parole" : "Voice & Speech Interface",
        description: isFrench
          ? "Speech-to-text, commandes vocales"
          : "Speech-to-text, voice commands",
        price: 3200,
        category: "addon",
      },
      {
        id: "ai-addon-3",
        name: isFrench
          ? "Génération de Contenu Automatisée"
          : "Automated Content Generation",
        description: isFrench
          ? "Articles, réseaux sociaux, descriptions produits"
          : "Articles, social media, product descriptions",
        price: 1800,
        category: "addon",
      },
      {
        id: "ai-addon-4",
        name: isFrench
          ? "Vision par Ordinateur & Analyse d'Images"
          : "Computer Vision & Image Analysis",
        description: isFrench
          ? "Reconnaissance d'images, OCR, analyse"
          : "Image recognition, OCR, analysis",
        price: 4500,
        category: "addon",
      },
      {
        id: "ai-addon-5",
        name: isFrench
          ? "Tableau de Bord d'Analytique Prédictive"
          : "Predictive Analytics Dashboard",
        description: isFrench
          ? "Prévisions, analyse de tendances, insights"
          : "Forecasting, trend analysis, insights",
        price: 3800,
        category: "addon",
      },
      {
        id: "ai-addon-6",
        name: isFrench
          ? "Entraînement & Optimisation de Chatbot"
          : "Chatbot Training & Optimization",
        description: isFrench
          ? "Flux de conversation, tuning NLP"
          : "Conversation flows, NLP tuning",
        price: 2200,
        category: "addon",
      },
      {
        id: "ai-addon-7",
        name: isFrench ? "Recherche Propulsée par IA" : "AI-Powered Search",
        description: isFrench
          ? "Recherche sémantique, requêtes en langage naturel"
          : "Semantic search, natural language queries",
        price: 2800,
        category: "addon",
      },
      {
        id: "ai-addon-8",
        name: isFrench
          ? "Intégration Analyse de Sentiment"
          : "Sentiment Analysis Integration",
        description: isFrench
          ? "Feedback clients, monitoring réseaux sociaux"
          : "Customer feedback, social media monitoring",
        price: 1900,
        category: "addon",
      },
      {
        id: "ai-addon-9",
        name: isFrench
          ? "Automatisation du Traitement de Documents"
          : "Document Processing Automation",
        description: isFrench
          ? "Parsing PDF, extraction de données"
          : "PDF parsing, data extraction",
        price: 2500,
        category: "addon",
      },
    ],
  },
  {
    id: "web3-development",
    title: isFrench ? "Développement Web3" : "Web3 Development",
    description: isFrench
      ? "Solutions blockchain et smart contracts"
      : "Blockchain and smart contract solutions",
    basePrice: 12000,
    gbpPrice: 9449,
    euroPrice: 11040,
    deliveryTime: isFrench ? "8-16 semaines" : "8-16 weeks",
    features: [
      {
        id: "web3-core-1",
        name: isFrench
          ? "Développement & Audit de Smart Contract"
          : "Smart Contract Development & Audit",
        description: isFrench
          ? "Orienté sécurité, optimisé gas"
          : "Security-focused, gas-optimized",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "web3-addon-1",
        name: isFrench
          ? "Conception & Implémentation Tokenomics"
          : "Tokenomics Design & Implementation",
        description: isFrench
          ? "ERC-20/721/1155, staking, récompenses"
          : "ERC-20/721/1155, staking, rewards",
        price: 7500,
        category: "addon",
      },
      {
        id: "web3-addon-2",
        name: isFrench
          ? "Développement Marketplace NFT"
          : "NFT Marketplace Development",
        description: isFrench
          ? "Minting, trading, royalties"
          : "Minting, trading, royalties",
        price: 10000,
        category: "addon",
      },
      {
        id: "web3-addon-3",
        name: isFrench
          ? "Intégration DAO & Gouvernance"
          : "DAO Integration & Governance",
        description: isFrench
          ? "Votes, propositions, gestion de trésorerie"
          : "Voting, proposals, treasury management",
        price: 4000,
        category: "addon",
      },
      {
        id: "web3-addon-4",
        name: isFrench
          ? "Intégration Protocole DeFi"
          : "DeFi Protocol Integration",
        description: isFrench
          ? "Pools de liquidité, yield farming"
          : "Liquidity pools, yield farming",
        price: 9000,
        category: "addon",
      },
      {
        id: "web3-addon-5",
        name: isFrench
          ? "Développement de Pont Cross-chain"
          : "Cross-chain Bridge Development",
        description: isFrench
          ? "Compatibilité multi-chaînes"
          : "Multi-chain compatibility",
        price: 12000,
        category: "addon",
      },
      {
        id: "web3-addon-6",
        name: isFrench
          ? "Authentification Web3 (Wallet Connect)"
          : "Web3 Authentication (Wallet Connect)",
        description: isFrench
          ? "Login portefeuille crypto, non-custodial"
          : "Crypto wallet login, non-custodial",
        price: 2800,
        category: "addon",
      },
      {
        id: "web3-addon-7",
        name: isFrench
          ? "Tableau de Bord d'Analytique Blockchain"
          : "Blockchain Analytics Dashboard",
        description: isFrench
          ? "Suivi des transactions, analytique"
          : "Transaction tracking, analytics",
        price: 3500,
        category: "addon",
      },
      {
        id: "web3-addon-8",
        name: isFrench
          ? "Service d'Optimisation Gas"
          : "Gas Optimization Service",
        description: isFrench
          ? "Réduire les coûts de transaction"
          : "Reduce transaction costs",
        price: 2200,
        category: "addon",
      },
      {
        id: "web3-addon-9",
        name: isFrench
          ? "Audit & Revue de Sécurité"
          : "Audit & Security Review",
        description: isFrench
          ? "Évaluation de sécurité complète"
          : "Comprehensive security assessment",
        price: 5000,
        category: "addon",
      },
    ],
  },
  {
    id: "booking-system",
    title: isFrench
      ? "Plateforme de Réservation & Rendez-vous"
      : "Booking & Appointment Platform",
    description: isFrench
      ? "Système complet de planification avec intégration calendrier et rappels automatisés"
      : "Complete scheduling system with calendar integration and automated reminders",
    basePrice: 6500,
    gbpPrice: 5118,
    euroPrice: 5980,
    deliveryTime: isFrench ? "5-7 semaines" : "5-7 weeks",
    popular: true,
    features: [
      {
        id: "bs-core-1",
        name: isFrench
          ? "Intégration Multi-calendriers"
          : "Multi-calendar Integration",
        description: isFrench
          ? "Sync avec Google, Outlook, calendriers Apple"
          : "Sync with Google, Outlook, Apple calendars",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bs-core-2",
        name: isFrench ? "Rappels Automatisés" : "Automated Reminders",
        description: isFrench
          ? "Rappels Email & SMS, confirmations"
          : "Email & SMS reminders, confirmations",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bs-core-3",
        name: isFrench
          ? "Intégration Paiement en Ligne"
          : "Online Payment Integration",
        description: isFrench
          ? "Stripe, PayPal, traitement des paiements"
          : "Stripe, PayPal, payment processing",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "bs-addon-1",
        name: isFrench
          ? "Application Mobile pour Prestataires"
          : "Mobile App for Providers",
        price: 5500,
        category: "addon",
      },
      {
        id: "bs-addon-2",
        name: isFrench ? "Intégration CRM" : "CRM Integration",
        price: 1800,
        category: "addon",
      },
      {
        id: "bs-addon-3",
        name: isFrench ? "Gestion de Liste d'Attente" : "Waitlist Management",
        price: 900,
        category: "addon",
      },
      {
        id: "bs-addon-4",
        name: isFrench
          ? "Intégration Consultation Vidéo"
          : "Video Consultation Integration",
        price: 1500,
        category: "addon",
      },
      {
        id: "bs-addon-5",
        name: isFrench ? "Support Multi-sites" : "Multi-location Support",
        price: 1200,
        category: "addon",
      },
      {
        id: "bs-addon-6",
        name: isFrench ? "Réservation de Classe/Groupe" : "Class/Group Booking",
        price: 1100,
        category: "addon",
      },
      {
        id: "bs-addon-7",
        name: isFrench ? "Gestion des Ressources" : "Resource Management",
        price: 1600,
        category: "addon",
      },
    ],
  },
  {
    id: "real-estate-portal",
    title: isFrench ? "Plateforme Immobilière" : "Real Estate Platform",
    description: isFrench
      ? "Annonces immobilières avec visites virtuelles et gestion d'agents"
      : "Property listings with virtual tours and agent management",
    basePrice: 9500,
    gbpPrice: 7480,
    euroPrice: 8740,
    deliveryTime: isFrench ? "8-10 semaines" : "8-10 weeks",
    popular: true,
    features: [
      {
        id: "re-core-1",
        name: isFrench
          ? "Gestion des Annonces Immobilières"
          : "Property Listing Management",
        description: isFrench
          ? "Annonces illimitées avec filtres avancés"
          : "Unlimited listings with advanced filters",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "re-core-2",
        name: isFrench
          ? "Intégration Visite Virtuelle"
          : "Virtual Tour Integration",
        description: isFrench
          ? "Visites 360°, vidéos de présentation"
          : "360° tours, video walkthroughs",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "re-core-3",
        name: isFrench ? "CRM Agent & Courtier" : "Agent & Broker CRM",
        description: isFrench
          ? "Gestion des leads, suivi des clients"
          : "Lead management, client tracking",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "re-addon-1",
        name: isFrench
          ? "Calculateur Hypothécaire & Outils"
          : "Mortgage Calculator & Tools",
        price: 1200,
        category: "addon",
      },
      {
        id: "re-addon-2",
        name: isFrench
          ? "Intégration Carte Interactive"
          : "Interactive Map Integration",
        price: 1800,
        category: "addon",
      },
      {
        id: "re-addon-3",
        name: isFrench
          ? "Recommandations Immobilières IA"
          : "AI Property Recommendations",
        price: 2500,
        category: "addon",
      },
      {
        id: "re-addon-4",
        name: isFrench
          ? "Gestion de Documents (e-sign)"
          : "Document Management (e-sign)",
        price: 1600,
        category: "addon",
      },
      {
        id: "re-addon-5",
        name: isFrench
          ? "Application Mobile pour Agents"
          : "Mobile App for Agents",
        price: 5000,
        category: "addon",
      },
      {
        id: "re-addon-6",
        name: isFrench
          ? "Données de Quartier & Écoles"
          : "Neighborhood & School Data",
        price: 1400,
        category: "addon",
      },
      {
        id: "re-addon-7",
        name: isFrench ? "Support Multi-langues" : "Multi-language Support",
        price: 2000,
        category: "addon",
      },
    ],
  },
  {
    id: "event-management",
    title: isFrench
      ? "Plateforme de Gestion d'Événements"
      : "Event Management Platform",
    description: isFrench
      ? "Solution complète de planification d'événements, billetterie et gestion"
      : "Complete event planning, ticketing, and management solution",
    basePrice: 7500,
    gbpPrice: 5906,
    euroPrice: 6900,
    deliveryTime: isFrench ? "6-8 semaines" : "6-8 weeks",
    features: [
      {
        id: "em-core-1",
        name: isFrench
          ? "Billetterie & Inscription"
          : "Ticketing & Registration",
        description: isFrench
          ? "Types de billets multiples, codes promo"
          : "Multiple ticket types, promo codes",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "em-core-2",
        name: isFrench
          ? "Calendrier d'Événements & Planification"
          : "Event Calendar & Scheduling",
        description: isFrench
          ? "Événements récurrents, gestion de séries"
          : "Recurring events, series management",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "em-core-3",
        name: isFrench ? "Gestion des Participants" : "Attendee Management",
        description: isFrench
          ? "Check-in, badges, networking"
          : "Check-in, badges, networking",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "em-addon-1",
        name: isFrench
          ? "Capacités d'Événements Virtuels"
          : "Virtual Event Capabilities",
        price: 2800,
        category: "addon",
      },
      {
        id: "em-addon-2",
        name: isFrench ? "Gestion de Sponsoring" : "Sponsorship Management",
        price: 1500,
        category: "addon",
      },
      {
        id: "em-addon-3",
        name: isFrench ? "Application Mobile d'Événement" : "Mobile Event App",
        price: 4200,
        category: "addon",
      },
      {
        id: "em-addon-4",
        name: isFrench
          ? "Gestion des Sessions & Intervenants"
          : "Session & Speaker Management",
        price: 1300,
        category: "addon",
      },
      {
        id: "em-addon-5",
        name: isFrench
          ? "Gestion de Lieu & Plan d'Étage"
          : "Venue & Floor Plan Management",
        price: 1100,
        category: "addon",
      },
      {
        id: "em-addon-6",
        name: isFrench
          ? "Networking & Matchmaking"
          : "Networking & Matchmaking",
        price: 1900,
        category: "addon",
      },
      {
        id: "em-addon-7",
        name: isFrench ? "Analytique Post-événement" : "Post-event Analytics",
        price: 1400,
        category: "addon",
      },
    ],
  },
  {
    id: "membership-site",
    title: isFrench
      ? "Plateforme d'Adhésion & Abonnement"
      : "Membership & Subscription Platform",
    description: isFrench
      ? "Contenu sécurisé avec paiements récurrents et gestion des membres"
      : "Gated content with recurring payments and member management",
    basePrice: 7000,
    gbpPrice: 5512,
    euroPrice: 6440,
    deliveryTime: isFrench ? "6-8 semaines" : "6-8 weeks",
    popular: true,
    features: [
      {
        id: "ms-core-1",
        name: isFrench
          ? "Système de Paiement Récurrent"
          : "Recurring Payment System",
        description: isFrench
          ? "Abonnements Stripe, PayPal"
          : "Stripe, PayPal subscriptions",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ms-core-2",
        name: isFrench
          ? "Contenu Sécurisé & Diffusion Progressive"
          : "Content Gating & Dripping",
        description: isFrench
          ? "Planifier la diffusion du contenu"
          : "Schedule content release",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ms-core-3",
        name: isFrench
          ? "Annuaire des Membres & Profils"
          : "Member Directory & Profiles",
        description: isFrench
          ? "Profils de membres personnalisés"
          : "Custom member profiles",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "ms-addon-1",
        name: isFrench
          ? "Niveaux d'Adhésion Multiples"
          : "Multiple Membership Tiers",
        price: 1200,
        category: "addon",
      },
      {
        id: "ms-addon-2",
        name: isFrench ? "Forums Communautaires" : "Community Forums",
        price: 1800,
        category: "addon",
      },
      {
        id: "ms-addon-3",
        name: isFrench
          ? "Intégration Learning Management"
          : "Learning Management Integration",
        price: 2200,
        category: "addon",
      },
      {
        id: "ms-addon-4",
        name: isFrench
          ? "Système de Messagerie Privée"
          : "Private Messaging System",
        price: 1500,
        category: "addon",
      },
      {
        id: "ms-addon-5",
        name: isFrench
          ? "Tableau de Bord Analytique des Membres"
          : "Member Analytics Dashboard",
        price: 1300,
        category: "addon",
      },
      {
        id: "ms-addon-6",
        name: isFrench
          ? "Séquences d'Onboarding Automatisées"
          : "Automated Onboarding Sequences",
        price: 1100,
        category: "addon",
      },
      {
        id: "ms-addon-7",
        name: isFrench
          ? "Intégration Webinar & Live Stream"
          : "Webinar & Live Stream Integration",
        price: 1900,
        category: "addon",
      },
    ],
  },
  {
    id: "logistics-platform",
    title: isFrench
      ? "Plateforme Logistique & Livraison"
      : "Logistics & Delivery Platform",
    description: isFrench
      ? "Système complet de gestion des commandes, optimisation d'itinéraires et suivi de flotte"
      : "Complete order management, route optimization, and fleet tracking system",
    basePrice: 12000,
    gbpPrice: 9449,
    euroPrice: 11040,
    deliveryTime: isFrench ? "12-16 semaines" : "12-16 weeks",
    features: [
      {
        id: "log-core-1",
        name: isFrench
          ? "Gestion des Commandes & Expéditions"
          : "Order & Shipment Management",
        description: isFrench
          ? "Suivi en temps réel, mises à jour de statut"
          : "Real-time tracking, status updates",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "log-core-2",
        name: isFrench
          ? "Moteur d'Optimisation d'Itinéraires"
          : "Route Optimization Engine",
        description: isFrench
          ? "Itinéraires de livraison propulsés par IA"
          : "AI-powered delivery routes",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "log-core-3",
        name: isFrench
          ? "Gestion de Flotte & Chauffeurs"
          : "Fleet & Driver Management",
        description: isFrench
          ? "Suivi des véhicules, affectation des chauffeurs"
          : "Vehicle tracking, driver assignments",
        price: 0,
        checked: true,
        category: "core",
      },
      {
        id: "log-addon-1",
        name: isFrench ? "Gestion d'Entrepôt" : "Warehouse Management",
        price: 3500,
        category: "addon",
      },
      {
        id: "log-addon-2",
        name: isFrench
          ? "Intégrations API Transporteur"
          : "Carrier API Integrations",
        price: 2800,
        category: "addon",
      },
      {
        id: "log-addon-3",
        name: isFrench
          ? "Système de Preuve de Livraison"
          : "Proof of Delivery System",
        price: 1600,
        category: "addon",
      },
      {
        id: "log-addon-4",
        name: isFrench ? "Application Mobile Chauffeur" : "Mobile Driver App",
        price: 5000,
        category: "addon",
      },
      {
        id: "log-addon-5",
        name: isFrench
          ? "Automatisation Facturation & Invoicing"
          : "Billing & Invoicing Automation",
        price: 2200,
        category: "addon",
      },
    ],
  },
];

export const convertToTnd = (usd: number) => Math.round(usd * 3.0);

export const getProjects = (isFrench: boolean) => [
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
    github: "#",
    live: "https://suburbia-store.vercel.app/",
    techStack: ["/next.svg", "/tail.svg", "/re.svg", "/git.svg"],
  },
  {
    id: 11,
    title: "SkyRise Banking Platform",
    category: "SaaS",
    img: "/projects/skyrise-finance-dashboard-pro.png",
    github: "#",
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

export const getCategories = (isFrench: boolean) => [
  isFrench ? "Tous" : "All",
  "WordPress",
  "React",
  "Nextjs",
  "Mern",
  "SaaS",
];

export const getEducationBoard = (isFrench: boolean) => [
  {
    degree: isFrench
      ? "Diplôme Secondaire : Baccalauréat en Littérature, Latin & Philosophie"
      : "Secondary Diploma: Baccalauréat in Literature, Latin & Philosophy",
    institution: "Petit Séminaire de Katende, PSK CONGO RDC",
    year: isFrench ? "Juin 2013" : "June 2013",
  },
  {
    degree: isFrench
      ? "BTS en Maintenance Informatique & Réseaux"
      : "BTS in Computer Maintenance & Networking",
    institution:
      "Institut National de Preparations Professionnelles, INPP CONGO RDC",
    year: isFrench ? "Juillet 2013-2014" : "July 2013-2014",
  },
  {
    degree: isFrench
      ? "BTS en Informatique Appliquée à la Gestion"
      : "BTS in Applied IT for Management",
    institution: "Ecole des Formations des Cadres, EFC TUNIS, TN",
    year: "2014-2016",
  },
  {
    degree: isFrench
      ? "Licence en Systèmes d'Information & Génie Logiciel"
      : "Bachelor in Information Systems & Software Engineering",
    institution: "Université Méditerraneene Libre de Tunis, TUNIS, TN",
    year: "2016-2019",
  },
];

export const getCertificationBoard = (isFrench: boolean) => [
  {
    name: isFrench ? "Certifié Google Analytics" : "Google Analytics Certified",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
  {
    name: isFrench ? "Certifié Email Marketing" : "Certified Email Marketing",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
  {
    name: isFrench
      ? "Certifié Agile Scrum Master (CSM)"
      : "Certified Agile Scrum Master (CSM)",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
  {
    name: isFrench
      ? "Certifié Agile Practioner (ACP)"
      : "Certified Agile Practioner (ACP)",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
  {
    name: isFrench ? "Pay Per Click (PPC)" : "Pay Per Click (PPC)",
    issuer: "Simplilearn",
    icon: "/certs/simplilearn-logo.jpeg",
    year: "2020",
    link: "#",
  },
];

export const getSkills = (isFrench: boolean) => [
  {
    name: "Next.js",
    level: 95,
    category: isFrench ? "Frontend" : "Frontend",
    icon: "🅱️",
  },
  {
    name: "React",
    level: 90,
    category: isFrench ? "Frontend" : "Frontend",
    icon: "⚛️",
  },
  {
    name: "TypeScript",
    level: 88,
    category: isFrench ? "Langage" : "Language",
    icon: "📘",
  },
  {
    name: "Node.js",
    level: 85,
    category: isFrench ? "Backend" : "Backend",
    icon: "🟢",
  },
  {
    name: "Tailwind CSS",
    level: 92,
    category: isFrench ? "Frontend" : "Frontend",
    icon: "🎨",
  },
  {
    name: "MongoDB",
    level: 80,
    category: isFrench ? "Base de données" : "Database",
    icon: "🍃",
  },
  { name: "GraphQL", level: 75, category: "API", icon: "📊" },
  {
    name: "AWS",
    level: 70,
    category: isFrench ? "DevOps" : "DevOps",
    icon: "☁️",
  },
];

export const getCourseBoard = (isFrench: boolean) => [
  {
    name: "Advanced React",
    platform: "Udemy",
    year: "2023",
    link: "#",
  },
  {
    name: isFrench
      ? "Développement Web Fullstack"
      : "Fullstack Web Development",
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
    name: isFrench
      ? "Fondamentaux du Design UI/UX"
      : "UI/UX Design Fundamentals",
    platform: "Skillshare",
    year: "2019",
    link: "#",
  },
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
  },
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

export const getPricingCourses = (isFrench: boolean): PricingCourse[] => [
  {
    id: "english",
    name: isFrench ? "Anglais" : "English",
    hourlyRate: 35,
    category: "languages",
    packs: [
      {
        hours: 5,
        price: 165,
        discount: 6,
        contents: isFrench
          ? [
              "Évaluation des besoins & définition d'objectifs",
              "Compétences de conversation de base",
              "Vocabulaire business fondamental",
              "Bases de la rédaction d'emails",
              "Revue de progression & prochaines étapes",
            ]
          : [
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
        contents: isFrench
          ? [
              "Rédaction professionnelle d'emails & rapports",
              "Formation aux compétences de présentation",
              "Animation de réunions",
              "Vocabulaire de négociation",
              "Étiquette business culturelle",
              "Évaluation finale & certification",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Négociations business avancées",
              "Coaching de présentation exécutive",
              "Communication interculturelle",
              "Stratégies de communication de crise",
              "Personal branding",
              "Projet final",
            ]
          : [
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
    name: isFrench ? "Français" : "French",
    hourlyRate: 35,
    category: "languages",
    packs: [
      {
        hours: 5,
        price: 165,
        discount: 6,
        contents: isFrench
          ? [
              "Évaluation des besoins & définition d'objectifs",
              "Compétences de conversation de base",
              "Vocabulaire business fondamental",
              "Bases de la rédaction en français",
              "Revue de progression & prochaines étapes",
            ]
          : [
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
        contents: isFrench
          ? [
              "Rédaction professionnelle en français & rapports",
              "Formation aux compétences de présentation",
              "Animation de réunions",
              "Vocabulaire de négociation",
              "Étiquette business culturelle",
              "Évaluation finale & certification",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Négociations business avancées",
              "Coaching de présentation exécutive",
              "Communication interculturelle",
              "Stratégies de communication de crise",
              "Personal branding",
              "Projet final",
            ]
          : [
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
        contents: isFrench
          ? [
              "Interface & navigation de base",
              "Formules & fonctions essentielles",
              "Saisie & formatage de données",
              "Graphiques de base",
              "Impression & partage",
            ]
          : [
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
        contents: isFrench
          ? [
              "Formules avancées (RECHERCHEV, SI, SOMME.SI.ENS)",
              "Tableaux croisés dynamiques",
              "Validation & protection des données",
              "Mise en forme conditionnelle",
              "Introduction aux macros",
              "Création de tableaux de bord",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Power Query & transformation de données",
              "Développement avancé de macros",
              "Power Pivot & modélisation de données",
              "Automatisation avec VBA",
              "Intégration avec d'autres applications Office",
              "Projet complet de tableau de bord business",
            ]
          : [
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
    name: isFrench ? "Analyse de Données" : "Data Analysis",
    hourlyRate: 50,
    category: "office",
    packs: [
      {
        hours: 5,
        price: 240,
        discount: 5,
        contents: isFrench
          ? [
              "Fondamentaux de l'analyse de données",
              "Excel pour l'analyse de données",
              "Concepts statistiques de base",
              "Bases de la visualisation de données",
              "Compétences de reporting & présentation",
            ]
          : [
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
        contents: isFrench
          ? [
              "Techniques avancées d'analyse de données",
              "Modélisation statistique",
              "Analytique prédictive",
              "Introduction au machine learning",
              "Data storytelling",
              "Outils de visualisation avancés",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Projets complets d'analyse de données",
              "Projet capstone & développement de portfolio",
            ]
          : [
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
        contents: isFrench
          ? [
              "Formatage de documents Word",
              "Bases des présentations PowerPoint",
              "Gestion des emails Outlook",
              "Introduction à la collaboration Teams",
              "Fondamentaux de l'intégration Office",
            ]
          : [
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
        contents: isFrench
          ? [
              "Modèles Word avancés & publipostage",
              "Design PowerPoint professionnel",
              "Gestion du calendrier & des tâches Outlook",
              "Fonctionnalités avancées de Teams",
              "Bases de OneDrive & SharePoint",
              "Automatisation Office avec Power Automate",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Maîtrise complète de l'écosystème Office",
              "Flux Power Automate avancés",
              "Bases de Power Apps",
              "Systèmes de gestion documentaire",
              "Stratégies de collaboration d'entreprise",
              "Certification de productivité Office",
            ]
          : [
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
        contents: isFrench
          ? [
              "Installation & configuration WordPress",
              "Sélection & personnalisation de thème",
              "Installation de plugins essentiels",
              "Création de pages & articles de base",
              "Fondamentaux du SEO",
            ]
          : [
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
        contents: isFrench
          ? [
              "Développement de thème personnalisé",
              "Configuration avancée de plugins",
              "E-commerce avec WooCommerce",
              "Optimisation des performances",
              "Bonnes pratiques de sécurité",
              "Google Analytics & outils SEO",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Développement de plugin personnalisé",
              "Intégrations API",
              "Configuration WordPress headless",
              "Stratégies SEO avancées",
              "Automatisation marketing",
              "Lancement complet du site web",
            ]
          : [
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
        contents: isFrench
          ? [
              "Fondamentaux du SEO",
              "Bases de la recherche de mots-clés",
              "Optimisation on-page",
              "Configuration Google Search Console",
              "Introduction à l'analyse concurrentielle",
            ]
          : [
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
        contents: isFrench
          ? [
              "Stratégie de mots-clés avancée",
              "Audit SEO technique",
              "Stratégies de link building",
              "Configuration de campagnes Google Ads",
              "Optimisation PPC",
              "Analytique & reporting",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Stratégie SEO d'entreprise",
              "SEO international",
              "Tactiques Google Ads avancées",
              "Optimisation du taux de conversion",
              "Stratégie complète d'entonnoir marketing",
              "Préparation à la certification SEO",
            ]
          : [
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
    name: isFrench ? "Marketing Digital" : "Digital Marketing",
    hourlyRate: 55,
    category: "web",
    packs: [
      {
        hours: 5,
        price: 265,
        discount: 4,
        contents: isFrench
          ? [
              "Aperçu du marketing digital",
              "Bases de la stratégie réseaux sociaux",
              "Fondamentaux du marketing de contenu",
              "Configuration email marketing",
              "Introduction à l'analytique",
            ]
          : [
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
        contents: isFrench
          ? [
              "Stratégie complète réseaux sociaux",
              "Création de calendrier de contenu",
              "Campagnes d'automatisation email",
              "Maîtrise de Google Analytics",
              "Optimisation de l'entonnoir marketing",
              "Mesure du ROI",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Stratégie marketing omnicanal",
              "Plateformes d'automatisation marketing",
              "Analytique avancée & attribution",
              "Stratégie d'allocation budgétaire",
              "Leadership d'équipe en marketing",
              "Certification marketing digital",
            ]
          : [
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
  {
    id: "web-dev",
    name: isFrench ? "Développement Web" : "Web Development",
    hourlyRate: 60,
    category: "development",
    packs: [
      {
        hours: 5,
        price: 290,
        discount: 3,
        contents: isFrench
          ? [
              "Fondamentaux HTML/CSS",
              "Bases de JavaScript",
              "Principes de design responsive",
              "Introduction à React",
              "Contrôle de version avec Git",
            ]
          : [
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
        contents: isFrench
          ? [
              "JavaScript avancé (ES6+)",
              "Composants & hooks React.js",
              "Intégration API",
              "Gestion d'état",
              "Construction d'applications full-stack",
              "Projet : Site portfolio",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Maîtrise du framework Next.js",
              "Conception & gestion de base de données",
              "Authentification & sécurité",
              "Déploiement & CI/CD",
              "Optimisation des performances",
              "Projet SaaS complet",
            ]
          : [
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
    name: isFrench ? "Automatisation VBA" : "VBA Automation",
    hourlyRate: 60,
    category: "development",
    packs: [
      {
        hours: 5,
        price: 290,
        discount: 3,
        contents: isFrench
          ? [
              "Éditeur VBA & bases",
              "Déclaration de variables & types de données",
              "Procédures & fonctions",
              "Boucles & conditions de base",
              "Enregistrement simple de macros",
            ]
          : [
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
        contents: isFrench
          ? [
              "Concepts de programmation avancés",
              "Création de UserForm",
              "Gestion des erreurs",
              "Automatisation du système de fichiers",
              "Automatisation des emails via Outlook",
              "Connexions aux bases de données",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Développement complet d'applications",
              "Modules de classe & POO",
              "Intégrations API",
              "Développement d'add-ins",
              "Optimisation des performances",
              "Projet d'automatisation professionnel",
            ]
          : [
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
    name: isFrench ? "Base de Données MS Access" : "MS Access Database",
    hourlyRate: 55,
    category: "development",
    packs: [
      {
        hours: 5,
        price: 265,
        discount: 4,
        contents: isFrench
          ? [
              "Principes de conception de base de données",
              "Création de tables & relations",
              "Requêtes de base (Select, Update)",
              "Bases de conception de formulaires",
              "Génération de rapports",
            ]
          : [
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
        contents: isFrench
          ? [
              "Conception de requêtes avancées",
              "Développement de formulaires complexes",
              "Sous-formulaires & formulaires de navigation",
              "Reporting avancé",
              "Programmation de macros",
              "Automatisation d'import/export de données",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Développement complet d'applications",
              "Maîtrise de SQL",
              "Intégration avec Excel & SharePoint",
              "Sécurité & gestion des utilisateurs",
              "Maintenance de base de données",
              "Solution business complète",
            ]
          : [
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
        contents: isFrench
          ? [
              "Fondamentaux de la méthodologie AMO",
              "Normes françaises de gestion de projet",
              "Analyse des exigences client",
              "Bases de la documentation",
              "Identification des parties prenantes",
            ]
          : [
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
        contents: isFrench
          ? [
              "Maîtrise complète du framework AMO",
              "Stratégies de gestion des risques",
              "Processus d'assurance qualité",
              "Gestion du budget & des délais",
              "Conformité réglementaire",
              "Études de cas réels",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Gestion avancée des parties prenantes",
              "Résolution de crise & conflits",
              "Préparation à l'audit",
              "Préparation à l'examen de certification",
              "Simulation complète de projet",
              "Certification professionnelle",
            ]
          : [
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
    name: isFrench ? "Certification PMP" : "PMP Certification",
    hourlyRate: 75,
    category: "management",
    packs: [
      {
        hours: 5,
        price: 365,
        discount: 3,
        contents: isFrench
          ? [
              "Aperçu de l'examen PMP",
              "Introduction aux groupes de processus",
              "Terminologie de base",
              "Développement de stratégie d'étude",
              "Questions d'exemple",
            ]
          : [
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
        contents: isFrench
          ? [
              "Les 10 domaines de connaissance",
              "Groupes de processus en profondeur",
              "Maîtrise des ITTOs",
              "Examens pratiques",
              "Analyse des faiblesses",
              "Stratégies de passage d'examen",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Simulation complète d'examen",
              "Analyse de scénarios complexes",
              "Maîtrise des formules & calculs",
              "Guide pratique Agile",
              "Aide à la candidature",
              "Certification de préparation à l'examen",
            ]
          : [
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
  {
    id: "devops",
    name: isFrench ? "Ingénierie DevOps" : "DevOps Engineering",
    hourlyRate: 85,
    category: "advanced",
    packs: [
      {
        hours: 5,
        price: 410,
        discount: 3,
        contents: isFrench
          ? [
              "Culture & principes DevOps",
              "Contrôle de version avancé",
              "Bases du pipeline CI/CD",
              "Conteneurisation avec Docker",
              "Introduction à l'Infrastructure as Code",
            ]
          : [
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
        contents: isFrench
          ? [
              "Pipelines CI/CD avancés",
              "Orchestration Kubernetes",
              "Plateformes cloud (AWS/Azure/GCP)",
              "Monitoring & logging",
              "Sécurité en DevOps",
              "Scripts d'automatisation",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Architecture microservices",
              "Infrastructure as Code avancée",
              "Planification de reprise après sinistre",
              "Stratégies de collaboration d'équipe",
              "Implémentation DevOps complète",
              "Projet niveau entreprise",
            ]
          : [
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
    name: isFrench ? "Logiciel Personnalisé" : "Custom Software",
    hourlyRate: 85,
    category: "advanced",
    packs: [
      {
        hours: 5,
        price: 410,
        discount: 3,
        contents: isFrench
          ? [
              "Analyse des exigences",
              "Conception d'architecture",
              "Sélection de la stack technologique",
              "Planification MVP",
              "Configuration de l'environnement de développement",
            ]
          : [
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
        contents: isFrench
          ? [
              "Développement full-stack",
              "Conception & implémentation d'API",
              "Architecture de base de données",
              "Authentification & autorisation",
              "Stratégies de test",
              "Configuration de déploiement",
            ]
          : [
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
        contents: isFrench
          ? [
              "Tout le contenu du pack 10h",
              "Développement de fonctionnalités avancées",
              "Optimisation des performances",
              "Renforcement de la sécurité",
              "Planification de la scalabilité",
              "Stratégie de maintenance",
              "Solution prête pour la production",
            ]
          : [
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

export const getPricingCategories = (isFrench: boolean) => {
  const pricingCourses = getPricingCourses(isFrench);
  return [
    {
      id: "languages",
      name: isFrench ? "Langues & Communication" : "Languages & Communication",
      icon: null,
      courses: pricingCourses.filter((c) => c.category === "languages"),
    },
    {
      id: "office",
      name: isFrench ? "Bureautique & Productivité" : "Office & Productivity",
      icon: null,
      courses: pricingCourses.filter((c) => c.category === "office"),
    },
    {
      id: "web",
      name: isFrench ? "Web & Marketing Digital" : "Web & Digital Marketing",
      icon: null,
      courses: pricingCourses.filter((c) => c.category === "web"),
    },
    {
      id: "development",
      name: isFrench
        ? "Développement & Automatisation"
        : "Development & Automation",
      icon: null,
      courses: pricingCourses.filter((c) => c.category === "development"),
    },
    {
      id: "management",
      name: isFrench
        ? "Management & Certification"
        : "Management & Certification",
      icon: null,
      courses: pricingCourses.filter((c) => c.category === "management"),
    },
    {
      id: "advanced",
      name: isFrench ? "Tech Avancée & DevOps" : "Advanced Tech & DevOps",
      icon: null,
      courses: pricingCourses.filter((c) => c.category === "advanced"),
    },
  ];
};
