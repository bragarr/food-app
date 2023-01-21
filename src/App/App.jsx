import { BrowserRouter, Outlet } from "react-router-dom"
import { MainRoutes } from "../routes/MainRoutes"
import { NavBar } from "../components/NavBar/NavBar"

export function App() {
  return (
    <div>
      <h1>Food App</h1>
      <BrowserRouter>
        <NavBar />
        <MainRoutes />
      </BrowserRouter>
      <Outlet />
    </div>
  )
}
