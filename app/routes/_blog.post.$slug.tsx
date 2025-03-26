import { useState } from "react"
import { Calendar, User, MessageSquare, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { Link, useOutletContext } from "@remix-run/react"

interface BlogPostProps {
  slug: string
}

export default function Post() {
  const [showTableOfContents, setShowTableOfContents] = useState(true)
  const slug = useOutletContext()

  // In a real app, you would fetch the blog post data based on the slug
  // This is mock data for demonstration
  const post = {
    title: "Microsoft Teams vs. Google Workspace: A Comprehensive Comparison for Your Business Needs",
    date: "March 10, 2025",
    author: "SG Tech",
    comments: 0,
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p class="mb-4">In today's digital-first world, effective collaboration tools are essential for businesses to thrive. Two of the most popular platforms in this space are <strong>Microsoft Teams</strong> and <strong>Google Workspace</strong>. Both offer a wide range of features designed to enhance productivity, streamline communication, and foster teamwork. But which one is the right fit for your business? In this comprehensive comparison, we'll dive deep into the features, user experience, pricing, security, and more to help you make an informed decision.</p>
    `,
    sections: [
      {
        id: "understanding",
        title: "Understanding Microsoft Teams and Google Workspace",
        content: `
          <h3 class="text-xl font-bold mb-3">Microsoft Teams Overview</h3>
          <p class="mb-4">Microsoft Teams is a collaboration platform that integrates seamlessly with the Microsoft 365 ecosystem. It combines chat, video conferencing, file sharing, and app integration into a single hub. Teams is particularly popular among businesses that already rely on Microsoft products like Word, Excel, and Outlook.</p>
          
          <h3 class="text-xl font-bold mb-3">Google Workspace Overview</h3>
          <p class="mb-4">Google Workspace (formerly G Suite) is a cloud-based productivity suite that includes tools like Gmail, Google Drive, Google Docs, and Google Meet. Known for its simplicity and real-time collaboration features, Google Workspace is a favorite among startups, small businesses, and remote teams.</p>
        `,
      },
      {
        id: "features",
        title: "Features and Capabilities: What Each Platform Offers",
        content: `
          <h3 class="text-xl font-bold mb-3">Microsoft Teams Features</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Chat and Messaging:</strong> Real-time messaging with channels for team collaboration.</li>
            <li><strong>Video Conferencing:</strong> High-quality video calls, webinars, and meeting recordings.</li>
            <li><strong>File Sharing and Collaboration:</strong> Integrated with OneDrive and SharePoint for seamless file sharing and co-authoring.</li>
            <li><strong>Integration with Microsoft 365:</strong> Works seamlessly with apps like Word, Excel, PowerPoint, and Outlook.</li>
            <li><strong>Customizable Workspaces:</strong> Create teams and channels tailored to specific projects or departments.</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Google Workspace Features</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Gmail:</strong> Professional email with custom domain support.</li>
            <li><strong>Google Meet:</strong> Video conferencing with screen sharing and recording capabilities.</li>
            <li><strong>Google Drive:</strong> Cloud storage with real-time collaboration on Docs, Sheets, and Slides.</li>
            <li><strong>Google Chat:</strong> Team messaging with spaces and direct messages.</li>
            <li><strong>Google Calendar:</strong> Scheduling and appointment management.</li>
          </ul>
        `,
      },
      {
        id: "pricing",
        title: "Pricing and Plans",
        content: `
          <p class="mb-4">Both platforms offer tiered pricing models with different features at each level.</p>
          
          <h3 class="text-xl font-bold mb-3">Microsoft Teams Pricing</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Microsoft Teams Free:</strong> Basic features with limited meeting time and storage.</li>
            <li><strong>Microsoft 365 Business Basic:</strong> $5/user/month with more storage and security features.</li>
            <li><strong>Microsoft 365 Business Standard:</strong> $12.50/user/month with desktop Office apps.</li>
            <li><strong>Microsoft 365 Business Premium:</strong> $20/user/month with advanced security and device management.</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Google Workspace Pricing</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Business Starter:</strong> $6/user/month with 30GB storage per user.</li>
            <li><strong>Business Standard:</strong> $12/user/month with 2TB storage and additional features.</li>
            <li><strong>Business Plus:</strong> $18/user/month with 5TB storage and enhanced security.</li>
            <li><strong>Enterprise:</strong> Custom pricing with unlimited storage and advanced controls.</li>
          </ul>
        `,
      },
    ],
  }

  const tableOfContents = post.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }))

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{post.title}</h1>

      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
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

      {post.image && (
        <div className="relative max-h-[300px] md:max-h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover" />
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents */}
        <div className="md:w-1/4">
          <Card className="sticky top-24">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Table of Contents</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowTableOfContents(!showTableOfContents)}>
                  {showTableOfContents ? "Hide" : "Show"}
                </Button>
              </div>

              {showTableOfContents && (
                <ul className="space-y-2 text-sm">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-slate-600 hover:text-red-500 transition-colors">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          {post.sections.map((section) => (
            <div key={section.id} id={section.id} className="mt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{section.title}</h2>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}

          {/* Share buttons */}
          <div className="mt-8 flex items-center gap-4">
            <span className="font-medium text-slate-700">Share:</span>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">More sharing options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Copy link</DropdownMenuItem>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              <Link
                to="/post/category/technology"
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-slate-700 text-sm rounded-md transition-colors"
              >
                Technology
              </Link>
              <Link
                to="/post/category/business"
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-slate-700 text-sm rounded-md transition-colors"
              >
                Business
              </Link>
              <Link
                to="/post/category/productivity"
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-slate-700 text-sm rounded-md transition-colors"
              >
                Productivity
              </Link>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Author bio */}
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <img src="/placeholder.svg?height=64&width=64" alt="Author" className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">SG Tech Technologies</h3>
              <p className="text-sm text-slate-600">
                SG Tech Technologies is one of the premier offshore IT Business Consulting companies delivering cutting-edge
                solutions to clients across the globe.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Post navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/post/what-is-cloud-native" className="group">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-red-500 transition-colors">
                <span className="text-sm text-gray-500">Previous Post</span>
                <h4 className="font-medium text-slate-800 group-hover:text-red-500 transition-colors">
                  What Is Cloud Native? Benefits, Technologies, and Why It Matters
                </h4>
              </div>
            </Link>
            <Link to="/post/microsoft-to-shut-down-skype-permanently" className="group">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-red-500 transition-colors text-right">
                <span className="text-sm text-gray-500">Next Post</span>
                <h4 className="font-medium text-slate-800 group-hover:text-red-500 transition-colors">
                  Microsoft to Shut Down Skype Permanently – End of an Era!
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

