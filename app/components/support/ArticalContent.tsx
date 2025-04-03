import { Button } from "~/components/ui/button"
import { ThumbsUp, ThumbsDown } from "lucide-react"

interface ArticleContentProps {
  content: string
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="prose max-w-none text-slate-950" dangerouslySetInnerHTML={{ __html: content }} />

          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Was this article helpful?</h3>
            <div className="flex space-x-4">
              <Button variant="outline" className="flex items-center">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Yes, it helped
              </Button>
              <Button variant="outline" className="flex items-center">
                <ThumbsDown className="mr-2 h-4 w-4" />
                No, I need more help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

