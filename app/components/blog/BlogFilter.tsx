import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Card, CardContent } from "~/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Badge } from "~/components/ui/badge"
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "~/lib/utils"

export function BlogFilter() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [appliedFilters, setAppliedFilters] = useState<{ type: string; value: string }[]>([])
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Auto-close filter on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobile && isOpen && !target.closest("[data-filter-container]")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobile, isOpen])

  const categories = [
    { name: "Technology", count: 12 },
    { name: "Healthcare", count: 8 },
    { name: "Business", count: 6 },
    { name: "Web Development", count: 5 },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Clear existing filters
    const newFilters = []

    // Add search term if present
    if (searchTerm) {
      newFilters.push({ type: "search", value: searchTerm })
    }

    // Add category if selected
    if (category) {
      newFilters.push({ type: "category", value: category })
    }

    // Add date if selected
    if (date) {
      newFilters.push({ type: "date", value: date })
    }

    setAppliedFilters(newFilters)

    // Close filter panel on mobile after applying
    if (isMobile) {
      setIsOpen(false)
    }

    // Handle search logic here
    console.log("Filters applied:", { searchTerm, category, date })
  }

  const removeFilter = (filterToRemove: { type: string; value: string }) => {
    setAppliedFilters((prev) =>
      prev.filter((filter) => !(filter.type === filterToRemove.type && filter.value === filterToRemove.value)),
    )

    // Also reset the corresponding input
    if (filterToRemove.type === "search") setSearchTerm("")
    if (filterToRemove.type === "category") setCategory("")
    if (filterToRemove.type === "date") setDate("")
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setCategory("")
    setDate("")
    setAppliedFilters([])
  }

  return (
    <div className="w-full text-gray-900 mb-8" data-filter-container>
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <h3 className="text-xl font-bold text-slate-800">Blog Posts</h3>
        <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          <span className=" text-black">Filter</span>
          {isOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
        </Button>
      </div>

      {/* Applied Filters */}
      {appliedFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {appliedFilters.map((filter, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1 px-3 py-1">
              <span className="capitalize">{filter.type}:</span> {filter.value}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFilter(filter)}
                className="h-4 w-4 p-0 ml-1 hover:bg-transparent"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove filter</span>
              </Button>
            </Badge>
          ))}

          {appliedFilters.length > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-xs text-slate-500 hover:text-red-500 h-7"
            >
              Clear All
            </Button>
          )}
        </div>
      )}

      {/* Filter Panel - Desktop always visible, Mobile collapsible */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out shadow",
          isMobile ? (isOpen ? "max-h-[500px] opacity-100 mb-6 absolute inset-0" : "max-h-0 opacity-0 absolute inset-0 overflow-hidden") : "block",
        )}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">Filter Posts</h3>
              {isMobile && (
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              )}
            </div>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.name} value={cat.name}>
                        {cat.name} ({cat.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full" />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Apply Filters
                </Button>

                {(searchTerm || category || date) && (
                  <Button type="button" variant="outline" onClick={clearAllFilters} className="flex-shrink-0">
                    Reset
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

