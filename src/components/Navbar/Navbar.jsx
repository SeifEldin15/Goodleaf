import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showGameDropdown, setShowGameDropdown] = useState(false);
  const [showPartnersDropdown, setShowPartnersDropdown] = useState(false);
  const [showVpsDropdown, setShowVpsDropdown] = useState(false);
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0, transformOrigin: "top" },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: "top",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scaleY: 0,
      transformOrigin: "top",
      transition: { duration: 0.2 }
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -10 }
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'VPS Servers', path: '/vps-servers', hasDropdown: true, dropdownType: 'vps' },
    { title: 'Dedicated Servers', path: 'https://goodleaf.cloud/dedi-server' },
    { title: 'Game Servers', path: '/game-servers', hasDropdown: true, dropdownType: 'game' },
    { title: 'Our Partners', path: '/partners' },
    { title: 'Other', path: '/other' },
  ];

  const vpsOptions = [
    { title: 'Silver', path: '/silver' },
    { title: 'Bronze', path: '/bronze' },
    { title: 'Gold', path: '/gold' },
  ];

  const gameServers = [
    { title: 'Minecraft', price: 'From $9.99', icon: '/game-images/mc.png' },
    { title: '7 Days to Die', price: 'From $14.99', icon: '/game-images/7dtd.png' },
    { title: 'ARK: Survival Evolved', price: 'From $19.99', icon: '/game-images/ark.png' },
    { title: 'ARK: Survival Ascended', price: 'From $24.99', icon: '/game-images/ark-sa.png' },
    { title: 'Arma 3', price: 'From $16.99', icon: '/game-images/arma.png' },
    { title: 'Counter-Strike 2', price: 'From $12.99', icon: '/game-images/cs2.png' },
    { title: 'DayZ', price: 'From $19.99', icon: '/game-images/dayz.png' },
    { title: 'FiveM', price: 'From $14.99', icon: '/game-images/fivem.png' },
    { title: 'Garry\'s Mod', price: 'From $9.99', icon: '/game-images/gmod.png' },
    { title: 'Palworld', price: 'From $19.99', icon: '/game-images/palworld.png' },
    { title: 'Rust', price: 'From $24.99', icon: '/game-images/rust.png' },
    { title: 'Unturned', price: 'From $8.99', icon: '/game-images/unturned.png' },
  ];

  const partnerLinks = [
    { title: 'Badd Blood Customs', url: 'https://www.baddbloodcustoms.com/#/', icon: '/Colocation-icons/badd-blood.png' },
    { title: 'Community Development (cDev)', url: 'https://discord.com/oauth2/authorize?response_type=code&client_id=1266077438396338197&state=RAb__dmpA7lezjXsRnysvf7X3Xwl9eRvf5Uul_QaeDs&scope=identify+email&redirect_uri=https%3A%2F%2Fapi.cdev.bot%2Fapi%2Fauth%2Fsign-in%2Fcallback', icon: '/Colocation-icons/cdev.png' },
    { title: 'Deltarix Scripts', url: 'https://deltarix-scripts.tebex.io/', icon: '/Colocation-icons/deltarix.png' },
    { title: 'Rep Scripts', url: 'https://rep.tebex.io/', icon: '/Colocation-icons/rep.png' },
    { title: 'Quasar Store', url: 'https://www.quasar-store.com/', icon: '/Colocation-icons/quasar.png' },
    { title: 'Apex Studios', url: 'https://fivem.apx-studios.com/', icon: '/Colocation-icons/apex.png' },
  ];

  const ChevronDownIcon = () => (
    <svg
      className="h-4 w-4 ml-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );

  // Helper function for internal navigation with scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav 
      className={`fixed w-full transition-colors duration-300 px-4 py-6 z-[1000] ${
        hasScrolled || isOpen || showGameDropdown || showPartnersDropdown || showVpsDropdown ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <Parallax translateY={[-5, 5]}>
        <motion.div 
          className="max-w-[95%] md:max-w-[85%] lg:max-w-[85%] mx-auto flex items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
          >
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="GoodLeaf" className="h-8" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-6"
            variants={containerVariants}
          >
            {navItems.map((item, index) => (
              item.hasDropdown ? (
                <motion.div 
                  key={item.path}
                  variants={itemVariants}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.dropdownType === 'game') setShowGameDropdown(true);
                    if (item.dropdownType === 'partners') setShowPartnersDropdown(true);
                    if (item.dropdownType === 'vps') setShowVpsDropdown(true);
                  }}
                  onMouseLeave={() => {
                    if (item.dropdownType === 'game') setShowGameDropdown(false);
                    if (item.dropdownType === 'partners') setShowPartnersDropdown(false);
                    if (item.dropdownType === 'vps') setShowVpsDropdown(false);
                  }}
                >
                  <div className="flex items-center cursor-pointer text-gray-300 hover:text-white transition-colors text-sm">
                    {item.title}
                    <ChevronDownIcon />
                  </div>
                  
                  {/* VPS Servers Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdownType === 'vps' && showVpsDropdown && (
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute left-0 top-full mt-2 w-[200px] bg-black rounded-md shadow-lg p-2"
                      >
                        {vpsOptions.map((option, index) => (
                          <motion.div 
                            key={index} 
                            variants={dropdownItemVariants}
                          >
                            <Link 
                              to={option.path} 
                              className="block py-3 px-4 text-gray-300 hover:text-white transition-colors text-sm"
                              onClick={scrollToTop}
                            >
                              {option.title}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    
                    {/* Game Servers Dropdown Menu */}
                    {item.dropdownType === 'game' && showGameDropdown && (
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute left-0 top-full mt-2 w-[600px] bg-black rounded-md shadow-lg grid grid-cols-2 gap-2 p-4"
                      >
                        {gameServers.map((server, index) => (
                          <motion.div 
                            key={index} 
                            variants={dropdownItemVariants}
                            className="flex items-center justify-between bg-[#111] hover:bg-[#222] p-4 rounded-md transition-colors"
                          >
                            <Link to="/gaming" className="flex items-center" onClick={scrollToTop}>
                              <img src={server.icon} alt={server.title} className="h-10 w-10 rounded-md mr-3" />
                              <div>
                                <p className="text-white">{server.title}</p>
                                <p className="text-gray-400 text-sm">{server.price}</p>
                              </div>
                            </Link>
                            <ChevronDownIcon />
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    
                    {/* Partners Dropdown Menu */}
                    {item.dropdownType === 'partners' && showPartnersDropdown && (
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute left-0 top-full mt-2 w-[250px] bg-black rounded-md shadow-lg p-2"
                      >
                        {partnerLinks.map((Colocation, index) => (
                          <motion.div 
                            key={index} 
                            variants={dropdownItemVariants}
                            className="hover:bg-[#222] rounded-md transition-colors"
                          >
                            <a 
                              href={Colocation.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block py-3 px-4 text-gray-300 hover:text-white transition-colors text-sm"
                              onClick={scrollToTop}
                            >
                              {Colocation.title}
                            </a>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div key={item.path} variants={itemVariants}>
                  {item.path.startsWith('http') ? (
                    <a
                      href={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                      onClick={scrollToTop}
                    >
                      {item.title}
                    </Link>
                  )}
                </motion.div>
              )
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/get-started"
                className="bg-primary-gradient text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
                onClick={scrollToTop}
              >
                Get Started
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link
                to="/login"
                className="bg-secondary-gradient text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
                onClick={scrollToTop}
              >
                Log in
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </motion.div>
      </Parallax>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
            animate={{ opacity: 1, scaleY: 1, transformOrigin: "top" }}
            exit={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.path || index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <div 
                        className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                        onClick={() => {
                          if (item.dropdownType === 'game') setShowGameDropdown(!showGameDropdown);
                          if (item.dropdownType === 'partners') setShowPartnersDropdown(!showPartnersDropdown);
                          if (item.dropdownType === 'vps') setShowVpsDropdown(!showVpsDropdown);
                        }}
                      >
                        <span>{item.title}</span>
                        <ChevronDownIcon />
                      </div>
                      
                      <AnimatePresence>
                        {/* VPS Dropdown for Mobile */}
                        {item.dropdownType === 'vps' && showVpsDropdown && (
                          <motion.div 
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="pl-4 space-y-1"
                          >
                            {vpsOptions.map((option, sIndex) => (
                              <motion.div
                                key={sIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: sIndex * 0.05 }}
                              >
                                <Link
                                  to={option.path}
                                  className="block py-2 px-3 text-gray-300 hover:text-white transition-colors text-sm"
                                  onClick={scrollToTop}
                                >
                                  {option.title}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                        
                        {item.dropdownType === 'game' && showGameDropdown && (
                          <motion.div 
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="pl-4 space-y-1"
                          >
                            {gameServers.map((server, sIndex) => (
                              <motion.div
                                key={sIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: sIndex * 0.05 }}
                              >
                                <Link
                                  to="/gaming"
                                  className="flex items-center px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                                  onClick={scrollToTop}
                                >
                                  <img src={server.icon} alt={server.title} className="h-8 w-8 rounded-md mr-2" />
                                  <div>
                                    <p>{server.title}</p>
                                    <p className="text-xs text-gray-400">{server.price}</p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                        
                        {item.dropdownType === 'partners' && showPartnersDropdown && (
                          <motion.div 
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="pl-4 space-y-1"
                          >
                            {partnerLinks.map((Colocation, sIndex) => (
                              <motion.div
                                key={sIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: sIndex * 0.05 }}
                              >
                                <a
                                  href={Colocation.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block py-2 px-3 text-gray-300 hover:text-white transition-colors text-sm"
                                  onClick={scrollToTop}
                                >
                                  {Colocation.title}
                                </a>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    item.path.startsWith('http') ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                        onClick={scrollToTop}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className="block px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                        onClick={scrollToTop}
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Link
                  to="/get-started"
                  className="block px-3 py-2 bg-primary-gradient text-white rounded-full font-medium hover:opacity-90 transition-opacity text-center mx-2 text-sm"
                  onClick={scrollToTop}
                >
                  Get Started
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.05 }}
              >
                <Link
                  to="/login"
                  className="block px-3 py-2 bg-secondary-gradient text-white rounded-full font-medium hover:opacity-90 transition-opacity text-center mx-2 mt-2 text-sm"
                  onClick={scrollToTop}
                >
                  Log in
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
