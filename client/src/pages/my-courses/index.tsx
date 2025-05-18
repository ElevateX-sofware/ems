

import { useState } from "react"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import {
  Search,
  Filter,
  Grid,
  List,
  BookOpen,
  Clock,
  BarChart,
  ChevronRight,
  Star,
  Award,
  Calendar,
  Zap,
  TrendingUp,
  Bookmark,
  BookMarked,
} from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function MyCoursesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [activeTab, setActiveTab] = useState<"all" | "in-progress" | "completed">("all")
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const breadcrumbItems = [
    {
      label: "My Courses",
      href: "/my-courses",
      active: true,
    },
  ]

  // Skills data for the skills chart
  const skills = [
    { name: "React", progress: 75, color: "bg-blue-500" },
    { name: "JavaScript", progress: 85, color: "bg-yellow-500" },
    { name: "CSS", progress: 70, color: "bg-pink-500" },
    { name: "Node.js", progress: 60, color: "bg-green-500" },
    { name: "UI/UX", progress: 50, color: "bg-purple-500" },
  ]

  // Recommended courses data
  const recommendedCourses = [
    {
      title: "Advanced TypeScript Patterns",
      image: "/placeholder.svg?height=80&width=120",
      instructor: "James Taylor",
      rating: 4.9,
      students: 1245,
      price: "$59.99",
      tag: "Recommended",
      tagColor: "bg-blue-500",
    },
    {
      title: "React Native Masterclass",
      image: "/placeholder.svg?height=80&width=120",
      instructor: "Lisa Martinez",
      rating: 4.8,
      students: 987,
      price: "$49.99",
      tag: "Popular",
      tagColor: "bg-purple-500",
    },
    {
      title: "GraphQL API Development",
      image: "/placeholder.svg?height=80&width=120",
      instructor: "Alex Kumar",
      rating: 4.7,
      students: 756,
      price: "$64.99",
      tag: "New",
      tagColor: "bg-green-500",
    },
  ]

  return (
    <DashboardLayout>
      <div className="mt-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">My Courses</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search courses"
                className="bg-gray-100 dark:bg-[#2A2A2A] rounded-full pl-10 pr-4 py-2 text-sm w-[200px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <button className="p-2 rounded-md bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Filter size={18} />
            </button>
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

        {/* Course Stats */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 mt-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Your Learning Journey</h2>
              <p className="text-blue-100">You've completed 5 courses and have 3 in progress</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-300" />
                <span className="text-sm">Total: 8</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-300" />
                <span className="text-sm">In Progress: 3</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-blue-300" />
                <span className="text-sm">Completed: 5</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-blue-300" />
                <span className="text-sm">Certificates: 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Streak */}
        <div className="mt-6 bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold flex items-center">
              <Zap className="h-5 w-5 mr-2 text-yellow-500" />
              Learning Streak
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">May 2025</span>
          </div>
          <div className="flex space-x-1">
            {Array.from({ length: 30 }).map((_, i) => {
              // Random activity level: 0 = none, 1 = low, 2 = medium, 3 = high
              const activity = Math.floor(Math.random() * 4)
              let bgColor = "bg-gray-200 dark:bg-gray-700"

              if (activity === 1) bgColor = "bg-green-200 dark:bg-green-900/30"
              if (activity === 2) bgColor = "bg-green-400 dark:bg-green-700"
              if (activity === 3) bgColor = "bg-green-600 dark:bg-green-500"

              return <div key={i} className={`h-8 w-2 rounded-sm ${bgColor}`} title={`May ${i + 1}, 2025`}></div>
            })}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Current streak: 7 days</span>
            <span>Longest streak: 14 days</span>
            <span>Total learning days: 22</span>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="mt-6 bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Award className="h-5 w-5 mr-2 text-purple-500" />
              Skills Progress
            </h2>
            <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-3 rounded-lg border border-gray-100 dark:border-gray-800 cursor-pointer transition-all duration-200 ${selectedSkill === skill.name ? "bg-gray-50 dark:bg-gray-800/50 shadow-md" : ""}`}
                onClick={() => setSelectedSkill(skill.name === selectedSkill ? null : skill.name)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${skill.color}`} style={{ width: `${skill.progress}%` }}></div>
                </div>
              </div>
            ))}
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
              All Courses
            </button>
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === "in-progress"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("in-progress")}
            >
              In Progress
            </button>
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === "completed"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Continue Learning */}
        {(activeTab === "all" || activeTab === "in-progress") && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Continue Learning</h2>
              <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Card 1 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-md transition-all duration-200">
                  <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=160&width=320"
                      alt="React Development"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      In Progress
                    </div>
                    <button className="absolute top-2 left-2 bg-white/80 dark:bg-gray-800/80 p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500 transition-colors">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      React Development
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Learn modern React with hooks and functional components
                    </p>
                    <div className="mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">65% complete</span>
                        <span className="text-xs text-blue-500">13/20 lessons</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                          JT
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">James Taylor</span>
                      </div>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm transition-colors">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-md transition-all duration-200">
                  <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=160&width=320"
                      alt="UX Design Principles"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      In Progress
                    </div>
                    <button className="absolute top-2 left-2 bg-white/80 dark:bg-gray-800/80 p-1.5 rounded-full text-pink-500 dark:text-pink-500">
                      <BookMarked className="h-4 w-4 fill-current" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      UX Design Principles
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Master the fundamentals of user experience design
                    </p>
                    <div className="mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "40%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">40% complete</span>
                        <span className="text-xs text-blue-500">8/20 lessons</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">
                          LM
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Lisa Martinez</span>
                      </div>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm transition-colors">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>

                {/* Course Card 3 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-md transition-all duration-200">
                  <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=160&width=320"
                      alt="Node.js Backend Development"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      In Progress
                    </div>
                    <button className="absolute top-2 left-2 bg-white/80 dark:bg-gray-800/80 p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500 transition-colors">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      Node.js Backend Development
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Build scalable server-side applications with Node.js
                    </p>
                    <div className="mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">25% complete</span>
                        <span className="text-xs text-blue-500">5/20 lessons</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">
                          AK
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Alex Kumar</span>
                      </div>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm transition-colors">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* List Item 1 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group hover:shadow-md transition-all duration-200">
                  <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=96&width=160"
                      alt="React Development"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      In Progress
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                        React Development
                      </h3>
                      <span className="text-sm text-blue-500">65% complete</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Learn modern React with hooks and functional components
                    </p>
                    <div className="mt-2 mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                          JT
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">James Taylor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500 transition-colors">
                          <Bookmark className="h-4 w-4" />
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* List Item 2 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group hover:shadow-md transition-all duration-200">
                  <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=96&width=160"
                      alt="UX Design Principles"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      In Progress
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                        UX Design Principles
                      </h3>
                      <span className="text-sm text-blue-500">40% complete</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Master the fundamentals of user experience design
                    </p>
                    <div className="mt-2 mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">
                          LM
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Lisa Martinez</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-pink-500 dark:text-pink-500">
                          <BookMarked className="h-4 w-4 fill-current" />
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recommended Courses */}
        {activeTab === "all" && (
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                Recommended For You
              </h2>
              <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendedCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-200"
                >
                  <div className="p-4 flex">
                    <div className="w-[80px] h-[80px] rounded-lg overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h3 className="font-medium text-sm line-clamp-2">{course.title}</h3>
                        <span className={`ml-auto text-xs text-white px-1.5 py-0.5 rounded ${course.tagColor}`}>
                          {course.tag}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{course.instructor}</p>
                      <div className="flex items-center mt-1 text-xs">
                        <div className="flex items-center text-yellow-500">
                          <Star className="h-3 w-3 fill-current" />
                          <span className="ml-1">{course.rating}</span>
                        </div>
                        <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-gray-500 dark:text-gray-400">{course.students} students</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-medium text-sm">{course.price}</span>
                        <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                          Enroll
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Deadlines */}
        {(activeTab === "all" || activeTab === "in-progress") && (
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-red-500" />
                Upcoming Deadlines
              </h2>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 rounded-r-lg">
                  <div>
                    <h3 className="font-medium">React Final Project</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">React Development Course</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-500 font-medium">Tomorrow</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">11:59 PM</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 rounded-r-lg">
                  <div>
                    <h3 className="font-medium">UX Design Case Study</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">UX Design Principles</p>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-500 font-medium">3 days left</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">May 19, 2025</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-lg">
                  <div>
                    <h3 className="font-medium">API Integration Quiz</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Node.js Backend Development</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-500 font-medium">1 week left</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">May 23, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Completed Courses */}
        {(activeTab === "all" || activeTab === "completed") && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Completed Courses</h2>
              {activeTab === "all" && (
                <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              )}
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Completed Course Card 1 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-md transition-all duration-200">
                  <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=160&width=320"
                      alt="HTML & CSS Fundamentals"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Completed
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <div className="flex items-center text-white">
                        <div className="flex items-center">
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      HTML & CSS Fundamentals
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Learn the building blocks of web development
                    </p>
                    <div className="mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Completed on May 5, 2025</span>
                        <span className="text-xs text-green-500 flex items-center">
                          <Award className="h-3.5 w-3.5 mr-1" />
                          Certificate
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white">
                          EW
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Emma Wilson</span>
                      </div>
                      <button className="text-blue-500 hover:text-blue-600 text-sm">Review</button>
                    </div>
                  </div>
                </div>

                {/* Completed Course Card 2 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-md transition-all duration-200">
                  <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=160&width=320"
                      alt="JavaScript Basics"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Completed
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <div className="flex items-center text-white">
                        <div className="flex items-center">
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      JavaScript Basics
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Master the fundamentals of JavaScript programming
                    </p>
                    <div className="mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Completed on April 15, 2025</span>
                        <span className="text-xs text-green-500 flex items-center">
                          <Award className="h-3.5 w-3.5 mr-1" />
                          Certificate
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                          JT
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">James Taylor</span>
                      </div>
                      <button className="text-blue-500 hover:text-blue-600 text-sm">Review</button>
                    </div>
                  </div>
                </div>

                {/* Completed Course Card 3 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-md transition-all duration-200">
                  <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=160&width=320"
                      alt="Responsive Web Design"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Completed
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <div className="flex items-center text-white">
                        <div className="flex items-center">
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      Responsive Web Design
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Create websites that work on any device
                    </p>
                    <div className="mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Completed on March 20, 2025</span>
                        <span className="text-xs text-green-500 flex items-center">
                          <Award className="h-3.5 w-3.5 mr-1" />
                          Certificate
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">
                          LM
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Lisa Martinez</span>
                      </div>
                      <button className="text-blue-500 hover:text-blue-600 text-sm">Review</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Completed List Item 1 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group hover:shadow-md transition-all duration-200">
                  <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=96&width=160"
                      alt="HTML & CSS Fundamentals"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Completed
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                        HTML & CSS Fundamentals
                      </h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Learn the building blocks of web development
                    </p>
                    <div className="mt-2 mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white">
                          EW
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Emma Wilson</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-4">Completed on May 5, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-500 flex items-center">
                          <Award className="h-3.5 w-3.5 mr-1" />
                          Certificate
                        </span>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Completed List Item 2 */}
                <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group hover:shadow-md transition-all duration-200">
                  <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=96&width=160"
                      alt="JavaScript Basics"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Completed
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                        JavaScript Basics
                      </h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Master the fundamentals of JavaScript programming
                    </p>
                    <div className="mt-2 mb-3">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                          JT
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">James Taylor</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-4">
                          Completed on April 15, 2025
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-500 flex items-center">
                          <Award className="h-3.5 w-3.5 mr-1" />
                          Certificate
                        </span>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
