
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Menu, X, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  masteredCount: number;
}

const Navigation = ({ masteredCount }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-gray-900">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <span className="hidden sm:block">One Minute Mastery</span>
            <span className="sm:hidden">OMM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Browse Skills
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Categories
            </Link>
            <Link to="/random" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Random Skill
            </Link>
            
            {/* Mastery Counter */}
            <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-200 px-3 py-2 rounded-full">
              <Trophy className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-800">
                {masteredCount} Mastered
              </span>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
              Start Learning
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/browse"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Browse Skills
              </Link>
              <Link
                to="/categories"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/random"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Random Skill
              </Link>
              
              <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg mx-3 my-2">
                <Trophy className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-800">
                  {masteredCount} Skills Mastered
                </span>
              </div>
              
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
