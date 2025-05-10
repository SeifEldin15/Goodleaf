import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <img src="/feature1.webp" alt="Customer Support" className="w-8 h-8" />,
    title: '24/7',
    description: 'Customer Support'
  },
  {
    icon: <img src="/feature4.webp" alt="Uptime" className="w-6 h-8 mr-1" />,
    title: '99%',
    description: 'Uptime'
  },
  {
    icon: <img src="/feature2.webp" alt="Bandwidth" className="w-8 h-8" />,
    title: 'Unlimited',
    description: 'Bandwidth'
  },
  {
    icon: <img src="/feature3.webp" alt="Business Since" className="w-8 h-8" />,
    title: 'In business',
    description: 'since 2017'
  }
];

const FeatureCards = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 py-3 sm:py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="flex items-center p-2 sm:p-4 min-h-[80px] sm:min-h-[120px] bg-gray-900 rounded-lg space-x-2 sm:space-x-3 hover:bg-gray-800 transition duration-300 relative overflow-hidden shadow-[0_0_40px_0px_rgba(4,8,191,0.3)]"
        >
          {/* Modified border to only show on top, left, and right */}
          <div className="absolute inset-x-0 top-0 h-[50%] border-t-[1px] border-l-[1px] border-r-[1px] border-[rgb(4,8,191)] rounded-t-lg bg-gradient-to-b from-blue-500/10 to-transparent"></div>
          
          <motion.div 
            className="flex-shrink-0 text-white relative z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {feature.icon}
          </motion.div>
          <div className="relative z-10">
            <motion.h3 
              className="text-lg font-bold text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              className="text-sm text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            >
              {feature.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureCards;
