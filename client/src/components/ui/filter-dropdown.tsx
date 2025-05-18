

import { useState, useRef, useEffect } from "react"
import { Filter, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FilterOption {
  id: string
  label: string
}

interface FilterDropdownProps {
  label?: string
  options: FilterOption[]
  selectedOptions?: string[]
  onChange?: (selectedIds: string[]) => void
  className?: string
}

export function FilterDropdown({
  label = "Filter",
  options,
  selectedOptions = [],
  onChange,
  className,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>(selectedOptions)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleOptionClick = (id: string) => {
    const newSelected = selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id]

    setSelected(newSelected)
    onChange?.(newSelected)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2 rounded-md bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <Filter size={18} />
        {selected.length > 0 && (
          <span className="text-xs bg-blue-500 text-white rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
            {selected.length}
          </span>
        )}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-56 bg-white dark:bg-[#222222] rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1">
          <div className="px-3 py-2 text-sm font-medium border-b border-gray-200 dark:border-gray-700">{label}</div>
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.id}
                className="flex items-center px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                onClick={() => handleOptionClick(option.id)}
              >
                <input
                  type="checkbox"
                  id={`filter-${option.id}`}
                  checked={selected.includes(option.id)}
                  onChange={() => {}}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor={`filter-${option.id}`}
                  className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          {selected.length > 0 && (
            <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700 flex justify-between">
              <button
                onClick={() => {
                  setSelected([])
                  onChange?.([])
                }}
                className="text-xs text-blue-500 hover:text-blue-600"
              >
                Clear all
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
