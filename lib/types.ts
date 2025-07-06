export interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string | null
    content: string
    author: string
    publishedAt: Date
    createdAt: Date
    updatedAt: Date
    readTime: string | null
    category: string | null
    featured: boolean
    published: boolean
}

export interface BlogPostInsert {
    slug: string
    title: string
    excerpt?: string
    content: string
    author: string
    publishedAt?: Date
    readTime?: string
    category?: string
    featured?: boolean
    published?: boolean
}

export interface BlogPostUpdate {
    slug?: string
    title?: string
    excerpt?: string
    content?: string
    author?: string
    publishedAt?: Date
    readTime?: string
    category?: string
    featured?: boolean
    published?: boolean
} 