

import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Download, Share2, Calendar, Award, ChevronRight, Search, Filter } from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function CertificatesPage() {
  const breadcrumbItems = [
    {
      label: "Certificates",
      href: "/certificates",
      active: true,
    },
  ]

  return (
    <DashboardLayout>
      <div className="mt-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">Your Certificates</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search certificates"
                className="bg-gray-100 dark:bg-[#2A2A2A] rounded-full pl-10 pr-4 py-2 text-sm w-[200px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <button className="p-2 rounded-md bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Certificate Stats */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg p-6 mt-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Certificate Collection</h2>
              <p className="text-teal-100">You have earned 5 certificates so far</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-teal-300" />
                <span className="text-sm">Earned: 5</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-300" />
                <span className="text-sm">In Progress: 2</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 mr-2 text-teal-300" />
                <span className="text-sm">Shared: 3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Earned Certificates */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Earned Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certificate 1 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Web Development Certificate"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">Web Development Fundamentals</h3>
                  <p className="text-white/80 text-sm">Completed on May 5, 2025</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Duration: 12 weeks</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  This certificate verifies proficiency in HTML, CSS, and JavaScript fundamentals.
                </p>
                <div className="flex justify-between">
                  <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="React Development Certificate"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">React Development</h3>
                  <p className="text-white/80 text-sm">Completed on April 15, 2025</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Duration: 8 weeks</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  This certificate verifies proficiency in React.js and modern frontend development.
                </p>
                <div className="flex justify-between">
                  <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="UI/UX Design Certificate"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">UI/UX Design Principles</h3>
                  <p className="text-white/80 text-sm">Completed on March 20, 2025</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Duration: 10 weeks</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  This certificate verifies proficiency in user interface and experience design.
                </p>
                <div className="flex justify-between">
                  <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Node.js Backend Certificate"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">Node.js Backend Development</h3>
                  <p className="text-white/80 text-sm">Completed on February 10, 2025</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Duration: 14 weeks</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  This certificate verifies proficiency in server-side JavaScript and API development.
                </p>
                <div className="flex justify-between">
                  <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* In Progress Certificates */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Certificates In Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* In Progress Certificate 1 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Data Science Certificate"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded inline-block mb-2 w-fit">
                    In Progress
                  </div>
                  <h3 className="text-white font-bold text-lg">Data Science Fundamentals</h3>
                  <p className="text-white/80 text-sm">Started on April 25, 2025</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Duration: 16 weeks</span>
                </div>
                <div className="mb-3">
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">7/16 weeks completed</span>
                    <span className="text-xs text-yellow-500">45%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Learn data analysis, visualization, and machine learning fundamentals.
                </p>
              </div>
            </div>

            {/* In Progress Certificate 2 */}
            <div className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Cloud Computing Certificate"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded inline-block mb-2 w-fit">
                    In Progress
                  </div>
                  <h3 className="text-white font-bold text-lg">Cloud Computing Essentials</h3>
                  <p className="text-white/80 text-sm">Started on May 1, 2025</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Duration: 12 weeks</span>
                </div>
                <div className="mb-3">
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">3/12 weeks completed</span>
                    <span className="text-xs text-yellow-500">25%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Learn cloud infrastructure, deployment, and management fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
