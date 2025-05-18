

import { useState } from "react"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Heart, Star, Clock, Search, Filter, Grid, List } from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function FavoritesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const breadcrumbItems = [
    {
      label: "Favorites",
      href: "/favorites",
      active: true,
    },
  ]

  return (
    <DashboardLayout>
      <div className="mt-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">Favorite Courses</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search favorites"
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

        {/* Favorites Stats */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-6 mt-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Your Favorite Collection</h2>
              <p className="text-pink-100">You have 7 favorite courses saved for later</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Favorites Categories */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">
              All Favorites
            </button>
            <button className="bg-white dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700">
              Recently Added
            </button>
            <button className="bg-white dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700">
              Most Viewed
            </button>
            <button className="bg-white dark:bg-[#2A2A2A] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700">
              Top Rated
            </button>
          </div>
        </div>

        {/* Favorites Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Favorite Card 1 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
              <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=160&width=320"
                  alt="Advanced CSS Techniques"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1.5 rounded-full text-pink-500 shadow-md">
                  <Heart className="h-4 w-4 fill-current" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center text-white">
                    <div className="flex items-center mr-3">
                      <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                      <span className="text-xs">4.8</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="text-xs">6h 30m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-pink-500 transition-colors">
                  Advanced CSS Techniques
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Master modern CSS layouts, animations, and responsive design
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white">
                      EW
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Emma Wilson</span>
                  </div>
                  <span className="text-sm font-medium text-pink-500">$49.99</span>
                </div>
              </div>
            </div>

            {/* Favorite Card 2 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
              <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=160&width=320"
                  alt="Python for Data Science"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1.5 rounded-full text-pink-500 shadow-md">
                  <Heart className="h-4 w-4 fill-current" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center text-white">
                    <div className="flex items-center mr-3">
                      <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                      <span className="text-xs">4.9</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="text-xs">12h 45m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-pink-500 transition-colors">
                  Python for Data Science
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Learn Python programming for data analysis and visualization
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                      JT
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">James Taylor</span>
                  </div>
                  <span className="text-sm font-medium text-pink-500">$59.99</span>
                </div>
              </div>
            </div>

            {/* Favorite Card 3 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
              <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=160&width=320"
                  alt="Digital Marketing Masterclass"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1.5 rounded-full text-pink-500 shadow-md">
                  <Heart className="h-4 w-4 fill-current" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center text-white">
                    <div className="flex items-center mr-3">
                      <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                      <span className="text-xs">4.7</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="text-xs">8h 15m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-pink-500 transition-colors">
                  Digital Marketing Masterclass
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Complete guide to SEO, social media, and content marketing
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">
                      LM
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Lisa Martinez</span>
                  </div>
                  <span className="text-sm font-medium text-pink-500">$69.99</span>
                </div>
              </div>
            </div>

            {/* Favorite Card 4 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group">
              <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=160&width=320"
                  alt="Mobile App Development with Flutter"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1.5 rounded-full text-pink-500 shadow-md">
                  <Heart className="h-4 w-4 fill-current" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center text-white">
                    <div className="flex items-center mr-3">
                      <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                      <span className="text-xs">4.9</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="text-xs">14h 20m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-pink-500 transition-colors">
                  Mobile App Development with Flutter
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Build beautiful cross-platform mobile applications
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">
                      AK
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Alex Kumar</span>
                  </div>
                  <span className="text-sm font-medium text-pink-500">$79.99</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {/* List Item 1 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
              <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=96&width=160"
                  alt="Advanced CSS Techniques"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1 rounded-full text-pink-500 shadow-md">
                  <Heart className="h-3 w-3 fill-current" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg group-hover:text-pink-500 transition-colors">
                    Advanced CSS Techniques
                  </h3>
                  <span className="text-sm font-medium text-pink-500">$49.99</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Master modern CSS layouts, animations, and responsive design
                </p>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white">
                      EW
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Emma Wilson</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">4.8</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">6h 30m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
              <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=96&width=160"
                  alt="Python for Data Science"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1 rounded-full text-pink-500 shadow-md">
                  <Heart className="h-3 w-3 fill-current" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg group-hover:text-pink-500 transition-colors">
                    Python for Data Science
                  </h3>
                  <span className="text-sm font-medium text-pink-500">$59.99</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Learn Python programming for data analysis and visualization
                </p>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                      JT
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">James Taylor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">4.9</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">12h 45m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4 flex group">
              <div className="relative h-24 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=96&width=160"
                  alt="Digital Marketing Masterclass"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1 rounded-full text-pink-500 shadow-md">
                  <Heart className="h-3 w-3 fill-current" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg group-hover:text-pink-500 transition-colors">
                    Digital Marketing Masterclass
                  </h3>
                  <span className="text-sm font-medium text-pink-500">$69.99</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Complete guide to SEO, social media, and content marketing
                </p>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">
                      LM
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Lisa Martinez</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">4.7</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">8h 15m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
