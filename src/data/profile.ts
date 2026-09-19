export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full-Stack" | "AI/ML" | "Web Apps" | "All";
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: string; // e.g., 'Proficient', 'Advanced', 'Familiar'
  icon?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: SkillItem[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  role: string;
  organization: string;
  description: string;
  tags: string[];
  type: "education" | "experience" | "achievement";
}

export interface ProfileData {
  name: string;
  handle: string;
  role: string;
  subrole: string;
  status: string;
  location: string;
  email: string;
  phone?: string;
  portraitUrl?: string;
  bioHeadline: string;
  bioLong: string[];
  stats: { label: string; value: string; hint: string }[];
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
    leetcode?: string;
  };
  skillCategories: SkillCategory[];
  projects: Project[];
  journey: JourneyMilestone[];
  education: {
    degree: string;
    field: string;
    institution: string;
    period: string;
    score?: string;
    coursework: string[];
  }[];
}

export const profileData: ProfileData = {
  name: "Suraj Singh",
  handle: "surajsingh",
  role: "Computer Science Student & Full-Stack Developer",
  subrole: "Full-Stack Web Architect · AI/ML Enthusiast · Open Source Explorer",
  status: "Available for Internships & Engineering Roles",
  location: "India",
  email: "surajsingh.csdev@gmail.com",
  portraitUrl: "/images/suraj.jpg",
  bioHeadline: "Engineering clean, scalable web experiences & exploring intelligent systems.",
  bioLong: [
    "I am a Computer Science student with a passionate drive for full-stack engineering and intelligent software architectures. From architecting responsive frontends with React & TypeScript to building resilient backends in Node.js and Python, I enjoy solving hard technical challenges with clean, maintainable code.",
    "Beyond web architecture, I explore machine learning workflows, data structures & algorithms, and distributed systems. When I am not debugging edge cases or designing UI micro-interactions, you will find me exploring scenic trails or experimenting with new open-source technologies.",
  ],
  stats: [
    { label: "DSA Questions Solved", value: "100+", hint: "LeetCode & CodeChef" },
    { label: "Core Technologies", value: "5+", hint: "React, Node, Python, Java, SQL" },
  ],
  socials: {
    github: "https://github.com/surajsingh",
    linkedin: "https://linkedin.com/in/surajsingh",
    twitter: "https://x.com/surajsingh_dev",
    email: "surajsingh.csdev@gmail.com",
    leetcode: "https://leetcode.com/u/surajsingh",
  },
  skillCategories: [
    {
      category: "Languages",
      description: "Core programming languages for algorithmic problem solving and production systems.",
      items: [
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "TypeScript", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "C / C++", level: "Proficient" },
        { name: "SQL", level: "Proficient" },
        { name: "HTML5 / CSS3", level: "Advanced" },
      ],
    },
    {
      category: "Frontend Development",
      description: "Modern component architectures, sleek design tokens, and smooth responsive UIs.",
      items: [
        { name: "React 19 / 18", level: "Advanced" },
        { name: "Next.js", level: "Proficient" },
        { name: "Tailwind CSS v4", level: "Advanced" },
        { name: "Vite & Bundlers", level: "Advanced" },
        { name: "Redux / Zustand", level: "Proficient" },
        { name: "Responsive & A11y", level: "Advanced" },
      ],
    },
    {
      category: "Backend & Databases",
      description: "Robust server design, REST & GraphQL endpoints, authentication, and data layers.",
      items: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "MongoDB", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Redis Caching", level: "Familiar" },
        { name: "JWT & OAuth", level: "Proficient" },
      ],
    },
    {
      category: "AI, ML & Data",
      description: "Machine learning workflows, deep learning basics, data manipulation, and LLM tooling.",
      items: [
        { name: "PyTorch", level: "Familiar" },
        { name: "Scikit-Learn", level: "Proficient" },
        { name: "NumPy & Pandas", level: "Proficient" },
        { name: "FastAPI", level: "Proficient" },
        { name: "Computer Vision", level: "Familiar" },
        { name: "LLM & Prompt Eng.", level: "Proficient" },
      ],
    },
    {
      category: "Tools & DevOps",
      description: "Version control, Linux environments, containers, and deployment workflows.",
      items: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Linux / Bash", level: "Proficient" },
        { name: "Docker basics", level: "Familiar" },
        { name: "Postman", level: "Advanced" },
        { name: "Vercel / Netlify", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
      ],
    },
  ],
  projects: [
    {
      id: "omnichat-ai",
      title: "OmniChat AI",
      subtitle: "Real-time Intelligent Collaboration & Chat Workspace",
      description:
        "Full-duplex real-time messaging application with integrated AI assistance, markdown scratchpads, channels, and instant full-text search.",
      category: "Full-Stack",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS", "OpenAI API"],
      githubUrl: "https://github.com/surajsingh/omnichat-ai",
      liveUrl: "https://omnichat-ai.example.com",
      featured: true,
      metrics: "<40ms latency",
      highlights: [
        "WebSocket bidirectional channel broadcasting with presence indicators",
        "AI co-pilot embedded into channel threads for automated code reviews",
        "Optimized MongoDB indexing with text search queries under 12ms",
      ],
    },
    {
      id: "pulse-analytics",
      title: "Pulse Analytics",
      subtitle: "Privacy-Conscious Telemetry & Real-Time Performance Monitor",
      description:
        "High-performance telemetry dashboard capturing client health metrics, route transition times, and user interaction funnels without invasive cookies.",
      category: "Full-Stack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/surajsingh/pulse-analytics",
      liveUrl: "https://pulse-analytics.example.com",
      featured: true,
      metrics: "1.8KB script payload",
      highlights: [
        "Sub-2KB zero-dependency tracking snippet with Beacon API fallback",
        "Aggregated time-series chart visualizer with dynamic date filtering",
        "Row-level security and strict tenant isolation via PostgreSQL policies",
      ],
    },
    {
      id: "vision-sense",
      title: "VisionSense AI",
      subtitle: "Neural Image Classification & Real-Time Object Recognition",
      description:
        "Deep learning web application capable of multi-class classification and boundary detection with live camera feeds and batch image uploads.",
      category: "AI/ML",
      tags: ["Python", "FastAPI", "PyTorch", "OpenCV", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/surajsingh/vision-sense",
      liveUrl: "https://visionsense.example.com",
      featured: true,
      metrics: "94.2% test accuracy",
      highlights: [
        "Trained Convolutional Neural Network (CNN) backbone fine-tuned for high accuracy",
        "Asynchronous FastAPI worker queues for parallel inference handling",
        "Interactive probability histogram and bounding box inspector in React",
      ],
    },
    {
      id: "pathfinder-visualizer",
      title: "Algorithm PathFinder",
      subtitle: "Interactive Graph & Pathfinding Algorithm Visualizer",
      description:
        "Dynamic visualization engine demonstrating Dijkstra's algorithm, A* search, and BFS/DFS with weighted grids and procedural maze generation.",
      category: "Web Apps",
      tags: ["React", "TypeScript", "Canvas API", "Algorithms", "Tailwind CSS"],
      githubUrl: "https://github.com/surajsingh/pathfinder-visualizer",
      liveUrl: "https://pathfinder.example.com",
      featured: false,
      metrics: "60 FPS rendering",
      highlights: [
        "Smooth 60 FPS animation loop with customizable speed slider",
        "Recursive division algorithm generating realistic labyrinth mazes",
        "Detailed comparison metric between heuristic calculations and Dijkstra paths",
      ],
    },
    {
      id: "shopsphere-commerce",
      title: "ShopSphere Hub",
      subtitle: "Modern Modular E-Commerce & Inventory Management",
      description:
        "Comprehensive storefront and merchant portal with cart persistence, Stripe checkout intents, order tracking, and product categorization.",
      category: "Full-Stack",
      tags: ["React", "Express.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com/surajsingh/shopsphere",
      liveUrl: "https://shopsphere.example.com",
      featured: false,
      metrics: "Full payment flow",
      highlights: [
        "End-to-end checkout pipeline with Stripe webhooks for instant order confirmation",
        "Role-based authorization for administrative product management",
        "Instant client-side multi-facet search and price range filters",
      ],
    },
    {
      id: "documind-rag",
      title: "DocuMind RAG",
      subtitle: "Semantic Document Q&A with Vector Search Retrieval",
      description:
        "Retrieval-Augmented Generation system allowing users to upload PDFs and ask natural language queries with verified citations and source highlights.",
      category: "AI/ML",
      tags: ["Python", "LangChain", "FAISS", "FastAPI", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/surajsingh/documind-rag",
      liveUrl: "https://documind.example.com",
      featured: false,
      metrics: "Semantic embeddings",
      highlights: [
        "Document chunking and cosine similarity index with FAISS vector store",
        "Interactive highlight jumping directly to the source paragraph in PDF",
        "Clean conversational query interface with streaming tokens",
      ],
    },
  ],
  journey: [
    {
      year: "2024 – Present",
      title: "Advanced Full-Stack Engineering & System Architecture",
      role: "Student & Software Developer",
      organization: "Computer Science & Engineering",
      description:
        "Deepening expertise in modern full-stack frameworks, reactive architectures, cloud deployments, and scalable database schemas. Actively building end-to-end production applications.",
      tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Next.js", "Docker"],
      type: "experience",
    },
    {
      year: "2023 – 2024",
      title: "AI / Machine Learning & Intelligent Applications",
      role: "Undergraduate Researcher & Developer",
      organization: "Academic Projects & Self-Initiatives",
      description:
        "Explored machine learning foundations, training computer vision models in PyTorch, developing RESTful inference microservices with FastAPI, and integrating AI into interactive web apps.",
      tags: ["Python", "PyTorch", "FastAPI", "Data Science", "Computer Vision"],
      type: "experience",
    },
    {
      year: "2022 – 2023",
      title: "Data Structures, Algorithms & Competitive Programming",
      role: "Algorithmic Problem Solver",
      organization: "LeetCode & CodeChef",
      description:
        "Mastered core computer science fundamentals: dynamic programming, graphs, trees, search algorithms, and algorithmic complexity in Java and C++. Solved 100+ programming problems.",
      tags: ["Java", "C++", "DSA", "Algorithms", "Problem Solving"],
      type: "achievement",
    },
    {
      year: "2022 – 2023",
      title: "Computer Science & Programming Foundations",
      role: "Undergraduate Student",
      organization: "University Program",
      description:
        "Commenced formal Computer Science studies with top marks. Built first interactive web interfaces, learned object-oriented programming principles, and embraced version control with Git.",
      tags: ["Java", "Python", "Git", "HTML/CSS", "Object-Oriented Programming"],
      type: "education",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "College of Engineering",
      period: "2024 – 2028",
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming (Java/C++)",
        "Database Management Systems (SQL)",
        "Operating Systems & Linux Shell",
        "Computer Networks & Protocols",
        "Artificial Intelligence & Machine Learning",
        "Software Engineering & Agile Methodologies",
      ],
    },
  ],
};
