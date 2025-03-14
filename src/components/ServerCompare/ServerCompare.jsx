import React from 'react';
import Price from './svg/price.svg';
import Storage from './svg/storage.svg';
import Performance from './svg/performance.svg';
import Server1 from './svg/server1.svg';
import Server2 from './svg/server2.svg';

const ServerCompare = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 px-20 " dir="ltr">

      {/* Left Server Card - Blue */}
      <div className="w-full md:w-3/10 bg-gray-900 rounded-lg p-6 relative ">
        <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/4" 
               style={{ 
                 background: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='squareGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(0,0,0);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(20,20,30);stop-opacity:0.8' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='url(%23squareGrad)' fill-rule='evenodd'%3E%3Cpath d='M0 0h8v8H0V0zm8 8h8v8H8V8z'/%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '40px 40px',
                 boxShadow: 'inset 0 -40px 20px -20px rgba(17, 24, 39, 1)'
               }}>
          </div>
          <div className="absolute top-2/3 left-0 w-full h-2/3 bg-gradient-to-b from-gray-900 to-transparent opacity-90"></div>
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className="text-blue-400 mr-2">
                <img src={Server1} alt="Server" className="  h-6 w-6" />
              </div>
            </div>
            <button className="bg-blue-500 text-white text-xs font-bold py-1 px-3 ">COMPARE</button>
          </div>
          <div className="flex ml-2 items-center justify-between w-[80%]">
            <h2 className="text-blue-400 text-4xl font-['Rajdhani']  font-bold">VPS Servers</h2>
              <img src={Server2} alt="Server" className="h-6 w-6" />
          </div>
          
          {/* Performance Bar */}
          <div className="">
            <div className="flex items-center text-gray-300 mb-2">
              <img src={Performance} alt="Performance" className="h-5 w-5 mr-2" />
              <span>Performance</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full w-1/4"></div>
              </div>
              {/* medium bar width */}
            <div className="relative">
              <div className="flex justify-between text-xs mt-4">
                <span className="text-blue-400 absolute -top-3 left-1/2 transform -translate-x-1/2 relative">
                  Medium <br />
                  <span className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'> 
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                </span>
                <span className="text-gray-400" style={{color: '#8E8E8E'}}>High-End</span>
              </div>
            </div>
          </div>

          {/* Storage Bar */}
          <div className="">
            <div className="flex items-center text-gray-300 mb-2">
              <img src={Storage} alt="Storage" className="h-5 w-5 mr-2" />
              <span>Storage</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full w-[60%]"></div>
              </div>
              {/* medium bar width */}
            <div className="relative">
              <div className="flex justify-between text-xs mt-4">
                <span className="text-blue-400 absolute -top-3 left-1/2 transform -translate-x-1/2 relative">
                  Medium <br />
                  <span className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'> 
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                </span>
                <span className="text-gray-400" style={{color: '#8E8E8E'}}>High-End</span>
              </div>
            </div>
          </div>

          {/* Price Range Bar */}
          <div className="">
            <div className="flex items-center text-gray-300 mb-2">
              <img src={Price} alt="Price" className="h-5 w-5 mr-2" />
              <span>Price Range</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full w-[40%]"></div>
              </div>
              {/* medium bar width */}
            <div className="relative">
              <div className="flex justify-between text-xs mt-4">
                <span className="text-blue-400 absolute -top-3 left-1/2 transform -translate-x-1/2 relative">
                  Medium <br />
                  <span className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'> 
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                </span>
                <span className="text-gray-400" style={{color: '#8E8E8E'}}>High-End</span>
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

      {/* Right Server Card - Green */}
      <div className="w-full md:w-3/10 bg-gray-900 rounded-lg p-6 relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/4" 
               style={{ 
                 background: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='squareGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(0,0,0);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(20,20,30);stop-opacity:0.8' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='url(%23squareGrad)' fill-rule='evenodd'%3E%3Cpath d='M0 0h8v8H0V0zm8 8h8v8H8V8z'/%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '40px 40px',
                 boxShadow: 'inset 0 -40px 20px -20px rgba(17, 24, 39, 1)'
               }}>
          </div>
          <div className="absolute top-1/3 left-0 w-full h-2/3 bg-gradient-to-b from-gray-900 to-transparent opacity-90"></div>
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className="text-blue-400 mr-2">
                <img src={Server1} alt="Server" className="h-6 w-6" />
              </div>
            </div>
            <button className="bg-blue-500 text-white text-xs font-bold py-1 px-3">COMPARE</button>
          </div>
          <div className="flex ml-2 items-center justify-between w-[80%]">
            <h2 className="text-blue-400 text-4xl font-['Rajdhani'] font-bold tracking-wider">VPS Servers</h2>
            <img src={Server2} alt="Server" className="h-6 w-6" />
          </div>
          
          {/* Performance Bar */}
          <div className="">
            <div className="flex items-center text-gray-300 mb-2">
              <img src={Performance} alt="Performance" className="h-5 w-5 mr-2" />
              <span>Performance</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-full"></div>
            </div>
            {/* medium bar width */}
            <div className="relative">
              <div className="flex justify-between text-xs mt-4">
                <span className="text-gray-400 absolute -top-3 left-1/2 transform -translate-x-1/2 relative">
                  Medium<br />
                  <span className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'> 
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                </span>
                  <span className="text-gray-400" style={{color: '#22C55E'}}>High-End</span>
              </div>
            </div>
          </div>

          {/* Storage Bar */}
          <div className="">
            <div className="flex items-center text-gray-300 mb-2">
              <img src={Storage} alt="Storage" className="h-5 w-5 mr-2" />
              <span>Storage</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-full"></div>
            </div>
            {/* medium bar width */}
            <div className="relative">
              <div className="flex justify-between text-xs mt-4">
                <span className="text-gray-400 absolute -top-3 left-1/2 transform -translate-x-1/2 relative">
                  Medium <br />
                  <span className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'> 
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                </span>
                <span className="text-gray-400" style={{color: '#22C55E'}}>High-End</span>
              </div>
            </div>
          </div>

          {/* Price Range Bar */}
          <div className="">
            <div className="flex items-center text-gray-300 mb-2">
              <img src={Price} alt="Price" className="h-5 w-5 mr-2" />
              <span>Price Range</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full w-full"></div>
            </div>
            {/* medium bar width */}
            <div className="relative">
              <div className="flex justify-between text-xs mt-4">
                <span className="text-gray-400 absolute -top-3 left-1/2 transform -translate-x-1/2 relative">
                  Medium <br />
                  <span className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'> 
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-3 left-1/2 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                </span>
                <span className="text-gray-400" style={{color: '#22C55E'}}>High-End</span>
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
    </div>
  );
};

export default ServerCompare;
