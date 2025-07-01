
import { Play, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-orange-500/5"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-orange-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
          <TrendingUp className="h-4 w-4 text-blue-600" />
          <span>10,000+ people learned something new today</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            One Minute
          </span>
          <br />
          Mastery
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Master micro-skills in just <span className="font-bold text-blue-600">60 seconds</span>. 
          From life hacks to coding tricks, learn something amazing every day.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
            <Play className="mr-2 h-5 w-5" />
            Start Learning Now
          </Button>
          
          <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-300 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300">
            <Clock className="mr-2 h-5 w-5" />
            How It Works
          </Button>
        </div>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            ⚡ 60-second videos
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            📱 Mobile-friendly
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            🎯 Bite-sized learning
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            🏆 Track progress
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
