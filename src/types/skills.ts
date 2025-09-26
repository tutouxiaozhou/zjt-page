export interface Skill {
    id: string;
    name: string;
    level: number; // 1-100
    category: "frontend" | "backend" | "tools" | "design";
    icon?: string;
    description?: string;
    yearsOfExperience?: number;
}

export interface SkillCategory {
    id: string;
    name: string;
    description: string;
    skills: Skill[];
    color: string;
}

export interface Certificate {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    url?: string;
    image?: string;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    type: "award" | "certification" | "milestone" | "project";
    icon?: string;
}
