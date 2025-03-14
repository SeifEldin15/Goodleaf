import React from 'react';
import { FaArrowRight, FaFileAlt, FaStar, FaDiscord, FaClock, FaThumbsUp } from 'react-icons/fa';

const References = () => {
  return (
    <div className="w-full text-white py-12 px-4">
      {/* Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-7xl mx-auto">
        {/* Documentation Card */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs text-gray-400 mb-2">LAST UPDATED: 03/05/2024</p>
            <div className="flex items-center mb-4">
              <FaFileAlt className="text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">DOCUMENTATION</span>
            </div>
            <p className="mb-8">
              Explore Good Leaf's comprehensive guides and documentation to make the most of our powerful features.
            </p>
          </div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center w-fit">
            VIEW NOW <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Trustpilot Card */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs text-gray-400 mb-2">LAST UPDATED: 03/05/2024</p>
            <div className="flex items-center mb-4">
              <FaStar className="text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">TRUSTPILOT</span>
            </div>
            <p className="mb-8">
              Discover what our customers are saying about Good Leaf's exceptional service on Trustpilot.
            </p>
          </div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center w-fit">
            VIEW NOW <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Community Card */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs text-gray-400 mb-2">LAST UPDATED: 03/05/2024</p>
            <div className="flex items-center mb-4">
              <FaDiscord className="text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">COMMUNITY</span>
            </div>
            <p className="mb-8">
              Connect with fellow users in our Discord community for tips, updates, and dedicated support.
            </p>
          </div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center w-fit">
            VIEW NOW <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Excellent Reviews */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FaThumbsUp className="text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">EXCELLENT REVIEWS</span>
          </div>
          <p className="text-lg">
            Proudly maintaining an <span className="text-blue-400 font-bold">Outstanding</span> rating of
            <span className="text-blue-400 font-bold"> 4.9/5.0</span> from over
            <span className="text-blue-400 font-bold"> 300</span> verified customer reviews.
          </p>
        </div>

        {/* Fast Response */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FaClock className="text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">FAST RESPONSE</span>
          </div>
          <p className="text-lg">
            Our support team delivers responses within
            <span className="text-blue-400 font-bold"> 30 minutes</span>, achieving this target in
            <span className="text-blue-400 font-bold"> 97%</span> of all cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default References;
