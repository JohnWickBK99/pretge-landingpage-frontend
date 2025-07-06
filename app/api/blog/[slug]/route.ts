import { NextResponse } from "next/server"
import { BlogService } from "@/lib/blog-service"

// NOTE: This API no longer uses mock data. Remove SAMPLE_POSTS fallback to ensure production correctness.

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params;
    console.log(`API /blog/${slug} called`)

    // Try to fetch from Prisma using BlogService
    const post = await BlogService.getPostBySlug(slug)

    console.log(`Found post: ${post?.title}`)

    if (!post) {
      console.warn(`Blog post not found in database: ${slug}`)
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    console.log(`Returning post from database: ${post.title}`)
    return NextResponse.json(post)
  } catch (error) {
    console.error("API /blog error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
