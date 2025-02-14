import React from 'react';

const features = [
  {
    icon: <img src="/feature1.png" alt="Customer Support" className="w-8 h-8" />,
    title: '24/7',
    description: 'Customer Support'
  },
  {
    icon: <img src="/feature4.png" alt="Uptime" className="w-6 h-8 mr-1" />,
    title: '99%',
    description: 'Uptime'
  },
  {
    icon: <img src="/feature2.png" alt="Bandwidth" className="w-8 h-8" />,
    title: 'Unlimited',
    description: 'Bandwidth'
  },
  {
    icon: <img src="/feature3.png" alt="Business Since" className="w-8 h-8" />,
    title: 'In business',
    description: 'since 2017'
  }
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 py-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center p-6 min-h-[150px] bg-gray-900 rounded-lg space-x-4 hover:bg-gray-800 transition duration-300 relative overflow-hidden shadow-[0_0_40px_0px_rgba(4,8,191,0.3)]"
        >
          {/* Modified border to only show on top, left, and right */}
          <div className="absolute inset-x-0 top-0 h-[50%] border-t-[1px] border-l-[1px] border-r-[1px] border-[rgb(4,8,191)] rounded-t-lg bg-gradient-to-b from-blue-500/10 to-transparent"></div>
          
          <div className="flex-shrink-0 text-white relative z-10">
            {feature.icon}
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
