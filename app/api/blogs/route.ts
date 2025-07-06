import { NextResponse } from "next/server"
import { BlogService } from "@/lib/blog-service"

// NOTE: This endpoint no longer uses mock data. It now relies solely on Prisma for data.
// Use BlogService to fetch data from Prisma

export async function GET(request: Request) {
  try {
    console.log("API /blogs called")

    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured") === "true" ? true : undefined
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined

    // Use BlogService to fetch data from Supabase
    const posts = await BlogService.getAllPosts({
      category: category || undefined,
      featured,
      limit,
    })

    console.log(`Returning ${posts.length} posts`)
    return NextResponse.json(posts)
  } catch (error) {
    console.error("API /blogs error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
