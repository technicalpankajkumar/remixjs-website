import * as React from "react"
import { Check, ChevronsUpDown, Loader2, Plus, X } from "lucide-react"
import { cn } from "~/lib/utils"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"

export type OptionType = {
  label: string
  value: string
  disabled?: boolean
}

// Update the CustomSelectProps type to include size control props
type CustomSelectProps = {
  options: OptionType[]
  value: string | string[]
  onChange: (value: string | string[]) => void
  placeholder?: string
  disabled?: boolean
  multiple?: boolean
  creatable?: boolean
  searchable?: boolean
  loading?: boolean
  onSearch?: (query: string) => void
  emptyMessage?: string
  className?: string
  createMessage?: string
  maxHeight?: string
  maxSelectedDisplay?: number
  popoverWidth?: string
  badgeVariant?: "default" | "secondary" | "outline" | "destructive"
}

// Update the CustomSelect component to include the new props
export function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  multiple = false,
  creatable = false,
  searchable = true,
  loading = false,
  onSearch,
  emptyMessage = "No results found.",
  className,
  createMessage = "Create",
  maxHeight = "15rem",
  maxSelectedDisplay = 3,
  popoverWidth,
  badgeVariant = "secondary",
}: CustomSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")
  const [filteredOptions, setFilteredOptions] = React.useState(options)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  // Fix client-side search functionality
  React.useEffect(() => {
    if (!onSearch) {
      if (inputValue) {
        setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase())))
      } else {
        setFilteredOptions(options)
      }
    }
  }, [inputValue, options, onSearch])

  // Update when options change
  React.useEffect(() => {
    if (!onSearch && !inputValue) {
      setFilteredOptions(options)
    }
  }, [options, onSearch, inputValue])

  const handleUnselect = (item: string) => {
    if (multiple) {
      onChange((value as string[]).filter((i) => i !== item))
    } else {
      onChange("")
    }
  }

  const handleSelect = (selectedValue: string) => {
    if (multiple) {
      if ((value as string[]).includes(selectedValue)) {
        onChange((value as string[]).filter((item) => item !== selectedValue))
      } else {
        onChange([...(value as string[]), selectedValue])
      }
    } else {
      onChange(selectedValue)
      setOpen(false)
    }
    setInputValue("")
  }

  const handleCreate = () => {
    if (!inputValue) return

    const newOption = {
      label: inputValue,
      value: inputValue.toLowerCase().replace(/\s+/g, "-"),
    }

    handleSelect(newOption.value)
    setInputValue("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (onSearch) {
      onSearch(e.target.value)
    }
  }

  const displayValue = React.useMemo(() => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return ""
    }

    if (multiple) {
      return (value as string[]).map((v) => options.find((option) => option.value === v)?.label || v).join(", ")
    }

    return options.find((option) => option.value === value)?.label || value
  }, [value, options, multiple])

  const selectedOptions = React.useMemo(() => {
    if (multiple) {
      return (value as string[]).map((v) => {
        const option = options.find((option) => option.value === v)
        return {
          label: option?.label || v,
          value: v,
        }
      })
    }
    return []
  }, [value, options, multiple])

  // Handle showing more/less selected items
  const [showAllSelected, setShowAllSelected] = React.useState(false)
  const displayedOptions = showAllSelected ? selectedOptions : selectedOptions.slice(0, maxSelectedDisplay)
  const hasMoreOptions = selectedOptions.length > maxSelectedDisplay

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={triggerRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between min-h-10", !displayValue && "text-muted-foreground", className)}
          disabled={disabled}
        >
          {multiple ? (
            <div className="flex flex-1 flex-wrap gap-1 max-h-24 overflow-y-auto">
              {selectedOptions.length > 0 ? (
                <>
                  {displayedOptions.map((option) => (
                    <Badge key={option.value} variant={badgeVariant} className="mr-1 mb-1">
                      {option.label}
                      <button
                        className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            e.stopPropagation()
                            handleUnselect(option.value)
                          }
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleUnselect(option.value)
                        }}
                      >
                        <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                      </button>
                    </Badge>
                  ))}
                  {hasMoreOptions && !showAllSelected && (
                    <Badge
                      variant="outline"
                      className="mb-1 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setShowAllSelected(true)
                      }}
                    >
                      +{selectedOptions.length - maxSelectedDisplay} more
                    </Badge>
                  )}
                  {showAllSelected && (
                    <Badge
                      variant="outline"
                      className="mb-1 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setShowAllSelected(false)
                      }}
                    >
                      Show less
                    </Badge>
                  )}
                </>
              ) : (
                <span>{placeholder}</span>
              )}
            </div>
          ) : (
            <span className="truncate">{displayValue || placeholder}</span>
          )}
          {loading ? (
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          ) : (
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("p-0", popoverWidth ? popoverWidth : "w-[var(--radix-popover-trigger-width)]")}
        style={{ width: popoverWidth }}
      >
        <Command shouldFilter={false}>
          {searchable && (
            <CommandInput placeholder="Search..." value={inputValue} onValueChange={setInputValue} className="h-9" />
          )}
          <CommandList
            className={cn("max-h-[15rem]", maxHeight && `max-h-[${maxHeight}]`)}
            style={{ maxHeight: maxHeight }}
          >
            <CommandEmpty>
              {emptyMessage}
              {creatable && inputValue && (
                <Button variant="outline" size="sm" className="mt-2 w-full justify-start" onClick={handleCreate}>
                  <Plus className="mr-2 h-4 w-4" />
                  {createMessage} "{inputValue}"
                </Button>
              )}
            </CommandEmpty>
            <CommandGroup>
              {(onSearch ? options : filteredOptions).map((option) => {
                const isSelected = multiple ? (value as string[]).includes(option.value) : value === option.value

                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    onSelect={() => handleSelect(option.value)}
                    className={cn(
                      "flex items-center justify-between",
                      option.disabled && "cursor-not-allowed opacity-50",
                    )}
                  >
                    {option.label}
                    {isSelected && <Check className="h-4 w-4" />}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
