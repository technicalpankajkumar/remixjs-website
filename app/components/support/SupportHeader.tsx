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
    <section className="relative bg-gray-900 py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center object-bottom"
        style={{ backgroundImage: `url('/assets/customerservice1.webp')`, backgroundPosition: "top" }}>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-1">
        {/* Clouds */}
        <div className="absolute top-10 left-10 w-32 h-16 bg-slate-400/30 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-40 h-20 bg-slate-400/30 rounded-full blur-xl"></div>

        {/* Stars */}
        <div className="absolute top-12 left-1/4 w-4 h-4 bg-slate-300 rotate-45"></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-slate-300 rotate-45"></div>
        <div className="absolute top-12 right-1/2 w-3 h-3 bg-slate-300 rotate-45"></div>
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

