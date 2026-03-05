import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import SimulatorPage from "./pages/SimulatorPage"
import HelpPage from "./pages/HelpPage"
import TheoryPage from "./pages/TheoryPage"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<SimulatorPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/theory" element={<TheoryPage />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App