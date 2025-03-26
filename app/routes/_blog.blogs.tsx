import { useState } from "react"
import { Calendar, User, MessageSquare, ChevronRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Link } from "@remix-run/react"
import { json } from "@remix-run/node";
// Sample blog data
const blogPosts = [
  {
    id: 1,
    slug: "nvidia-unveils-blackwell-ultra-and-vera-rubin",
    title: "NVIDIA Unveils Blackwell Ultra and Vera Rubin: The Next Generation of AI Superchips",
    excerpt:
      "In a groundbreaking announcement on March 19, 2025, NVIDIA has once again pushed the boundaries of artificial intelligence and computing...",
    date: "March 19, 2025",
    author: "SG Tech",
    comments: 0,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WJuNbB1YZtK7bqCwcHBrfN9pbHQusF.png",
    category: "Technology",
  },
  {
    id: 2,
    slug: "microsoft-teams-vs-google-workspace",
    title: "Microsoft Teams vs. Google Workspace: A Comprehensive Comparison for Your Business Needs",
    excerpt:
      "Microsoft Teams vs. Google Workspace In today's digital-first world, effective collaboration tools are essential for businesses to thrive. Two of...",
    date: "March 10, 2025",
    author: "SG Tech",
    comments: 0,
    image: "/placeholder.svg?height=200&width=300",
    category: "Business",
  },
  {
    id: 3,
    slug: "what-is-cloud-native",
    title: "What Is Cloud Native? Benefits, Technologies, and Why It Matters",
    excerpt:
      "What Is Cloud Native (and Why Does It Matter)? In the digital transformation era, businesses increasingly turn to cloud-native technologies to...",
    date: "March 6, 2025",
    author: "SG Tech",
    comments: 0,
    image: "/placeholder.svg?height=200&width=300",
    category: "Technology",
  },
  {
    id: 4,
    slug: "microsoft-to-shut-down-skype-permanently",
    title: "Microsoft to Shut Down Skype Permanently – End of an Era!",
    excerpt:
      "Microsoft has announced that it will permanently shut down Skype, marking the end of an iconic communication tool that played...",
    date: "March 4, 2025",
    author: "SG Tech",
    comments: 0,
    image: "/placeholder.svg?height=200&width=300",
    category: "Technology",
  },
  {
    id: 5,
    slug: "static-vs-dynamic-content",
    title: "Static vs. Dynamic Content: Which is Best for Your Website?",
    excerpt:
      "Static vs. Dynamic Content In the digital landscape, developers often face the dilemma of choosing between static and dynamic content...",
    date: "February 19, 2025",
    author: "SG Tech",
    comments: 0,
    image: "/placeholder.svg?height=200&width=300",
    category: "Web Development",
  },
  {
    id: 6,
    slug: "blockchain-technology-healthcare",
    title: "How Blockchain Technology is Transforming Healthcare, Supply Chains, and More in the Digital Age",
    excerpt:
      "Blockchain: Beyond Cryptocurrencies Blockchain technology is often synonymous with cryptocurrencies like Bitcoin and Ethereum. However, its potential extends far beyond...",
    date: "February 5, 2025",
    author: "SG Tech",
    comments: 0,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LcVbqKiejDkeziFNtmBUujRnhqXQsV.png",
    category: "Healthcare",
  },
]


export const loader = async () => {
    // Fetch your data here, for example from a database or an API
    const blogs = blogPosts; // Replace with your data fetching logic
    return json(blogs);
};

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const postsPerPage = 5

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-slate-800 mb-2">No posts found</h3>
        <p className="text-slate-600">Try adjusting your filters to find what you're looking for.</p>
      </div>
    )
  }

  return (
    <div>
      {currentPosts.map((post) => (
        <Card key={post.id} className="mb-6 overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {post.image && (
                <div className="md:col-span-1">
                  <Link to={`/post/${post.slug}`}>
                    <div className="relative h-48 md:h-full w-full">
                      <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover" />
                    </div>
                  </Link>
                </div>
              )}
              <div className={`p-6 ${post.image ? "md:col-span-3" : "md:col-span-4"}`}>
                <Link to={`/post/${post.slug}`} className="group">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">{post.excerpt}</p>

                <Link
                  to={`/post/${post.slug}`}
                  className="text-red-500 hover:text-red-600 font-medium inline-flex items-center"
                >
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "bg-red-500 hover:bg-red-600" : ""}
            >
              {index + 1}
            </Button>
          ))}
          {currentPage < totalPages && (
            <Button variant="outline" size="sm" onClick={() => setCurrentPage(currentPage + 1)}>
              Next »
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

