import React from 'react';
import './icons.css';
import cpuIcon from './svg/cpu-icons.svg';
import storageIcon from './svg/storage-icons.svg';
import dashboardIcon from './svg/dashboard-icons.svg';
import ddosIcon from './svg/ddos-icons.svg';

const PricingCard = ({ title, price, features, isPopular, discount, buttonText }) => (
  <div className="bg-[#111827] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-[#141526] hover:border-[#040BFF] relative">
    {/* Header */}
    <div className="p-6 bg-gradient-to-b from-[#0A0A0A]/70 to-[#141526]">
      <h3 className="font-['Rajdhani'] text-2xl font-bold text-white">{title}</h3>
      
      {/* Price */}
      <div className="mt-4 flex items-baseline">
        <span className="text-[#007BFF] text-4xl font-bold">${price}</span>
        <span className="text-gray-400 ml-1">/monthly</span>
      </div>
      
      {/* Discount banner if applicable */}
      {discount && (
        <div className="mt-3 inline-flex items-center bg-[#141526] px-3 py-1 rounded-full">
          <span className="text-[#007BFF] text-sm font-medium">
            <span className="text-red-500 mr-1">🔥</span> 
            {discount}
          </span>
        </div>
      )}
    </div>
    
    {/* Button */}
    <div className="px-6 pb-4">
      <button className="w-full bg-gradient-to-r from-[#040BFF] to-[#1E75FF] text-white font-['Rajdhani'] font-bold py-3 rounded-md hover:opacity-90 transition-opacity">
        {buttonText || "Get Started"}
      </button>
    </div>
    
    {/* Features */}
    <div className="px-6 pb-8 space-y-4">
      {features.map((feature, index) => {
        let iconSrc;
        let iconColor = "text-[#007BFF]";
        
        // Assign different icons based on feature type
        if (index % 4 === 0) iconSrc = cpuIcon;
        else if (index % 4 === 1) iconSrc = ddosIcon;
        else if (index % 4 === 2) iconSrc = storageIcon;
        else iconSrc = dashboardIcon;
        
        return (
          <div key={index} className="flex items-center">
            <div className="flex-shrink-0 h-5 w-5 text-[#007BFF]">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-2 text-gray-300">{feature}</span>
          </div>
        );
      })}
    </div>
    
    {/* Popular badge */}
    {isPopular && (
      <div className="absolute top-0 right-0 bg-[#040BFF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
        POPULAR
      </div>
    )}
  </div>
);

const Pricing2 = () => {
  const pricingPlans = [
    {
      title: "1u Space",
      price: "59",
      features: [
        "208v 1 Amp",
        "25TB Bandwidth",
        "/29 IPv4 Included",
        "99% Uptime SLA",
        "Free Rack and Stack",
        "24/7/365 Rapid Response"
      ],
      discount: "50% off 1st Month - RACK50",
      buttonText: "Get Started"
    },
    {
      title: "2u Space",
      price: "99",
      features: [
        "208v 2 Amps",
        "25TB Bandwidth",
        "/29 IPv4 Included",
        "99% Uptime SLA",
        "Free Rack and Stack",
        "24/7/365 Rapid Response"
      ],
      discount: "50% off 1st Month - RACK50",
      buttonText: "Get Started",
      isPopular: true
    },
    {
      title: "Half Cabinet",
      price: "599",
      features: [
        "120v 20amps",
        "50TB Bandwidth",
        "/28 (13 Usable IPv4s)",
        "99% Uptime SLA",
        "Free Rack and Stack",
        "24/7/365 Rapid Response",
        "24/7/365 Key Card Access"
      ],
      buttonText: "Get Started"
    },
    {
      title: "Full Cabinet",
      price: "1199",
      features: [
        "5kW (208v 30amp) Power",
        "100TB Bandwidth",
        "/28 (13 Usable IPv4s)",
        "99% Uptime SLA",
        "Free Rack and Stack",
        "24/7/365 Rapid Response",
        "24/7/365 Key Card Access"
      ],
      buttonText: "Get Started"
    }
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-['Rajdhani'] text-[#0060FE] text-base font-semibold uppercase tracking-wide">
            Our Hosting Solutions
          </p>
          
          <h2 className="font-['Rajdhani'] text-4xl md:text-5xl font-bold text-white mt-2">
            Choose Your <span className="text-[#007BFF]">Perfect Plan</span>
          </h2>
          
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Select from our range of hosting solutions designed to meet your needs.
            All plans include our premium support and high-performance infrastructure.
          </p>
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
