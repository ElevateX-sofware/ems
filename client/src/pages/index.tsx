

import { useState } from "react"
import { ChevronRight, CalendarIcon, ChevronLeft } from "lucide-react"
import { FilterDropdown } from "@/components/ui/filter-dropdown"

export default function Dashboard() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month, 1).getDay()
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date: Date) => {
    return (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  const hasEvent = (day: number) => {
    // Mock events for demonstration
    const events = [5, 12, 18, 25]
    return events.includes(day)
  }

  // Render calendar days
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const _isToday = isToday(date)
      const _isSelected = selectedDate && isSelected(date)
      const _hasEvent = hasEvent(day)

      days.push(
        <div
          key={day}
          className={`h-10 w-10 flex items-center justify-center rounded-full cursor-pointer relative
            ${_isToday ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""}
            ${_isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}
          `}
          onClick={() => setSelectedDate(date)}
        >
          {day}
          {_hasEvent && (
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
          )}
        </div>,
      )
    }

    return days
  }

  // Filter options for demonstration
  const courseFilterOptions = [
    { id: "web-dev", label: "Web Development" },
    { id: "design", label: "Design" },
    { id: "data-science", label: "Data Science" },
    { id: "business", label: "Business" },
    { id: "marketing", label: "Marketing" },
  ]

  const levelFilterOptions = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ]

  const durationFilterOptions = [
    { id: "short", label: "Less than 3 hours" },
    { id: "medium", label: "3-6 hours" },
    { id: "long", label: "More than 6 hours" },
  ]

  return (
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Featured Course */}
        <div className="col-span-2">
          <div className="bg-blue-500 rounded-xl p-6 relative overflow-hidden">
            <div className="flex">
              <div className="w-1/2 z-10">
                <h3 className="text-xl font-bold mb-2 text-white">Artificial Intelligence for Marketing</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Learn how artificial intelligence is transforming marketing to save time and deliver better results
                  for your organization.
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium">Learn now</button>
              </div>
              <div className="w-1/2 flex justify-center">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="AI Marketing illustration"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
              <span className="h-1.5 w-1.5 bg-white rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-blue-200 opacity-50 rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-blue-200 opacity-50 rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-blue-200 opacity-50 rounded-full"></span>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 flex gap-2">
            <FilterDropdown label="Course Category" options={courseFilterOptions} />
            <FilterDropdown label="Level" options={levelFilterOptions} />
            <FilterDropdown label="Duration" options={durationFilterOptions} />
          </div>

          {/* Learning Path */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Your learning path</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
                <h4 className="font-medium">Intro to React</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10 hours to complete</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-[10px] text-white">
                      TH
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-auto">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
                <h4 className="font-medium">Become a Manager</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">8 hours to complete</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white"></div>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white"></div>
                  </div>
                  <div className="flex items-center gap-1 ml-auto">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
                <h4 className="font-medium">Sketch from A to Z</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">5 hours to complete</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white"></div>
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white"></div>
                  </div>
                  <div className="flex items-center gap-1 ml-auto">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1">
          {/* Calendar */}
          <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-blue-500" />
                Calendar
              </h3>
              <div className="flex items-center">
                <button onClick={prevMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="mx-2 text-sm font-medium">{formatDate(currentMonth)}</span>
                <button onClick={nextMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <div key={index} className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">{renderCalendarDays()}</div>

            {selectedDate && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium mb-2">
                  {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                </h4>
                {hasEvent(selectedDate.getDate()) ? (
                  <div className="text-xs text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                    <div className="font-medium">Web Development Workshop</div>
                    <div className="mt-1">10:00 AM - 12:00 PM</div>
                  </div>
                ) : (
                  <div className="text-xs text-gray-500 dark:text-gray-400">No events scheduled</div>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Course in Progress</h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-[#222222] rounded-lg p-3 flex items-center shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="bg-pink-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Build Your First Application</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Course time</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="bg-white dark:bg-[#222222] rounded-lg p-3 flex items-center shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="bg-yellow-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Build something beautiful</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sketch</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="bg-white dark:bg-[#222222] rounded-lg p-3 flex items-center shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Firebase on Android: Cloud Fire</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Firebase</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="bg-white dark:bg-[#222222] rounded-lg p-3 flex items-center shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="bg-green-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Creating Custom Animations</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Principle</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Learning Point */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Your learning point</h3>
            <div className="bg-purple-600 rounded-lg p-4">
              <div className="h-[120px] relative">
                {/* Chart */}
                <svg viewBox="0 0 300 100" className="w-full h-full">
                  <path
                    d="M0,80 C20,70 40,90 60,80 C80,70 100,50 120,40 C140,30 160,20 180,30 C200,40 220,60 240,50 C260,40 280,30 300,20"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,80 C20,70 40,90 60,80 C80,70 100,50 120,40 C140,30 160,20 180,30 C200,40 220,60 240,50 C260,40 280,30 300,20"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="300"
                    strokeDashoffset="100"
                  />
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-300">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                </div>

                {/* Y-axis labels */}
                <div className="absolute top-0 left-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-300">
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                </div>

                {/* Current point */}
                <div className="absolute top-[30%] right-[25%] w-4 h-4 bg-white rounded-full border-2 border-purple-600 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
