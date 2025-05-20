import React from 'react';
import { motion } from 'framer-motion';

const Table = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 + (i * 0.05)
      }
    })
  };

  const tableData = [
    {
      feature: 'Network Reliability',
      description: 'Our infrastructure maintains industry-leading stability with minimal downtime.',
      goodleaf: '99.99%',
      premium: '98.33%',
      budget: '95.11%',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 filter drop-shadow-[0_0_5px_rgba(29,143,239,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 15v4h4v-4H4zm0-9v4h4V6H4zm7 8a1 1 0 01-1-1V8a1 1 0 011-1h9a1 1 0 011 1v5a1 1 0 01-1 1h-9z" />
          <path d="M17.994 17.695A8.97 8.97 0 0021 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c1.464 0 2.85-.35 4.078-.982" strokeWidth="2" stroke="currentColor" fill="none" />
        </svg>
      )
    },
    {
      feature: 'DDoS Protection',
      description: 'Advanced mitigation system with customized filters for game-specific traffic patterns.',
      goodleaf: '4 Tbps',
      premium: '800 Gbps',
      budget: '80 Gbps',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 filter drop-shadow-[0_0_5px_rgba(29,143,239,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      feature: 'Dedicated IP Address',
      description: 'Exclusive IP allocation prevents shared resource issues and enhances security.',
      goodleaf: true,
      premium: true,
      budget: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 filter drop-shadow-[0_0_5px_rgba(29,143,239,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      )
    },
    {
      feature: 'Cloud Backups',
      description: 'Automated data protection with flexible scheduling and rapid restoration options.',
      goodleaf: true,
      premium: false,
      budget: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 filter drop-shadow-[0_0_5px_rgba(29,143,239,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      )
    },
    {
      feature: 'Storage Technology',
      description: 'Ultra-responsive storage solutions with cutting-edge read/write performance.',
      goodleaf: 'NVMe SSD',
      premium: 'SSD',
      budget: 'HDD',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 filter drop-shadow-[0_0_5px_rgba(29,143,239,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 8h20V4H2v4zm4-3H4v2h2V5zM2 14h20v-4H2v4zm2-3h2v2H4v-2z" />
        </svg>
      )
    },
    {
      feature: 'Unlimited Player Slots',
      description: 'Scale your community without artificial limitations or additional costs.',
      goodleaf: true,
      premium: false,
      budget: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 filter drop-shadow-[0_0_5px_rgba(29,143,239,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      )
    },
    {
      feature: 'Connection Bandwidth',
      description: 'High-capacity network infrastructure optimized for gaming traffic patterns.',
      goodleaf: '20 Gbps',
      premium: '1 Gbps',
      budget: '500 Mbps',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 filter drop-shadow-[0_0_5px_rgba(29,143,239,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
          <path d="M14 12.5l5 5M5 17.5l5-5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      feature: 'Infrastructure Control',
      description: 'Direct management of our physical resources ensures consistent quality control.',
      goodleaf: 'Own hardware',
      premium: 'Resells',
      budget: 'Resells',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 filter drop-shadow-[0_0_5px_rgba(29,143,239,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      )
    }
  ];

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="text-blue-400">✓</span>
      ) : (
        <span className="text-gray-500">—</span>
      );
    }
    return <span className="text-blue-400">{value}</span>;
  };

  // Animation for heading letters
  const heading = "UNMATCHED VALUE & PERFORMANCE";
  const blueStart = heading.indexOf("PERFORMANCE");
  const headingChars = heading.split("");
  const headingVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2
      }
    }
  };
  const charVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } }
  };

  return (
    <motion.div 
      className="w-[90%] mx-auto py-8 mt-[0px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex items-center justify-center mb-12 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-transparent via-[#1D8FEF] to-[#1D8FEF]" />
        <div className="mx-4">
         <img className='w-6' src="/header icons/table-ico.webp" alt="" />
        </div>
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-[#1D8FEF] via-[#1D8FEF] to-transparent" />
      </motion.div>

      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4 flex flex-wrap justify-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          {headingChars.map((char, i) =>
            i < blueStart ? (
              <motion.span key={i} variants={charVariants} className="inline-block">
                {char === " " ? '\u00A0' : char}
              </motion.span>
            ) : (
              <motion.span key={i} variants={charVariants} className="inline-block text-blue-500">
                {char === " " ? '\u00A0' : char}
              </motion.span>
            )
          )}
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          GoodLeaf Servers delivers premium hosting with total transparency and exceptional reliability. We believe in fair pricing, clear terms, and superior technology that consistently outperforms competitors.
        </motion.p>
      </motion.div>

      {/* Mobile Card View (hidden on md and larger screens) */}
      <motion.div 
        className="md:hidden space-y-6"
        variants={containerVariants}
      >
        {tableData.map((row, index) => (
          <motion.div 
            key={index} 
            custom={index}
            variants={rowVariants}
            className="border-2 border-[#1D90F0] rounded-lg bg-gray-900 overflow-hidden"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="bg-gray-800 p-3 border-b border-[#1D90F0]">
              <div className="flex items-center">
                <span className="mr-2">{row.icon}</span>
                <div className="font-medium text-blue-400">{row.feature}</div>
              </div>
              <div className="text-xs text-gray-400 mt-2">{row.description}</div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-[#1D90F0]">
              <div className="p-3">
                <div className="text-xs text-center text-gray-400 mb-1">GoodLeaf</div>
                <div className="text-center">{renderValue(row.goodleaf)}</div>
              </div>
              <div className="p-3">
                <div className="text-xs text-center text-gray-400 mb-1">Premium</div>
                <div className="text-center">{renderValue(row.premium)}</div>
              </div>
              <div className="p-3">
                <div className="text-xs text-center text-gray-400 mb-1">Budget</div>
                <div className="text-center">{renderValue(row.budget)}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop Table View (hidden on small screens) */}
      <motion.div 
        className="hidden md:block w-full overflow-x-auto"
        variants={itemVariants}
      >
        <motion.div 
          className="min-w-full border-2 border-[#1D90F0] rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <table className="w-full bg-gray-900 text-white text-sm">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-700">
                <motion.th 
                  className="p-4 text-left font-bold border-r border-[#1D90F0] w-1/3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-xl bg-gradient-to-r from-[#1D8EED] to-white bg-clip-text text-transparent">
                    COMPARISON TABLE
                  </span>
                </motion.th>
                <motion.th 
                  className="p-4 text-center border-r border-[#1D90F0]"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex flex-col items-center">
                    <img src="/Mask group.webp" alt="" />
                    <img src="/Good leaf.webp" alt="" />
                  </div>
                </motion.th>
                <motion.th 
                  className="p-4 text-center border-r border-[#1D90F0]"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="text-gray-300">Premium Competitors</span>
                </motion.th>
                <motion.th 
                  className="p-4 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <span className="text-gray-300">Budget Competitors</span>
                </motion.th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <motion.tr 
                  key={index} 
                  className="border-b border-gray-700"
                  custom={index}
                  variants={rowVariants}
                  whileHover={{ backgroundColor: 'rgba(29, 144, 240, 0.05)' }}
                >
                  <td className="p-4 border-r border-[#1D90F0]">
                    <div className="flex items-start flex-col">
                      <div className='flex mb-2 items-center'>
                        <span className="mr-2">{row.icon}</span>
                        <div className="font-medium text-blue-400">{row.feature}</div>
                      </div>
                      <div className="text-xs text-gray-400 ml-7">{row.description}</div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-r border-[#1D90F0]">{renderValue(row.goodleaf)}</td>
                  <td className="p-4 text-center border-r border-[#1D90F0]">{renderValue(row.premium)}</td>
                  <td className="p-4 text-center">{renderValue(row.budget)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Table;
