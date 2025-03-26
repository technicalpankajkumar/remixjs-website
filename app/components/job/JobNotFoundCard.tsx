import { Button } from "~/components/ui/button"
import { Card, CardContent, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Separator } from "~/components/ui/separator"
import { AlertCircle, Filter, RefreshCw } from "lucide-react"

interface JobNotFoundCardProps {
  searchTerm?: string
  resetSearch?: () => void
}

export default function JobNotFoundCard({ searchTerm, resetSearch }: JobNotFoundCardProps) {
  return (
    <Card className="border-gray-200 bg-white">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left side - Illustration */}
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 text-gray-300">
            <AlertCircle className="w-full h-full" />
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left">
            <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {searchTerm ? `No results found for "${searchTerm}"` : "No matching jobs found"}
            </CardTitle>

            <p className="text-gray-600 mb-4 max-w-md">
              We couldn't find any jobs that match your current criteria. Try adjusting your filters or search terms for
              better results.
            </p>

            <div className="flex flex-col md:flex-row gap-3">
              {resetSearch && (
                <Button onClick={resetSearch} className="flex items-center">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Clear Search
                </Button>
              )}

              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Browse All Jobs
              </Button>
            </div>

            <Separator className="my-6" />

            <div>
              <h4 className="font-medium text-gray-800 mb-2">Popular searches:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  Remote
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  Full-time
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  Developer
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  Designer
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  Marketing
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

