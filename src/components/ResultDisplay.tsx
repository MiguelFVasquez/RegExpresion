import type { EvaluationResult } from "../types/regexTypes"

interface Props {

  results: EvaluationResult[]
  onClear?: () => void

}

export default function ResultDisplay({ results, onClear }: Props) {

  return (

    <div>

      <div className="results-header">
        <h2>Resultados</h2>
        {results.length > 0 && onClear && (
          <button onClick={onClear} className="btn-clear">
            Limpiar Historial
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <p className="no-results">No hay resultados aún. Ingresa una expresión regular y una cadena para comenzar.</p>
      ) : (
        <ul className="results-list">

          {results.map((result, index) => (

            <li key={index} className={result.accepted ? "accepted" : "rejected"}>

              <span>{result.input}</span>

              <span>{result.accepted ? "✔ ACEPTADA" : "✘ RECHAZADA"}</span>

            </li>

          ))}

        </ul>
      )}

    </div>

  )

}