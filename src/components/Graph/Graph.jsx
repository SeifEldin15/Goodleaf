import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Graph = () => {
  // Modified data to align with Tbps values in the legend and maintain moderate sharpness
  const data = Array.from({ length: 30 }, (_, i) => {
    // First point should be 0 for all lines
    if (i === 0) {
      return {
        name: 1,
        GSL: 0,
        COSMIC_GUARD: 0,
        US_PATH: 0,
      };
    }
    
    // Create moderate random variations for realistically jagged lines
    const randomVariation1 = Math.random() * 0.8 - 0.4; // Increased from 0.5 to 0.8
    const randomVariation2 = Math.random() * 0.8 - 0.4; // Increased from 0.5 to 0.8
    const randomVariation3 = Math.random() * 0.8 - 0.4; // Increased from 0.5 to 0.8
    
    // More frequent minor jags for realism
    const smallJag1 = (i % 3 === 0) ? 0.2 : (i % 2 === 0) ? -0.1 : 0;
    const smallJag2 = (i % 4 === 0) ? 0.2 : (i % 3 === 0) ? -0.1 : 0;
    const smallJag3 = (i % 3 === 1) ? 0.2 : (i % 2 === 1) ? -0.1 : 0;
    
    // Scale values to match the Tbps values from the legend
    const progress = Math.min(1, i / 25); // Gradual increase reaching max around i=25
    
    return {
      name: i + 1,
      GSL: Math.max(0, (10 * progress) + randomVariation1 + smallJag1 + (i % 5 === 0 ? 0.4 : 0)),
      COSMIC_GUARD: Math.max(0, (6 * progress) + randomVariation2 + smallJag2 + (i % 6 === 0 ? 0.4 : 0)),
      US_PATH: Math.max(0, (17 * progress) + randomVariation3 + smallJag3 + (i % 7 === 0 ? 0.4 : 0)),
    };
  });

  return (
    <div className="p-4 sm:p-8 rounded-3xl text-white w-full max-w-6xl mx-auto mt-[50px] sm:mt-[100px]">
      <div className="flex flex-col md:flex-row md:justify-between mb-4 sm:mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Competitor</h2>
          <h3 className="text-3xl sm:text-4xl font-bold">DDoS Protection</h3>
        </div>
        <div className="max-w-xl mt-4 md:mt-0 text-gray-300 text-sm sm:text-base">
          <p>
            The chart below illustrates the performance metrics of
            three leading competitors in the game hosting industry
            over the first quarter of the year. The data tracks key
            performance indicators, such as uptime, latency, and
            customer satisfaction, from January to March.
          </p>
        </div>
      </div>

      <div className="mt-4 bg-gray-800/70 p-3 sm:p-6 rounded-2xl mt-[50px] sm:mt-[100px]">
        <div className="flex flex-wrap gap-3 sm:gap-0 sm:flex-nowrap sm:items-center sm:space-x-6 mb-4 pl-2">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-gray-300 text-xs sm:text-sm">GSL / 10 Tbps</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-blue-400 mr-2"></div>
            <span className="text-gray-300 text-xs sm:text-sm">COSMIC GUARD / 6 Tbps</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-yellow-300 mr-2"></div>
            <span className="text-gray-300 text-xs sm:text-sm">(US) PATH / 17 Tbps</span>
          </div>
        </div>

        <div className="h-60 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#666" tick={{fontSize: '0.75rem'}} />
              <YAxis 
                domain={[0, 20]} 
                ticks={[0, 5, 10, 15, 20]} 
                stroke="#666" 
                tick={{fontSize: '0.75rem'}}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '0.75rem'
                }} 
              />
              <Line 
                type="linear" 
                dataKey="GSL" 
                stroke="#9333ea" 
                strokeWidth={2.5} 
                dot={false}
                activeDot={{ r: 6 }} 
              />
              <Line 
                type="linear" 
                dataKey="COSMIC_GUARD" 
                stroke="#38bdf8" 
                strokeWidth={2.5} 
                dot={false} 
                activeDot={{ r: 6 }} 
              />
              <Line 
                type="linear" 
                dataKey="US_PATH" 
                stroke="#facc15" 
                strokeWidth={2.5} 
                dot={false} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
