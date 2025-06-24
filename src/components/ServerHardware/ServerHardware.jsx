import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const ServerHardware = () => {
  // Animation variants
  const textVariants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Layered Server Images */}
          <Parallax
            translateY={[30, -30]}
            scale={[0.9, 1.1]}
            opacity={[0.7, 1]}
            className="order-2 lg:order-1 relative h-96"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-4 w-4/5 h-auto rounded-lg z-0"
            >
              <img 
                src="server2.jpg" 
                alt="Server Hardware 2" 
                className="w-full h-auto rounded-lg opacity-90"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-4/5 h-auto rounded-lg z-10"
            >
              <img 
                src="server.jpg" 
                alt="Server Hardware 1" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </Parallax>

          {/* Right - Content */}
          <Parallax
            translateY={[-20, 20]}
            opacity={[0.8, 1]}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Lorem ipsum <span className="text-blue-400">dolor sit amet.</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 leading-relaxed mb-8 text-lg"
              >
                Lorem ipsum dolor sit amet consectetur. Sed purus posuere varius nunc lectus a 
                donec ultricies. Ipsum rhoncus pellentesque amet in. Euismod turpis dictumst purus 
                aliquam in vitae amet sagittis. Sed enim lectus ornare quis morbi. Morua viverra 
                lectus quisque vulputate nibh.
              </motion.p>

              <div className="space-y-6">
                {/* Owned Hardware Feature */}
                <motion.div 
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={featureVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center"
                    >
                      <div className="w-6 h-6 bg-blue-400 rounded-sm"></div>
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Owned Hardware</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Sed purus posuere varius nunc 
                      lectus a donec ultricies.
                    </p>
                  </div>
                </motion.div>

                {/* Network Performance Feature */}
                <motion.div 
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={featureVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center"
                    >
                      <div className="w-6 h-6 border-2 border-blue-400 rounded-full"></div>
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Network Performance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Sed purus posuere varius nunc 
                      lectus a donec ultricies.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default ServerHardware; 