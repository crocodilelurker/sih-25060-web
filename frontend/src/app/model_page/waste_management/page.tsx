// src/app/model_page/waste_management/page.tsx
'use client';
import { Jost } from 'next/font/google';
import { useState } from 'react';
import InputForm from '@/app/_components/InputForm';
import ResultDisplay from '@/app/_components/ResultDisplay';
import Loader from '@/app/_components/Loader';

const API_URL = 'http://localhost:8000/api/rag/send-query';
const jost = Jost ({
    subsets:["latin"],
    weight:["500"]
})

export default function WasteManagementPage() {
  const [response, setResponse] = useState<{ data: { content: string } } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (query: string) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error(`Failed to get response from AI model: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      if (data.status === 'success' && data.data?.content) {
        setResponse(data);
      } else {
        throw new Error(data.message || 'Unexpected response format');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false); // This will reset the button state
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 px-4 py-12  text-2xl `}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold text-gray-800 ${jost.className}`}>Waste Management Assistant</h1>
          <p className="text-gray-600 mt-2">
            Describe your waste and get AI-powered recycling & disposal guidance.
          </p>
        </div>

        <InputForm onSubmit={handleSubmit} loading={loading} />

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            <p><strong>Error:</strong> {error}</p>
          </div>
        )}

        {loading && (
          <div className="mt-8 flex justify-center">
            <Loader />
          </div>
        )}

        {!loading && response && (
          <div className="mt-8">
            <ResultDisplay content={response.data.content} />
          </div>
        )}
      </div>
    </div>
  );
}