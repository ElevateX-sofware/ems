

import { useState } from "react"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Search, Grid, List, Users, Clock, Calendar, Video } from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"
import { FilterDropdown } from "@/components/ui/filter-dropdown"

export default function MyClassPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [activeTab, setActiveTab] = useState<"all" | "upcoming" | "past">("all")

  const breadcrumbItems = [
    {
      label: "My Class",
      href: "/my-class",
      active: true,
    },
  ]

  // Filter options for demonstration
  const classTypeOptions = [
    { id: "live", label: "Live Classes" },
    { id: "recorded", label: "Recorded Classes" },
    { id: "workshop", label: "Workshops" },
    { id: "webinar", label: "Webinars" },
  ]

  const instructorOptions = [
    { id: "james-taylor", label: "James Taylor" },
    { id: "emma-wilson", label: "Emma Wilson" },
    { id: "alex-kumar", label: "Alex Kumar" },
    { id: "lisa-martinez", label: "Lisa Martinez" },
  ]

  const dateOptions = [
    { id: "today", label: "Today" },
    { id: "this-week", label: "This Week" },
    { id: "this-month", label: "This Month" },
    { id: "custom", label: "Custom Range" },
  ]

  return (
    <DashboardLayout>
      <div className="mt-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">My Classes</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search classes"
                className="bg-gray-100 dark:bg-[#2A2A2A] rounded-full pl-10 pr-4 py-2 text-sm w-[200px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <FilterDropdown label="Class Type" options={classTypeOptions} />
            <FilterDropdown label="Instructor" options={instructorOptions} />
            <FilterDropdown label="Date" options={dateOptions} />
            <div className="flex rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <button
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setViewMode("grid")}
              >
                <Grid size={18} />
              </button>
              <button
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setViewMode("list")}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Class Stats */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 mt-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Your Class Schedule</h2>
              <p className="text-indigo-100">You have 3 upcoming classes this week</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-indigo-300" />
                <span className="text-sm">Today: 1 class</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-indigo-300" />
                <span className="text-sm">This week: 3 classes</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-indigo-300" />
                <span className="text-sm">Total: 12 classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-200 dark:border-gray-800">
          <div className="flex space-x-8">
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === "all"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Classes
            </button>
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === "upcoming"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Classes
            </button>
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === "past"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past Classes
            </button>
          </div>
        </div>

        {/* Classes Grid/List */}
        <div className="mt-6">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Class Card 1 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Advanced React Patterns"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Live</div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="flex items-center text-white">
                      <div className="flex items-center mr-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="text-xs">Today, 3:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-xs">2h</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                    Advanced React Patterns
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Learn advanced React patterns with practical examples
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                        JT
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">James Taylor</span>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600 text-sm">Join</button>
                  </div>
                </div>
              </div>

              {/* Class Card 2 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="UX Design Workshop"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                    Workshop
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="flex items-center text-white">
                      <div className="flex items-center mr-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="text-xs">Tomorrow, 10:00 AM</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-xs">3h</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                    UX Design Workshop
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Hands-on workshop on user experience design principles
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">
                        LM
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Lisa Martinez</span>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600 text-sm">Join</button>
                  </div>
                </div>
              </div>

              {/* Class Card 3 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Node.js Performance"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">Webinar</div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="flex items-center text-white">
                      <div className="flex items-center mr-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="text-xs">May 18, 2:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-xs">1.5h</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                    Node.js Performance Optimization
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Learn techniques to optimize Node.js applications
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">
                        AK
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Alex Kumar</span>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600 text-sm">Join</button>
                  </div>
                </div>
              </div>

              {/* Class Card 4 - Past Class */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="CSS Grid Masterclass"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute top-2 right-2 bg-gray-500 text-white text-xs px-2 py-1 rounded">
                    Completed
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="flex items-center text-white">
                      <div className="flex items-center mr-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="text-xs">May 5, 2025</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-xs">2h</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                    CSS Grid Masterclass
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Master CSS Grid layout for modern web design
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white">
                        EW
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Emma Wilson</span>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
                      <Video className="h-3.5 w-3.5 mr-1" />
                      Recording
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* List Item 1 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
                <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=160"
                    alt="Advanced React Patterns"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Live</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      Advanced React Patterns
                    </h3>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Today, 3:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Learn advanced React patterns with practical examples
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                        JT
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">James Taylor</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-4">
                        <Clock className="h-3.5 w-3.5 inline mr-1" />2 hours
                      </span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                      Join Class
                    </button>
                  </div>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
                <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=160"
                    alt="UX Design Workshop"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                    Workshop
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      UX Design Workshop
                    </h3>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Tomorrow, 10:00 AM</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Hands-on workshop on user experience design principles
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">
                        LM
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Lisa Martinez</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-4">
                        <Clock className="h-3.5 w-3.5 inline mr-1" />3 hours
                      </span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                      Join Class
                    </button>
                  </div>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
                <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=160"
                    alt="Node.js Performance"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">Webinar</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      Node.js Performance Optimization
                    </h3>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">May 18, 2:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Learn techniques to optimize Node.js applications
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">
                        AK
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Alex Kumar</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-4">
                        <Clock className="h-3.5 w-3.5 inline mr-1" />
                        1.5 hours
                      </span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                      Join Class
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
