

import { useState } from "react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { CheckCircle, Clock, FileText, AlertCircle, Calendar, ChevronRight, Search, Filter } from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function TestsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed" | "practice">("upcoming")

  const breadcrumbItems = [
    {
      label: "Tests",
      href: "/tests",
      active: true,
    },
  ]

  return (
    <DashboardLayout>
      <div className="mt-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">Tests & Quizzes</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search tests"
                className="bg-gray-100 dark:bg-[#2A2A2A] rounded-full pl-10 pr-4 py-2 text-sm w-[200px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <button className="p-2 rounded-md bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Test Overview */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 mt-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Your Test Performance</h2>
              <p className="text-blue-100">You have completed 8 tests with an average score of 85%</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-sm">Passed: 7</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-red-300" />
                <span className="text-sm">Failed: 1</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-300" />
                <span className="text-sm">Upcoming: 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-200 dark:border-gray-800">
          <div className="flex space-x-8">
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === "upcoming"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Tests
            </button>
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === "completed"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed Tests
            </button>
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === "practice"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("practice")}
            >
              Practice Tests
            </button>
          </div>
        </div>

        {/* Upcoming Tests */}
        {activeTab === "upcoming" && (
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">JavaScript Fundamentals Quiz</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Test your knowledge of JavaScript basics
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  Start Test
                </button>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center mr-6">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>25 questions</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Due: May 20, 2025</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">React Components & Props</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Assessment on React component architecture
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  Start Test
                </button>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>60 minutes</span>
                </div>
                <div className="flex items-center mr-6">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>30 questions</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Due: May 25, 2025</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Completed Tests */}
        {activeTab === "completed" && (
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">HTML & CSS Basics</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Fundamentals of web development and styling
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 font-medium mr-3">92%</span>
                  <button className="text-blue-500 hover:text-blue-600 text-sm transition-colors">View Results</button>
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Completed: May 5, 2025</span>
                </div>
                <div className="flex items-center mr-6">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>20 questions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span className="text-green-500">Passed</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Database Design Principles</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">SQL and NoSQL database concepts</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 font-medium mr-3">85%</span>
                  <button className="text-blue-500 hover:text-blue-600 text-sm transition-colors">View Results</button>
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Completed: April 28, 2025</span>
                </div>
                <div className="flex items-center mr-6">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>30 questions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span className="text-green-500">Passed</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Advanced JavaScript Patterns</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Design patterns and advanced concepts</p>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 font-medium mr-3">68%</span>
                  <button className="text-blue-500 hover:text-blue-600 text-sm transition-colors">View Results</button>
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Completed: April 15, 2025</span>
                </div>
                <div className="flex items-center mr-6">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>25 questions</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1 text-red-500" />
                  <span className="text-red-500">Failed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Practice Tests */}
        {activeTab === "practice" && (
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Frontend Development Practice</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    HTML, CSS, and JavaScript practice questions
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  Start Practice
                </button>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>No time limit</span>
                </div>
                <div className="flex items-center mr-6">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>50 questions</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4" />
                  <span>Multiple attempts allowed</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">React & Redux Mastery</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Advanced React concepts and state management
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  Start Practice
                </button>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>No time limit</span>
                </div>
                <div className="flex items-center mr-6">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>40 questions</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4" />
                  <span>Multiple attempts allowed</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Backend Development with Node.js</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Server-side JavaScript and API development
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  Start Practice
                </button>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>No time limit</span>
                </div>
                <div className="flex items-center mr-6">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>35 questions</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4" />
                  <span>Multiple attempts allowed</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
