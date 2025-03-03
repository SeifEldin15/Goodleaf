import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

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
    { title: 'Game Servers', path: '/game-servers' },
    { title: 'Our Partners', path: '/partners' },
    { title: 'Other', path: '/other' },
  ];

  return (
    <nav className={`fixed w-full transition-colors duration-300 px-4 py-6 z-[1000] ${
      hasScrolled || isOpen ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="GoodLeaf" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {item.title}
            </Link>
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
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                {item.title}
              </Link>
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
      )}
    </nav>
  );
};

export default Navbar;
