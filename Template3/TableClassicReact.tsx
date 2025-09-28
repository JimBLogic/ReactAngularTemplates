// TableClassicReact: Elegant, robust, classic data table
import React from 'react';

const data = [
  { name: 'John Smith', email: 'john.smith@example.com', status: 'Active' },
  { name: 'Jane Doe', email: 'jane.doe@example.com', status: 'Active' },
  { name: 'Bob Lee', email: 'bob.lee@example.com', status: 'Inactive' },
];

const TableClassicReact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 font-serif">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">User Table</h2>
        <table className="min-w-full border border-gray-300 rounded">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 border-b border-gray-300 text-left text-blue-800">Name</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-blue-800">Email</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-blue-800">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border-b border-gray-200">{row.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableClassicReact;
