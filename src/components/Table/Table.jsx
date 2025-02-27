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
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="w-full border-2 border-[#1D90F0] rounded-lg overflow-hidden">
        <table className="w-full bg-gray-900 text-white text-sm">
          <thead>
            <tr className="bg-gray-800 border-b border-gray-700">
              <th className="p-3 text-left font-bold border-r border-[#1D90F0] w-1/3">
                COMPARISON TABLE
              </th>
              <th className="p-3 text-center border-r border-[#1D90F0]">
                <div className="flex flex-col items-center">
                  <span className="text-blue-400">Good leaf</span>
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
