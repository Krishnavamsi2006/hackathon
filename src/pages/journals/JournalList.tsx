import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';

const JournalList: React.FC = () => {
  // Mock data - would come from API in real application
  const journals = [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Journals</h1>
        
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search journals..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <Link
            to="/create-journal"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-flex items-center justify-center transition-colors"
          >
            <Plus size={18} className="mr-1" />
            Create Journal
          </Link>
        </div>
      </div>

      {journals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journals.map((journal, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Journal card content would go here */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">Journal Title</h3>
                <p className="text-gray-600 mt-2">Journal description would go here...</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-10 text-center">
          <h3 className="text-xl font-semibold mb-2">No Journals Found</h3>
          <p className="text-gray-600 mb-6">Create your first journal to get started</p>
          <Link
            to="/create-journal"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded inline-flex items-center transition-colors"
          >
            <Plus size={18} className="mr-2" />
            Create Your First Journal
          </Link>
        </div>
      )}
    </div>
  );
};

export default JournalList;