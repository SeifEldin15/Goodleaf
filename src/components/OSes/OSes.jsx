import React from 'react';
import windowsLogo from '/osses/1.png';
import ubuntuLogo from '/osses/2.png';
import debianLogo from '/osses/3.png';
import centosLogo from '/osses/4.png';
import fedoraLogo from '/osses/5.png';
import archLogo from '/osses/6.png';

function OSes() {
  const operatingSystems = [
    { name: 'WINDOWS', logo: windowsLogo, color: 'text-[#00ADEF]' },
    { name: 'UBUNTU', logo: ubuntuLogo, color: 'text-[#E95420]' },
    { name: 'DEBIAN', logo: debianLogo, color: 'text-[#D70A53]' },
    { name: 'CENTOS', logo: centosLogo, color: 'text-[#932279]' },
    { name: 'FEDORA', logo: fedoraLogo, color: 'text-[#51A2DA]' },
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto max-w-[1400px] px-4 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white text-center lg:text-left">
              Popular Operating <br />
              Systems.<span className="text-[#0B7FE3]">Your Choice.</span>
            </h2>
            <p className="text-gray-400 mt-4 text-center lg:text-left">
              WITH ABILITY TO UPLOAD YOUR OWN OPERATING SYSTEM.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full lg:w-auto">
          {operatingSystems.map((os, index) => (
            <div 
              key={index} 
              className="bg-[#1A1B2E] rounded-lg p-4 lg:p-6 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 border-[1px] border-[rgb(4,8,191)] rounded-lg"></div>
              <img 
                src={os.logo} 
                alt={`${os.name} logo`} 
                className="w-12 h-12 lg:w-16 lg:h-16 mb-4 relative z-10" 
              />
              <span className={`text-gray-300 font-medium relative z-10 text-sm lg:text-base`}>{os.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OSes;
