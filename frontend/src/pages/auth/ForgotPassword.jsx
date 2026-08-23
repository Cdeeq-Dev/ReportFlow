import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [passNumber, setPassNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Intentionally no backend calls or email sending logic
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex flex-col justify-center gap-6 p-10 bg-linear-to-br from-sky-600 to-indigo-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 7V5a4 4 0 018 0v2" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">ReportFlow</h1>
              <p className="text-sm opacity-90">Department workflow management</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            Streamline approvals, track tasks, and keep your department aligned with a
            clean, auditable workflow.
          </p>
        </div>

        <div className="p-8 sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="mb-6 text-center md:hidden">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 7V5a4 4 0 018 0v2" />
                  </svg>
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">ReportFlow</h2>
                  <p className="text-xs text-gray-500">Department workflow management</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Forgot your password?</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Enter your pass number to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="passNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Pass Number
                </label>
                <input
                  id="passNumber"
                  name="passNumber"
                  type="text"
                  autoComplete="off"
                  value={passNumber}
                  onChange={(e) => setPassNumber(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Enter your pass number"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-sky-600 hover:bg-sky-700 px-4 py-2.5 text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                 Remember your password?{" "}
               <Link
                   to="/login"
                     className="font-medium text-sky-600 hover:underline"
                  >
                      Back to login
                </Link>
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
