

import { useState } from "react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import {
  Search,
  Filter,
  Grid,
  List,
  BookOpen,
  FileText,
  Download,
  Eye,
  Star,
  Bookmark,
  ChevronRight,
} from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function ResourcesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [activeTab, setActiveTab] = useState<"all" | "books" | "documents" | "videos" | "saved">("all")

  const breadcrumbItems = [
    {
      label: "Resources",
      href: "/resources",
      active: true,
    },
  ]

  // Function to get icon based on file type
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <FileText className="h-10 w-10 text-red-500" />
      case "doc":
      case "docx":
        return <FileText className="h-10 w-10 text-blue-500" />
      case "xls":
      case "xlsx":
        return <FileText className="h-10 w-10 text-green-500" />
      case "ppt":
      case "pptx":
        return <FileText className="h-10 w-10 text-orange-500" />
      case "book":
        return <BookOpen className="h-10 w-10 text-purple-500" />
      default:
        return <FileText className="h-10 w-10 text-gray-500" />
    }
  }

  return (
    <DashboardLayout>
      <div className="mt-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">Learning Resources</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search resources"
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

        {/* Resources Stats */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg p-6 mt-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Your Learning Library</h2>
              <p className="text-emerald-100">Access 248 learning resources across various subjects</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-emerald-300" />
                <span className="text-sm">62 PDFs</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-emerald-300" />
                <span className="text-sm">45 Books</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-emerald-300" />
                <span className="text-sm">113 Worksheets</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Bookmark className="h-5 w-5 mr-2 text-emerald-300" />
                <span className="text-sm">28 Saved Items</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Categories/Tabs */}
        <div className="mt-8 border-b border-gray-200 dark:border-gray-800">
          <div className="flex space-x-8 overflow-x-auto pb-px">
            <button
              className={`pb-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "all"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Resources
            </button>
            <button
              className={`pb-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "books"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("books")}
            >
              Books & E-books
            </button>
            <button
              className={`pb-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "documents"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("documents")}
            >
              Documents & PDFs
            </button>
            <button
              className={`pb-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "videos"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              Video Resources
            </button>
            <button
              className={`pb-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "saved"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("saved")}
            >
              Saved Resources
            </button>
          </div>
        </div>

        {/* Resource Filters */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">
            All Categories
          </button>
          <button className="bg-white dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700">
            Web Development
          </button>
          <button className="bg-white dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700">
            Design
          </button>
          <button className="bg-white dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700">
            Data Science
          </button>
          <button className="bg-white dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700">
            Business
          </button>
          <button className="bg-white dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700">
            Marketing
          </button>
        </div>

        {/* Popular Resources */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Popular Resources</h2>
            <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Resource Card 1 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="p-4 flex">
                  <div className="mr-4 flex-shrink-0">{getFileIcon("pdf")}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      Advanced JavaScript Techniques
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">PDF • 15.8 MB • Updated May 5, 2025</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="mr-3">4.8</span>
                      <span>11.2k downloads</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Frontend Development</span>
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      Preview
                    </button>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Resource Card 2 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="p-4 flex">
                  <div className="mr-4 flex-shrink-0">{getFileIcon("book")}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      Design Patterns in Software Engineering
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      E-Book • 428 pages • Updated April 12, 2025
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="mr-3">4.9</span>
                      <span>8.7k downloads</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Software Architecture</span>
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      Preview
                    </button>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Resource Card 3 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="p-4 flex">
                  <div className="mr-4 flex-shrink-0">{getFileIcon("docx")}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">
                      React Interview Questions
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">DOCX • 2.7 MB • Updated May 1, 2025</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="mr-3">4.7</span>
                      <span>6.3k downloads</span>
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 transition-colors">
                    <Bookmark className="h-5 w-5 fill-current" />
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Frontend Development</span>
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      Preview
                    </button>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* List Item 1 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
                <div className="mr-4 flex-shrink-0">{getFileIcon("pdf")}</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      Advanced JavaScript Techniques
                    </h3>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">PDF • 15.8 MB • Updated May 5, 2025</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-2">
                    A comprehensive guide to advanced JavaScript techniques for modern web development.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2.5 py-0.5 rounded mr-2">
                        Frontend Development
                      </span>
                      <Star className="h-4 w-4 text-yellow-500 fill-current ml-2 mr-1" />
                      <span className="mr-3">4.8</span>
                      <span>11.2k downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Preview
                      </button>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center text-xs px-2 py-1 rounded">
                        <Download className="h-3.5 w-3.5 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
                <div className="mr-4 flex-shrink-0">{getFileIcon("book")}</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      Design Patterns in Software Engineering
                    </h3>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    E-Book • 428 pages • Updated April 12, 2025
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-2">
                    Learn about essential design patterns for building maintainable and scalable software.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs px-2.5 py-0.5 rounded mr-2">
                        Software Architecture
                      </span>
                      <Star className="h-4 w-4 text-yellow-500 fill-current ml-2 mr-1" />
                      <span className="mr-3">4.9</span>
                      <span>8.7k downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Preview
                      </button>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center text-xs px-2 py-1 rounded">
                        <Download className="h-3.5 w-3.5 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
                <div className="mr-4 flex-shrink-0">{getFileIcon("docx")}</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      React Interview Questions
                    </h3>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                      <Bookmark className="h-5 w-5 fill-current" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">DOCX • 2.7 MB • Updated May 1, 2025</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-2">
                    Common React interview questions and answers to help prepare for frontend developer interviews.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2.5 py-0.5 rounded mr-2">
                        Frontend Development
                      </span>
                      <Star className="h-4 w-4 text-yellow-500 fill-current ml-2 mr-1" />
                      <span className="mr-3">4.7</span>
                      <span>6.3k downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Preview
                      </button>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center text-xs px-2 py-1 rounded">
                        <Download className="h-3.5 w-3.5 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recently Added Resources */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recently Added</h2>
            <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Resource Card 1 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="p-4 flex">
                  <div className="mr-4 flex-shrink-0">{getFileIcon("pptx")}</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors mr-2">
                        UI/UX Design Principles
                      </h3>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-1.5 py-0.5 rounded">
                        New
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">PPTX • 18.3 MB • Added May 12, 2025</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="mr-3">4.5</span>
                      <span>1.2k downloads</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">UI/UX Design</span>
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      Preview
                    </button>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Resource Card 2 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="p-4 flex">
                  <div className="mr-4 flex-shrink-0">{getFileIcon("pdf")}</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors mr-2">
                        Data Structures & Algorithms
                      </h3>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-1.5 py-0.5 rounded">
                        New
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">PDF • 8.5 MB • Added May 10, 2025</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="mr-3">4.8</span>
                      <span>956 downloads</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Computer Science</span>
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      Preview
                    </button>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Resource Card 3 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
                <div className="p-4 flex">
                  <div className="mr-4 flex-shrink-0">{getFileIcon("xlsx")}</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors mr-2">
                        Project Budget Template
                      </h3>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-1.5 py-0.5 rounded">
                        New
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">XLSX • 1.2 MB • Added May 8, 2025</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="mr-3">4.6</span>
                      <span>742 downloads</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Project Management</span>
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      Preview
                    </button>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* List Item 1 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
                <div className="mr-4 flex-shrink-0">{getFileIcon("pptx")}</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors mr-2">
                        UI/UX Design Principles
                      </h3>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-1.5 py-0.5 rounded">
                        New
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">PPTX • 18.3 MB • Added May 12, 2025</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-2">
                    Comprehensive presentation on UI/UX design principles and best practices for modern applications.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs px-2.5 py-0.5 rounded mr-2">
                        UI/UX Design
                      </span>
                      <Star className="h-4 w-4 text-yellow-500 fill-current ml-2 mr-1" />
                      <span className="mr-3">4.5</span>
                      <span>1.2k downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Preview
                      </button>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center text-xs px-2 py-1 rounded">
                        <Download className="h-3.5 w-3.5 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
                <div className="mr-4 flex-shrink-0">{getFileIcon("pdf")}</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors mr-2">
                        Data Structures & Algorithms
                      </h3>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-1.5 py-0.5 rounded">
                        New
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">PDF • 8.5 MB • Added May 10, 2025</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-2">
                    A complete guide to data structures and algorithms with examples in multiple programming languages.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2.5 py-0.5 rounded mr-2">
                        Computer Science
                      </span>
                      <Star className="h-4 w-4 text-yellow-500 fill-current ml-2 mr-1" />
                      <span className="mr-3">4.8</span>
                      <span>956 downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center text-xs bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Preview
                      </button>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center text-xs px-2 py-1 rounded">
                        <Download className="h-3.5 w-3.5 mr-1" />
                        Download
                      </button>
                    </div>
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
