import type React from "react"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Link } from "@remix-run/react"

export function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Search:", searchTerm, "Category:", category, "Date:", date)
  }

  const recentPosts = [
    {
      id: 1,
      slug: "nvidia-unveils-blackwell-ultra-and-vera-rubin",
      title: "NVIDIA Unveils Blackwell Ultra and Vera Rubin: The Next Generation of AI Superchips",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WJuNbB1YZtK7bqCwcHBrfN9pbHQusF.png",
    },
    {
      id: 2,
      slug: "microsoft-teams-vs-google-workspace",
      title: "Microsoft Teams vs. Google Workspace: A Comprehensive Comparison for Your Business Needs",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      slug: "what-is-cloud-native",
      title: "What Is Cloud Native? Benefits, Technologies, and Why It Matters",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const categories = [
    { name: "Technology", count: 12 },
    { name: "Healthcare", count: 8 },
    { name: "Business", count: 6 },
    { name: "Web Development", count: 5 },
  ]

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-gray-200">About Our Blog</h3>

          <p className="text-slate-600 mb-4">
            Stay updated with the latest insights, trends, and news in technology, business solutions, and digital
            transformation.
          </p>

          <p className="text-slate-600">
            Our experts share valuable information to help your business thrive in the digital age.
          </p>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-gray-200">Most Recent Posts</h3>

          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link key={post.id} to={`/post/${post.slug}`} className="group">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden">
                      <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-800 group-hover:text-slate-800 transition-colors">
                      {post.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Us */}
      <Card className="bg-gray-100 border-none overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-60">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LcVbqKiejDkeziFNtmBUujRnhqXQsV.png"
              alt="Contact Us"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-800/70 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
              <p className="text-gray-200 text-sm mb-4">
                We'd love to hear about your project! Feel free to reach out to us via email at sgtechtechnology@gmail.com,
                or simply fill out the contact form below.
              </p>
              <Button asChild className="bg-slate-800 hover:bg-slate-700 text-white">
                <Link to="/contactus">Connect Now</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-gray-200">Category</h3>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/post/category/${cat.name.toLowerCase()}`}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-slate-700 text-sm rounded-md transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

