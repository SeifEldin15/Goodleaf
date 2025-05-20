import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import LazyImage from '../components/LazyImage/LazyImage';

const Partners = () => {
  const partnerLinks = [
    { title: 'Badd Blood Customs', url: 'https://www.baddbloodcustoms.com/#/', icon: '/partner-icons/baddblood.webp', description: 'Custom vehicle modifications and styling services.' },
    { title: 'Community Development (cDev)', url: 'https://discord.com/oauth2/authorize?response_type=code&client_id=1266077438396338197&state=RAb__dmpA7lezjXsRnysvf7X3Xwl9eRvf5Uul_QaeDs&scope=identify+email&redirect_uri=https%3A%2F%2Fapi.cdev.bot%2Fapi%2Fauth%2Fsign-in%2Fcallback', icon: '/partner-icons/cdev.webp', description: 'Community development tools and services.' },
    { title: 'Deltarix Scripts', url: 'https://deltarix-scripts.tebex.io/', icon: '/partner-icons/deltarix.webp', description: 'High-quality scripts for game servers and development.' },
    { title: 'Rep Scripts', url: 'https://rep.tebex.io/', icon: '/partner-icons/rep.webp', description: 'Premium game server scripts and modifications.' },
    { title: 'Quasar Store', url: 'https://www.quasar-store.com/', icon: '/partner-icons/quasar.webp', description: 'Digital assets and tools for game development.' },
    { title: 'Apex Studios', url: 'https://fivem.apx-studios.com/', icon: '/partner-icons/apex.webp', description: 'FiveM server development and customization.' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Helper for randomized ball classes
  const partnerBalls = [
    { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[32rem] h-[32rem] opacity-90 -left-[30%] md:-left-[10%] lg:-left-[16%] top-[30px]" },
    { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[36rem] h-[36rem] -right-[38%] md:-right-[40%] lg:-right-[45%] top-[100px]" },
    { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[38rem] h-[38rem] opacity-90 -left-[28%] md:-left-[12%] lg:-left-[18%] top-[400px]" },
    { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[32rem] h-[32rem] -right-[28%] md:-right-[18%] lg:-right-[23%] top-[700px]" },
    { src: "/blue-ball.webp", alt: "Blue ball", className: "w-[30rem] h-[30rem] opacity-90 -left-[20%] md:-left-[8%] lg:-left-[12%] top-[1000px]" },
    { src: "/purple-ball.webp", alt: "Purple ball", className: "w-[40rem] h-[40rem] -right-[35%] md:-right-[25%] lg:-right-[30%] top-[1300px]" },
  ];

  return (
    <div>
      <Navbar />
      <div className=" text-white pt-32 pb-20">
        {/* Hero Section */}
        <div className="container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4">
          <Parallax translateY={[-20, 20]}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                Our Trusted <span className="text-blue-500">Partners</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
              >
                We're proud to collaborate with these amazing companies that help us deliver exceptional services to our customers.
              </motion.p>
            </motion.div>
          </Parallax>

          {/* Partners Grid */}
          <div className="relative">
            {/* Circles for the partners grid section */}
            <div className={`absolute z-0 ${partnerBalls[0].className}`}>
              <img src={partnerBalls[0].src} alt={partnerBalls[0].alt} className="w-full h-full opacity-90" />
            </div>
            <div className={`absolute z-0 ${partnerBalls[1].className}`}>
              <img src={partnerBalls[1].src} alt={partnerBalls[1].alt} className="w-full h-full" />
            </div>
            <div className={`absolute z-0 ${partnerBalls[2].className}`}>
              <img src={partnerBalls[2].src} alt={partnerBalls[2].alt} className="w-full h-full opacity-90" />
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {partnerLinks.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-900 border border-gray-800/30 hover:border-[#1E75FF] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:shadow-[0_0_8px_rgba(30,117,255,0.4)] transition-all duration-300"
                >
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mr-4 overflow-hidden border-2 border-gray-700">
                          <img 
                            src={partner.icon} 
                            alt={partner.title} 
                            className="w-12 h-12 object-contain" 
                          />
                        </div>
                        <h3 className="text-xl font-bold text-blue-500">{partner.title}</h3>
                      </div>
                      <p className="text-white/80 mb-4">{partner.description}</p>
                      <div className="flex justify-end">
                        <span className="text-[#1E75FF] flex items-center font-medium">
                          Visit Partner
                          <svg 
                            className="w-4 h-4 ml-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-20 text-center"
            >
              <div className="bg-gray-900 border border-gray-800/30 rounded-lg p-8 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Inquire about <span className="text-blue-500">partnerships</span> through our discord
                </h2>
                <p className="text-white/80 mb-6">
                  Join our growing network of partners and collaborate with us to create exceptional experiences for our customers.
                </p>
                <a 
                  href="https://discord.gg/goodleaf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#1E75FF] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 hover:shadow-[0_0_8px_rgba(30,117,255,0.6)] transition-all"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.39.77-.53 1.154a19.151 19.151 0 0 0-5.646 0 12.927 12.927 0 0 0-.535-1.154.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.028C.533 9.058-.32 13.535.099 17.95a.082.082 0 0 0 .031.056 20.029 20.029 0 0 0 6.031 3.056.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.041-.106c-.653-.248-1.274-.549-1.872-.892a.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.292a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127c-.598.344-1.22.645-1.873.892a.077.077 0 0 0-.041.106c.36.7.772 1.365 1.225 1.995a.076.076 0 0 0 .084.028 19.963 19.963 0 0 0 6.032-3.056.077.077 0 0 0 .032-.055c.5-5.177-.838-9.624-3.549-13.429a.061.061 0 0 0-.031-.029zM8.02 15.278c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                  </svg>
                  Join our Discord
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;