'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
// ... (other existing imports)

export default function SuperPricing({ pageType = 'home' }: SuperPricingProps) {
  // ... (existing state)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });
  const [submissionState, setSubmissionState] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionState('loading');

    try {
      // Simulate API call - replace with actual fetch in production
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Prepare order data
      const orderData = {
        service: selectedService?.title,
        features: selectedFeatures.map(f => f.name),
        total: calculateTotal(),
        currency,
        customer: formData,
        timestamp: new Date().toISOString()
      };

      // In production: Send to your backend
      console.log('Order submitted:', orderData);
      // await fetch('/api/orders', { method: 'POST', body: JSON.stringify(orderData) });
      
      setSubmissionState('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setSelectedService(null);
        setSelectedFeatures([]);
        setFormData({ name: '', email: '', details: '' });
        setSubmissionState('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionState('error');
      setTimeout(() => setSubmissionState('idle'), 3000);
    }
  };

  // ... (rest of your existing component code)

  // Update your form section to include:
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Full Name"
        required
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
      />
    </div>
    <textarea
      name="details"
      value={formData.details}
      onChange={handleInputChange}
      placeholder="Project details (requirements, timeline, etc.)"
      rows={3}
      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
    ></textarea>
    
    <input type="hidden" name="currency" value={currency} />
    <input type="hidden" name="total" value={calculateTotal()} />
    
    <motion.button
      whileHover={{ scale: submissionState === 'idle' ? 1.02 : 1 }}
      whileTap={{ scale: submissionState === 'idle' ? 0.98 : 1 }}
      type="submit"
      disabled={submissionState !== 'idle'}
      className={`w-full bg-gradient-to-r from-lime-600 to-yellow-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 ${
        submissionState !== 'idle' ? 'opacity-80' : ''
      }`}
    >
      {submissionState === 'loading' ? (
        <>
          <FaSpinner className="animate-spin" />
          Processing...
        </>
      ) : submissionState === 'success' ? (
        <>
          <FaCheckCircle />
          Order Sent!
        </>
      ) : submissionState === 'error' ? (
        <>
          <FaTimesCircle />
          Try Again
        </>
      ) : (
        `Secure My Project (${currency})`
      )}
    </motion.button>
  </form>

  {/* Success Popup */}
  <AnimatePresence>
    {submissionState === 'success' && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none"
      >
        <div className="bg-gray-800 border border-lime-400 rounded-xl p-6 max-w-md shadow-xl pointer-events-auto">
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-lime-400 text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Order Submitted!</h3>
            <p className="text-gray-300 mb-4">
              I've received your order for {selectedService?.title} with {selectedFeatures.length} add-ons.
              Total: {currency === "USD" ? "$" : ""}{calculateTotal().toLocaleString()}{currency === "TND" ? " TND" : ""}
            </p>
            <p className="text-gray-400 text-sm">
              You'll receive a confirmation email shortly at {formData.email}
            </p>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>