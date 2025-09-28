// ProfileClassicReact: Elegant, robust, classic user profile page
import React from 'react';

const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  joined: '2022-01-15',
  status: 'Active',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

const ProfileClassicReact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 font-serif">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 w-full max-w-lg flex flex-col items-center">
        <img src={user.avatar} alt={user.name + ' avatar'} className="h-24 w-24 rounded-full shadow-lg border-4 border-blue-200 mb-4" loading="lazy" />
        <div className="text-2xl font-bold text-blue-800 mb-1">{user.name}</div>
        <div className="text-gray-600 mb-2">{user.email}</div>
        <div className="text-gray-500 text-sm mb-4">Joined: {user.joined}</div>
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6">{user.status}</span>
        <button className="px-6 py-2 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800 transition-colors">Edit Profile</button>
      </div>
    </div>
  );
};

export default ProfileClassicReact;
