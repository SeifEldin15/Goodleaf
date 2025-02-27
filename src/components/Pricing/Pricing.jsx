import React from 'react';

const PricingCard = ({ title, price, features, location, labels }) => (
  <div className="p-6 bg-[#111827] rounded-xl hover:bg-[#1a2438] transition-colors duration-300">
    {/* Featured tag */}
    <div className="flex justify-end mb-4">
      <div className="bg-accent text-white text-sm font-medium px-4 py-1 rounded">
        FEATURED
      </div>
    </div>

    {/* Game server header */}
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <svg className="w-6 h-6 text-accent mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12c0-1.466-.42-2.832-1.145-3.99L17.792 12l2.063 3.99C20.58 14.832 21 13.466 21 12zm-9-7.243L3.583 12 12 19.243l4.208-4.208-2.063-3.99L12 12.757l-2.145-1.712L12 9.333l2.145 1.712 2.063-3.99L12 4.757zM3 12c0 1.466.42 2.832 1.145 3.99L6.208 12 4.145 8.01C3.42 9.168 3 10.534 3 12z"/>
        </svg>
        <span className="text-accent text-sm font-medium">GAME SERVER</span>
      </div>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
    </div>

    {/* Price section */}
    <div className="mb-6">
      <span className="text-4xl font-bold">
        <span className="text-accent">$</span>
        <span className="bg-pricing-gradient text-transparent bg-clip-text">{price}</span>
      </span>
      <span className="text-gray-500">/mo</span>
    </div>

    {/* Feature labels */}
    <div className="flex gap-3 mb-6">
      {labels.map((label, index) => (
        <div key={index} className="bg-[#1E2637]/80 backdrop-blur px-4rounded-full border border-[#2A3441]">
          <span className="text-[#8A93A2] text-[12px] font-semibold tracking-wider">{label}</span>
        </div>
      ))}
    </div>

    <div className="space-y-4 mb-6">
      {features.map((feature, index) => {
        let icon;
        switch (index) {
          case 0: // CPU
            icon = (
              <svg className="w-5 h-5 mr-3 text-feature" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8zm2 2v4h4v-4h-4z"/>
              </svg>
            );
            break;
          case 1: // DDoS Protection
            icon = (
              <svg className="w-5 h-5 mr-3 text-feature" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.7L19.5 8 12 11.3 4.5 8 12 4.7zM4 16.2V9l8 3.3v7.5l-8-3.6zm16 0l-8 3.6v-7.5l8-3.3v7.2z"/>
              </svg>
            );
            break;
          case 2: // CPU Usage
            icon = (
              <svg className="w-5 h-5 mr-3 text-feature" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6v6l4 4"/>
              </svg>
            );
            break;
          case 3: // Storage
            icon = (
              <svg className="w-5 h-5 mr-3 text-feature" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6v12"/>
              </svg>
            );
            break;
          case 4: // Dashboard
            icon = (
              <svg className="w-5 h-5 mr-3 text-feature" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h8v6H8V9z"/>
              </svg>
            );
            break;
          case 5: // Mod Install
            icon = (
              <svg className="w-5 h-5 mr-3 text-feature" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            );
            break;
        }
        return (
          <div key={index} className="flex items-center text-gray-400 text-sm">
            {icon}
            {feature}
          </div>
        );
      })}
    </div>

    {location && (
      <div className="mb-6">
        <h4 className="text-sm text-[#1E90FF] mb-2">Locations:</h4>
        <div className="flex items-center text-gray-400 text-sm">
          <span className="mr-2">🇺🇸</span>
          {location}
        </div>
      </div>
    )}

    <button className="w-full bg-primary-gradient hover:opacity-90 text-white font-medium py-3 px-4 rounded-full transition-opacity flex items-center justify-center">
      DEPLOY NOW
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Rust",
      price: "14.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },
    {
      title: "Minecraft",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },
    {
      title: "ARK",
      price: "39.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },
    {
      title: "Valheim",
      price: "24.99",
      labels: ["GAME PANEL", "DDOS PROTECTION"],
      features: [
        "Ryzen 9 5950X",
        "4 Tbps DDoS Protection",
        "Free Unlimited CPU Usage",
        "Free Unlimited Storage",
        "Game Panel Dashboard",
        "Mod Install System"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Updated header section with decorative lines */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-[300px] bg-gradient-to-r from-transparent via-[#007BFF] to-transparent"></div>
            <div className="border border-[#007BFF] px-4 py-2">
              <p className="text-[#007BFF] font-medium">FEATURED THIS MONTH</p>
            </div>
            <div className="h-[1px] w-[300px] bg-gradient-to-r from-transparent via-[#007BFF] to-transparent"></div>
          </div>
          <p className="text-[#007BFF] text-sm mb-2">WHAT ABOUT OUR PLANS</p>
          <h2 className="text-4xl font-bold text-white mb-2">Choose Your Ideal Hosting Solution</h2>
          <h3 className="text-4xl font-bold text-white">Browse <span className="text-[#007BFF]">Our Plans</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
