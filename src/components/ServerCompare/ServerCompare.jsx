import React from 'react';
import Price from './svg/price.svg';
import Storage from './svg/storage.svg';
import Performance from './svg/performance.svg';
import Server1 from './svg/server1.svg';
import Server2 from './svg/server2.svg';

const ServerCompare = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 px-20 mt-12" dir="ltr">

      {/* Left Server Card - Blue */}
      <div className="w-full md:w-3/10 bg-gray-900 rounded-lg p-6 relative">
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
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className="text-green-400 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="h-6 w-6">
                  <path d="M22.6797 12.7598H2.67969" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.12969 5.86977L2.67969 12.7598V18.7598C2.67969 19.2902 2.8904 19.7989 3.26547 20.174C3.64055 20.5491 4.14925 20.7598 4.67969 20.7598H20.6797C21.2101 20.7598 21.7188 20.5491 22.0939 20.174C22.469 19.7989 22.6797 19.2902 22.6797 18.7598V12.7598L19.2297 5.86977C19.0641 5.53655 18.8089 5.25614 18.4926 5.06005C18.1764 4.86395 17.8118 4.75996 17.4397 4.75977H7.91969C7.5476 4.75996 7.18295 4.86395 6.86673 5.06005C6.55051 5.25614 6.29526 5.53655 6.12969 5.86977Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.67969 16.7598H6.68969" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6797 16.7598H10.6897" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <button className="bg-green-500 text-white text-xs font-bold py-1 px-3">COMPARE</button>
          </div>
          <div className="flex ml-2 items-center justify-between w-[80%]">
            <h2 className="text-green-400 text-4xl font-['Rajdhani'] font-bold tracking-wider">VPS Servers</h2>
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
