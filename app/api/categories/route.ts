import { NextResponse } from "next/server"
import { BlogService } from "@/lib/blog-service"

// NOTE: This endpoint no longer uses mock data. It now relies solely on Prisma for data.
// Use BlogService to get categories from Prisma

export async function GET() {
  try {
    console.log("API /categories called")

    // Use BlogService to get categories from Supabase
    const categories = await BlogService.getCategories()

    console.log(`Returning ${categories.length} categories`)
    return NextResponse.json(categories)
  } catch (error) {
    console.error("API /categories error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
