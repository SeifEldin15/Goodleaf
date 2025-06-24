import React from 'react';

const ServerHardware = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Layered Server Images */}
          <div className="order-2 lg:order-1 relative h-96">
            <img 
              src="server2.jpg" 
              alt="Server Hardware 2" 
              className="absolute top-0 left-4 w-4/5 h-auto rounded-lg z-0 opacity-90"
            />
            <img 
              src="server.jpg" 
              alt="Server Hardware 1" 
              className="absolute bottom-0 right-0 w-4/5 h-auto rounded-lg z-10"
            />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Lorem ipsum <span className="text-blue-400">dolor sit amet.</span>
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Lorem ipsum dolor sit amet consectetur. Sed purus posuere varius nunc lectus a 
              donec ultricies. Ipsum rhoncus pellentesque amet in. Euismod turpis dictumst purus 
              aliquam in vitae amet sagittis. Sed enim lectus ornare quis morbi. Morua viverra 
              lectus quisque vulputate nibh.
            </p>

            <div className="space-y-6">
              {/* Owned Hardware Feature */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-400 rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Owned Hardware</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Sed purus posuere varius nunc 
                    lectus a donec ultricies.
                  </p>
                </div>
              </div>

              {/* Network Performance Feature */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-blue-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Network Performance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Sed purus posuere varius nunc 
                    lectus a donec ultricies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerHardware; 