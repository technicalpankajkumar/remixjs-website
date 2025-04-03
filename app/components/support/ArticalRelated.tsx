import { Card, CardContent } from "~/components/ui/card"
import { FileText } from "lucide-react"
import { Link } from "@remix-run/react"

interface ArticleRelatedProps {
  category: string
  currentArticle: string
}

export default function ArticleRelated({ category, currentArticle }: ArticleRelatedProps) {

  const getRelatedArticles = (category: string, currentArticle: string) => {
    const allArticles = {
      announcements: [
        { title: "Platform Update: New Features for Q2 2025", slug: "platform-update-new-features-for-q2-2025" },
        { title: "Important Security Update: Action Required", slug: "important-security-update-action-required" },
        { title: "Upcoming Maintenance Schedule", slug: "upcoming-maintenance-schedule" },
        { title: "New Mobile App Release", slug: "new-mobile-app-release" },
      ],
      interface: [
        { title: "Navigation Basics: Finding Your Way Around", slug: "navigation-basics-finding-your-way-around" },
        { title: "Understanding the Dashboard", slug: "understanding-the-dashboard" },
        { title: "Customizing Your Workspace", slug: "customizing-your-workspace" },
        { title: "Using Keyboard Shortcuts", slug: "using-keyboard-shortcuts" },
      ],
      account: [
        { title: "Managing Your Profile Information", slug: "managing-your-profile-information" },
        { title: "Changing Your Password", slug: "changing-your-password" },
        { title: "Setting Up Two-Factor Authentication", slug: "setting-up-two-factor-authentication" },
        { title: "Email Notification Preferences", slug: "email-notification-preferences" },
      ],
      "getting-started": [
        { title: "Creating Your First Project", slug: "creating-your-first-project" },
        { title: "Complete Account Setup Guide", slug: "complete-account-setup-guide" },
        { title: "Platform Overview for New Users", slug: "platform-overview-for-new-users" },
        { title: "Essential Features for Beginners", slug: "essential-features-for-beginners" },
      ],
      "server-setup": [
        { title: "Server Creation Guide", slug: "server-creation-guide" },
        { title: "Channel Organization Best Practices", slug: "channel-organization-best-practices" },
        { title: "Setting Up Roles and Permissions", slug: "setting-up-roles-and-permissions" },
        { title: "Server Verification Process", slug: "server-verification-process" },
      ],
      safety: [
        { title: "Community Guidelines Overview", slug: "community-guidelines-overview" },
        { title: "Reporting Inappropriate Content", slug: "reporting-inappropriate-content" },
        { title: "Moderator Tools and Resources", slug: "moderator-tools-and-resources" },
        { title: "Blocking and Muting Users", slug: "blocking-and-muting-users" },
      ],
      billing: [
        { title: "Subscription Plans Explained", slug: "subscription-plans-explained" },
        { title: "Managing Payment Methods", slug: "managing-payment-methods" },
        { title: "Understanding Your Invoice", slug: "understanding-your-invoice" },
        { title: "Cancellation and Refund Policy", slug: "cancellation-and-refund-policy" },
      ],
      community: [
        { title: "Building an Engaged Community", slug: "building-an-engaged-community" },
        { title: "Effective Moderation Strategies", slug: "effective-moderation-strategies" },
        { title: "Creating Community Events", slug: "creating-community-events" },
        { title: "Growth Tactics for New Communities", slug: "growth-tactics-for-new-communities" },
      ],
      technical: [
        { title: "Troubleshooting Connection Issues", slug: "troubleshooting-connection-issues" },
        { title: "Audio and Video Troubleshooting", slug: "audio-and-video-troubleshooting" },
        { title: "Performance Optimization Guide", slug: "performance-optimization-guide" },
        { title: "Desktop App Installation Problems", slug: "desktop-app-installation-problems" },
      ],
    }

    const articles = allArticles[category as keyof typeof allArticles] || []
    return articles.filter((article) => article.slug !== currentArticle).slice(0, 3)
  }

  const relatedArticles = getRelatedArticles(category, currentArticle)

  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link key={index} to={`/services/supports/${category}/${article.slug}`} className="block group">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4 flex items-start">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3 flex-shrink-0">
                      <FileText className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors text-sm">
                        {article.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

