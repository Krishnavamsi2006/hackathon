import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-[calc(100vh-64px)] flex items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Research Journal Manager
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">
          Your comprehensive platform for managing research journals and submissions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg text-lg font-medium hover:bg-blue-50 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;