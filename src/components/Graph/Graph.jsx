import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Graph = () => {
  // Sample data - you would replace this with your actual data
  const data = Array.from({ length: 30 }, (_, i) => ({
    name: i + 1,
    GSL: Math.max(0, 10 + Math.sin(i / 3) * 5 + (i / 2)),
    COSMIC_GUARD: Math.max(0, 8 + Math.sin(i / 2) * 3 + (i / 3) * 1.5 - (i > 20 ? (i - 20) / 2 : 0)),
    US_PATH: Math.max(0, 5 + Math.sin(i / 2.5) * 2 + (i / 2) * 1.2),
  }));

  return (
    <div className="p-8 rounded-3xl text-white w-full max-w-6xl mx-auto mt-[100px]">
      <div className="flex flex-col md:flex-row md:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Competitor</h2>
          <h3 className="text-4xl font-bold">DDoS Protection</h3>
        </div>
        <div className="max-w-xl mt-4 md:mt-0 text-gray-300">
          <p>
            The chart below illustrates the performance metrics of
            three leading competitors in the game hosting industry
            over the first quarter of the year. The data tracks key
            performance indicators, such as uptime, latency, and
            customer satisfaction, from January to March.
          </p>
        </div>
      </div>

      <div className="mt-4 bg-gray-800/70 p-6 rounded-2xl mt-[100px]">
        <div className="flex items-center space-x-6 mb-4 pl-2">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-gray-300">GSL / 10 Tbps</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-blue-400 mr-2"></div>
            <span className="text-gray-300">COSMIC GUARD / 6 Tbps</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-yellow-300 mr-2"></div>
            <span className="text-gray-300">(US) PATH / 17 Tbps</span>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis 
                domain={[0, 40]} 
                ticks={[0, 10, 20, 30, 40]} 
                stroke="#666" 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '4px',
                  color: 'white'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="GSL" 
                stroke="#9333ea" 
                strokeWidth={2.5} 
                dot={false}
                activeDot={{ r: 6 }} 
              />
              <Line 
                type="monotone" 
                dataKey="COSMIC_GUARD" 
                stroke="#38bdf8" 
                strokeWidth={2.5} 
                dot={false} 
                activeDot={{ r: 6 }} 
              />
              <Line 
                type="monotone" 
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
