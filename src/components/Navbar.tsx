import { Link } from "react-router-dom"

export default function Navbar() {

  return (

    <nav>

      <Link to="/">Simulador</Link>
      <Link to="/teoria">Teoría</Link>
      <Link to="/help">Ayuda</Link>

    </nav>

  )

}