import React from 'react';
import './icons.css';
import cpuIcon from './svg/cpu-icons.svg';
import storageIcon from './svg/storage-icons.svg';
import dashboardIcon from './svg/dashboard-icons.svg';
import ddosIcon from './svg/ddos-icons.svg';

// Server rack images from public folder
const singleDeviceImg = '/pricing/pricing1.avif';
const quarterRackImg = '/pricing/pricing2.webp';
const halfRackImg = '/pricing/pricing3.webp';
const fullRackImg = '/pricing/pricing4.webp';

const PricingCard = ({ title, price, features, isPopular, discount, buttonText, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700 relative">
    {/* Popular badge */}
    {isPopular && (
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg z-10">
        MOST POPULAR
      </div>
    )}

    {/* Image section */}
    <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-6">
      <img src={image} alt={title} className="max-h-full object-contain" />
    </div>
    
    {/* Header */}
    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
      
      {/* Price */}
      <div className="mt-4 flex items-baseline">
        <span className="text-blue-600 text-4xl font-bold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400 ml-1">/monthly</span>
      </div>
      
      {/* Discount banner if applicable */}
      {discount && (
        <div className="mt-3 inline-flex items-center bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
            <span className="text-red-500 mr-1">🔥</span> 
            {discount}
          </span>
        </div>
      )}
    </div>
    
    {/* Features */}
    <div className="px-6 py-6 space-y-4 bg-gray-50 dark:bg-gray-800/50">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-400">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="ml-2 text-gray-700 dark:text-gray-300">{feature}</span>
        </div>
      ))}
    </div>
    
    {/* Button */}
    <div className="px-6 py-4 bg-white dark:bg-gray-800">
      <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors">
        {buttonText || "Get Started"}
      </button>
    </div>
  </div>
);

const Pricing2 = () => {
  const pricingPlans = [
    {
      title: "Single Device",
      price: "59",
      features: [
        "1U Space",
        "208v 1 Amp",
        "25TB Bandwidth",
        "/29 IPv4 Included",
        "99% Uptime SLA",
        "24/7/365 Support"
      ],
      discount: "50% off 1st Month - RACK50",
      buttonText: "Order Now",
      image: "/pricing/pricing1.avif"
    },
    {
      title: "Quarter Rack",
      price: "99",
      features: [
        "10U Space",
        "208v 2 Amps",
        "25TB Bandwidth",
        "/29 IPv4 Included",
        "99% Uptime SLA",
        "24/7/365 Support"
      ],
      discount: "50% off 1st Month - RACK50",
      buttonText: "Contact Us",
      isPopular: true,
      image: "/pricing/pricing2.webp"
    },
    {
      title: "Half Rack",
      price: "599",
      features: [
        "20U Space",
        "120v 20amps",
        "50TB Bandwidth",
        "/28 (13 Usable IPv4s)",
        "99% Uptime SLA",
        "24/7/365 Support",
        "24/7 Key Card Access"
      ],
      buttonText: "Contact Us",
      image: "/pricing/pricing3.webp"
    },
    {
      title: "Full Rack",
      price: "1199",
      features: [
        "42U Space",
        "5kW (208v 30amp) Power",
        "100TB Bandwidth",
        "/28 (13 Usable IPv4s)",
        "99% Uptime SLA",
        "24/7/365 Support",
        "24/7 Key Card Access"
      ],
      buttonText: "Contact Us",
      image: "/pricing/pricing4.webp"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-base font-semibold uppercase tracking-wide">
            Colocation Hosting Plans
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mt-2">
            Enterprise-Grade <span className="text-blue-600">Infrastructure</span>
          </h2>
          
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Choose from our flexible hosting solutions with multiple datacenter locations.
            All plans include enterprise hardware, premium support and high-performance infrastructure.
          </p>
        </div>
        
        {/* Datacenter locations */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-center">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-800 dark:text-white font-medium mr-1">Dallas</span>
            <span className="text-gray-500">54 ms</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-800 dark:text-white font-medium mr-1">Miami</span>
            <span className="text-gray-500">50 ms</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-gray-800 dark:text-white font-medium mr-1">New York</span>
            <span className="text-gray-500">20 ms</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
