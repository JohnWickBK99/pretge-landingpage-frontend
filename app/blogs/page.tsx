export const revalidate = 60; // giây

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";
import Script from "next/script";
import type { Metadata } from "next";
import { BlogService } from "@/lib/blog-service";

export const metadata: Metadata = {
  title: "Blog - Secure Pre-TGE Token Trading with Escrow Protection",
  description:
    "Insights, guides, and stories about secure pre-TGE token trading, escrow protection, and the Pre-TGE platform.",
  keywords: [
    "pre-TGE",
    "token trading",
    "escrow",
    "secure trading",
    "blockchain",
    "crypto",
    "PreTGE",
    "safe token trading",
    "decentralized trading",
    "blog",
  ],
  openGraph: {
    title: "Blog - Secure Pre-TGE Token Trading with Escrow Protection",
    description:
      "Insights, guides, and stories about secure pre-TGE token trading, escrow protection, and the Pre-TGE platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Secure Pre-TGE Token Trading with Escrow Protection",
    description:
      "Insights, guides, and stories about secure pre-TGE token trading, escrow protection, and the Pre-TGE platform.",
  },
};

async function getBlogPosts() {
  // Call Prisma directly through the service layer – faster & avoids 401 issues
  const posts = await BlogService.getAllPosts();
  console.log("Fetched posts:", posts.length);
  return posts;
}

export default async function BlogsPage() {
  let posts = [];

  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.error("Error in blog page:", error);
    throw error; // Let Next.js error boundary handle it
  }

  // Handle empty state
  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Pre-TGE Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Insights, guides, and stories about secure pre-TGE token
                trading, escrow protection, and the Pre-TGE platform.
              </p>
            </div>

            <div className="text-center p-12 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                No posts yet
              </h2>
              <p className="text-gray-600 mb-6">
                We are preparing exciting content. Please check back later.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return (
    <>
      <Script id="blog-list-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          headline: "Pre-TGE Blog",
          description:
            "Insights, guides, and stories about secure pre-TGE token trading, escrow protection, and the Pre-TGE platform.",
          url: `${baseUrl}/blogs`,
          blogPosts: posts.map((post: any) => ({
            "@type": "BlogPosting",
            headline: post.title,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.published_at || post.publishedAt,
            url: `${baseUrl}/blogs/${post.slug}`,
            keywords: post.category,
          })),
        })}
      </Script>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-blue-600 font-medium">Blog</li>
              </ol>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Pre-TGE Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Insights, guides, and stories about secure pre-TGE token
                trading, escrow protection, and the Pre-TGE platform.
              </p>
            </div>

            <div className="grid gap-8">
              {posts.map((post: any) => (
                <Card
                  key={post.slug}
                  className="hover:shadow-lg transition-shadow bg-white"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-gray-900">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>
                          {new Date(
                            post.published_at || post.publishedAt
                          ).toLocaleDateString("en-US")}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.read_time || post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Buy & Sell Tokens Before The Official TGE
              </h2>
              <p className="text-gray-600 mb-6">
                Join the next generation of token trading. Seize opportunities
                and trade with confidence on the most secure and cost-effective
                pre-TGE platform.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Trading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
