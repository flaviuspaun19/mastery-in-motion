
export interface Skill {
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

export interface Category {
  name: string;
  slug: string;
  icon: string;
  description: string;
  skillCount: number;
}

export const categories: Category[] = [
  {
    name: 'React',
    slug: 'react',
    icon: '⚛️',
    description: 'Master React hooks, components, and patterns in 60 seconds',
    skillCount: 12
  },
  {
    name: 'UX/UI',
    slug: 'ux-ui',
    icon: '🎨',
    description: 'Quick design principles and user experience tips',
    skillCount: 10
  },
  {
    name: 'API Design',
    slug: 'api-design',
    icon: '🔌',
    description: 'REST, GraphQL, and API best practices',
    skillCount: 8
  },
  {
    name: '.NET',
    slug: 'dotnet',
    icon: '🔷',
    description: 'C#, ASP.NET, and .NET Core quick wins',
    skillCount: 9
  },
  {
    name: 'SQL',
    slug: 'sql',
    icon: '🗄️',
    description: 'Database queries, optimization, and design patterns',
    skillCount: 11
  },
  {
    name: 'Security',
    slug: 'security',
    icon: '🔒',
    description: 'Cybersecurity fundamentals and best practices',
    skillCount: 9
  },
  {
    name: 'Quality',
    slug: 'quality',
    icon: '✅',
    description: 'Testing, QA processes, and quality assurance',
    skillCount: 8
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
    icon: '🟨',
    description: 'Modern JavaScript tricks and ES6+ features',
    skillCount: 15
  }
];

export const featuredSkills: Skill[] = [
  // React Skills
  {
    id: 1,
    title: 'useEffect Cleanup Pattern',
    description: 'Prevent memory leaks with proper useEffect cleanup functions',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    duration: '45s',
    difficulty: 'Intermediate',
    views: '2.1K'
  },
  {
    id: 2,
    title: 'Custom Hook for API Calls',
    description: 'Create reusable custom hooks for data fetching',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    duration: '60s',
    difficulty: 'Advanced',
    views: '3.2K'
  },
  {
    id: 3,
    title: 'React.memo Optimization',
    description: 'Prevent unnecessary re-renders with React.memo',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
    duration: '50s',
    difficulty: 'Intermediate',
    views: '1.8K'
  },

  // UX/UI Skills
  {
    id: 4,
    title: 'The 60-30-10 Color Rule',
    description: 'Master color harmony with the classic design principle',
    category: 'UX/UI',
    thumbnail: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
    duration: '55s',
    difficulty: 'Beginner',
    views: '4.5K'
  },
  {
    id: 5,
    title: 'Micro-interactions with CSS',
    description: 'Add delightful hover effects and transitions',
    category: 'UX/UI',
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
    duration: '58s',
    difficulty: 'Intermediate',
    views: '2.7K'
  },
  {
    id: 6,
    title: 'Accessibility: Focus States',
    description: 'Design keyboard-friendly focus indicators',
    category: 'UX/UI',
    thumbnail: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
    duration: '52s',
    difficulty: 'Beginner',
    views: '1.9K'
  },

  // API Design Skills
  {
    id: 7,
    title: 'RESTful URL Naming',
    description: 'Design intuitive and consistent API endpoints',
    category: 'API Design',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    duration: '48s',
    difficulty: 'Beginner',
    views: '3.1K'
  },
  {
    id: 8,
    title: 'API Rate Limiting',
    description: 'Implement basic rate limiting to protect your API',
    category: 'API Design',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    duration: '60s',
    difficulty: 'Intermediate',
    views: '2.3K'
  },

  // .NET Skills
  {
    id: 9,
    title: 'LINQ One-Liner Magic',
    description: 'Transform data with powerful LINQ expressions',
    category: '.NET',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    duration: '45s',
    difficulty: 'Intermediate',
    views: '2.8K'
  },
  {
    id: 10,
    title: 'Dependency Injection Setup',
    description: 'Configure DI container in ASP.NET Core',
    category: '.NET',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    duration: '55s',
    difficulty: 'Advanced',
    views: '1.7K'
  },

  // SQL Skills
  {
    id: 11,
    title: 'Window Functions Basics',
    description: 'ROW_NUMBER, RANK, and DENSE_RANK in one minute',
    category: 'SQL',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
    duration: '60s',
    difficulty: 'Intermediate',
    views: '4.2K'
  },
  {
    id: 12,
    title: 'Index Performance Trick',
    description: 'Speed up queries with composite index ordering',
    category: 'SQL',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    duration: '50s',
    difficulty: 'Advanced',
    views: '3.6K'
  },

  // Security Skills
  {
    id: 13,
    title: 'JWT Token Security',
    description: 'Implement secure JWT token validation',
    category: 'Security',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    duration: '58s',
    difficulty: 'Intermediate',
    views: '5.1K'
  },
  {
    id: 14,
    title: 'SQL Injection Prevention',
    description: 'Parameterized queries to stop SQL injection',
    category: 'Security',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
    duration: '52s',
    difficulty: 'Beginner',
    views: '6.3K'
  },

  // Quality Skills
  {
    id: 15,
    title: 'Unit Test Structure: AAA',
    description: 'Arrange, Act, Assert pattern for clean tests',
    category: 'Quality',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    duration: '48s',
    difficulty: 'Beginner',
    views: '3.4K'
  },
  {
    id: 16,
    title: 'Mocking with Jest',
    description: 'Mock external dependencies in JavaScript tests',
    category: 'Quality',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop',
    duration: '55s',
    difficulty: 'Intermediate',
    views: '2.9K'
  },

  // JavaScript Skills
  {
    id: 17,
    title: 'Destructuring Assignment',
    description: 'Extract values from arrays and objects elegantly',
    category: 'JavaScript',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
    duration: '42s',
    difficulty: 'Beginner',
    views: '7.8K'
  },
  {
    id: 18,
    title: 'Promise.all vs Promise.allSettled',
    description: 'Handle multiple async operations like a pro',
    category: 'JavaScript',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
    duration: '60s',
    difficulty: 'Intermediate',
    views: '4.7K'
  }
];

// Additional skills for each category (not featured but available in category pages)
export const allSkills: Skill[] = [
  ...featuredSkills,
  
  // More React Skills
  {
    id: 19,
    title: 'Context API Pattern',
    description: 'Share state across components without prop drilling',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    duration: '58s',
    difficulty: 'Intermediate',
    views: '1.5K'
  },
  {
    id: 20,
    title: 'Error Boundaries',
    description: 'Catch and handle React component errors gracefully',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    duration: '52s',
    difficulty: 'Advanced',
    views: '1.2K'
  },

  // More UX/UI Skills
  {
    id: 21,
    title: 'Typography Hierarchy',
    description: 'Create visual hierarchy with font sizes and weights',
    category: 'UX/UI',
    thumbnail: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
    duration: '50s',
    difficulty: 'Beginner',
    views: '2.1K'
  },
  {
    id: 22,
    title: 'Mobile-First Design',
    description: 'Design for mobile screens first, then scale up',
    category: 'UX/UI',
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
    duration: '55s',
    difficulty: 'Intermediate',
    views: '1.8K'
  },

  // More API Design Skills
  {
    id: 23,
    title: 'HTTP Status Codes',
    description: 'Use the right status codes for better API communication',
    category: 'API Design',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    duration: '45s',
    difficulty: 'Beginner',
    views: '2.7K'
  },
  {
    id: 24,
    title: 'API Versioning Strategy',
    description: 'Implement backward-compatible API versioning',
    category: 'API Design',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    duration: '60s',
    difficulty: 'Advanced',
    views: '1.4K'
  },

  // More .NET Skills
  {
    id: 25,
    title: 'Async/Await Best Practices',
    description: 'Avoid deadlocks and improve performance',
    category: '.NET',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    duration: '58s',
    difficulty: 'Intermediate',
    views: '2.3K'
  },
  {
    id: 26,
    title: 'Entity Framework Optimization',
    description: 'Prevent N+1 queries with Include and Select',
    category: '.NET',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    duration: '60s',
    difficulty: 'Advanced',
    views: '1.9K'
  },

  // More SQL Skills
  {
    id: 27,
    title: 'Common Table Expressions',
    description: 'Simplify complex queries with CTEs',
    category: 'SQL',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
    duration: '55s',
    difficulty: 'Intermediate',
    views: '3.1K'
  },
  {
    id: 28,
    title: 'Query Execution Plans',
    description: 'Read and optimize SQL execution plans',
    category: 'SQL',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    duration: '60s',
    difficulty: 'Advanced',
    views: '2.5K'
  },

  // More Security Skills
  {
    id: 29,
    title: 'CORS Configuration',
    description: 'Secure cross-origin requests properly',
    category: 'Security',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    duration: '50s',
    difficulty: 'Intermediate',
    views: '2.8K'
  },
  {
    id: 30,
    title: 'Password Hashing',
    description: 'Implement secure password storage with bcrypt',
    category: 'Security',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
    duration: '52s',
    difficulty: 'Beginner',
    views: '4.1K'
  },

  // More Quality Skills
  {
    id: 31,
    title: 'Integration Testing',
    description: 'Test component interactions and API endpoints',
    category: 'Quality',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    duration: '60s',
    difficulty: 'Intermediate',
    views: '1.7K'
  },
  {
    id: 32,
    title: 'Code Coverage Metrics',
    description: 'Measure and improve test coverage effectively',
    category: 'Quality',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop',
    duration: '48s',
    difficulty: 'Beginner',
    views: '2.2K'
  }
];
