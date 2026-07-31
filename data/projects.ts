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
        title: "Face Authentication with Liveness Detection",
        slug: "face-access-system",
        description: "Biometric login prototype combining facial recognition and liveness detection to defend against printed-photo and replay attacks.",
        purpose: "A biometric authentication system that combines face recognition with liveness detection to reduce printed-photo, screen, and video-replay spoofing attacks, using a FastAPI backend, a Next.js frontend, and database storage for registered users and facial data.",
        problem: "Face-based access systems are vulnerable to spoofing using printed photos, screens, and video replay. This prototype adds liveness detection alongside face verification, covering face registration, face verification, printed-photo attack detection, and screen-replay attack detection, so that access decisions depend on both identity verification and liveness.",
        techStack: "Python, Computer Vision, Convolutional Neural Networks, OpenCV, FastAPI, Next.js, Git",
        tags: ["Python", "Computer Vision", "OpenCV", "FastAPI", "Next.js"],
        github: "https://github.com/Gabrielpanashe/face-access-system",
        category: "Computer Vision | Biometrics | Cybersecurity",
        status: "Prototype",
        coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        altText: "Facial recognition interface with liveness-detection scanning points on a human face.",
    },
    {
        title: "Sentiment-Enhanced Clinical Decision Support System",
        slug: "se-cdss",
        description: "Healthcare AI platform that analyses medication feedback, predicts sentiment and adverse-reaction risk, and supports personalised drug recommendations using NLP, BioBERT, Logistic Regression, FastAPI, Next.js, PostgreSQL, and Docker.",
        purpose: "A web-based clinical decision-support platform that analyses patient medication reviews to identify sentiment, detect possible adverse drug reactions, generate clinical risk alerts, and support personalised medication recommendations. Developed using a Design Science Research framework and evaluated using the UCI Drug Review Dataset.",
        problem: "Patient medication feedback is rarely used systematically to flag risk. This system classifies drug reviews into positive, neutral, and negative sentiment using a TF-IDF and Logistic Regression baseline that achieved approximately 81% classification accuracy, explores BioBERT for healthcare-focused language modelling, and maps sentiment and prediction confidence to clinical risk categories including Mild Concern, Moderate Risk, and Severe Adverse Reaction for both clinician-facing and patient-facing workflows.",
        techStack: "Python, Natural Language Processing, BioBERT, Logistic Regression, TF-IDF, Scikit-learn, FastAPI, Next.js, PostgreSQL, Docker, Git",
        tags: ["NLP", "BioBERT", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
        github: "https://github.com/Gabrielpanashe/SE-CDSS",
        category: "Natural Language Processing | Healthcare AI | Full-Stack Development",
        status: "Completed Academic Research Project",
        coverImage: "https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800",
        altText: "AI clinical decision-support interface showing medication sentiment analysis and risk alerts.",
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
        category: "Full-Stack",
        coverImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
        altText: "Modern school campus building representing a digitalized school management system.",
    },
    {
        title: "Loan Risk Intelligence Platform",
        slug: "loan-default-prediction",
        description: "Explainable credit-risk platform built using Zimbabwean loan data, LightGBM, CatBoost, SHAP, FastAPI, Next.js, and PostgreSQL. Features include applicant scoring, provincial risk mapping, batch predictions, PDF reports, what-if analysis, multilingual AI support, and offline access.",
        purpose: "An explainable machine learning and full-stack credit-risk platform developed using real Zimbabwean loan data, combining a LightGBM and CatBoost ensemble with SHAP explainability to achieve a ROC-AUC of 0.6768 on the Zindi competition leaderboard, predicting loan-default risk and visualising provincial risk patterns for financial institutions.",
        problem: "Financial institutions need transparent, accurate loan-default risk assessment. This platform engineers 56 predictive features from borrower, loan, employment, financial, geographic, and repayment data, explains every prediction, and provides applicant-level risk scoring, provincial risk mapping across all ten provinces of Zimbabwe, batch CSV scoring, PDF credit-risk report generation, what-if simulations, role-based access control, offline support, and a multilingual AI assistant supporting English, ChiShona, and IsiNdebele, delivered as a Progressive Web Application.",
        techStack: "Python, LightGBM, CatBoost, SHAP, Pandas, Scikit-learn, FastAPI, Next.js, TypeScript, PostgreSQL, Progressive Web App technologies, Git",
        tags: ["LightGBM", "CatBoost", "SHAP", "FastAPI", "Next.js", "PostgreSQL"],
        status: "Completed Competition Project",
        github: "https://github.com/Gabrielpanashe/Loan_Default_Prediction-",
        category: "Machine Learning | Financial Technology | Full-Stack Development",
        coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
        altText: "Data visualisation of credit-risk assessment and financial analytics for the Loan Risk Intelligence Platform.",
    },
    {
        title: "SilicaGuard",
        slug: "silicaguard",
        description: "AI-powered silicosis screening and early-referral platform for Zimbabwean mining communities, combining USSD access, multilingual WhatsApp support, referral tracking, district risk mapping, health education, and computer-vision-assisted X-ray analysis.",
        purpose: "SilicaGuard is an AI-powered public-health platform designed to improve early silicosis risk screening, health education, referral, and disease surveillance among artisanal and small-scale mining communities in Zimbabwe. The project was a Top 20 Finalist at Cimas Healthathon 3.0.",
        problem: "Many miners work in high-dust environments without continuous screening, early diagnosis, reliable occupational-health records, or easy access to specialist services. SilicaGuard connects miners, village health workers, hospitals, insurers, and public-health stakeholders through USSD-based self-screening on basic mobile phones, multilingual support in English, ChiShona, and IsiNdebele, AI-powered WhatsApp guidance, a hospital referral-tracking dashboard, district-level risk mapping, and computer-vision-assisted X-ray analysis. It remains an ongoing platform and is not yet nationally deployed.",
        techStack: "Flutter, React, Python, Convolutional Neural Networks, Firebase, Git",
        tags: ["Flutter", "React", "Python", "CNN", "Firebase"],
        category: "Healthcare AI | Public Health Technology | Full-Stack Development",
        status: "Ongoing",
        coverImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800",
        altText: "Stethoscope representing an AI-powered silicosis screening and referral platform for mining communities.",
    },
    {
        title: "Kazizi",
        slug: "kazizi",
        description: "Automotive diagnostics and predictive-maintenance platform using OBD-II, CAN bus, Raspberry Pi, Rust, Flutter, and edge processing to monitor vehicle health and identify faults before breakdown.",
        purpose: "Kazizi is a smart vehicle diagnostics and predictive-maintenance platform that uses OBD-II and CAN bus data to identify faults, monitor vehicle health, and help drivers detect potential problems before failure occurs.",
        problem: "Vehicle owners often discover mechanical problems only after a breakdown. Kazizi collects OBD-II and CAN bus data, interprets fault codes, performs edge processing on a Raspberry Pi, and delivers driver-friendly diagnostic explanations and historical vehicle-performance tracking through a mobile application.",
        techStack: "Rust, Flutter, Raspberry Pi, OBD-II, CAN Bus, SQLite, Embedded Systems, Git",
        tags: ["Rust", "Flutter", "Raspberry Pi", "OBD-II", "CAN Bus"],
        category: "Embedded Systems | Automotive Technology | Predictive Maintenance",
        status: "Prototype / Ongoing",
        coverImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
        altText: "Close-up of a vehicle engine bay representing a smart diagnostics and predictive-maintenance platform.",
    },
];
