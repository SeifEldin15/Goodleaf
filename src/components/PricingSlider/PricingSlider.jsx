import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const PricingSlider = () => {
  const [sliderValue, setSliderValue] = useState(6);
  
  // Price calculation based on slider value
  const price = sliderValue * 3.08;
  
  // Server features
  const leftFeatures = [
    'TukAmon Manager',
    'Framework Installer',
    'SFTP Access',
    'RocketGuard'
  ];
  
  const rightFeatures = [
    'NVMe Storage',
    'Premium CDN',
    'SubUser Manager',
    'Unmetered Bandwidth'
  ];
  
  // Server specifications based on slider value
  const serverSpecs = {
    ram: sliderValue,
    players: 'Unlimited Players',
    cpu: 'Ryzen 5950X',
    storage: '128 GB SSD NVMe'
  };

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
  };

  // Calculate the percentage filled for the slider
  const calculateFillPercentage = () => {
    const min = 2;
    const max = 32;
    return ((sliderValue - min) / (max - min)) * 100;
  };

  const sliderFillStyle = {
    background: `linear-gradient(to right, #ffffff  ${calculateFillPercentage()}%, rgba(255, 255, 255, 0.4) ${calculateFillPercentage()}%)`,
  };

  // Generate labels for the slider
  const sliderLabels = [];
  const min = 2;
  const max = 32;
  const step = 2; // Assuming a step of 2 as per the input element, adjust if needed
  for (let i = min; i <= max; i += step) {
    // Only add labels at certain intervals to avoid clutter, e.g., every 4 or based on some logic
    // For now, let's add labels matching the original image more closely for visual consistency
    if ([2, 4, 6, 8, 12, 16, 32].includes(i)) { // Example: Show specific labels
       sliderLabels.push(i);
    }
    // Or show all labels:
    // sliderLabels.push(i);
  }

  return (
    <div className="flex flex-col md:flex-row text-white rounded-lg overflow-hidden px-5 ">
      {/* Left Side - Slider and Features */}
      <div className="w-full md:w-2/3 p-8 bg-[#1F2937] mb-10 md:mb-0 md:mr-10 rounded-lg">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Pick plan</label>
          <div className="relative w-full">
            <input 
              type="range" 
              min="2" 
              max="32" 
              step="2" 
              value={sliderValue} 
              onChange={handleSliderChange}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-transparent z-10 relative"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none',
              }}
            />
            <div 
              className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 rounded-lg pointer-events-none" 
              style={sliderFillStyle}
            ></div>
          </div>
          
          <div className="flex justify-between mt-4 text-sm text-gray-400 px-1">
            {sliderLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-400 mb-4">This server includes:</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              {leftFeatures.map((feature, index) => (
                <div key={index} className="flex items-center mb-2">
                  <CheckIcon className="h-4 w-4 text-cyan-400 mr-2" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div>
              {rightFeatures.map((feature, index) => (
                <div key={index} className="flex items-center mb-2">
                  <CheckIcon className="h-4 w-4 text-cyan-400 mr-2" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm">
            Have questions? <a href="#" className="text-cyan-400 underline">Ask us!</a>
          </p>
        </div>
      </div>
      
      {/* Right Side - Pricing and Specs */}
      <div className="w-full md:w-1/3 p-8 bg-gray-800 flex flex-col rounded-lg">
        <div className="flex-grow">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold">{sliderValue}</span>
            <span className="ml-2 text-lg">GB of RAM</span>
          </div>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
              </svg>
              <span>{serverSpecs.players}</span>
            </div>
            
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
              <span>{serverSpecs.cpu}</span>
            </div>
            
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              <span>{serverSpecs.storage}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="flex items-start mb-4">
            <span className="text-xs">$</span>
            <span className="text-3xl font-bold">{price.toFixed(2)}</span>
            <span className="ml-1 text-gray-400">/mo</span>
          </div>
          
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center">
            Select location
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSlider;
