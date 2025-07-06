import { MetadataRoute } from "next";
import { BlogService } from "@/lib/blog-service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Get all blog posts
    const posts = await BlogService.getAllPosts().catch(() => []);

    const blogUrls = posts.map((post) => {
        let lastModified: Date;
        if (post.publishedAt && !isNaN(new Date(post.publishedAt).getTime())) {
            lastModified = new Date(post.publishedAt);
        } else {
            lastModified = new Date();
        }
        return {
            url: `${baseUrl}/${post.slug}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        };
    });

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        ...blogUrls,
    ];
}
