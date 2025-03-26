import { motion } from "framer-motion";

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "$500",
      description: "Perfect for small projects or startups.",
      features: [
        "1-3 page website",
        "Responsive design",
        "Basic SEO optimization",
        "1 round of revisions",
        "Delivery in 2 weeks",
      ],
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
    {
      id: 2,
      name: "Standard",
      price: "$1000",
      description: "Ideal for medium-sized projects with custom features.",
      features: [
        "5-7 page website",
        "Custom features",
        "Advanced SEO optimization",
        "2 rounds of revisions",
        "Delivery in 4 weeks",
      ],
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
    {
      id: 3,
      name: "Premium",
      price: "$2000",
      description: "Best for large or complex projects with ongoing support.",
      features: [
        "E-commerce website",
        "Fullstack development",
        "Advanced SEO optimization",
        "3 rounds of revisions",
        "Ongoing support",
        "Delivery in 6-8 weeks",
      ],
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
  ];

  return (
    <section id="pricing" className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className=" p-8 rounded-lg shadow-md bg-black-200"
            >
              <h3 className="text-2xl font-semibold text-center mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-center mb-4">
                {plan.price}
              </p>
              <p className="text-gray-600 text-center mb-6">
                {plan.description}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaLink}
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {plan.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
