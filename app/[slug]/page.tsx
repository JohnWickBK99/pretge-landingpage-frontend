import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Script from "next/script";
import type { Metadata } from "next";
import { BlogService } from "@/lib/blog-service";
import { ContentRenderer } from "@/components/content-renderer";

async function getBlogPost(slug: string) {
  // Fetch the post directly from Prisma via service layer
  const post = await BlogService.getPostBySlug(slug);

  // Service returns null if not found
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
      description: "Bài viết này không tồn tại hoặc đã bị xóa",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: post.title,
    description: post.excerpt || `Đọc bài viết ${post.title} của chúng tôi`,
    authors: [{ name: post.author }],
    keywords: [post.category || "", "blog", "kinh doanh", "tự động hóa"],
    openGraph: {
      title: post.title,
      description: post.excerpt || `Đọc bài viết ${post.title} của chúng tôi`,
      type: "article",
      publishedTime: post.published_at,
      authors: [post.author],
      tags: [post.category || ""],
      url: `${baseUrl}/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Đọc bài viết ${post.title} của chúng tôi`,
      creator: "@kpim",
    },
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const canonicalUrl = `${baseUrl}/${post.slug}`;

  return (
    <>
      <Script id="blog-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          author: {
            "@type": "Person",
            name: post.author,
          },
          datePublished: post.published_at,
          dateModified: post.updated_at || post.published_at,
          description:
            post.excerpt || `Đọc bài viết ${post.title} của chúng tôi`,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
          },
          keywords: post.category || undefined,
          articleSection: post.category || undefined,
        })}
      </Script>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      Trang chủ
                    </Link>
                  </li>
                  <li className="text-gray-500">/</li>
                  <li>
                    <Link
                      href="/blogs"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="text-gray-500">/</li>
                  <li className="text-blue-600 font-medium truncate max-w-[200px]">
                    {post.title}
                  </li>
                </ol>
              </nav>

              <Button variant="ghost" asChild className="mb-6">
                <Link href="/blogs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Quay lại Blog
                </Link>
              </Button>

              <Badge
                variant="secondary"
                className="mb-4 bg-blue-100 text-blue-800"
              >
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>
                    {new Date(post.published_at).toLocaleDateString("vi-VN")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.read_time}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <ContentRenderer
                content={post.content}
                className="prose prose-lg max-w-none"
                showDebug={process.env.NODE_ENV === "development"}
              />
            </div>

            {/* Back to blog CTA */}
            <div className="text-center mt-12">
              <Link
                href="/blogs"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Xem thêm bài viết khác
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
