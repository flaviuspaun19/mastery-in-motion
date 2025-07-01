
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import SkillCard from '@/components/SkillCard';
import { allSkills, categories } from '@/data/skillsData';

const BrowsePage = () => {
  const [masteredSkills, setMasteredSkills] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const handleSkillMastered = () => {
    setMasteredSkills(prev => prev + 1);
  };

  // Filter skills based on search and filters
  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || skill.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const categoryNames = ['All', ...categories.map(cat => cat.name)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation masteredCount={masteredSkills} />
      
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Browse All Skills
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover {allSkills.length} micro-skills across {categories.length} categories
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categoryNames.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 ${
                      selectedCategory === category 
                        ? 'bg-blue-600 text-white' 
                        : 'hover:bg-blue-50'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Difficulty Filter */}
              <div className="flex gap-2">
                {difficulties.map((difficulty) => (
                  <Badge
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-2 ${
                      selectedDifficulty === difficulty 
                        ? 'bg-orange-500 text-white' 
                        : 'hover:bg-orange-50'
                    }`}
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Showing {filteredSkills.length} of {allSkills.length} skills
            </p>
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSkills.map((skill) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                onMastered={handleSkillMastered}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No skills found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters
            </p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedDifficulty('All');
            }}>
              Clear All Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BrowsePage;
