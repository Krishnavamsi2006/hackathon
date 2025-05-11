import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Calendar, User, BookOpen, Tag } from 'lucide-react';

const JournalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock data - would fetch from API in real application
  const journal = {
    id,
    title: 'Journal of Advanced Research',
    description: 'A comprehensive journal focusing on cutting-edge research across multiple disciplines.',
    category: 'Multidisciplinary',
    editorInChief: 'Dr. Jane Smith',
    issn: '1234-5678',
    frequency: 'Quarterly',
    impactFactor: '3.45',
    coverImage: 'https://via.placeholder.com/500x300',
    createdAt: '2024-01-15'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/journals')}
        className="flex items-center text-blue-600 mb-6 hover:underline"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to Journals
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Cover image */}
          <div className="md:w-1/3">
            <img 
              src={journal.coverImage} 
              alt={journal.title} 
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Journal details */}
          <div className="p-6 md:w-2/3">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{journal.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {journal.category}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {journal.frequency}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    ISSN: {journal.issn}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => navigate(`/edit-journal/${id}`)}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Edit size={16} className="mr-1" />
                Edit
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">{journal.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <User className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Editor-in-Chief</p>
                  <p className="font-medium">{journal.editorInChief}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Publication Frequency</p>
                  <p className="font-medium">{journal.frequency}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Impact Factor</p>
                  <p className="font-medium">{journal.impactFactor}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Tag className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">ISSN</p>
                  <p className="font-medium">{journal.issn}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => navigate('/submit-paper')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Submit Paper
              </button>
              <button
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
              >
                View Submissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;