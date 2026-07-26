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
  email: "jaivpatel402@gmail.com",
  github: "https://github.com/JaivPatel07",
  linkedin: "https://www.linkedin.com/in/jaiv-patel-52040b308",
  resume: "https://drive.google.com/file/d/1VFlmAzRs_CD2gDcdoleRPPhgelwPf062/view?usp=sharing",
  website: "https://jaivpatel.dev",
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY,
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


export const projects = [
  {
    id: "codo",
    title: "CoDO",
    type: "featured",
    description:
      "A student networking and collaboration platform for discovering events, building teams, and connecting with like-minded students.",
    longDesc:
      "CoDO (Collaborate and Do) is a full-stack platform designed to help students discover hackathons, workshops, competitions, and projects while enabling organizations to publish official events. It features role-based authentication, organization management, public profiles, event calendars, and collaboration tools.",
    image: "/assets/projects/codo.webp",
    category: "Full Stack",
    tech: ["React", "Django", "PostgreSQL", "JWT", "Tailwind CSS"],
    features: [
      "Student & Organization Authentication",
      "Role-Based Access",
      "Organization Profiles",
      "Official Event Calendar",
    ],
    github: "https://github.com/JaivPatel07/CoDO",
    demo: "",
  },

  {
    id: "requestlab",
    title: "RequestLab",
    type: "featured",
    description:
      "A local-first API testing platform built for speed, privacy, and developer productivity.",
    longDesc:
      "RequestLab is an open-source API client inspired by Postman. It keeps requests, collections, and environments entirely on the user's machine while providing a modern and lightweight development experience.",
    image: "/assets/projects/req.png",
    category: "Developer Tool",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "REST API Testing",
      "Collections",
      "Environment Variables",
      "Local-first Storage",
    ],
    github: "https://github.com/JaivPatel07/RequestLab",
    demo: "",
  },

  {
    id: "md-studio",
    title: "MD Studio",
    type: "featured",
    description:
      "A browser-based Markdown editor supporting PDF, DOCX, and Markdown workflows.",
    longDesc:
      "MD Studio is a private Markdown workspace that allows users to create, edit, convert, and manage Markdown documents while keeping all files locally in the browser.",
    image: "/assets/projects/MD.png",
    category: "Developer Tool",
    tech: ["React", "JavaScript", "PDF.js", "docx"],
    features: [
      "Markdown Editor",
      "PDF Import",
      "DOCX Support",
      "Live Preview",
    ],
    github: "https://github.com/JaivPatel07/MD-Studio",
    demo: "https://md-studio-bdfwuc7js-jaivpatel07s-projects.vercel.app/",
  },

  {
    id: "financepro",
    title: "FinancePro",
    type: "featured",
    description:
      "An AI-powered financial analytics platform for analysing bank statements.",
    longDesc:
      "FinancePro transforms bank statement CSV files into interactive dashboards with spending analysis, anomaly detection, financial insights, and AI-assisted reporting.",
    image: "/assets/projects/financepro.webp",
    category: "AI",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    features: [
      "Interactive Dashboard",
      "Financial Insights",
      "AI Reports",
      "Spending Analysis",
    ],
    github: "https://github.com/JaivPatel07/FinancePro",
    demo: "https://jaivpatel07-bank-statement-analyzer-app-vhw2kv.streamlit.app/",
  },

  {
    id: "smart-data-cleaner",
    title: "Smart Data Cleaner",
    type: "featured",
    description:
      "An intelligent data preprocessing platform for machine learning workflows.",
    longDesc:
      "Automates missing value handling, duplicate removal, outlier detection, memory optimisation, and generates explainable cleaning reports using FastAPI and Pandas.",
    image: "/assets/projects/datacleaner.webp",
    category: "Data Science",
    tech: ["Python", "FastAPI", "Pandas"],
    features: [
      "Missing Value Detection",
      "Duplicate Removal",
      "Outlier Detection",
      "Cleaning Reports",
    ],
    github: "https://github.com/JaivPatel07/Smart-Data-Cleaner",
    demo: "",
  },

  {
    id: "edusphere",
    title: "EduSphere LMS",
    type: "featured",
    description:
      "A full-stack learning management system for online education.",
    longDesc:
      "EduSphere allows instructors to manage courses while students can enrol, track progress, and receive certificates through a clean and responsive interface.",
    image: "/assets/projects/edu.png",
    category: "Full Stack",
    tech: ["Flask", "SQLite", "JavaScript"],
    features: [
      "Course Management",
      "Authentication",
      "Student Dashboard",
    ],
    github: "https://github.com/JaivPatel07/EduSphere",
    demo: "",
  },
  {
    id: "safemeds",
    title: "SafeMeds Pharmacy Management System",
    type: "standard",
    description: "A comprehensive pharmacy management system for inventory, sales, and customer management.",
    image: "/assets/projects/safemeds.webp", // Placeholder image
    category: "Full Stack",
    tech: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/JaivPatel07/SafeMeds",
    demo: "",
  },
  {
    id: "traceflow",
    title: "TraceFlow",
    type: "standard",
    description: "A unique Python developer tool for tracing execution flow in complex applications.",
    image: "/assets/projects/traceflow.webp", // Placeholder image
    category: "Developer Tool",
    tech: ["Python", "CLI"],
    github: "https://github.com/JaivPatel07/TraceFlow",
    demo: "",
  },
  {
    id: "web-analyzer",
    title: "Web Analyzer",
    type: "standard",
    description: "A developer tool to analyze website performance, accessibility, and SEO.",
    image: "/assets/projects/web-analyzer.webp", // Placeholder image
    category: "Developer Tool",
    tech: ["Python", "Flask", "BeautifulSoup"],
    github: "https://github.com/JaivPatel07/Web-Analyzer",
    demo: "",
  },
  {
    id: "ai-joke-app",
    title: "AI Joke App",
    type: "standard",
    description: "A full-stack application that generates jokes using OpenAI APIs.",
    image: "/assets/projects/ai-joke-app.webp", // Placeholder image
    category: "AI",
    tech: ["React", "Node.js", "OpenAI API"],
    github: "https://github.com/JaivPatel07/AI-Joke-App",
    demo: "",
  },
  {
    id: "geoexplorer",
    title: "GeoExplorer",
    type: "standard",
    description: "An interactive map application with various geographical data visualizations.",
    image: "/assets/projects/geoexplorer.webp", // Placeholder image
    category: "Data Visualization",
    tech: ["React", "Mapbox GL JS", "D3.js"],
    github: "https://github.com/JaivPatel07/GeoExplorer",
    demo: "",
  },
  {
    id: "smart-notes",
    title: "Smart Notes Chrome Extension",
    type: "standard",
    description: "A Chrome extension for taking smart notes with CRUD functionality and local storage.",
    image: "/assets/projects/smart-notes.webp", // Placeholder image
    category: "Browser Extension",
    tech: ["JavaScript", "Chrome API", "Local Storage"],
    github: "https://github.com/JaivPatel07/Smart-Notes",
    demo: "",
  },
  {
    id: "superstore-sales-analytics",
    title: "Superstore Sales Analytics",
    type: "standard",
    description: "A data analytics project providing insights into superstore sales data with interactive dashboards.",
    image: "/assets/projects/superstore-sales.webp", // Placeholder image
    category: "Data Science",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/JaivPatel07/Superstore-Sales-Analytics",
    demo: "",
  },
  {
    id: "tic-tac-toe-ai",
    title: "Tic Tac Toe AI",
    type: "standard",
    description: "A Tic Tac Toe game where you can play against an unbeatable AI opponent powered by the Minimax algorithm.",
    image: "/assets/projects/tictactoe.webp",
    category: "AI",
    tech: ["JavaScript", "HTML", "CSS", "Minimax"],
    github: "https://github.com/JaivPatel07/Tic-Tac-Toe",
    demo: "https://jaivpatel07.github.io/Tic-Tac-Toe-AI/",
  },
  {
    id: "pong-game",
    title: "Pong Game",
    type: "mini",
    description: "A classic Pong game built with plain JavaScript, HTML, and CSS.",
    image: "/assets/projects/pong.webp",
    category: "Game",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/JaivPatel07/Pong-Game",
    demo: "https://jaivpatel07.github.io/Pong-Game/",
  },
  {
    id: "snake-game",
    title: "Snake Game",
    type: "mini",
    description: "The classic Snake game implemented using JavaScript and HTML Canvas.",
    image: "/assets/projects/snake.webp",
    category: "Game",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/JaivPatel07/Snake-Game",
    demo: "https://jaivpatel07.github.io/Snake-Game/",
  },
  {
    id: "2048-game",
    title: "2048 Game",
    type: "mini",
    description: "A web-based version of the popular 2048 puzzle game.",
    image: "/assets/projects/2048.webp",
    category: "Game",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/JaivPatel07/2048-Game",
    demo: "https://jaivpatel07.github.io/2048-Game/",
  },
  {
    id: "calculator",
    title: "Basic Calculator",
    type: "mini",
    description: "A simple calculator with basic arithmetic operations.",
    image: "/assets/projects/calculator.webp",
    category: "Tool",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/JaivPatel07/Calculator",
    demo: "https://jaivpatel07.github.io/Calculator/",
  },
  {
    id: "digital-clock",
    title: "Digital Clock",
    type: "mini",
    description: "A clean and simple digital clock.",
    image: "/assets/projects/clock.webp",
    category: "Tool",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/JaivPatel07/Digital-Clock",
    demo: "https://jaivpatel07.github.io/Digital-Clock/",
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
      title: 'Programming & Software Development',
      list: [
        {
          title: 'Introduction to Java',
          issuer: 'LearnQuest',
          date: '2024',
          category: 'Coursera',
          thumbnail: '/assets/certificates/Introduction to Java-page.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'Inheritance and Data Structures in Java',
          issuer: 'University of Pennsylvania',
          date: '2025',
          category: 'Coursera',
          thumbnail: '/assets/certificates/Inheritance and Data Structures in Java-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'Introduction to HTML, CSS, & JavaScript',
          issuer: 'IBM',
          date: '2024',
          category: 'IBM',
          logo: '/logos/ibm.svg',
          thumbnail: '/assets/certificates/Introduction to HTML, CSS, & JavaScript-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
      ],
    },

    {
      title: ' AI & Data Science',
      list: [
        {
          title: 'Foundations of Data Science',
          issuer: 'Google',
          date: '2026',
          category: 'Google',
          logo: '/logos/google.svg',
          thumbnail: '/assets/certificates/FoudationofDSpage-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'Foundations: Data, Data, Everywhere',
          issuer: 'Google',
          date: '2026',
          category: 'Google',
          logo: '/logos/google.svg',
          thumbnail: '/assets/certificates/Google 1-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'Exploratory Data Analysis for Machine Learning',
          issuer: 'IBM',
          date: '2026',
          category: 'IBM',
          logo: '/logos/ibm.svg',
          thumbnail: '/assets/certificates/ML.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
      ],
    },

    {
      title: 'HackerRank Certifications',
      list: [
        {
          title: 'Python (Basic)',
          issuer: 'HackerRank',
          date: '2024',
          category: 'Programming',
          logo: '/logos/hackerrank.svg',
          thumbnail: '/assets/certificates/python_basic certificate-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'Java (Basic)',
          issuer: 'HackerRank',
          date: '2024',
          category: 'Programming',
          logo: '/logos/hackerrank.svg',
          thumbnail: '/assets/certificates/java_basic certificate-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'SQL (Intermediate)',
          issuer: 'HackerRank',
          date: '2025',
          category: 'Programming',
          logo: '/logos/hackerrank.svg',
          thumbnail: '/assets/certificates/image.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'Software Engineer Intern',
          issuer: 'HackerRank',
          date: '2025',
          category: 'Programming',
          logo: '/logos/hackerrank.svg',
          thumbnail: '/assets/certificates/software_engineer_intern certificate-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
      ],
    },

    {
      title: 'Hackathons',
      list: [
        {
          title: 'DA-IICT Hackathon',
          issuer: 'DA-IICT',
          date: '2026',
          category: 'Hackathon',
          logo: '/logos/daiict.svg',
          thumbnail: '/assets/certificates/DAIICT_Hackathon-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'LJ Hackathon',
          issuer: 'LJ University',
          date: '2025',
          category: 'Hackathon',
          logo: '/logos/lj.svg',
          thumbnail: '/assets/certificates/LJ Hackathon-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
        {
          title: 'LD Hackathon',
          issuer: 'LD College of Engineering',
          date: '2026',
          category: 'Hackathon',
          logo: '/logos/ld.svg',
          thumbnail:'/assets/certificates/LD_Hackathon-page-1.png',
          link: 'https://drive.google.com/drive/folders/1Ca1AqyC463x64QOUIzc7B-EMJMzU049D?usp=drive_link',
        },
      ],
    },
  ],
};
