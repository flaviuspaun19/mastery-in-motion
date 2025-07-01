
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import SkillCard from '@/components/SkillCard';
import { categories, featuredSkills } from '@/data/skillsData';
import { useState } from 'react';

const CategoryPage = () => {
  const { slug } = useParams();
  const [masteredSkills, setMasteredSkills] = useState(0);
  
  const category = categories.find(cat => cat.slug === slug);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
        <Navigation masteredCount={masteredSkills} />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Filter skills by category (in a real app, this would come from an API)
  const categorySkills = featuredSkills.filter(skill => 
    skill.category.toLowerCase() === category.name.toLowerCase()
  );

  const handleSkillMastered = () => {
    setMasteredSkills(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation masteredCount={masteredSkills} />
      
      {/* Category Header */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-8">
            <div className="text-6xl mr-6">{category.icon}</div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {category.name}
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                {category.description}
              </p>
              <p className="text-gray-500">
                {category.skillCount} skills available
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        {categorySkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorySkills.map((skill) => (
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
              No skills found in this category yet
            </h3>
            <p className="text-gray-600 mb-6">
              We're working on adding more {category.name.toLowerCase()} skills. Check back soon!
            </p>
            <Link to="/">
              <Button>Explore Other Categories</Button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
