// app/error.tsx
'use client'; // For client-side error handling

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, Sparkles, Wand2 } from 'lucide-react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <NavigationHeader />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to the Magic Portal
          </Link>
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center relative">
                <AlertCircle className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">⚠️</div>
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Oops! Magical Mishap</h1>
                <p className="text-gray-600 mt-2">Even pixies have off days • Error Code: {error.digest || 'Unknown'}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-6 text-white mb-8">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold">Our Pixies Dropped the Wand ✨</h2>
              </div>
              <p className="text-red-100 text-lg max-w-4xl mx-auto">
                Something went wrong in our magical code workshop. Don't worry - our developer pixies are already sprinkling fix dust on it!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-red-100 p-8 max-w-3xl mx-auto">
          <div className="prose prose-gray max-w-none">
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-red-800 mb-2 flex items-center justify-center">
                  <Wand2 className="w-5 h-5 mr-2" />
                  What Happened?
                </h3>
                <p className="text-red-700">
                  {error.message || 'An unexpected error occurred. Our team has been notified.'}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">What You Can Do:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-blue-800 mb-2">Try Again</p>
                    <button 
                      onClick={reset}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Retry the Magic
                    </button>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-green-800 mb-2">Go Home</p>
                    <Link 
                      href="/"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
                    >
                      Return to Portal
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                <p className="text-yellow-700">
                  If this persists, contact our support pixies at <a href="mailto:support@tinkerly.io" className="text-yellow-600 underline">support@tinkerly.io</a> with the error code above. We'll make it right with some extra magic dust! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}