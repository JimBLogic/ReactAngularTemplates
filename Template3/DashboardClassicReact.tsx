// DashboardClassicReact: Elegant, robust, classic dashboard
import React from 'react';

const stats = [
  { label: 'Users', value: 1240 },
  { label: 'Sales', value: 320 },
  { label: 'Revenue', value: '$12,400' },
  { label: 'Growth', value: '8%' },
];

const DashboardClassicReact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 font-serif p-8">
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Classic Dashboard</h1>
        <button className="px-4 py-2 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800 transition-colors">Logout</button>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-300 rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-2xl font-bold text-blue-700 mb-2">{stat.value}</div>
            <div className="text-gray-600 text-lg">{stat.label}</div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default DashboardClassicReact;
