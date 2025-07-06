import { NextResponse } from "next/server"
import { BlogService } from "@/lib/blog-service"

// NOTE: This endpoint no longer uses mock data. It now relies solely on Prisma for data.
// Use BlogService to get featured posts from Prisma

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const limitParam = searchParams.get("limit")
        const limit = limitParam ? parseInt(limitParam) : 3

        console.log(`API /featured called with limit=${limit}`)

        // Use BlogService to get featured posts from Supabase
        const posts = await BlogService.getFeaturedPosts(limit)

        console.log(`Returning ${posts.length} featured posts`)
        return NextResponse.json(posts)
    } catch (error) {
        console.error("API /featured error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
