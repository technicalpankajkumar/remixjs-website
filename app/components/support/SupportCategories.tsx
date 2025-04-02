
import { Card, CardContent } from "~/components/ui/card"
import {
  Megaphone,
  Layout,
  Settings,
  Rocket,
  Server,
  ShieldCheck,
  CreditCard,
  MessageSquare,
  Headphones,
} from "lucide-react"
import { Link } from "@remix-run/react"

export default function SupportCategories() {
  const categories = [
    {
      title: "Announcements",
      description: "We've got our ear to the ground. Here's what you need to know.",
      icon: <Megaphone className="h-8 w-8 text-indigo-500" />,
      href: "/services/supports/announcements",
      color: "bg-indigo-100",
    },
    {
      title: "Interface Guide",
      description: "WHAT DOES THIS BUTTON DO?!?!",
      icon: <Layout className="h-8 w-8 text-blue-500" />,
      href: "/services/supports/interface",
      color: "bg-blue-100",
    },
    {
      title: "Account Settings",
      description: "You're a special snowflake and so is your account.",
      icon: <Settings className="h-8 w-8 text-violet-500" />,
      href: "/services/supports/account",
      color: "bg-violet-100",
    },
    {
      title: "Getting Started",
      description: "Start off on the right foot! Nice job with the first step.",
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      href: "/services/supports/getting-started",
      color: "bg-orange-100",
    },
    {
      title: "Server Setup",
      description: "Almost as exciting as interior decorating.",
      icon: <Server className="h-8 w-8 text-green-500" />,
      href: "/services/supports/server-setup",
      color: "bg-green-100",
    },
    {
      title: "Safety Center",
      description: "Keep your account and community safe and secure.",
      icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
      href: "/services/supports/safety",
      color: "bg-red-100",
    },
    {
      title: "Billing",
      description: "Manage your subscriptions, payments, and billing info.",
      icon: <CreditCard className="h-8 w-8 text-emerald-500" />,
      href: "/services/supports/billing",
      color: "bg-emerald-100",
    },
    {
      title: "Community",
      description: "Building and managing your community effectively.",
      icon: <MessageSquare className="h-8 w-8 text-yellow-500" />,
      href: "/services/supports/community",
      color: "bg-yellow-100",
    },
    {
      title: "Technical Support",
      description: "Troubleshooting connection issues and technical problems.",
      icon: <Headphones className="h-8 w-8 text-pink-500" />,
      href: "/services/supports/technical",
      color: "bg-pink-100",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need help? We've got your back.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From account settings to permissions, find help for everything. If you're new and looking for tips, check
            out our Beginner's Guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={category.href} className="block group">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full">
                <CardContent className="p-6 flex items-start">
                  <div className={`${category.color} p-3 rounded-lg mr-4 flex-shrink-0`}>{category.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

