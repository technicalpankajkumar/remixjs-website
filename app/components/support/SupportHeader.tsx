import type React from "react"
import { useState } from "react"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Search } from "lucide-react"

export default function SupportHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="relative bg-indigo-600 py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Clouds */}
        <div className="absolute top-10 left-10 w-32 h-16 bg-indigo-500/30 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-40 h-20 bg-indigo-500/20 rounded-full blur-xl"></div>

        {/* Stars */}
        <div className="absolute top-12 left-1/4 w-4 h-4 bg-teal-300 rotate-45"></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-teal-300 rotate-45"></div>
      </div>

      {/* Character illustrations - left side */}
      <div className="absolute bottom-0 left-0 md:left-10 w-32 h-32 md:w-48 md:h-48 z-10 hidden md:block">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 w-full h-full bg-teal-500 rounded-full opacity-80"></div>
          <div className="absolute bottom-5 left-5 w-3/4 h-3/4 bg-yellow-400 rounded-full opacity-90 flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-white rounded-full relative">
              <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-black rounded-full"></div>
              <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-black rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/6 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Character illustrations - right side */}
      <div className="absolute bottom-0 right-0 md:right-10 w-32 h-32 md:w-48 md:h-48 z-10 hidden md:block">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 right-0 w-full h-full bg-pink-500 rounded-full opacity-80"></div>
          <div className="absolute bottom-5 right-5 w-3/4 h-3/4 bg-green-400 rounded-full opacity-90 flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-white rounded-full relative">
              <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-black rounded-full"></div>
              <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-black rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/6 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Help Center</h1>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
          <Input
            type="search"
            placeholder="Search for help..."
            className="pl-10 py-6 text-base bg-white border-0 shadow-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600"
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  )
}

