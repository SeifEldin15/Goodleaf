import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const LogoSlider = () => {
  const logosRef = useRef(null);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  useEffect(() => {
    // Clone the logos list to create the infinite scroll effect
    if (logosRef.current) {
      const clone = logosRef.current.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      logosRef.current.parentNode.appendChild(clone);
    }
  }, []);

  return (
    <Parallax translateY={[-10, 10]} opacity={[0.8, 1]} className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
        className="logo-slider-container w-full"
      >
        {/* Optional heading for the slider */}
        <motion.h3 
          className="text-center text-white text-xl font-semibold mb-8"
          variants={textVariants}
        >
          Trusted by leading companies worldwide
        </motion.h3>

        {/* Logo Carousel animation */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-6 sm:[&_li]:mx-8 md:[&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src="/logos slider/logo2.png" alt="Disney" className="w-20 sm:w-24 md:w-28" />
            </li>
            <li>
              <img src="/logos slider/logo3.png" alt="Airbnb" className="w-20 sm:w-24 md:w-28" />
            </li>
            <li>
              <img src="/logos slider/logo4.png" alt="Apple" className="w-20 sm:w-24 md:w-28" />
            </li>
            <li>
              <img src="/logos slider/logo5.png" alt="Spark" className="w-20 sm:w-24 md:w-28" />
            </li>
          </ul>
        </div>
        {/* End: Logo Carousel animation */}
      </motion.div>
    </Parallax>
  );
};

export default LogoSlider;