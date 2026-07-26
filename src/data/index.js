// =============================================
// PERSONAL DATA — Edit this to personalize
// =============================================

export const personal = {
  name: "Jaiv Patel",
  firstName: "Jaiv",
  lastName: "Patel",
  title: "Computer Science Student & Full Stack Developer",
  titles: [
    "Building Full Stack Applications",
    "Creating REST APIs",
    "Exploring Artificial Intelligence",
    "Contributing to Open Source",
    "Learning System Design",
  ],
  tagline:
    "I build scalable full-stack web applications and enjoy solving real-world problems through software.",
  bio: `I'm Jaiv Patel, a Computer Science student and full-stack developer passionate about building meaningful software. From web applications and AI-powered tools to open-source contributions, I enjoy transforming ideas into products that solve real problems. I'm constantly learning new technologies, improving my skills, and taking on projects that challenge me to grow.`,
  location: "India",
  email: "jaivpatel07@gmail.com",
  github: "https://github.com/JaivPatel07",
  linkedin: "https://linkedin.com/in/jaivpatel07",
  website: "https://jaivpatel.dev",
  aboutHighlights: [
    'Full-stack product development',
    'Clean React interfaces',
    'APIs, databases, and AI tools',
  ],
};

export const education = {
  degree: "B.Tech",
  major: "Computer Science & Engineering",
  school: "XYZ University",
  duration: "2024 – 2028",
  cgpa: "8.5 / 10",
  location: "India",
  logo: "🎓",
  courses: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning",
    "Web Development",
    "Software Engineering",
    "Discrete Mathematics",
    "Linear Algebra",
  ],
  achievements: [
    "Department Rank 5 in Semester 1",
    "Best Project Award — Web Dev Course",
    "Core Member, Tech Club",
  ],
};



export const radarData = [
  { subject: "Frontend", A: 90 },
  { subject: "Backend", A: 80 },
  { subject: "AI/ML", A: 75 },
  { subject: "DevOps", A: 65 },
  { subject: "Database", A: 85 },
  { subject: "Cloud", A: 60 },
];

export const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB', description: 'A JavaScript library for building user interfaces.' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF', description: 'The React framework for production.' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E', description: 'The programming language of the web.' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6', description: 'JavaScript with syntax for types.' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4', description: 'A utility-first CSS framework.' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933', description: 'JavaScript runtime built on Chrome\'s V8 engine.' },
      { name: 'Express.js', icon: 'SiExpress', color: '#FFFFFF', description: 'Minimalist web framework for Node.js.' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB', description: 'A versatile high-level programming language.' },
      { name: 'Django', icon: 'SiDjango', color: '#092E20', description: 'High-level Python web framework.' },
      { name: 'FastAPI', icon: 'SiFastapi', color: '#009688', description: 'Modern, fast web framework for Python.' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248', description: 'NoSQL database for modern applications.' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1', description: 'A powerful, open source object-relational database system.' },
      { name: 'Firebase', icon: 'SiFirebase', color: '#FFCA28', description: 'Platform for building web and mobile applications.' },
    ],
  },
  {
    category: 'Tools & Deployment',
    items: [
      { name: 'Git', icon: 'SiGit', color: '#F05032', description: 'Distributed version control system.' },
      { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF', description: 'Platform for hosting and collaborating on Git repositories.' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED', description: 'Platform for developing, shipping, and running applications in containers.' },
      { name: 'Vercel', icon: 'SiVercel', color: '#FFFFFF', description: 'Platform for frontend developers to deploy websites and web services.' },
      { name: 'VS Code', icon: 'SiVisualstudiocode', color: '#007ACC', description: 'A lightweight but powerful source code editor.' },
      { name: 'Figma', icon: 'SiFigma', color: '#F24E1E', description: 'A collaborative interface design tool.' },
    ],
  },
];

export const experience = [
  {
    role: "Open Source Contributor",
    company: "Various GitHub Projects",
    type: "Open Source",
    duration: "2024 – Present",
    description:
      "Contributed to multiple open-source projects including bug fixes, feature additions, and documentation improvements. Merged 15+ PRs across different repositories.",
    tech: ["Python", "JavaScript", "React", "Next.js"],
    achievement: "15+ Merged PRs",
  },
  {
    role: "Personal Projects",
    company: "Side Projects",
    type: "Personal",
    duration: "2024 – Present",
    description:
      "Building and shipping full-stack applications from scratch. This includes projects like CoDO, Checkpoint AI, and RequestLab, covering everything from idea to deployment.",
    tech: ["React", "Next.js", "Django", "FastAPI", "PostgreSQL"],
    achievement: "5+ Projects Shipped",
  },
  {
    role: "Hackathon Participant",
    company: "Multiple Hackathons",
    type: "Hackathon",
    duration: "2024 – Present",
    description:
      "Participated in 5+ hackathons, winning 2 and receiving special mentions in others. Built innovative solutions in 24-48 hour sprints under high pressure.",
    tech: ["React", "Python", "FastAPI", "AI/ML"],
    achievement: "2 wins, 1 runner-up",
  },
];

export const projects = [
  {
    id: "codo",
    title: "CoDO - Student Collaboration Platform",
    description:
      "A platform for students to create organizations, host events, and collaborate on projects. Features authentication, roles, and event management.",
    longDesc:
      "CoDO is a full-stack application designed to foster collaboration among students. It allows users to create and join organizations, post and register for events, and manage projects within their groups. The platform includes a robust authentication system with role-based access control.",
    image: "/assets/projects/codo.webp",
    category: "Full Stack",
    status: "Live",
    difficulty: "Advanced",
    timeline: "2 months",
    tech: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
    features: [
      "User Authentication & Profiles",
      "Organization & Team Management",
      "Event Creation & Registration",
      "Role-Based Access Control",
      "Project Collaboration Spaces",
    ],
    github: "https://github.com/JaivPatel07",
    demo: "https://jaivpatel.dev",
    gradient: "linear-gradient(135deg, #7c3aed, #06b6d4)",
    caseStudy: "/case-study/codo",
  },
  {
    id: "checkpoint-ai",
    title: "Checkpoint AI - AI Web Bookmarker",
    description:
      "An AI-powered browser extension for bookmarking, summarizing, and organizing web content with intelligent tagging.",
    longDesc:
      "Checkpoint AI is a browser extension that uses AI to revolutionize how users save and interact with web content. It can automatically summarize articles, generate relevant tags, and provide a searchable interface for all saved bookmarks, turning passive content into an active knowledge base.",
    image: "/assets/projects/checkpoint.webp",
    category: "AI",
    status: "Live",
    difficulty: "Advanced",
    tech: ["React", "FastAPI", "OpenAI API", "PostgreSQL", "Chrome Extension API"],
    features: [
      "One-click web page bookmarking",
      "AI-powered content summarization",
      "Automatic keyword and tag generation",
      "Full-text search across all bookmarks",
      "Organize bookmarks into collections",
    ],
    github: "https://github.com/JaivPatel07",
    demo: "https://jaivpatel.dev",
    gradient: "linear-gradient(135deg, #ec4899, #f59e0b)",
  },
  {
    id: "requestlab",
    title: "RequestLab - API Testing Platform",
    description:
      "An API testing platform inspired by Postman, built to be lightweight, fast, and easy to use for developers.",
    longDesc:
      "RequestLab is a web-based tool for testing APIs. It allows users to create and send HTTP requests, view responses, and organize their requests into collections. It's built with a focus on speed and simplicity, providing a clean alternative to heavier desktop clients.",
    image: "/assets/projects/requestlab.webp",
    category: "Tools",
    status: "In Progress",
    difficulty: "Advanced",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Create & send HTTP/S requests",
      "Support for all major HTTP methods",
      "View response headers, body, and status",
      "Organize requests in collections",
      "Environment variable management",
    ],
    github: "https://github.com/JaivPatel07",
    demo: "https://jaivpatel.dev",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
  },
  {
    id: "edusphere",
    title: "EduSphere - Learning Management System",
    description:
      "A Learning Management System (LMS) for creating and managing online courses, with student enrollment and progress tracking.",
    image: "/assets/projects/edusphere.webp",
    category: "Full Stack",
    status: "Live",
    difficulty: "Intermediate",
    tech: ["Django", "HTML", "CSS", "JavaScript", "SQLite"],
    github: "https://github.com/JaivPatel07",
    demo: "https://jaivpatel.dev",
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899)",
  },
  {
    id: "smart-data-cleaner",
    title: "Smart Data Cleaner",
    description:
      "A tool for cleaning and generating reports from datasets, with features for handling missing values and data visualization.",
    image: "/assets/projects/datacleaner.webp",
    category: "Data Science",
    status: "Live",
    difficulty: "Beginner",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    github: "https://github.com/JaivPatel07",
    demo: "https://jaivpatel.dev",
    gradient: "linear-gradient(135deg, #06b6d4, #10b981)",
  },
  {
    id: "bank-statement-analyzer",
    title: "Bank Statement Analyzer",
    description:
      "An AI-assisted tool for financial analysis that processes bank statements to categorize transactions and provide spending insights.",
    image: "/assets/projects/bank.webp",
    category: "AI",
    status: "Live",
    difficulty: "Intermediate",
    tech: ["Python", "OpenAI API", "Pandas", "Plotly"],
    github: "https://github.com/JaivPatel07",
    demo: "https://jaivpatel.dev",
    gradient: "linear-gradient(135deg, #10b981, #f59e0b)",
  },
];

export const achievements = {
  stats: [
    { label: 'Certifications', value: '14' },
    { label: 'Hackathons', value: '4' },
    { label: 'Coding Badges', value: '4' },
    { label: 'Learning Hours', value: '250+' },
  ],
  categories: [
    {
      title: '🏆 Hackathons',
      list: [
        {
          title: 'DA-IICT Hackathon',
          issuer: 'DA-IICT',
          date: '2025',
          category: 'Hackathon',
          logo: '/logos/daiict.svg',
          thumbnail: '/certificates/hackathon.webp',
        },
        {
          title: 'LJ Hackathon',
          issuer: 'LJ University',
          date: '2025',
          category: 'Hackathon',
          logo: '/logos/lj.svg',
          thumbnail: '/certificates/hackathon.webp',
        },
        {
          title: 'LD Hackathon',
          issuer: 'LD College of Engineering',
          date: '2025',
          category: 'Hackathon',
          logo: '/logos/ld.svg',
          thumbnail: '/certificates/hackathon.webp',
        },
        {
          title: 'Open Chess AI Challenge',
          issuer: 'IEEE',
          date: '2025',
          category: 'Hackathon',
          logo: '/logos/ieee.svg',
          thumbnail: '/certificates/hackathon.webp',
        },
      ],
    },
    {
      title: '💻 Programming',
      list: [
        {
          title: 'Python (Basic)',
          issuer: 'HackerRank',
          date: '2024',
          category: 'Programming',
          logo: '/logos/hackerrank.svg',
          thumbnail: '/certificates/hackerrank-python.webp',
        },
        {
          title: 'Java (Basic)',
          issuer: 'HackerRank',
          date: '2024',
          category: 'Programming',
          logo: '/logos/hackerrank.svg',
          thumbnail: '/certificates/hackerrank-java.webp',
        },
        {
          title: 'SQL (Intermediate)',
          issuer: 'HackerRank',
          date: '2024',
          category: 'Programming',
          logo: '/logos/hackerrank.svg',
          thumbnail: '/certificates/hackerrank-sql.webp',
        },
        {
          title: 'Software Engineer Intern',
          issuer: 'HackerRank',
          date: '2025',
          category: 'Programming',
          logo: '/logos/hackerrank.svg',
          thumbnail: '/certificates/hackerrank-swe.webp',
        },
      ],
    },
    {
      title: '📚 Professional Courses',
      list: [
        {
          title: 'Introduction to Databases for Java',
          issuer: 'University of Pennsylvania',
          date: '2024',
          category: 'Coursera',
          logo: '/logos/penn.svg',
          thumbnail: '/certificates/penn-db.webp',
        },
        {
          title: 'Introduction to HTML, CSS, & JavaScript',
          issuer: 'IBM',
          date: '2024',
          category: 'IBM',
          logo: '/logos/ibm.svg',
          thumbnail: '/certificates/ibm-web.webp',
        },
        {
          title: 'Introduction to Java',
          issuer: 'LearnQuest',
          date: '2024',
          category: 'Coursera',
          logo: '/logos/learnquest.svg',
          thumbnail: '/certificates/learnquest-java.webp',
        },
      ],
    },
    {
      title: '🤖 AI / Data Science',
      list: [
        {
          title: 'Exploratory Data Analysis for Machine Learning',
          issuer: 'IBM',
          date: '2024',
          category: 'IBM',
          logo: '/logos/ibm.svg',
          thumbnail: '/certificates/ibm-eda.webp',
        },
        {
          title: 'Foundations: Data, Data, Everywhere',
          issuer: 'Google',
          date: '2024',
          category: 'Google',
          logo: '/logos/google.svg',
          thumbnail: '/certificates/google-foundations.webp',
        },
      ],
    },
  ],
};
