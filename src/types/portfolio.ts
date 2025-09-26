export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    category: 'web' | 'mobile' | 'desktop' | 'design';
    technologies: string[];
    features: string[];
    images: string[];
    demoUrl?: string;
    githubUrl?: string;
    status: 'completed' | 'in-progress' | 'planned';
    startDate: string;
    endDate?: string;
    client?: string;
    role: string;
    challenges?: string[];
    solutions?: string[];
    results?: string[];
}

export interface ProjectCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
}

export interface ProjectFilter {
    category?: string;
    technology?: string;
    status?: string;
}