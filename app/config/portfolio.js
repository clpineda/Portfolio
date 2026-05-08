export const portfolioConfig = {
  profile: {
    name: "Chester Lance R. Pineda",
    title: "Backend Developer | Full Stack Capable",
    subtitle: "Building scalable systems, APIs, and intelligent applications",
  },

  stats: {
    experience: "Fresh Graduate",
    projects: "3 Projects Built",
  },

  tools: {
    frontend: [
      { name: "React", years: "1" },
      { name: "TypeScript", years: "1" },
      { name: "TailwindCSS", years: "1" },
      { name: "Next.js", years: "1" },
    ],
    backend: [
      { name: "Node.js", years: "1" },
      { name: "Python", years: "1" },
      { name: "FastAPI", years: "1" },
    ],
    database: [
      { name: "PostgreSQL", years: "1" },
      { name: "Supabase", years: "1" },
    ],
    aiDevTools: [
      { name: "OpenAI API", years: "1" },
      { name: "Gemini API", years: "1" },
      { name: "TensorFlow", years: "1" },
      { name: "Pytorch", years: "1" }
    ],
    cloudDevelopment: [
      { name: "Vercel", years: "1" },
      { name: "Render", years: "1" },
    ],
  },

  work: {
    projects: [
      {
        name: "Devault",
        description: "AI-powered project templating platform that transforms existing codebases into reusable customizable templates. Users can upload full-stack projects, let AI analyze structure and content, generate editable placeholders, preview templates, and quickly bootstrap new projects from existing implementations. Built with a modern full-stack architecture using Next.js, NestJS, Prisma, PostgreSQL, and Gemini AI integration.",
        tags: ["Next.js", "React", "NestJS", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT Auth", "Gemini AI API", "Axios", "Vercel", "Render"],
        liveDemo: "https://devault-snowy.vercel.app/",
      },
      {
        name: "Child Behavior Monitoring System",
        description: "An AI-powered monitoring application designed to detect and track child behavior in real time using computer vision and deep learning. The system utilizes YOLOv8 for object detection, OpenCV for video processing, and PyTorch for AI model execution, with a Kivy-based desktop interface for live monitoring and alerts.",
        tags: ["Python", "YOLOv8 (Ultralytics)", "OpenCV", "PyTorch", "Kivy", "NumPy", "Pygame", "Pillow", "PyInstaller"]
      },
      
    ],
  },

  links: {
    email: "chesterlancepineda@gmail.com",
    github: "https://github.com/clpineda",
    linkedin: "https://www.linkedin.com/in/chester-lance-pineda-1a0a94398",
  },

  resume: "/resume.pdf",
};
