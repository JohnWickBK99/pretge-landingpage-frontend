import { MetadataRoute } from "next";
import { BlogService } from "@/lib/blog-service";
import { i18n } from "@/i18n-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://pretgemarket.xyz";

    // Get all blog posts
    const posts = await BlogService.getAllPosts().catch(() => []);

    // Create blog URLs for all languages
    const blogUrls = posts.flatMap((post) => {
        let lastModified: Date;
        if (post.publishedAt && !isNaN(new Date(post.publishedAt).getTime())) {
            lastModified = new Date(post.publishedAt);
        } else {
            lastModified = new Date();
        }
        
        return i18n.locales.map((locale) => ({
            url: `${baseUrl}/${locale}/blogs/${post.slug}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
            alternates: {
                languages: Object.fromEntries(
                    i18n.locales.map(lang => [lang, `${baseUrl}/${lang}/blogs/${post.slug}`])
                )
            }
        }));
    });

    // Main pages with language versions
    const mainPages = [
        { path: '', priority: 1.0, changeFreq: 'daily' as const },
        { path: '/blogs', priority: 0.8, changeFreq: 'daily' as const },
    ];

    const mainUrls = mainPages.flatMap(page => 
        i18n.locales.map(locale => ({
            url: `${baseUrl}/${locale}${page.path}`,
            lastModified: new Date(),
            changeFrequency: page.changeFreq,
            priority: page.priority,
            alternates: {
                languages: Object.fromEntries(
                    i18n.locales.map(lang => [lang, `${baseUrl}/${lang}${page.path}`])
                )
            }
        }))
    );

    // API endpoints for search engines
    const apiUrls = [
        {
            url: `${baseUrl}/api/blogs`,
            lastModified: new Date(),
            changeFrequency: 'hourly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/api/categories`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/api/featured`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.6,
        },
    ];

    return [
        // Root page
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
            alternates: {
                languages: Object.fromEntries(
                    i18n.locales.map(lang => [lang, `${baseUrl}/${lang}`])
                )
            }
        },
        ...mainUrls,
        ...blogUrls,
        ...apiUrls,
    ];
}
