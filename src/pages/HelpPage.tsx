export default function HelpPage() {

  return (

    <main>

      <h1>Guía de uso</h1>

      <section className="section">
        <h2>Sintaxis de Expresiones Regulares</h2>

        <ul>
          <li>* → Cerradura estrella (0 o más repeticiones)</li>
          <li>+ → una o más repeticiones</li>
          <li>| → unión</li>
          <li>() → agrupación</li>
        </ul>
      </section>

      <section className="section">
        <h2>Ejemplos</h2>

        <pre>a*
(ab)*
(a|b)c
(a*b*)</pre>
      </section>

    </main>

  )

}