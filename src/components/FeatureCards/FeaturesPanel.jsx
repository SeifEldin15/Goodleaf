import React from 'react';

const features = [
  {
    number: 1,
    title: 'RocketGuard',
    description: (
      <>
        GoodLeaf's exclusive <b>DDOS Protection</b> platform allowing your community to stay protected with top-tier protection firewalls along with advanced mitigation, we assure a smooth experience
      </>
    ),
  },
  {
    number: 2,
    title: '24/7 Support',
    description: (
      <>
        We offer 24/7 support online and via our discord platform. Our unique approach to service support allows our clients to feel reassured when encountering a server error. You know we are here for you.
      </>
    ),
  },
  {
    number: 3,
    title: 'Cloud Backups',
    description: (
      <>
        GoodLeaf uses the most redundant cloud backup provider, this assures redundant data storage for your backups. We offers up to 3 rotating backups on any of our game hosting services for no additional cost.
      </>
    ),
  },
];

const FeaturesPanel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-4xl font-bold text-white text-center mb-16">Features</h2>
      {/* Features row */}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-12 mb-12">
        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
          {features.map((feature) => (
            <div key={feature.number} className="text-center max-w-xs">
              <div className="text-5xl font-extrabold text-blue-500 mb-2">{feature.number}</div>
              <div className="text-white text-xl font-bold mb-2">{feature.title}</div>
              <div className="text-white/80 text-base font-normal leading-relaxed">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image and Panel description row */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src="/fivem3d-panel.png"
            alt="FiveM Panel"
            className="w-full max-w-md rounded-xl shadow-2xl"
            style={{objectFit: 'contain'}}
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start md:pl-8">
          <div>
            <div className="text-3xl font-bold text-white mb-2">Our Panel</div>
            <div className="text-white/80 text-base font-normal leading-relaxed mb-2">
              We offer global accesspoints to our services to assure high quality and efficient services world-wide.
            </div>
            <div className="text-white/80 text-base font-normal leading-relaxed">
              <span className="font-bold text-white">Rocket Panel 🚀</span> <br />
              At GoodLeaf we have spent a lot of time developing and improving our game panel. Our goal was to make managing your game server as easy as possible through an advanced interface and addons.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPanel; 