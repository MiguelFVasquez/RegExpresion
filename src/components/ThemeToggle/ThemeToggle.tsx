import { useTheme } from "../../contexts/ThemeContext"

export default function ThemeToggle() {

  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "dark" ? (
        <i className="fa-regular fa-sun"></i>
      ) : (
        <i className="fa-regular fa-moon"></i>
      )}
    </button>
  )
}