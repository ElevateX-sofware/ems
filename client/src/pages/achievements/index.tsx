

import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Award, Trophy, Star, Target, Users, ChevronRight } from "lucide-react"

export default function AchievementsPage() {
  const breadcrumbItems = [
    {
      label: "Achievements",
      href: "/achievements",
      active: true,
    },
  ]

  return (
    <div className="mt-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-4">
          <h1 className="text-2xl font-bold">Your Achievements</h1>
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 mt-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Achievement Progress</h2>
              <p className="text-purple-100">You've earned 12 out of 30 possible achievements</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="bg-white h-full rounded-full" style={{ width: "40%" }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-purple-100">
              <span>40% Complete</span>
              <span>18 more to unlock</span>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Leaderboard</h2>
            <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800 mt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <span className="font-medium">Top Learners This Month</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">May 2025</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-full font-bold text-sm mr-3">
                  1
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium text-white mr-3">
                  JD
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">850 points • 15 achievements</p>
                </div>
                <div className="flex">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-bold text-sm mr-3">
                  2
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium text-white mr-3">
                  AS
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Alice Smith</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">720 points • 12 achievements</p>
                </div>
                <div className="flex">
                  <Trophy className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-orange-400 text-white rounded-full font-bold text-sm mr-3">
                  3
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-sm font-medium text-white mr-3">
                  RJ
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Robert Johnson</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">680 points • 11 achievements</p>
                </div>
                <div className="flex">
                  <Trophy className="h-5 w-5 text-orange-400" />
                </div>
              </div>

              <div className="flex items-center bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold text-sm mr-3">
                  8
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-sm font-medium text-white mr-3">
                  TH
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Toda H (You)</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">450 points • 8 achievements</p>
                </div>
                <div className="flex">
                  <Target className="h-5 w-5 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium">Course Completer</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Completed 5 courses</p>
                <div className="mt-2 flex items-center">
                  <div className="flex">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">May 10, 2025</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4">
                <Trophy className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium">Perfect Score</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Scored 100% on a test</p>
                <div className="mt-2 flex items-center">
                  <div className="flex">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">May 5, 2025</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4">
                <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-medium">Fast Learner</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Completed a course in record time</p>
                <div className="mt-2 flex items-center">
                  <div className="flex">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">April 28, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Achievements */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Achievements to Unlock</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center mb-3">
                <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg mr-3">
                  <Award className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="font-medium">Course Master</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Complete 10 courses</p>
              <div className="mt-3">
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: "50%" }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">5/10 completed</span>
                  <span className="text-xs text-blue-500">50%</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center mb-3">
                <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg mr-3">
                  <Trophy className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="font-medium">Test Champion</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pass 15 tests with a score of 90% or higher</p>
              <div className="mt-3">
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: "40%" }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">6/15 completed</span>
                  <span className="text-xs text-blue-500">40%</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#222222] rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center mb-3">
                <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg mr-3">
                  <Star className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="font-medium">Consistent Learner</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Log in for 30 consecutive days</p>
              <div className="mt-3">
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: "70%" }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">21/30 days</span>
                  <span className="text-xs text-blue-500">70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
