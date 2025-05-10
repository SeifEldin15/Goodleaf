import React from 'react';
import { motion } from 'framer-motion';
import windowsLogo from '/osses/1.webp';
import ubuntuLogo from '/osses/2.webp';
import debianLogo from '/osses/3.webp';
import centosLogo from '/osses/4.webp';
import fedoraLogo from '/osses/5.webp';
import archLogo from '/osses/6.webp';

function OSes() {
  const operatingSystems = [
    { name: 'WINDOWS', logo: windowsLogo, color: 'text-[#00ADEF]' },
    { name: 'UBUNTU', logo: ubuntuLogo, color: 'text-[#E95420]' },
    { name: 'DEBIAN', logo: debianLogo, color: 'text-[#D70A53]' },
    { name: 'CENTOS', logo: centosLogo, color: 'text-[#932279]' },
    { name: 'FEDORA', logo: fedoraLogo, color: 'text-[#51A2DA]' },
  ];

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const osVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto max-w-[1400px] px-4 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <motion.div>
            <motion.h2 
              className="text-3xl lg:text-5xl font-bold text-white text-center lg:text-left"
              variants={textVariants}
            >
              Popular Operating <br />
              Systems.<motion.span 
                className="text-[#0B7FE3]"
                variants={textVariants}
              >Your Choice.</motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 mt-4 text-center lg:text-left"
              variants={textVariants}
            >
              WITH ABILITY TO UPLOAD YOUR OWN OPERATING SYSTEM.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full lg:w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
        >
          {operatingSystems.map((os, index) => (
            <motion.div 
              key={index} 
              custom={index}
              variants={osVariants}
              className="bg-[#1A1B2E] rounded-lg p-4 lg:p-6 flex flex-col items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 border-[1px] border-[rgb(4,8,191)] rounded-lg"></div>
              <motion.img 
                src={os.logo} 
                alt={`${os.name} logo`} 
                className="w-12 h-12 lg:w-16 lg:h-16 mb-4 relative z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              />
              <motion.span 
                className={`text-gray-300 font-medium relative z-10 text-sm lg:text-base`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {os.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default OSes;
