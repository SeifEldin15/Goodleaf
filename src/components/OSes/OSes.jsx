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
    <div className="bg-black py-16 px-4">
      <div className="container mx-auto max-w-[95%] flex items-center justify-between">
        <div className="flex md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-5xl font-bold text-white">
              Popular Operating <br />
              Systems.<span className="text-[#0B7FE3]">Your Choice.</span>
            </h2>
            <p className="text-gray-400 mt-4">
              WITH ABILITY TO UPLOAD YOUR OWN OPERATING SYSTEM.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {operatingSystems.map((os, index) => (
            <div 
              key={index} 
              className="bg-[#1A1B2E] rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 border-[1px] border-[rgb(4,8,191)] rounded-lg"></div>
              <img 
                src={os.logo} 
                alt={`${os.name} logo`} 
                className="w-16 h-16 mb-4 relative z-10" 
              />
              <span className={`text-gray-300 font-medium relative z-10`}>{os.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OSes;
