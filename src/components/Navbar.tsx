import { NavLink } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"

export default function Navbar() {

  const { theme, toggleTheme } = useTheme()

  return (

    <nav>

      <div className="nav-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Simulador
        </NavLink>

        <NavLink
          to="/theory"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Teoría
        </NavLink>

        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Ayuda
        </NavLink>

      </div>

      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
      >
        {theme === "dark"
          ? <i className="fa-regular fa-sun"></i>
          : <i className="fa-regular fa-moon"></i>
        }

      </button>

    </nav>

  )

}