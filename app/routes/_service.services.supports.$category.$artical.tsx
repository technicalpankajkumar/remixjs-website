import ArticleHeader from "~/components/support/ArticalHeader"

import ArticleContent from "~/components/support/ArticalContent"
import ArticleRelated from "~/components/support/ArticalRelated"
import SupportContact from "~/components/support/SupportContact"
import { useLocation } from "@remix-run/react"
import NotFound from "./$"

interface ArticlePageProps {
  params: {
    category: string
    article: string
  }
}
// { params }: ArticlePageProps

export default function ArticlePage() {
  // In a real app, you would fetch the article data based on the slug
  // This is mock data for demonstration
  const path = useLocation().pathname;

  console.log(path,'console.log',path.split("/"))
  
  let params = {category: path.split("/")?.[3],article: path.split("/")?.[4]}

  const categories = {
    announcements: {
      title: "Announcements",
      color: "bg-slate-900",
    },
    interface: {
      title: "Interface Guide",
      color: "bg-slate-900",
    },
    account: {
      title: "Account Settings",
      color: "bg-gray-900",
    },
    "getting-started": {
      title: "Getting Started",
      color: "bg-gray-900",
    },
    "server-setup": {
      title: "Server Setup",
      color: "bg-slate-900",
    },
    safety: {
      title: "Safety Center",
      color: "bg-gray-900",
    },
    billing: {
      title: "Billing",
      color: "bg-slate-900",
    },
    community: {
      title: "Community",
      color: "bg-slate-900",
    },
    technical: {
      title: "Technical Support",
      color: "bg-slate-900",
    },
  }

  const category = params.category
  const articleSlug = params.article

  // Check if the category exists
  if (!categories[category as keyof typeof categories]) {
    NotFound()
  }

  // In a real app, you would fetch the article data from a database or API
  // For demonstration, we'll create a mock article
  const article = {
    title: articleSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    date: "March 25, 2025",
    author: "YGTW Support Team",
    content: `
      <p>This is a sample article content. In a real application, this would be fetched from a database or CMS based on the article slug.</p>
      
      <h2>Introduction</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
      
      <h2>Getting Started</h2>
      <p>Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper.</p>
      
      <ul>
        <li>Step 1: Create an account</li>
        <li>Step 2: Verify your email</li>
        <li>Step 3: Set up your profile</li>
        <li>Step 4: Explore the platform</li>
      </ul>
      
      <h2>Advanced Features</h2>
      <p>Fusce vel sapien eget libero rhoncus dignissim. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      
      <blockquote>
        <p>Pro tip: You can access advanced features by upgrading to our premium plan.</p>
      </blockquote>
      
      <h2>Troubleshooting</h2>
      <p>If you encounter any issues, try the following steps:</p>
      
      <ol>
        <li>Refresh the page</li>
        <li>Clear your browser cache</li>
        <li>Try a different browser</li>
        <li>Contact support if the issue persists</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>We hope this guide has been helpful. If you have any questions or need further assistance, please don't hesitate to contact our support team.</p>
    `,
    category: categories[category as keyof typeof categories].title,
    categorySlug: category,
    categoryColor: categories[category as keyof typeof categories].color,
  }

  return (
      <section className="">
        <ArticleHeader
          title={article.title}
          category={article.category}
          categorySlug={article.categorySlug}
          date={article.date}
          author={article.author}
          color={article.categoryColor}
        />
        <ArticleContent content={article.content} />
        <ArticleRelated category={category} currentArticle={articleSlug} />
        <SupportContact />
      </section>
  )
}

