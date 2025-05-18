

import { useState } from "react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { User, Lock, Bell, Shield, Globe, Moon, Sun, Save } from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "account" | "notifications" | "privacy">("profile")

  const breadcrumbItems = [
    {
      label: "Settings",
      href: "/settings",
      active: true,
    },
  ]

  return (
    <DashboardLayout>
      <div className="mt-6">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your account settings and preferences</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-[#222222] rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-lg font-medium text-white mr-3">
                    TH
                  </div>
                  <div>
                    <h3 className="font-medium">Toda H</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">toda@example.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <button
                  className={`flex items-center w-full p-2 rounded-md text-left text-sm ${
                    activeTab === "profile"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="h-4 w-4 mr-3" />
                  Profile
                </button>
                <button
                  className={`flex items-center w-full p-2 rounded-md text-left text-sm ${
                    activeTab === "account"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("account")}
                >
                  <Lock className="h-4 w-4 mr-3" />
                  Account
                </button>
                <button
                  className={`flex items-center w-full p-2 rounded-md text-left text-sm ${
                    activeTab === "notifications"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell className="h-4 w-4 mr-3" />
                  Notifications
                </button>
                <button
                  className={`flex items-center w-full p-2 rounded-md text-left text-sm ${
                    activeTab === "privacy"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("privacy")}
                >
                  <Shield className="h-4 w-4 mr-3" />
                  Privacy
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-[#222222] rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
              {/* Profile Settings */}
              {activeTab === "profile" && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-2xl font-medium text-white mr-4">
                        TH
                      </div>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm transition-colors">
                          Change Photo
                        </button>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">JPG, GIF or PNG. Max size 2MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Toda H"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="toda@example.com"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        defaultValue="I'm a passionate learner interested in web development and design."
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        defaultValue="Tokyo, Japan"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        defaultValue="https://example.com"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors flex items-center">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Settings */}
              {activeTab === "account" && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-medium mb-3">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100"
                          />
                        </div>
                        
                        <div>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                            Update Password
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-md font-medium mb-3">Language & Region</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Language
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100">
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Time Zone
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-gray-100">
                            <option>(GMT+09:00) Tokyo, Japan</option>
                            <option>(GMT+00:00) London, UK</option>
                            <option>(GMT-05:00) New York, USA</option>
                            <option>(GMT-08:00) San Francisco, USA</option>
                            <option>(GMT+01:00) Paris, France</option>
                          </select>
                        </div>
                        
                        <div>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                            Save Preferences
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-md font-medium mb-3">Theme</h3>
                      <div className="flex space-x-4">
                        <button className="flex items-center justify-center p-3 border-2 border-blue-500 rounded-lg bg-white">
                          <Sun className="h-5 w-5 text-gray-700" />
                          <span className="ml-2 text-sm font-medium text-gray-700">Light</span>
                        </button>
                        
                        <button className="flex items-center justify-center p-3 border-2 border-transparent rounded-lg bg-gray-800">
                          <Moon className="h-5 w-5 text-white" />
                          <span className="ml-2 text-sm font-medium text-white">Dark</span>
                        </button>
                        
                        <button className="flex items-center justify-center p-3 border-2 border-transparent rounded-lg bg-gray-200">
                          <Globe className="h-5 w-5 text-gray-700" />
                          <span className="ml-2 text-sm font-medium text-gray-700">System</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-medium mb-3">Email Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Course Updates</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Receive updates about your enrolled courses</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">New Lessons</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Receive notifications when new lessons are available</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Test Reminders</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Receive reminders about upcoming tests</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Promotions</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Receive promotional emails and special offers</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-md font-medium mb-3">Push Notifications</h3>
                      <div className="space-y-3">
                        &lt;div className="flex items-center justify-between"&gt;

\
