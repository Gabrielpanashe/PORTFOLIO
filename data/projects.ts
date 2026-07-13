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
    altText: string;
}

export const projects: Project[] = [
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
        altText: "High-tech facial recognition interface with scanning points on a human face.",
    },
    {
        title: "SE-CDSS (Clinical Decision Support System)",
        slug: "se-cdss",
        description: "Intelligent diagnosis support system for medical professionals.",
        purpose: "To design and implement a precision medicine clinical decision support system that assists doctors in recommending the most effective medication for a patient's condition while minimizing adverse effects by integrating clinical guidelines, patient EHR history, and sentiment analysis of patient-report feedback.",
        problem: "Analyzes patient drug feedback and emotional feelings to help doctors suggest the real medication that every individual truly needs.",
        techStack: "Next.js, Python, NLP, Sentiment Analysis",
        status: "Research Project Under Development",
        tags: ["Next.js", "Python", "NLP", "Healthcare"],
        github: "https://github.com/Gabrielpanashe/SE-CDSS",
        demo: "#",
        category: "AI/ML",
        coverImage: "https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800",
        altText: "AI medical assistant showing diagnostic data and patient sentiment analysis on a tablet.",
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
        github: "https://github.com/Gabrielpanashe/school-management-system",
        demo: "#",
        category: "Full-Stack",
        coverImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
        altText: "Modern school campus building representing a digitalized school management system.",
    },
    {
        title: "Loan Default Prediction",
        slug: "loan-default-prediction",
        description: "An ML-powered system to predict loan defaults and assess credit risk.",
        purpose: "To assist financial institutions in minimizing risk by accurately identifying potential loan defaulters.",
        problem: "Addressed the high rate of non-performing loans due to inadequate credit assessment methods.",
        techStack: "Streamlit, FastAPI, Random Forest, SMOTE, Docker",
        tags: ["Streamlit", "FastAPI", "Machine Learning", "Docker", "SMOTE"],
        status: "Production Ready",
        github: "https://github.com/Gabrielpanashe/Loan_Default_Prediction-",
        demo: "#",
        category: "AI/ML",
        coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
        altText: "Data visualization of credit risk assessment and financial analytics.",
    },

];
