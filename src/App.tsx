import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ThemeProvider } from "./contexts/ThemeContext"

import Navbar from "./components/Navbar"
import SimulatorPage from "./pages/SimulatorPage"
import HelpPage from "./pages/HelpPage"
import TheoryPage from "./pages/TheoryPage"

function App() {

  return (

    <ThemeProvider>
      <BrowserRouter basename="/RegExpresion">
        <Navbar />
        <Routes>
          <Route path="/" element={<SimulatorPage />} />
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  )

}

export default App