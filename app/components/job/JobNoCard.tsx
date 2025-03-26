import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { RefreshCw } from "lucide-react"

interface NoJobsCardProps {
  message?: string
  suggestion?: string
  resetFilters?: () => void
}

export default function JobNoCard({
  message = "No jobs match your criteria",
  suggestion = "Try adjusting your filters or search query",
  resetFilters,
}: NoJobsCardProps) {
  return (
    <Card className="border-gray-200 bg-white">
      <CardHeader className="text-center pb-2">
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            <path d="M12 10v4"></path>
            <path d="M12 14h.01"></path>
            <line x1="2" y1="7" x2="22" y2="7"></line>
            <line x1="16" y1="3" x2="16" y2="7"></line>
            <line x1="8" y1="3" x2="8" y2="7"></line>
            <circle
              cx="12"
              cy="12"
              r="8"
              strokeDasharray="30 30"
              strokeDashoffset="15"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
            ></circle>
            <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1" stroke="currentColor"></line>
          </svg>
        </div>
        <CardTitle className="text-xl font-semibold text-gray-800 mt-4">{message}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-500 max-w-md mx-auto">{suggestion}</p>
      </CardContent>
      {resetFilters && (
        <CardFooter className="flex justify-center pb-6">
          <Button onClick={resetFilters} className="mt-2">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset All Filters
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

