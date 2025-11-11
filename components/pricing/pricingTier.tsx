'use client'

import { useState, useEffect } from 'react';
import { FaGlobe, FaExchangeAlt } from 'react-icons/fa';

type PricingTier = {
  id: string;
  name: string;
  features: string[];
  usdPrice: number; // Base price in USD
  tndPrice?: number | null; // Optional fixed TND price
  cta: string;
};

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'business',
    name: 'Business Website',
    features: ['5-10 pages', 'Mobile-optimized', 'Basic SEO', 'Contact forms'],
    usdPrice: 3500,
    cta: 'Get Business Site'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Store',
    features: ['50+ products', 'Payment gateways', 'Inventory management'],
    usdPrice: 6000,
    cta: 'Build My Store'
  },
  {
    id: 'saas',
    name: 'SaaS Application',
    features: ['React/Node.js', 'User auth', 'Subscription billing'],
    usdPrice: 15000,
    tndPrice: null, // Will use exchange rate
    cta: 'Discuss Project'
  }
];

type AddOn = {
  id: string;
  name: string;
  usdPrice: number;
};

const ADD_ONS: AddOn[] = [
  { id: 'support', name: 'Priority Support (6mo)', usdPrice: 1500 },
  { id: 'seo', name: 'Advanced SEO', usdPrice: 1200 },
  { id: 'translation', name: 'Bilingual (FR/EN)', usdPrice: 800 }
];

export default function Pricing() {
  const [currency, setCurrency] = useState<'USD' | 'TND'>('USD');
  const [isTunisia, setIsTunisia] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(3.1); // Default TND/USD
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<{
    country?: string;
    city?: string;
  }>({});

  // Detect location and fetch exchange rate
  useEffect(() => {
    const detectLocation = async () => {
      try {
        // First try IPAPI
        const ipRes = await fetch('https://ipapi.co/json/');
        const ipData = await ipRes.json();
        
        if (ipData.country) {
          setUserLocation({
            country: ipData.country,
            city: ipData.city
          });
          setIsTunisia(ipData.country === 'TN');
          if (ipData.country === 'TN' || ipData.currency === 'TND') {
            setCurrency('TND');
          }
        }
      } catch (error) {
        console.log('IPAPI failed, using fallback...');
        // Fallback to browser timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setIsTunisia(timezone.includes('Tunis'));
      }
    };

    const fetchExchangeRate = async () => {
      try {
        const res = await fetch(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        const data = await res.json();
        setExchangeRate(data.rates.TND || 3.1);
      } catch (error) {
        console.log('Using default exchange rate');
      }
    };

    detectLocation();
    fetchExchangeRate();
  }, []);

  const calculatePrice = (usdAmount: number) => {
    if (currency === 'USD') return usdAmount;
    return Math.round(usdAmount * exchangeRate * 100) / 100; // Round to 2 decimals
  };

  const formatPrice = (amount: number) => {
    return currency === 'USD'
      ? `$${amount.toLocaleString()}`
      : `${amount.toLocaleString()} TND`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare form data
    const formData = {
      selectedTier,
      selectedAddOns,
      currency,
      estimatedTotal: calculateTotal(),
      userLocation
    };
    console.log('Form submission:', formData);
    // Here you would typically send to your API
    alert(`Form submitted! Total: ${formatPrice(calculateTotal())}`);
  };

  const calculateTotal = () => {
    if (!selectedTier) return 0;
    
    const tier = PRICING_TIERS.find(t => t.id === selectedTier);
    if (!tier) return 0;
    
    let total = tier.usdPrice;
    
    selectedAddOns.forEach(addOnId => {
      const addOn = ADD_ONS.find(a => a.id === addOnId);
      if (addOn) total += addOn.usdPrice;
    });
    
    return total;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Currency Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white rounded-full shadow-sm p-1">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 text-sm font-medium rounded-full flex items-center ${
                currency === 'USD'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaGlobe className="mr-2" /> International (USD)
            </button>
            <span className="mx-2 text-gray-400">
              <FaExchangeAlt />
            </span>
            <button
              onClick={() => setCurrency('TND')}
              className={`px-4 py-2 text-sm font-medium rounded-full flex items-center ${
                currency === 'TND'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
               Tunisian (TND) 
            </button>
          </div>
          
          {userLocation.country && (
            <p className="mt-2 text-sm text-gray-500">
              Detected location: {userLocation.city ? `${userLocation.city}, ` : ''}
              {userLocation.country} {exchangeRate && (
                <span>(1 USD = {exchangeRate.toFixed(2)} TND)</span>
              )}
            </p>
          )}
        </div>

        {/* Pricing Tiers */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all ${
                selectedTier === tier.id 
                  ? 'border-blue-500 scale-105'
                  : 'border-transparent hover:border-gray-200'
              }`}
              onClick={() => setSelectedTier(tier.id)}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                <div className="mt-4">
                  <p className="text-3xl font-extrabold text-blue-600">
                    {formatPrice(
                      tier.tndPrice && currency === 'TND' 
                        ? tier.tndPrice 
                        : calculatePrice(tier.usdPrice)
                    )}
                  </p>
                  {currency === 'TND' && !tier.tndPrice && (
                    <p className="text-sm text-gray-500 mt-1">
                      (Calculated at current exchange rate)
                    </p>
                  )}
                </div>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    type="button"
                    className={`w-full py-2 px-4 rounded-md transition-colors ${
                      selectedTier === tier.id
                        ? 'bg-blue-700 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        {selectedTier && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Available Add-Ons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ADD_ONS.map((addOn) => (
                <div 
                  key={addOn.id}
                  className={`border p-4 rounded-lg cursor-pointer transition-all ${
                    selectedAddOns.includes(addOn.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => {
                    setSelectedAddOns(prev => 
                      prev.includes(addOn.id)
                        ? prev.filter(id => id !== addOn.id)
                        : [...prev, addOn.id]
                    );
                  }}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addOn.id)}
                      readOnly
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <h4 className="font-medium ml-2">{addOn.name}</h4>
                  </div>
                  <p className="text-blue-600 mt-1 ml-6">
                    {formatPrice(calculatePrice(addOn.usdPrice))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Form */}
        {selectedTier && (
          <form onSubmit={handleSubmit} className="mt-12 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Get Your Custom Quote
            </h3>
            
            <input type="hidden" name="currency" value={currency} />
            <input type="hidden" name="selectedTier" value={selectedTier || ''} />
            <input type="hidden" name="selectedAddOns" value={selectedAddOns.join(',')} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  defaultValue={userLocation.country || ''}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900">Order Summary</h4>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span>{PRICING_TIERS.find(t => t.id === selectedTier)?.name}</span>
                  <span className="font-medium">
                    {formatPrice(
                      calculatePrice(
                        PRICING_TIERS.find(t => t.id === selectedTier)?.usdPrice || 0
                      )
                    )}
                  </span>
                </div>
                
                {selectedAddOns.map(addOnId => {
                  const addOn = ADD_ONS.find(a => a.id === addOnId);
                  if (!addOn) return null;
                  return (
                    <div key={addOnId} className="flex justify-between text-sm">
                      <span>+ {addOn.name}</span>
                      <span>
                        {formatPrice(calculatePrice(addOn.usdPrice))}
                      </span>
                    </div>
                  );
                })}
                
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-bold">
                  <span>Estimated Total</span>
                  <span className="text-blue-600">
                    {formatPrice(calculateTotal())}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Request Custom Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}