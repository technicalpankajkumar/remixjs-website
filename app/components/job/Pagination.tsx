import type React from "react"
import { useMobile } from "~/hooks/useMobile"
import { Button } from "../ui/button"

interface JobPaginationProps {
  totalJobs: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export default function Pagination({
  totalJobs,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: JobPaginationProps) {
  const isMobile = useMobile()
  const totalPages = Math.ceil(totalJobs / pageSize)

  // Calculate the range of pages to show
  const getPageNumbers = () => {
    const maxPagesToShow = isMobile ? 3 : 5
    const pages = []

    // Always show first page
    if (currentPage > 2) {
      pages.push(1)

      // Add ellipsis if there's a gap
      if (currentPage > 3) {
        pages.push("ellipsis-start")
      }
    }

    // Calculate range around current page
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i)
      }
    }

    // Always show last page
    if (currentPage < totalPages - 1) {
      // Add ellipsis if there's a gap
      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end")
      }

      pages.push(totalPages)
    }

    return pages
  }

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number.parseInt(e.target.value)
    onPageSizeChange(newSize)
    // Reset to first page when changing page size
    onPageChange(1)
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="h-8 w-[70px] border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <span>per page</span>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center">
          <Button
            className={`h-8 w-8 flex items-center justify-center rounded-l-md border border-gray-300 ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => currentPage > 1 && onPageChange(1)}
            disabled={currentPage === 1}
            aria-label="First page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </Button>
          <Button
            className={`h-8 w-8 flex items-center justify-center border-t border-b border-r border-gray-300 ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </Button>
        </div>

        <div className="flex items-center">
          {pageNumbers.map((page, index) => {
            if (page === "ellipsis-start" || page === "ellipsis-end") {
              return (
                <div
                  key={`ellipsis-${index}`}
                  className="h-8 w-8 flex items-center justify-center border-t border-b border-r border-gray-300 bg-white text-gray-500"
                >
                  &hellip;
                </div>
              )
            }

            return (
              <Button
                key={`page-${page}`}
                className={`h-8 w-8 flex items-center justify-center border-t border-b border-r border-gray-300 ${
                  currentPage === page
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => onPageChange(page as number)}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                <span className="text-xs">{page}</span>
              </Button>
            )
          })}
        </div>

        <div className="flex items-center">
          <Button
            className={`h-8 w-8 flex items-center justify-center border-t border-b border-r border-gray-300 ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Button>
          <Button
            className={`h-8 w-8 flex items-center justify-center rounded-r-md border-t border-b border-r border-gray-300 ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => currentPage < totalPages && onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Last page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

