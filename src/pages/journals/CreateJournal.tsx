import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';

const CreateJournal: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    frequency: '',
    editorInChief: '',
    issn: '',
    impactFactor: '',
    scope: '',
    submissionGuidelines: '',
    coverImage: null as File | null
  });

  const categories = [
    'Computer Science',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Engineering',
    'Medicine',
    'Social Sciences',
    'Economics',
    'Multidisciplinary'
  ];

  const frequencies = [
    'Monthly',
    'Quarterly',
    'Bi-annual',
    'Annual'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        setFormData(prev => ({
          ...prev,
          coverImage: file
        }));
      } else {
        alert('Please upload a JPEG or PNG image');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting journal:', formData);
    // Handle form submission logic here
    navigate('/journals');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate('/journals')}
          className="flex items-center text-blue-600 mb-6 hover:underline"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Journals
        </button>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Create New Journal</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Journal Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                    Publication Frequency <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    required
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Frequency</option>
                    {frequencies.map((freq) => (
                      <option key={freq} value={freq}>
                        {freq}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="editorInChief" className="block text-sm font-medium text-gray-700 mb-1">
                    Editor-in-Chief <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="editorInChief"
                    name="editorInChief"
                    type="text"
                    required
                    value={formData.editorInChief}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="issn" className="block text-sm font-medium text-gray-700 mb-1">
                    ISSN <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="issn"
                    name="issn"
                    type="text"
                    required
                    value={formData.issn}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="XXXX-XXXX"
                  />
                  <p className="mt-1 text-xs text-gray-500">Format: XXXX-XXXX</p>
                </div>
              </div>
              
              <div>
                <label htmlFor="impactFactor" className="block text-sm font-medium text-gray-700 mb-1">
                  Impact Factor
                </label>
                <input
                  id="impactFactor"
                  name="impactFactor"
                  type="number"
                  step="0.01"
                  value={formData.impactFactor}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="scope" className="block text-sm font-medium text-gray-700 mb-1">
                  Scope <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="scope"
                  name="scope"
                  rows={3}
                  required
                  value={formData.scope}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the journal's scope and areas of interest"
                />
              </div>
              
              <div>
                <label htmlFor="submissionGuidelines" className="block text-sm font-medium text-gray-700 mb-1">
                  Submission Guidelines <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="submissionGuidelines"
                  name="submissionGuidelines"
                  rows={4}
                  required
                  value={formData.submissionGuidelines}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Image
                </label>
                <label className="flex justify-center px-4 py-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="coverImage"
                        className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="coverImage"
                          name="coverImage"
                          type="file"
                          accept="image/jpeg,image/png"
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                </label>
                {formData.coverImage && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.coverImage.name}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Create Journal
              </button>
              <button
                type="button"
                onClick={() => navigate('/journals')}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJournal;