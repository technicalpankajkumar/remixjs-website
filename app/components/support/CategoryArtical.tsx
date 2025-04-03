import { Card, CardContent } from "~/components/ui/card"
import { FileText, ArrowRight } from "lucide-react"
import { Link, useLocation } from "@remix-run/react"

interface CategoryArticlesProps {
  category: string
}
// { category }: CategoryArticlesProps

export default function CategoryArticles() {
  // This would typically come from a database or API
  let location = useLocation().pathname;
  let category = location.split("/")?.[location.split("/").length -1]
  const articlesByCategory = {
    announcements: [
      { title: "Platform Update: New Features for Q2 2025", date: "April 1, 2025" },
      { title: "Important Security Update: Action Required", date: "March 15, 2025" },
      { title: "Upcoming Maintenance Schedule", date: "March 10, 2025" },
      { title: "New Mobile App Release", date: "February 28, 2025" },
      { title: "Changes to Our Terms of Service", date: "February 15, 2025" },
      { title: "2025 Product Roadmap", date: "January 10, 2025" },
    ],
    interface: [
      { title: "Navigation Basics: Finding Your Way Around", date: "March 20, 2025" },
      { title: "Understanding the Dashboard", date: "March 15, 2025" },
      { title: "Customizing Your Workspace", date: "March 10, 2025" },
      { title: "Using Keyboard Shortcuts", date: "March 5, 2025" },
      { title: "Working with Tabs and Windows", date: "February 28, 2025" },
      { title: "Accessibility Features Guide", date: "February 20, 2025" },
    ],
    account: [
      { title: "Managing Your Profile Information", date: "March 25, 2025" },
      { title: "Changing Your Password", date: "March 20, 2025" },
      { title: "Setting Up Two-Factor Authentication", date: "March 15, 2025" },
      { title: "Email Notification Preferences", date: "March 10, 2025" },
      { title: "Linking Social Accounts", date: "March 5, 2025" },
      { title: "Account Privacy Settings", date: "February 28, 2025" },
    ],
    "getting-started": [
      { title: "Creating Your First Project", date: "March 30, 2025" },
      { title: "Complete Account Setup Guide", date: "March 25, 2025" },
      { title: "Platform Overview for New Users", date: "March 20, 2025" },
      { title: "Essential Features for Beginners", date: "March 15, 2025" },
      { title: "Inviting Team Members", date: "March 10, 2025" },
      { title: "First Week Checklist", date: "March 5, 2025" },
    ],
    "server-setup": [
      { title: "Server Creation Guide", date: "March 25, 2025" },
      { title: "Channel Organization Best Practices", date: "March 20, 2025" },
      { title: "Setting Up Roles and Permissions", date: "March 15, 2025" },
      { title: "Server Verification Process", date: "March 10, 2025" },
      { title: "Custom Emojis and Stickers", date: "March 5, 2025" },
      { title: "Server Boost Features", date: "February 28, 2025" },
    ],
    safety: [
      { title: "Community Guidelines Overview", date: "March 30, 2025" },
      { title: "Reporting Inappropriate Content", date: "March 25, 2025" },
      { title: "Moderator Tools and Resources", date: "March 20, 2025" },
      { title: "Blocking and Muting Users", date: "March 15, 2025" },
      { title: "Privacy Settings Guide", date: "March 10, 2025" },
      { title: "Safe Account Practices", date: "March 5, 2025" },
    ],
    billing: [
      { title: "Subscription Plans Explained", date: "March 25, 2025" },
      { title: "Managing Payment Methods", date: "March 20, 2025" },
      { title: "Understanding Your Invoice", date: "March 15, 2025" },
      { title: "Cancellation and Refund Policy", date: "March 10, 2025" },
      { title: "Upgrading Your Subscription", date: "March 5, 2025" },
      { title: "Tax Information for Purchases", date: "February 28, 2025" },
    ],
    community: [
      { title: "Building an Engaged Community", date: "March 30, 2025" },
      { title: "Effective Moderation Strategies", date: "March 25, 2025" },
      { title: "Creating Community Events", date: "March 20, 2025" },
      { title: "Growth Tactics for New Communities", date: "March 15, 2025" },
      { title: "Managing Community Conflicts", date: "March 10, 2025" },
      { title: "Community Rules Template", date: "March 5, 2025" },
    ],
    technical: [
      { title: "Troubleshooting Connection Issues", date: "March 30, 2025" },
      { title: "Audio and Video Troubleshooting", date: "March 25, 2025" },
      { title: "Performance Optimization Guide", date: "March 20, 2025" },
      { title: "Desktop App Installation Problems", date: "March 15, 2025" },
      { title: "Mobile App Troubleshooting", date: "March 10, 2025" },
      { title: "API Integration Issues", date: "March 5, 2025" },
    ],
  }

  const articles = articlesByCategory[category as keyof typeof articlesByCategory] || []

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={`/services/supports/${category}/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="block group"
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <FileText className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{article.date}</p>
                    <div className="mt-2 text-indigo-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Browse all articles or contact our support team.
          </p>
          <Link
            to={`/support/${category}/all`}
            className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center"
          >
            View all articles <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

