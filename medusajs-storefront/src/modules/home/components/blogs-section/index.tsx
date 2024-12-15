import Image from "next/image"
import Link from "next/link"
import SectionHeader from "src/components/atoms/typography/section-header"

// You might want to create a type for blog data
type BlogPost = {
  date: string
  author: string
  title: string
  excerpt: string
  image: string
  slug: string
}

// Sample data - replace with your actual data
const blogPosts: BlogPost[] = [
  {
    date: "1 September 2024",
    author: "evercare",
    title: "What is NAD IV therapy",
    excerpt:
      "What is NAD IV therapy?In the recent years, NAD+ therapy has emerged as a notable trend in the health and wellness indus...",
    image: "/images/blogs/blog-1.webp",
    slug: "what-is-nad-iv-therapy",
  },
  {
    date: "1 October 2024",
    author: "evercare",
    title: "Everything you need to know about IV Therapy",
    excerpt:
      "What is NAD IV therapy?In the recent years, NAD+ therapy has emerged as a notable trend in the health and wellness indus...",
    image: "/images/blogs/blog-2.webp",
    slug: "what-is-nad-iv-therapy",
  },
  // Add more blog posts...
]

export default function BlogsSection() {
  return (
    <div className="py-12">
      <SectionHeader title="Medical Blogs" />
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-blue-600 text-sm inline-block">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            View all <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
