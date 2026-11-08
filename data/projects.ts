export interface Project {
    title: string;
    description: string;
    purpose: string;
    problem: string;
    techStack: string;
    tags: string[];
    github?: string;
    demo?: string;
    category: string;
    slug: string;
    status?: string;
    coverImage: string;
    altText: string;
}

export const projects: Project[] = [
    {
        title: "SilicaGuard",
        slug: "silicaguard",
        description: "AI-assisted lung health screening and referral platform for artisanal miners, integrating a mobile application, a USSD self-screening service and a hospital dashboard with a real-time district map. First position at the 2026 Cimas Healthathon 3.0.",
        purpose: "SilicaGuard is an AI-assisted lung health screening and referral platform for artisanal miners, built as a team project and awarded first position at the 2026 Cimas Healthathon 3.0. I led a team of three to deliver an integrated digital platform that addresses real-world operational and healthcare challenges.",
        problem: "Artisanal miners work in high-dust environments with limited access to screening and specialist referral. The platform integrates a mobile application, a USSD self-support service, and a hospital dashboard with a real-time district map, backed by Python services such as automated referral workflows and a structured artisanal-miner database. As team lead, I coordinated the integration of these components into one unified platform and applied innovative thinking, teamwork and effective time management to deliver it under competition deadlines.",
        techStack: "React Native, Python, PostgreSQL, Git",
        tags: ["React Native", "Python", "PostgreSQL", "Git"],
        category: "Healthcare AI | Public Health Technology | Systems Integration",
        status: "First Position - Cimas Healthathon 3.0 (2026)",
        coverImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800",
        altText: "Stethoscope representing an AI-assisted lung health screening and referral platform for artisanal miners.",
    },
    {
        title: "Sentiment-Enhanced Clinical Decision Support System",
        slug: "se-cdss",
        description: "Web-based clinical decision support tool that analyses patient medication feedback to enable personalised drug recommendations, using BioBERT, Logistic Regression, FastAPI, Next.js, PostgreSQL and Docker.",
        purpose: "The Sentiment-Enhanced Clinical Decision Support System (SE-CDSS) is my research dissertation: a web-based clinical tool that enables personalised drug recommendations by analysing patient medication feedback. It was developed under a Design Science Research framework.",
        problem: "Patient medication feedback is rarely used systematically to inform prescribing. I applied BioBERT deep learning and Logistic Regression to the UCI Drug Review Dataset and demonstrated a measurable improvement in recommendation accuracy versus baseline models. The system integrates a FastAPI backend with a Next.js frontend, is containerised with Docker, and persists data in PostgreSQL.",
        techStack: "BioBERT, Logistic Regression, FastAPI, PostgreSQL, Docker, Next.js, Git",
        tags: ["BioBERT", "Logistic Regression", "FastAPI", "PostgreSQL", "Docker", "Next.js"],
        github: "https://github.com/Gabrielpanashe/SE-CDSS",
        category: "NLP | Healthcare AI | Clinical Decision Support",
        status: "Research Dissertation",
        coverImage: "https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800",
        altText: "AI clinical decision-support interface analysing patient medication feedback.",
    },
];
