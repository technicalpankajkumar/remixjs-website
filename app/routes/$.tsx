import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 pt-10 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gray-900 hover:bg-gray-800">
              <Link to="/">Return to Homepage</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services/supports">Visit Help Center</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

