

import type React from "react"

import { useState, useEffect } from "react"
import { Bell, ChevronLeft, ChevronRight, LogOut, Moon, Search, Settings, Sun, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LoginRegisterDialog } from "@/components/auth/login-register-dialog"
import { Link, useLocation } from "react-router-dom"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [showCollapseButton, setShowCollapseButton] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Track login status
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // For demo purposes, we'll use this to toggle login status
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div
      className={`flex h-screen bg-gray-50 text-gray-900 dark:bg-[#1A1A1A] dark:text-white transition-colors duration-200`}
    >
      {/* Sidebar */}
      <div
        className={`${
          sidebarCollapsed ? "w-[60px]" : "w-[130px]"
        } border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col transition-all duration-300 ease-in-out relative`}
        onMouseEnter={() => setShowCollapseButton(true)}
        onMouseLeave={() => setShowCollapseButton(false)}
      >
        <div className="mb-8 flex items-center justify-between">
          {!sidebarCollapsed && <h2 className="font-bold text-xl">Elearn.</h2>}
        </div>

        <nav className="flex flex-col gap-4 flex-1">
          <Link
            to="/"
            className={`flex flex-col items-center p-2 ${pathname === "/" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}`}
          >
            <div className={`${pathname === "/" ? "bg-blue-500" : "bg-blue-100 dark:bg-blue-900/20"} p-1.5 rounded`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">Home</span>}
          </Link>

          <Link
            to="/my-courses"
            className={`flex flex-col items-center p-2 ${pathname === "/my-courses" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}`}
          >
            <div
              className={`${pathname === "/my-courses" ? "bg-blue-500" : "bg-purple-100 dark:bg-purple-900/20"} p-1.5 rounded`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 19.5V4.5C4 4.10218 4.15804 3.72064 4.43934 3.43934C4.72064 3.15804 5.10218 3 5.5 3H18.5C18.8978 3 19.2794 3.15804 19.5607 3.43934C19.842 3.72064 20 4.10218 20 4.5V19.5C20 19.8978 19.842 20.2794 19.5607 20.5607C19.2794 20.842 18.8978 21 18.5 21H5.5C5.10218 21 4.72064 20.842 4.43934 20.5607C4.15804 20.2794 4 19.8978 4 19.5Z"
                  stroke={pathname === "/my-courses" ? "white" : "#9061F9"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 3V21"
                  stroke={pathname === "/my-courses" ? "white" : "#9061F9"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">My Courses</span>}
          </Link>

          <Link
            to="/my-class"
            className={`flex flex-col items-center p-2 ${pathname === "/my-class" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}`}
          >
            <div
              className={`${pathname === "/my-class" ? "bg-blue-500" : "bg-green-100 dark:bg-green-900/20"} p-1.5 rounded`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke={pathname === "/my-class" ? "white" : "#10B981"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke={pathname === "/my-class" ? "white" : "#10B981"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                  stroke={pathname === "/my-class" ? "white" : "#10B981"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                  stroke={pathname === "/my-class" ? "white" : "#10B981"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">My Class</span>}
          </Link>

          <Link
            to="/favorites"
            className={`flex flex-col items-center p-2 ${pathname === "/favorites" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}`}
          >
            <div
              className={`${pathname === "/favorites" ? "bg-blue-500" : "bg-pink-100 dark:bg-pink-900/20"} p-1.5 rounded`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                  stroke={pathname === "/favorites" ? "white" : "#EC4899"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">Favorite</span>}
          </Link>

          <Link
            to="/tests"
            className={`flex flex-col items-center p-2 ${pathname === "/tests" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}`}
          >
            <div
              className={`${pathname === "/tests" ? "bg-blue-500" : "bg-yellow-100 dark:bg-yellow-900/20"} p-1.5 rounded`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 11L12 14L22 4"
                  stroke={pathname === "/tests" ? "white" : "#F59E0B"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                  stroke={pathname === "/tests" ? "white" : "#F59E0B"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">Test</span>}
          </Link>

          <Link
            to="/achievements"
            className={`flex flex-col items-center p-2 ${pathname === "/achievements" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}`}
          >
            <div
              className={`${pathname === "/achievements" ? "bg-blue-500" : "bg-indigo-100 dark:bg-indigo-900/20"} p-1.5 rounded`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke={pathname === "/achievements" ? "white" : "#6366F1"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                  stroke={pathname === "/achievements" ? "white" : "#6366F1"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">Achievements</span>}
          </Link>

          <Link
            to="/certificates"
            className={`flex flex-col items-center p-2 ${pathname === "/certificates" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}`}
          >
            <div
              className={`${pathname === "/certificates" ? "bg-blue-500" : "bg-teal-100 dark:bg-teal-900/20"} p-1.5 rounded`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 7V4H20V7"
                  stroke={pathname === "/certificates" ? "white" : "#14B8A6"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 20H15"
                  stroke={pathname === "/certificates" ? "white" : "#14B8A6"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 4V20"
                  stroke={pathname === "/certificates" ? "white" : "#14B8A6"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">Certificate</span>}
          </Link>

          <Link
            to="/resources"
            className={`flex flex-col items-center p-2 ${pathname === "/resources" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}`}
          >
            <div
              className={`${pathname === "/resources" ? "bg-blue-500" : "bg-orange-100 dark:bg-orange-900/20"} p-1.5 rounded`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 19.5V4.5C4 4.10218 4.15804 3.72064 4.43934 3.43934C4.72064 3.15804 5.10218 3 5.5 3H18.5C18.8978 3 19.2794 3.15804 19.5607 3.43934C19.842 3.72064 20 4.10218 20 4.5V19.5C20 19.8978 19.842 20.2794 19.5607 20.5607C19.2794 20.842 18.8978 21 18.5 21H5.5C5.10218 21 4.72064 20.842 4.43934 20.5607C4.15804 20.2794 4 19.8978 4 19.5Z"
                  stroke={pathname === "/resources" ? "white" : "#F97316"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 3V21"
                  stroke={pathname === "/resources" ? "white" : "#F97316"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 8H17"
                  stroke={pathname === "/resources" ? "white" : "#F97316"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 12H17"
                  stroke={pathname === "/resources" ? "white" : "#F97316"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 16H17"
                  stroke={pathname === "/resources" ? "white" : "#F97316"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">Resources</span>}
          </Link>

          {/* Collapse button - positioned above Settings */}
          <button
            onClick={toggleSidebar}
            className={`absolute left-1/2 transform -translate-x-1/2 p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 ${showCollapseButton ? "opacity-100" : "opacity-0"}`}
            style={{ bottom: "80px" }}
          >
            {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>

          <Link
            to="/settings"
            className={`flex flex-col items-center p-2 ${pathname === "/settings" ? "bg-blue-600 rounded-md text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"} mt-auto`}
          >
            <div
              className={`${pathname === "/settings" ? "bg-blue-500" : "bg-red-100 dark:bg-red-900/20"} p-1.5 rounded`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke={pathname === "/settings" ? "white" : "#EF4444"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                  stroke={pathname === "/settings" ? "white" : "#EF4444"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="text-xs mt-1">Settings</span>}
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
          <div>
            <p className="text-gray-500 dark:text-gray-400">Hi toda,</p>
            <h1 className="text-2xl font-bold mt-1">What will you learn today?</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 dark:bg-[#2A2A2A] rounded-full pl-10 pr-4 py-2 text-sm w-[200px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 border border-gray-200 dark:border-gray-700"
              />
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <div className="relative">
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px] text-white">
                2
              </span>
            </div>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#2A2A2A] rounded-full p-1 pr-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-sm font-medium text-white">
                      TH
                    </div>
                    {!sidebarCollapsed && <span className="text-sm">Toda H</span>}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={toggleLogin}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                onClick={() => setShowLoginDialog(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
              >
                Login / Register
              </button>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className="px-6 pb-6">{children}</div>
      </div>

      {/* Login/Register Dialog */}
      <LoginRegisterDialog
        open={showLoginDialog}
        onOpenChange={setShowLoginDialog}
        onLogin={() => {
          setIsLoggedIn(true)
          setShowLoginDialog(false)
        }}
      />
    </div>
  )
}
