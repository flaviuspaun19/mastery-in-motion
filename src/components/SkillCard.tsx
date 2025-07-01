
import { useState } from 'react';
import { Play, Clock, CheckCircle, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Skill {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  views: string;
  videoUrl?: string;
}

interface SkillCardProps {
  skill: Skill;
  onMastered: () => void;
}

const SkillCard = ({ skill, onMastered }: SkillCardProps) => {
  const [isMastered, setIsMastered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMastery = () => {
    if (!isMastered) {
      setIsMastered(true);
      onMastered();
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden bg-white border-2 hover:border-blue-200">
      <div className="relative">
        <img 
          src={skill.thumbnail} 
          alt={skill.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="lg" 
            className="bg-white/90 text-gray-900 hover:bg-white rounded-full px-6 py-3 shadow-lg"
            onClick={() => setIsPlaying(true)}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Now
          </Button>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
          <Clock className="mr-1 h-3 w-3" />
          {skill.duration}
        </div>
        
        {/* Mastery Check */}
        {isMastered && (
          <div className="absolute top-3 left-3 bg-green-500 text-white p-2 rounded-full">
            <CheckCircle className="h-4 w-4" />
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {skill.category}
          </Badge>
          <Badge className={`text-xs ${getDifficultyColor(skill.difficulty)}`}>
            {skill.difficulty}
          </Badge>
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {skill.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {skill.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-xs">
            <Eye className="mr-1 h-3 w-3" />
            <span>{skill.views} views</span>
          </div>
          
          <Button 
            size="sm" 
            onClick={handleMastery}
            className={`transition-all duration-300 ${
              isMastered 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isMastered ? (
              <>
                <CheckCircle className="mr-1 h-4 w-4" />
                Mastered!
              </>
            ) : (
              <>
                <Play className="mr-1 h-4 w-4" />
                Learn
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
