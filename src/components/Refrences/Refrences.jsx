import React from 'react';
import { FaArrowRight, FaFileAlt, FaStar, FaBolt, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const References = () => {
  return (
    <div className="w-full text-white py-12 px-4">
      {/* 2x2 Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Documentation Card */}
        <div className="bg-[#1e293b] rounded-xl p-6 flex flex-col justify-between h-64 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-200">
          <div>
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-blue-400 text-xl mr-4" />
              <span className="text-white text-xl font-semibold">Documentation</span>
            </div>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">
              LAST UPDATED: 03/05/2024
            </p>
            <p className="text-gray-300 leading-relaxed text-base">
              Explore Good Leaf's in-depth guides and documentation to unlock the full potential of our powerful platform.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 flex items-center w-fit font-medium transition-colors duration-200 mt-4">
            View Documentation <FaArrowRight className="ml-2 text-sm" />
          </button>
        </div>

        {/* Trustpilot Card */}
        <div className="bg-[#1e293b] rounded-xl p-6 flex flex-col justify-between h-64 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-200">
          <div>
            <div className="flex items-center mb-6">
              <FaStar className="text-blue-400 text-xl mr-4" />
              <span className="text-white text-xl font-semibold">Trustpilot</span>
            </div>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">
              UPDATED: 03/05/2024
            </p>
            <p className="text-gray-300 leading-relaxed text-base">
              See what our customers are saying! Discover real feedback about Good Leaf's exceptional service.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 flex items-center w-fit font-medium transition-colors duration-200 mt-4">
            View Reviews <FaArrowRight className="ml-2 text-sm" />
          </button>
        </div>

        {/* Excellent Reviews Card */}
        <div className="bg-[#1e293b] rounded-xl p-6 flex flex-col justify-between h-64 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-200">
          <div>
            <div className="flex items-center mb-6">
              <FaThumbsUp className="text-blue-400 text-xl mr-4" />
              <span className="text-white text-xl font-semibold">Excellent Reviews</span>
            </div>
            <div className="text-gray-300">
              <p className="mb-4 leading-relaxed text-base">
                We're proud to maintain an <span className="text-white font-medium">Outstanding</span> rating of <span className="text-blue-400 font-semibold">4.9/5.0</span> from over <span className="text-blue-400 font-semibold">300+ verified</span> customer reviews.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Your satisfaction powers everything we do. We continuously strive to exceed expectations and deliver exceptional service quality.
              </p>
            </div>
          </div>
        </div>

        {/* Fast Response Card */}
        <div className="bg-[#1e293b] rounded-xl p-6 flex flex-col justify-between h-64 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-200">
          <div>
            <div className="flex items-center mb-6">
              <FaBolt className="text-blue-400 text-xl mr-4" />
              <span className="text-white text-xl font-semibold">Fast Response</span>
            </div>
            <div className="text-gray-300">
              <p className="mb-4 leading-relaxed text-base">
                Our support team responds in under <span className="text-blue-400 font-semibold">30 minutes</span> for <span className="text-blue-400 font-semibold">97%</span> of all requests.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Speed and reliability – it's what we're known for. Our dedicated team ensures rapid resolution of technical issues and inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
