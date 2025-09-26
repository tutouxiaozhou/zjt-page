export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    author: string;
    publishDate: string;
    lastModified?: string;
    readTime: number; // 预计阅读时间（分钟）
    coverImage: string;
    featured: boolean;
    status: "published" | "draft" | "archived";
    views?: number;
    likes?: number;
}

export interface BlogCategory {
    id: string;
    name: string;
    description: string;
    color: string;
    postCount: number;
}

export interface BlogFilter {
    category?: string;
    tag?: string;
    search?: string;
    featured?: boolean;
}

export interface BlogStats {
    totalPosts: number;
    totalViews: number;
    totalCategories: number;
    averageReadTime: number;
}
