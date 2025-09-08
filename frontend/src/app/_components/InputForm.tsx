
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function InputForm({ 
  onSubmit, 
  loading = false 
}: { 
  onSubmit: (query: string) => void;
  loading?: boolean;
}) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    // Don't clear input here - let parent handle it when needed
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="waste-input" className="block text-sm font-medium text-gray-700 mb-2">
            Describe your waste (e.g., "I have 200 kg of plastic waste")
          </label>
          <motion.input
            id="waste-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter waste details..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
            disabled={loading}
          />
        </div>
        <motion.button
          type="submit"
          disabled={loading || !input.trim()}
          className="w-full btn-primary flex items-center justify-center space-x-2"
          whileHover={{ scale: (loading || !input.trim()) ? 1 : 1.02 }}
          whileTap={{ scale: (loading || !input.trim()) ? 1 : 0.98 }}
        >
          {loading ? (
            <>
              <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
              <span>Processing...</span>
            </>
          ) : (
            <span>Get Waste Management Tips</span>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}