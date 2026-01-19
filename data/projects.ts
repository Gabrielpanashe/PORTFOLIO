export interface Project {
    title: string;
    description: string;
    purpose: string;
    problem: string;
    techStack: string;
    tags: string[];
    github: string;
    demo: string;
    category: string;
    slug: string;
    status?: string;
    coverImage: string;
}

export const projects: Project[] = [
    {
        title: "Billboard Management System",
        slug: "billboard-management",
        description: "A centralized platform to manage municipal billboard inventory and revenue.",
        purpose: "To automate the tracking and management of billboard assets for local government councils.",
        problem: "Addressed revenue leakages, manual record-keeping inefficiencies, and lack of transparency in city council revenue collection.",
        techStack: "Next.js, FastAPI, PostgreSQL, Prisma, Tailwind CSS",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Financial Systems"],
        github: "https://github.com/lordskyzw/billboardHot100",
        demo: "https://hccfrontend.up.railway.app/login",
        category: "Full-Stack",
        coverImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "AI Face Powered System",
        slug: "face-access-system",
        description: "Advanced biometric security system with real-time recognition.",
        purpose: "To provide a secure and efficient authentication mechanism using facial recognition.",
        problem: "Solved the vulnerabilities of spoofing where unauthorized people were accessing systems using printed photos or phone images.",
        techStack: "Python, TensorFlow, React, FastAPI, OpenCV, SQLite",
        tags: ["Python", "TensorFlow", "React", "FastAPI", "Computer Vision"],
        github: "https://github.com/Gabrielpanashe/face-access-system",
        demo: "https://demo.example.com",
        category: "AI/ML",
        coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Doctor Assistant AI",
        slug: "doctor-ai",
        description: "Intelligent diagnosis support system for medical professionals.",
        purpose: "To increase precision medication using sentiment analysis to understand patient feedback and emotional state.",
        problem: "Analyzes patient drug feedback and emotional feelings to help doctors suggest the real medication that every individual truly needs.",
        techStack: "Next.js, Python, LangChain, RAG, OpenAI API",
        status: "In Development",
        tags: ["Next.js", "Python", "LLMs", "RAG", "Healthcare"],
        github: "https://github.com/Gabrielpanashe/doctor-ai",
        demo: "#",
        category: "AI/ML",
        coverImage: "https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "School Management System",
        slug: "school-erp",
        description: "A comprehensive ERP system for educational institution digitalization.",
        purpose: "Digitalize every school activity including learner tracking, accounts, administration, and bursary services.",
        problem: "Modernizing traditional school management to improve efficiency in accounting, learner learning, and administrative workflows.",
        techStack: "FastAPI, Supabase, PostgreSQL, Next.js",
        status: "In Development",
        tags: ["FastAPI", "Supabase", "PostgreSQL", "Next.js", "ERP"],
        github: "#",
        demo: "#",
        category: "Full-Stack",
        coverImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    },
];
