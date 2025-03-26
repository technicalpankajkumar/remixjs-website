import { useEffect, useRef, useState } from "react"
import JobCard from "~/components/job/JobCard"
import JobCardSkeleton from "~/components/job/JobCardSkeleton"
import JobFilter from "~/components/job/JobFilter"
import JobNoCard from "~/components/job/JobNoCard"
import JobNotFoundCard from "~/components/job/JobNotFoundCard"
import JobSearch from "~/components/job/JobSearch"
import Pagination from "~/components/job/Pagination"
import { jobData } from "~/constants"


const Index=()=>{
    const [jobs, setJobs] = useState(jobData)
    const [selectedJob, setSelectedJob] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [filters, setFilters] = useState({
      location: "all",
      type: "all",
      experience: "all",
    })
    const [sortBy, setSortBy] = useState("newest")
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const jobListingsRef = useRef<HTMLDivElement>(null)
  
    // Filter and sort jobs based on current filters and search query
    const filteredJobs = jobs
      .filter((job:any) => {
        // Search filter
        if (
          searchQuery &&
          !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !job.company.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return false
        }
  
        // Location filter
        if (filters.location !== "all" && job.location !== filters.location) {
          return false
        }
  
        // Job type filter
        if (filters.type !== "all" && job.type !== filters.type) {
          return false
        }
  
        // Experience filter
        if (filters.experience !== "all" && job.experience !== filters.experience) {
          return false
        }
  
        return true
      })
      .sort((a, b) => {
        // Sort by date, salary, or company name
        if (sortBy === "newest") {
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        } else if (sortBy === "oldest") {
          return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime()
        } else if (sortBy === "salary-high") {
          return b.salary - a.salary
        } else if (sortBy === "salary-low") {
          return a.salary - b.salary
        } else {
          return a.company.localeCompare(b.company)
        }
      })
  
    // Pagination logic
    const totalJobs = filteredJobs.length
    const indexOfLastJob = currentPage * pageSize
    const indexOfFirstJob = indexOfLastJob - pageSize
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
  
    // Calculate the height for the job listings container
    useEffect(() => {
      const updateHeight = () => {
        if (jobListingsRef.current) {
          const windowHeight = window.innerHeight
          const jobListingsTop = jobListingsRef.current.getBoundingClientRect().top
          const footerHeight = 100 // Approximate height for pagination
          const availableHeight = windowHeight - jobListingsTop - footerHeight
  
          // Set a minimum height to ensure it's always scrollable when needed
          const minHeight = 700
          jobListingsRef.current.style.maxHeight = `${Math.max(availableHeight, minHeight)}px`
        }
      }
  
      updateHeight()
      window.addEventListener("resize", updateHeight)
  
      return () => {
        window.removeEventListener("resize", updateHeight)
      }
    }, [])
  
    // Simulate loading when changing filters, search, or pagination
    const simulateLoading = (callback: () => void) => {
      setIsLoading(true)
  
      // Scroll job listings to top
      if (jobListingsRef.current) {
        jobListingsRef.current.scrollTop = 0
      }
  
      // Simulate API call delay
      setTimeout(() => {
        callback()
        setIsLoading(false)
      }, 800) // Simulate loading for 800ms
    }
  
    const handleSearch = (query: string) => {
      simulateLoading(() => {
        setSearchQuery(query)
        setCurrentPage(1) // Reset to first page on new search
      })
    }
  
    const handleFilterChange = (newFilters: typeof filters) => {
      simulateLoading(() => {
        setFilters(newFilters)
        setCurrentPage(1) // Reset to first page on filter change
      })
    }
  
    const handleSortChange = (sort: string) => {
      simulateLoading(() => {
        setSortBy(sort)
        setCurrentPage(1) // Reset to first page on sort change
      })
    }
  
    const handlePageChange = (page: number) => {
      simulateLoading(() => {
        setCurrentPage(page)
      })
    }
  
    const handlePageSizeChange = (size: number) => {
      simulateLoading(() => {
        setPageSize(size)
        setCurrentPage(1) // Reset to first page when changing page size
      })
    }
  
    const resetAllFilters = () => {
      simulateLoading(() => {
        setSearchQuery("")
        setFilters({
          location: "all",
          type: "all",
          experience: "all",
        })
        setSortBy("newest")
        setCurrentPage(1)
      })
    }
  
    const toggleJobDetails = (jobId: string) => {
      setSelectedJob(selectedJob === jobId ? null : jobId)
    }
  
    // Check if any filters are applied
    const hasActiveFilters =
      searchQuery !== "" ||
      filters.location !== "all" ||
      filters.type !== "all" ||
      filters.experience !== "all" ||
      sortBy !== "newest"
  
    // Check if search is active
    const hasActiveSearch = searchQuery !== ""
  
    return(<>
    <div className="container mx-auto px-4 py-4">
      <div className="lg:flex gap-6 mb-4">
        <div className="lg:w-1/4 mb-2 lg:mb-0">
          <JobFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />
        </div>

        <div className="lg:w-3/4 flex flex-col">
          <JobSearch onSearch={handleSearch} />

          <div className="mt-6 flex flex-col flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              {totalJobs > 0 ? (
                <p className="text-sm text-muted-foreground">
                  Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, totalJobs)} of {totalJobs} jobs
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">No jobs found</p>
              )}

              {totalJobs > pageSize && (
                <div className="mt-2 sm:mt-0">
                  <Pagination
                    totalJobs={totalJobs}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                  />
                </div>
              )}
            </div>

            {/* Scrollable job listings container */}
            <div ref={jobListingsRef} className="overflow-y-auto pr-1 flex-grow" style={{ scrollBehavior: "smooth" }}>
              {isLoading ? (
                <div className="space-y-4">
                {Array.from({ length: pageSize > 5 ? 5 : pageSize }).map((_, index) => (
                  <JobCardSkeleton key={index} />
                ))}
              </div>
              ) : (
                <div className="space-y-4">
                  {currentJobs.length > 0 ? (
                    currentJobs.map((job) => (
                      <JobCard
                        key={job.id}
                        job={job}
                        isExpanded={selectedJob === job.id}
                        onToggleDetails={() => toggleJobDetails(job.id)}
                      />
                    ))
                  ) : hasActiveSearch ? (
                    <JobNotFoundCard searchTerm={searchQuery} resetSearch={resetAllFilters} />
                  ) : (
                    <JobNoCard
                      message={
                        hasActiveFilters ? "No jobs match your filter criteria" : "No jobs available at the moment"
                      }
                      suggestion={
                        hasActiveFilters
                          ? "Try adjusting your filters for better results"
                          : "Please check back later for new job postings"
                      }
                      resetFilters={hasActiveFilters ? resetAllFilters : undefined}
                    />
                  )}
                </div>
              )}
            </div>

            {totalJobs > pageSize && (
              <div className="mt-6">
                <Pagination
                  totalJobs={totalJobs}
                  currentPage={currentPage}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default Index;