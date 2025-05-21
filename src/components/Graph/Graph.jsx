import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import './Graph.css'; // We'll create this file next

const Graph = () => {
  const [showChart, setShowChart] = useState(false);
  const chartRef = useRef(null);

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
    
    // Create more pronounced random variations for fluid/bendy lines
    const randomVariation1 = Math.random() * 1.5 - 0.75; // Increased variation
    const randomVariation2 = Math.random() * 1.5 - 0.75;
    const randomVariation3 = Math.random() * 1.5 - 0.75;
    
    // More frequent and pronounced jags for a liquid-like flow
    const smallJag1 = (i % 3 === 0) ? 0.4 : (i % 2 === 0) ? -0.3 : 0.1;
    const smallJag2 = (i % 4 === 0) ? 0.4 : (i % 3 === 0) ? -0.3 : 0.2;
    const smallJag3 = (i % 3 === 1) ? 0.4 : (i % 2 === 1) ? -0.3 : 0.15;
    
    // Add sine wave variation for more fluid movement
    const sineWave1 = Math.sin(i * 0.6) * 0.8;
    const sineWave2 = Math.sin(i * 0.7 + 1) * 0.7; // Phase shifted
    const sineWave3 = Math.sin(i * 0.5 + 2) * 0.9; // Different frequency
    
    // Scale values to match the Tbps values from the legend
    const progress = Math.min(1, i / 25); // Gradual increase reaching max around i=25
    
    return {
      name: i + 1,
      GSL: Math.max(0, (10 * progress) + randomVariation1 + smallJag1 + sineWave1 + (i % 5 === 0 ? 0.6 : 0)),
      COSMIC_GUARD: Math.max(0, (6 * progress) + randomVariation2 + smallJag2 + sineWave2 + (i % 6 === 0 ? 0.5 : 0)),
      US_PATH: Math.max(0, (17 * progress) + randomVariation3 + smallJag3 + sineWave3 + (i % 7 === 0 ? 0.7 : 0)),
    };
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Control when to show the chart
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChart(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Add class to trigger animations only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && chartRef.current) {
          chartRef.current.classList.add('chart-animate');
        }
      },
      { threshold: 0.3 }
    );
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    
    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [showChart]);

  return (
    <motion.div 
      className="p-4 sm:p-8 rounded-3xl text-white w-full mt-[50px] sm:mt-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-col md:flex-row md:justify-between mb-4 sm:mb-8"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Competitor
          </motion.h2>
          <motion.h3 
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            DDoS Protection
          </motion.h3>
        </motion.div>
        <motion.div 
          className="max-w-xl mt-4 md:mt-0 text-gray-300 text-sm sm:text-base"
          variants={itemVariants}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The chart below illustrates the performance metrics of
            three leading competitors in the game hosting industry
            over the first quarter of the year. The data tracks key
            performance indicators, such as uptime, latency, and
            customer satisfaction, from January to March.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-4 bg-gray-800/70 p-3 sm:p-6 rounded-2xl mt-[50px] sm:mt-[100px]"
        variants={itemVariants}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <motion.div 
          className="flex flex-wrap gap-3 sm:gap-0 sm:flex-nowrap sm:items-center sm:space-x-6 mb-4 pl-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-gray-300 text-xs sm:text-sm">GSL / 10 Tbps</span>
          </motion.div>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="h-3 w-3 rounded-full bg-blue-400 mr-2"></div>
            <span className="text-gray-300 text-xs sm:text-sm">COSMIC GUARD / 6 Tbps</span>
          </motion.div>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="h-3 w-3 rounded-full bg-yellow-300 mr-2"></div>
            <span className="text-gray-300 text-xs sm:text-sm">(US) PATH / 17 Tbps</span>
          </motion.div>
        </motion.div>

        <motion.div 
          ref={chartRef}
          className="h-60 sm:h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: showChart ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
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
              <Line 
                type="monotone" 
                dataKey="GSL" 
                stroke="#9333ea" 
                strokeWidth={3} 
                dot={false}
                activeDot={{ r: 6 }}
                isAnimationActive={false} // Disable recharts animation
                strokeLinecap="round"
                strokeLinejoin="round"
                className="gsl-line"
                style={{ filter: 'drop-shadow(0 0 3px rgba(147, 51, 234, 0.5))' }}
              />
              <Line 
                type="monotone" 
                dataKey="COSMIC_GUARD" 
                stroke="#38bdf8" 
                strokeWidth={3} 
                dot={false} 
                activeDot={{ r: 6 }}
                isAnimationActive={false} // Disable recharts animation
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cosmic-line"
                style={{ filter: 'drop-shadow(0 0 3px rgba(56, 189, 248, 0.5))' }}
              />
              <Line 
                type="monotone" 
                dataKey="US_PATH" 
                stroke="#facc15" 
                strokeWidth={3} 
                dot={false} 
                activeDot={{ r: 6 }}
                isAnimationActive={false} // Disable recharts animation
                strokeLinecap="round"
                strokeLinejoin="round"
                className="path-line"
                style={{ filter: 'drop-shadow(0 0 3px rgba(250, 204, 21, 0.5))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Graph;
