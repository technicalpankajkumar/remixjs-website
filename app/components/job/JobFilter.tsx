import { useState, useRef, useEffect } from "react"
import { useMobile } from "~/hooks/useMobile"

interface FiltersProps {
  filters: {
    location: string
    type: string
    experience: string
  }
  sortBy: string
  onFilterChange: (filters: any) => void
  onSortChange: (sort: string) => void
}

export default function JobFilter({ filters, sortBy, onFilterChange, onSortChange }: FiltersProps) {
  const isMobile = useMobile()
  const [localFilters, setLocalFilters] = useState(filters)
  const [localSort, setLocalSort] = useState(sortBy)
  const [isOpen, setIsOpen] = useState(false)
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)

    if (!isMobile) {
      onFilterChange(newFilters)
    }
    setActiveDropdown(null)
  }

  const handleSortChange = (value: string) => {
    setLocalSort(value)

    if (!isMobile) {
      onSortChange(value)
    }
    setActiveDropdown(null)
  }

  const applyFilters = () => {
    onFilterChange(localFilters)
    onSortChange(localSort)
    setIsOpen(false)
  }

  const resetFilters = () => {
    const defaultFilters = {
      location: "all",
      type: "all",
      experience: "all",
    }
    setLocalFilters(defaultFilters)
    setLocalSort("newest")

    if (!isMobile) {
      onFilterChange(defaultFilters)
      onSortChange("newest")
    }
  }

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Custom dropdown component
  const CustomDropdown = ({
    name,
    label,
    value,
    options,
    onChange,
  }: {
    name: string
    label: string
    value: string
    options: { value: string; label: string }[]
    onChange: (value: string) => void
  }) => {
    const isActive = activeDropdown === name

    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <button
          type="button"
          className="w-full relative bg-white border border-gray-300 rounded-md py-2 px-3 text-left text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          onClick={() => toggleDropdown(name)}
        >
          <span className="block truncate">
            {options.find((option) => option.value === value)?.label || "Select..."}
          </span>
          <span className="absolute top-2 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {isActive && (
          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <div
                key={option.value}
                className={`
                  cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100
                  ${value === option.value ? "bg-blue-50 text-blue-700" : "text-gray-900"}
                `}
                onClick={() => onChange(option.value)}
              >
                <span className="block truncate">{option.label}</span>
                {value === option.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const FiltersContent = () => (
    <div className="space-y-6" ref={dropdownRef}>
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>

        <div className="space-y-4">
          <CustomDropdown
            name="location"
            label="Location"
            value={localFilters.location}
            options={[
              { value: "all", label: "All locations" },
              { value: "Remote", label: "Remote" },
              { value: "New York", label: "New York" },
              { value: "San Francisco", label: "San Francisco" },
              { value: "London", label: "London" },
              { value: "Berlin", label: "Berlin" },
            ]}
            onChange={(value) => handleFilterChange("location", value)}
          />

          <CustomDropdown
            name="type"
            label="Job Type"
            value={localFilters.type}
            options={[
              { value: "all", label: "All types" },
              { value: "Full-time", label: "Full-time" },
              { value: "Part-time", label: "Part-time" },
              { value: "Contract", label: "Contract" },
              { value: "Freelance", label: "Freelance" },
            ]}
            onChange={(value) => handleFilterChange("type", value)}
          />

          <CustomDropdown
            name="experience"
            label="Experience"
            value={localFilters.experience}
            options={[
              { value: "all", label: "All levels" },
              { value: "Entry-level", label: "Entry-level" },
              { value: "Mid-level", label: "Mid-level" },
              { value: "Senior", label: "Senior" },
              { value: "Lead", label: "Lead" },
            ]}
            onChange={(value) => handleFilterChange("experience", value)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Sort By</h3>
        <CustomDropdown
          name="sort"
          label="Sort"
          value={localSort}
          options={[
            { value: "newest", label: "Newest first" },
            { value: "oldest", label: "Oldest first" },
            { value: "salary-high", label: "Highest salary" },
            { value: "salary-low", label: "Lowest salary" },
            { value: "company", label: "Company name" },
          ]}
          onChange={handleSortChange}
        />
      </div>

      {isMobile && (
        <div className="flex gap-3 pt-4">
          <button
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center"
            onClick={resetFilters}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
            </svg>
            Reset
          </button>
          <button
            className="flex-1 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  )

  // Mobile filter drawer
  const MobileFilterDrawer = () => {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
        <div className="bg-white w-[300px] h-full overflow-y-auto p-4 animate-slide-in-left">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Filters & Sort</h3>
            <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <FiltersContent />
        </div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <>
        <button
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filters & Sort
        </button>

        <div className="flex flex-wrap gap-2 mb-4">
          {filters.location !== "all" && (
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Location: {filters.location}
              <button
                className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                onClick={() => onFilterChange({ ...filters, location: "all" })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          {filters.type !== "all" && (
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Type: {filters.type}
              <button
                className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                onClick={() => onFilterChange({ ...filters, type: "all" })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          {filters.experience !== "all" && (
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Experience: {filters.experience}
              <button
                className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                onClick={() => onFilterChange({ ...filters, experience: "all" })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
        </div>

        <MobileFilterDrawer />
      </>
    )
  }

  return (
    <div className="w-full">
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <div
          className="p-4 flex items-center justify-between cursor-pointer"
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span>Filters & Sort</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isFilterMenuOpen ? "transform rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {isFilterMenuOpen && (
          <div className="border-t border-gray-200 p-4">
            <FiltersContent />

            <button
              className="mt-6 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors flex items-center"
              onClick={resetFilters}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
              </svg>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

