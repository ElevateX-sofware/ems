import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import appRoute from "@/routes/appRoutes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoute.map(({ path, page: Page, layout: Layout }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
