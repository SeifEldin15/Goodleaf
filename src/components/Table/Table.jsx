import React from 'react';

const Table = () => {
  const tableData = [
    {
      feature: 'Network Uptime',
      description: 'We boast a remarkable 99.99% uptime over all.',
      goodleaf: '99.99%',
      premium: '98.33%',
      budget: '95.11%',
      icon: '⟳'
    },
    {
      feature: 'DDoS Protection',
      description: '4 Tbps capacity employing tailored filters for each your specific game.',
      goodleaf: '4 Tbps',
      premium: '800 Gbps',
      budget: '80 Gbps',
      icon: '🛡️'
    },
    {
      feature: 'Dedicated IP Address',
      description: 'Avoid network problems, port collisions, & DDoS impact with dedicated IP.',
      goodleaf: true,
      premium: true,
      budget: false,
      icon: '🌐'
    },
    {
      feature: 'Cloud Backups',
      description: 'Quickly and easily schedule and manage your backups.',
      goodleaf: true,
      premium: false,
      budget: false,
      icon: '☁️'
    },
    {
      feature: 'Storage',
      description: 'Leveraging Gen 4 & 5 SSD NVMe technology with highest speed writes.',
      goodleaf: 'NVMe SSD',
      premium: 'SSD',
      budget: 'HDD',
      icon: '💾'
    },
    {
      feature: 'Unlimited Player Slots',
      description: 'Unrestricted player slots, providing unlimited capacity for players.',
      goodleaf: true,
      premium: false,
      budget: false,
      icon: '👥'
    },
    {
      feature: 'Internet Speeds',
      description: 'Speeds ranging from a minimum of 10 Gbps to a maximum of 20 Gbps.',
      goodleaf: '20 Gbps',
      premium: '1 Gbps',
      budget: '500 Mbps',
      icon: '⚡'
    },
    {
      feature: 'Resellers',
      description: 'We have full ownership of our hardware, network, and staff.',
      goodleaf: 'Own hardware',
      premium: 'Resells',
      budget: 'Resells',
      icon: '🏢'
    }
  ];

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="text-blue-400">✓</span>
      ) : (
        <span className="text-gray-500">—</span>
      );
    }
    return <span className="text-blue-400">{value}</span>;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 mt-24">
      <div className="flex items-center justify-center mb-12 max-w-2xl mx-auto">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#1D8FEF] to-[#1D8FEF]" />
        <div className="mx-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" stroke="#1D8FEF" strokeWidth="2"/>
          </svg>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#1D8FEF] via-[#1D8FEF] to-transparent" />
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">MORE BANG FOR YOUR BUCK</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          With Good-Leaf Servers, enjoy transparent, reliable service with no hidden fees or unethical practices. We prioritize honesty, ensuring you get exactly what you pay for with no surprises.
        </p>
      </div>

      <div className="w-full border-2 border-[#1D90F0] rounded-lg overflow-hidden">
        <table className="w-full bg-gray-900 text-white text-sm">
          <thead>
            <tr className="bg-gray-800 border-b border-gray-700">
              <th className="p-3 text-left font-bold border-r border-[#1D90F0] w-1/3">
                <span className="text-xl bg-gradient-to-r from-[#1D8EED] to-white bg-clip-text text-transparent">
                  COMPARISON TABLE
                </span>
              </th>
              <th className="p-3 text-center border-r border-[#1D90F0]">
                <div className="flex flex-col items-center">
                  <img src="/Mask group.png" alt="" />
                  <img src="/Good leaf.png" alt="" />
                </div>
              </th>
              <th className="p-3 text-center border-r border-[#1D90F0]">
                <span className="text-gray-300">Premium Competitors</span>
              </th>
              <th className="p-3 text-center">
                <span className="text-gray-300">Budget Competitors</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-3 border-r border-[#1D90F0]">
                  <div className="flex items-start">
                    <span className="mr-2 text-blue-400">{row.icon}</span>
                    <div>
                      <div className="font-medium text-blue-400">{row.feature}</div>
                      <div className="text-xs text-gray-400">{row.description}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center border-r border-[#1D90F0]">{renderValue(row.goodleaf)}</td>
                <td className="p-3 text-center border-r border-[#1D90F0]">{renderValue(row.premium)}</td>
                <td className="p-3 text-center">{renderValue(row.budget)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
