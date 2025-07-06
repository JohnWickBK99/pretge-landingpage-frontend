import { prisma } from "./prisma"
import type { BlogPost, BlogPostInsert, BlogPostUpdate } from "./types"

export class BlogService {
  // Get all published blog posts
  static async getAllPosts(options?: {
    category?: string
    featured?: boolean
    limit?: number
  }) {
    try {
      const posts = await prisma.blogPost.findMany({
        where: {
          published: true,
          ...(options?.category && { category: options.category }),
          ...(options?.featured !== undefined && { featured: options.featured }),
        },
        orderBy: { publishedAt: "desc" },
        ...(options?.limit && { take: options.limit }),
        select: {
          id: true,
          slug: true,
          title: true,
          excerpt: true,
          author: true,
          publishedAt: true,
          readTime: true,
          category: true,
          featured: true,
        },
      })
      return posts
    } catch (error) {
      console.error("BlogService.getAllPosts error:", error)
      return []
    }
  }

  // Get a single blog post by slug
  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const post = await prisma.blogPost.findFirst({
        where: {
          slug,
          published: true,
        },
      })
      return post as BlogPost | null
    } catch (error) {
      console.error("BlogService.getPostBySlug error:", error)
      return null
    }
  }

  // Create a new blog post
  static async createPost(post: BlogPostInsert): Promise<BlogPost | null> {
    try {
      const newPost = await prisma.blogPost.create({
        data: post,
      })
      return newPost as BlogPost
    } catch (error) {
      console.error("BlogService.createPost error:", error)
      return null
    }
  }

  // Update a blog post
  static async updatePost(slug: string, updates: BlogPostUpdate): Promise<BlogPost | null> {
    try {
      const updatedPost = await prisma.blogPost.update({
        where: { slug },
        data: updates,
      })
      return updatedPost as BlogPost
    } catch (error) {
      console.error("BlogService.updatePost error:", error)
      return null
    }
  }

  // Delete a blog post
  static async deletePost(slug: string): Promise<boolean> {
    try {
      await prisma.blogPost.delete({
        where: { slug },
      })
      return true
    } catch (error) {
      console.error("BlogService.deletePost error:", error)
      return false
    }
  }

  // Get all categories
  static async getCategories(): Promise<string[]> {
    try {
      const categories = await prisma.blogPost.findMany({
        where: {
          published: true,
          category: { not: null },
        },
        select: { category: true },
        distinct: ["category"],
      })
      return categories
        .map((item) => item.category)
        .filter(Boolean)
        .sort() as string[]
    } catch (error) {
      console.error("BlogService.getCategories error:", error)
      return []
    }
  }

  // Search blog posts
  static async searchPosts(query: string): Promise<BlogPost[]> {
    try {
      const posts = await prisma.blogPost.findMany({
        where: {
          published: true,
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { excerpt: { contains: query, mode: "insensitive" } },
            { content: { contains: query, mode: "insensitive" } },
          ],
        },
        orderBy: { publishedAt: "desc" },
      })
      return posts as BlogPost[]
    } catch (error) {
      console.error("BlogService.searchPosts error:", error)
      return []
    }
  }

  // Get featured posts
  static async getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
    try {
      const posts = await prisma.blogPost.findMany({
        where: {
          published: true,
          featured: true,
        },
        orderBy: { publishedAt: "desc" },
        take: limit,
      })
      return posts as BlogPost[]
    } catch (error) {
      console.error("BlogService.getFeaturedPosts error:", error)
      return []
    }
  }

  // Get posts by category
  static async getPostsByCategory(category: string): Promise<BlogPost[]> {
    try {
      const posts = await prisma.blogPost.findMany({
        where: {
          published: true,
          category,
        },
        orderBy: { publishedAt: "desc" },
      })
      return posts as BlogPost[]
    } catch (error) {
      console.error("BlogService.getPostsByCategory error:", error)
      return []
    }
  }
}
