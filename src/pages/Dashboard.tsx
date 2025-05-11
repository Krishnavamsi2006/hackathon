import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, FileText, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data - would be fetched from API in real application
  const recentJournals = [];
  const recentSubmissions = [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex space-x-3">
          <Link 
            to="/create-journal" 
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            <Plus size={18} className="mr-1" />
            New Journal
          </Link>
          <Link 
            to="/submit-paper" 
            className="flex items-center border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition-colors"
          >
            <FileText size={18} className="mr-1" />
            Submit Paper
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Journals */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Clock size={20} className="mr-2 text-blue-600" />
              Recent Journals
            </h2>
            <Link to="/journals" className="text-blue-600 hover:underline text-sm">
              View All
            </Link>
          </div>
          
          {recentJournals.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {recentJournals.map((journal, index) => (
                <li key={index} className="py-3">
                  {/* Journal item would go here */}
                  <p>Journal item</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-gray-50 rounded-md p-6 text-center">
              <p className="text-gray-500 mb-4">No recent journals found</p>
              <Link
                to="/create-journal"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
              >
                Create Your First Journal
              </Link>
            </div>
          )}
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <FileText size={20} className="mr-2 text-blue-600" />
              Recent Submissions
            </h2>
            <Link to="/submissions" className="text-blue-600 hover:underline text-sm">
              View All
            </Link>
          </div>
          
          {recentSubmissions.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {recentSubmissions.map((submission, index) => (
                <li key={index} className="py-3">
                  {/* Submission item would go here */}
                  <p>Submission item</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-gray-50 rounded-md p-6 text-center">
              <p className="text-gray-500 mb-4">No recent submissions found</p>
              <Link
                to="/submit-paper"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
              >
                Submit Your First Paper
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;