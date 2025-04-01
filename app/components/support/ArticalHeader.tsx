import { Link } from "@remix-run/react"
import { ChevronRight, Calendar, User } from "lucide-react"

interface ArticleHeaderProps {
  title: string
  category: string
  categorySlug: string
  date: string
  author: string
  color: string
}

export default function ArticleHeader({ title, category, categorySlug, date, author, color }: ArticleHeaderProps) {
  return (
    <section className={`${color} py-12`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center text-white text-sm mb-4">
          <Link to="/support" className="hover:underline">
            Help Center
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/support/${categorySlug}`} className="hover:underline">
            {category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="truncate max-w-[200px]">{title}</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h1>

        <div className="flex items-center text-white/80 text-sm">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

