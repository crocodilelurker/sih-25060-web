'use client';

import { motion } from 'framer-motion';
import { cleanAIResponse } from '@/app/_utility/aiResponseHandler';
import { Saira } from 'next/font/google';

const saira =Saira ({
    subsets: ["latin"],
    weight:["300"]
})

interface ResultProps {
  content: string;
  isLoading?: boolean;
}

export default function ResultDisplay({ content, isLoading }: ResultProps) {
  const processedContent = isLoading ? 'Processing your request...' : cleanAIResponse(content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-8 card"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Suggestion</h3>
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-500"></div>
        </div>
      ) : (
        <div className={`prose prose-sm max-w-none text-gray-700 leading-relaxed text-xl ${saira.className}`}>
          <p dangerouslySetInnerHTML={{ __html: processedContent }} />
        </div>
      )}
    </motion.div>
  );
}