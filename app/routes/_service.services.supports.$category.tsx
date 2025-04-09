import { CategoryHeader } from "~/components/support/CategoryHeader"

import CategoryArticles from "~/components/support/CategoryArtical"
import SupportContact from "~/components/support/SupportContact"
import { Outlet, useLocation } from "@remix-run/react"
import ArticleContent from "~/components/support/ArticalContent"
import NotFound from "./$"

interface CategoryPageProps {
  params: {
    category: string
  }
}
// { params }: CategoryPageProps

export default function CategoryPage() {
    const path = useLocation().pathname;
    const params = path?.split("/")?.[path?.split("/").length -1]
  const categories = {
    announcements: {
      title: "Announcements",
      description: "Stay up to date with the latest news and updates.",
      color: "bg-gray-900",
      icon: "Megaphone",
    },
    interface: {
      title: "Interface Guide",
      description: "Learn how to navigate and use our platform effectively.",
      color: "bg-slate-900",
      icon: "Layout",
    },
    account: {
      title: "Account Settings",
      description: "Manage your account preferences, security, and personal information.",
      color: "bg-gray-900",
      icon: "Settings",
    },
    "getting-started": {
      title: "Getting Started",
      description: "New to our platform? Start here for the basics.",
      color: "bg-slate-900",
      icon: "Rocket",
    },
    "server-setup": {
      title: "Server Setup",
      description: "Configure and optimize your server settings.",
      color: "bg-gray-900",
      icon: "Server",
    },
    safety: {
      title: "Safety Center",
      description: "Resources to keep your account and community safe.",
      color: "bg-slate-900",
      icon: "ShieldCheck",
    },
    billing: {
      title: "Billing",
      description: "Information about payments, subscriptions, and invoices.",
      color: "bg-gray-900",
      icon: "CreditCard",
    },
    community: {
      title: "Community",
      description: "Tips and guidelines for building a thriving community.",
      color: "bg-slate-900",
      icon: "MessageSquare",
    },
    technical: {
      title: "Technical Support",
      description: "Troubleshooting guides and technical assistance.",
      color: "bg-gray-900",
      icon: "Headphones",
    },
  }

  const category = params

  // Check if the category exists
  if (!categories[category as keyof typeof categories]) {
    NotFound()
  }

  const categoryInfo = categories[category as keyof typeof categories]

  if(path.split("/").length == 5){
    return <Outlet/>
  }

  return (
      <section className="">
        <CategoryHeader
          title={categoryInfo.title}
          description={categoryInfo.description}
          color={categoryInfo.color}
          icon={categoryInfo.icon}
        />
        <CategoryArticles category={category} />
        <SupportContact />
      </section>
  )
}
