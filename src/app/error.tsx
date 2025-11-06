'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Animated Error Illustration */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg">
            <div className="relative">
              {/* Warning Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>

              {/* Pulsing Animation */}
              <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
          <div
            className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>

        {/* Error Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Oops!</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We apologize for the inconvenience. This error has been reported
              to our team. Please try again or return home.
            </p>
          </div>

          {/* Error Details (Collapsible) */}
          <details className="text-left bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <summary className="p-4 cursor-pointer hover:bg-gray-50 transition-colors font-medium text-gray-700">
              Technical Details
            </summary>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <code className="text-sm text-gray-600 break-all">
                {error.message || 'Unknown error occurred'}
              </code>
              {error.digest && (
                <div className="mt-2 text-xs text-gray-500">
                  Error ID: {error.digest}
                </div>
              )}
            </div>
          </details>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>

            <button
              onClick={() => router.push('/')}
              className="flex-1 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </button>
          </div>

          {/* Support Contact */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <a
                href="mailto:support@bitech.com"
                className="text-blue-500 hover:text-blue-600 font-medium underline transition-colors"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
