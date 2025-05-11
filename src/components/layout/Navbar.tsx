import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // This would typically come from an auth context
  const isAuthenticated = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <BookOpen 
              className="h-8 w-8 mr-2 cursor-pointer" 
              onClick={() => navigate('/')}
            />
            <span 
              className="text-xl font-semibold cursor-pointer"
              onClick={() => navigate('/')}
            >
              Research Journal Manager
            </span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button 
                  className="px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </button>
                <button 
                  className="px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/journals')}
                >
                  Journals
                </button>
                <button 
                  className="px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/submissions')}
                >
                  Submissions
                </button>
                <button 
                  className="px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </button>
                <button 
                  className="px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  className="px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button 
                  className="px-3 py-2 rounded border border-white hover:bg-white hover:text-blue-600 transition-colors"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </button>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded hover:bg-blue-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-500">
            <div className="flex flex-col space-y-2">
              {isAuthenticated ? (
                <>
                  <button 
                    className="px-3 py-2 rounded hover:bg-blue-700 transition-colors text-left"
                    onClick={() => { navigate('/dashboard'); toggleMenu(); }}
                  >
                    Dashboard
                  </button>
                  <button 
                    className="px-3 py-2 rounded hover:bg-blue-700 transition-colors text-left"
                    onClick={() => { navigate('/journals'); toggleMenu(); }}
                  >
                    Journals
                  </button>
                  <button 
                    className="px-3 py-2 rounded hover:bg-blue-700 transition-colors text-left"
                    onClick={() => { navigate('/submissions'); toggleMenu(); }}
                  >
                    Submissions
                  </button>
                  <button 
                    className="px-3 py-2 rounded hover:bg-blue-700 transition-colors text-left"
                    onClick={() => { navigate('/profile'); toggleMenu(); }}
                  >
                    Profile
                  </button>
                  <button 
                    className="px-3 py-2 rounded hover:bg-blue-700 transition-colors text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button 
                    className="px-3 py-2 rounded hover:bg-blue-700 transition-colors text-left"
                    onClick={() => { navigate('/login'); toggleMenu(); }}
                  >
                    Login
                  </button>
                  <button 
                    className="px-3 py-2 rounded hover:bg-blue-700 transition-colors text-left"
                    onClick={() => { navigate('/signup'); toggleMenu(); }}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;