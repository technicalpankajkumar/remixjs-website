import type React from "react"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Separator } from "~/components/ui/separator"
import { ThumbsUp, MessageSquare, Flag } from "lucide-react"

export default function BlogComments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Comment submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      website: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your comment. It will appear after moderation.")
  }

  // Sample comments
  const comments = [
    {
      id: 1,
      author: "Sarah Johnson",
      date: "March 15, 2025",
      content:
        "This is a really comprehensive comparison! I've been using both platforms and find that Microsoft Teams integrates better with our existing systems, but Google Workspace has a more intuitive interface. Thanks for breaking down the differences so clearly.",
      avatar: "/placeholder.svg?height=60&width=60",
      likes: 5,
      replies: [
        {
          id: 101,
          author: "SG Tech",
          date: "March 15, 2025",
          content:
            "Thanks for your feedback, Sarah! You're right about the integration vs. intuitive interface trade-off. Many organizations find themselves making that exact decision based on their specific needs.",
          avatar: "/placeholder.svg?height=40&width=40",
          likes: 2,
        },
      ],
    },
    {
      id: 2,
      author: "Michael Chen",
      date: "March 14, 2025",
      content:
        "Great article! One thing I'd add is that Google Workspace tends to work better for organizations that are already heavily invested in the Google ecosystem. If you're using Chrome OS devices or Android phones company-wide, the integration is seamless.",
      avatar: "/placeholder.svg?height=60&width=60",
      likes: 3,
      replies: [],
    },
  ]

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Comments ({comments.length})</h2>

      {/* Comments list */}
      <div className="space-y-8 mb-12">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={comment.avatar || "/placeholder.svg"}
                    alt={comment.author}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-800">{comment.author}</h4>
                      <p className="text-xs text-gray-500">{comment.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Flag className="h-4 w-4" />
                      <span className="sr-only">Report</span>
                    </Button>
                  </div>
                  <p className="text-slate-600 mb-3">{comment.content}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>{comment.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>Reply</span>
                    </Button>
                  </div>
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 ml-8 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <img
                              src={reply.avatar || "/placeholder.svg"}
                              alt={reply.author}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between items-start mb-1">
                              <div>
                                <h4 className="font-bold text-slate-800 text-sm">{reply.author}</h4>
                                <p className="text-xs text-gray-500">{reply.date}</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <Flag className="h-3 w-3" />
                                <span className="sr-only">Report</span>
                              </Button>
                            </div>
                            <p className="text-slate-600 text-sm">{reply.content}</p>
                            <div className="flex items-center gap-4 text-xs mt-2">
                              <Button variant="ghost" size="sm" className="h-6 text-gray-500 hover:text-red-500">
                                <ThumbsUp className="h-3 w-3 mr-1" />
                                <span>{reply.likes}</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-8" />

      {/* Comment form */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Leave a Reply</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">
              Website
            </label>
            <Input id="website" name="website" value={formData.website} onChange={handleChange} className="w-full" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Message<span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full"
            />
          </div>

          <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

