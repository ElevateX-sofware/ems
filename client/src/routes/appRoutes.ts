import DashboardLayout from "@/components/layout/dashboard-layout";
import routePath from "@/constants/routePath";
import Dashboard from "@/pages";
import AchievementsPage from "@/pages/achievements";

const appRoute = [
    { path: routePath.home, page: Dashboard, layout: DashboardLayout},
    { path: routePath.achievements, page: AchievementsPage, layout: DashboardLayout},
]

export default appRoute
export type AppRoute = typeof appRoute