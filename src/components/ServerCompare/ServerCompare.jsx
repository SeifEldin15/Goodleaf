import React from 'react';

const ServerCompare = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 p-4">
      {/* Left Server Card - Blue */}
      <div className="w-full md:w-1/2 bg-gray-900 rounded-lg p-6 relative">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <div className="text-blue-400 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            </div>
            <h2 className="text-blue-400 text-2xl font-bold">VPS Servers</h2>
          </div>
          <button className="bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded">COMPARE</button>
        </div>
        
        {/* Performance Bar */}
        <div className="mb-6">
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Performance</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full w-3/5"></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span></span>
              <span className="text-blue-400 relative">
                Medium
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
              <span className="text-gray-400">High-End</span>
            </div>
          </div>
        </div>

        {/* Storage Bar */}
        <div className="mb-6">
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" />
            </svg>
            <span>Storage</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full w-3/5"></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span></span>
              <span className="text-blue-400 relative">
                Medium
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
              <span className="text-gray-400">High-End</span>
            </div>
          </div>
        </div>

        {/* Price Range Bar */}
        <div className="mb-6">
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Price Range</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full w-3/5"></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span></span>
              <span className="text-blue-400 relative">
                Medium
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
              <span className="text-gray-400">High-End</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Scalable Resources</span>
          </div>
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cost-Effective Solution</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Shared Hardware</span>
          </div>
        </div>
      </div>

      {/* Right Server Card - Green */}
      <div className="w-full md:w-1/2 bg-gray-900 rounded-lg p-6 relative">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <div className="text-green-400 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            </div>
            <h2 className="text-green-400 text-2xl font-bold">VPS Servers</h2>
          </div>
          <button className="bg-green-500 text-white text-xs font-bold py-1 px-3 rounded">COMPARE</button>
        </div>
        
        {/* Performance Bar */}
        <div className="mb-6">
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Performance</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span></span>
              <span className="text-gray-400">Medium</span>
              <span className="text-green-400 relative">
                High-End
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Storage Bar */}
        <div className="mb-6">
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" />
            </svg>
            <span>Storage</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span></span>
              <span className="text-gray-400">Medium</span>
              <span className="text-green-400 relative">
                High-End
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Price Range Bar */}
        <div className="mb-6">
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Price Range</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span></span>
              <span className="text-gray-400">Medium</span>
              <span className="text-green-400 relative">
                High-End
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Scalable Resources</span>
          </div>
          <div className="flex items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cost-Effective Solution</span>
          </div>
          <div className="flex items-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Shared Hardware</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerCompare;
