import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showGameDropdown, setShowGameDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'VPS Servers', path: '/vps-servers' },
    { title: 'Dedicated Servers', path: '/dedicated-servers' },
    { title: 'Game Servers', path: '/game-servers', hasDropdown: true },
    { title: 'Our Partners', path: '/partners' },
    { title: 'Other', path: '/other' },
  ];

  const gameServers = [
    { title: 'Mine Craft', price: '99.9$', icon: '/creeper.png' },
    { title: 'Mine Craft', price: '99.9$', icon: '/creeper.png' },
    { title: 'Mine Craft', price: '99.9$', icon: '/creeper.png' },
    { title: 'Mine Craft', price: '99.9$', icon: '/creeper.png ' },
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

  return (
    <nav className={`fixed w-full transition-colors duration-300 px-4 py-6 z-[1000] ${
      hasScrolled || isOpen || showGameDropdown ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="max-w-[95%] md:max-w-[85%] lg:max-w-[85%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="GoodLeaf" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div 
                key={item.path}
                className="relative group"
                onMouseEnter={() => setShowGameDropdown(true)}
                onMouseLeave={() => setShowGameDropdown(false)}
              >
                <div className="flex items-center cursor-pointer text-gray-300 hover:text-white transition-colors text-sm">
                  {item.title}
                  <ChevronDownIcon />
                </div>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute left-0 top-full mt-2 w-[600px] bg-black rounded-md shadow-lg grid grid-cols-2 gap-2 p-4 transition-all duration-300 ${
                    showGameDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {gameServers.map((server, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between bg-[#111] hover:bg-[#222] p-4 rounded-md transition-colors"
                    >
                      <div className="flex items-center">
                        <img src={server.icon} alt={server.title} className="h-10 w-10 rounded-md mr-3" />
                        <div>
                          <p className="text-white">{server.title}</p>
                          <p className="text-gray-400 text-sm">Starting from {server.price} per month</p>
                        </div>
                      </div>
                      <ChevronDownIcon />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {item.title}
              </Link>
            )
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/get-started"
            className="bg-primary-gradient text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-secondary-gradient text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Log in
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
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
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-black overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div key={item.path}>
                <div 
                  className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => setShowGameDropdown(!showGameDropdown)}
                >
                  <span>{item.title}</span>
                  <ChevronDownIcon />
                </div>
                
                <div className={`pl-4 space-y-1 transition-all duration-300 ${showGameDropdown ? 'block' : 'hidden'}`}>
                  {gameServers.map((server, index) => (
                    <Link
                      key={index}
                      to={`/game-servers/${server.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <img src={server.icon} alt={server.title} className="h-8 w-8 rounded-md mr-2" />
                      <div>
                        <p>{server.title}</p>
                        <p className="text-xs text-gray-400">From {server.price}/month</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                {item.title}
              </Link>
            )
          ))}
          <Link
            to="/get-started"
            className="block px-3 py-2 bg-primary-gradient text-white rounded-full font-medium hover:opacity-90 transition-opacity text-center mx-2 text-sm"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 bg-secondary-gradient text-white rounded-full font-medium hover:opacity-90 transition-opacity text-center mx-2 mt-2 text-sm"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
