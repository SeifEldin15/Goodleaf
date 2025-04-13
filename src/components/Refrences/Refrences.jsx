import React from 'react';
import { FaArrowRight, FaFileAlt, FaStar, FaDiscord, FaClock, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const References = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, delay: 0.2 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.div 
      className="w-full text-white py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Cards section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-7xl mx-auto">
        {/* Documentation Card */}
        <motion.div 
          className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div>
            <motion.p 
              className="text-xs text-gray-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              LAST UPDATED: 03/05/2024
            </motion.p>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaFileAlt className="text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">DOCUMENTATION</span>
            </motion.div>
            <motion.p 
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Explore Good Leaf's comprehensive guides and documentation to make the most of our powerful features.
            </motion.p>
          </div>
          <motion.button 
            className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center w-fit"
            variants={buttonVariants}
            whileHover="hover"
          >
            VIEW NOW <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Trustpilot Card */}
        <motion.div 
          className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div>
            <motion.p 
              className="text-xs text-gray-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              LAST UPDATED: 03/05/2024
            </motion.p>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaStar className="text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">TRUSTPILOT</span>
            </motion.div>
            <motion.p 
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Discover what our customers are saying about Good Leaf's exceptional service on Trustpilot.
            </motion.p>
          </div>
          <motion.button 
            className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center w-fit"
            variants={buttonVariants}
            whileHover="hover"
          >
            VIEW NOW <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Community Card */}
        <motion.div 
          className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div>
            <motion.p 
              className="text-xs text-gray-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              LAST UPDATED: 03/05/2024
            </motion.p>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaDiscord className="text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">COMMUNITY</span>
            </motion.div>
            <motion.p 
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Connect with fellow users in our Discord community for tips, updates, and dedicated support.
            </motion.p>
          </div>
          <motion.button 
            className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center w-fit"
            variants={buttonVariants}
            whileHover="hover"
          >
            VIEW NOW <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stats section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {/* Excellent Reviews */}
        <motion.div 
          className="bg-gray-800 rounded-lg p-6"
          variants={itemVariants}
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        >
          <motion.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaThumbsUp className="text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">EXCELLENT REVIEWS</span>
          </motion.div>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Proudly maintaining an <span className="text-blue-400 font-bold">Outstanding</span> rating of
            <span className="text-blue-400 font-bold"> 4.9/5.0</span> from over
            <span className="text-blue-400 font-bold"> 300</span> verified customer reviews.
          </motion.p>
        </motion.div>

        {/* Fast Response */}
        <motion.div 
          className="bg-gray-800 rounded-lg p-6"
          variants={itemVariants}
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        >
          <motion.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaClock className="text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">FAST RESPONSE</span>
          </motion.div>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Our support team delivers responses within
            <span className="text-blue-400 font-bold"> 30 minutes</span>, achieving this target in
            <span className="text-blue-400 font-bold"> 97%</span> of all cases.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default References;
