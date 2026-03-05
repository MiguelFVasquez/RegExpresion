import { useState } from "react"

import RegexInput from "../components/RegexInput"
import StringInput from "../components/StringInput"
import ResultDisplay from "../components/ResultDisplay"

import { evaluateString } from "../logic/regexEngine"

import type { EvaluationResult } from "../types/regexTypes"

export default function SimulatorPage() {

  const [regex, setRegex] = useState("")
  const [input, setInput] = useState("")
  const [results, setResults] = useState<EvaluationResult[]>([])
  const [error, setError] = useState<string | null>(null)

  const evaluate = () => {

    if (!regex) {
      setError("Debe ingresar una expresión regular")
      return
    }

    setError(null)

    const result = evaluateString(regex, input)

    setResults([...results, result])

    setInput("")

  }

  const clearHistory = () => {
    setResults([])
  }

  return (

    <main>

      <h1>Simulador de Expresiones Regulares</h1>

      <div className="section">
        <RegexInput
          regex={regex}
          setRegex={setRegex}
        />
      </div>

      <div className="section">
        <StringInput
          value={input}
          setValue={setInput}
          onEvaluate={evaluate}
        />
      </div>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <div className="section">
        <ResultDisplay
          results={results}
          onClear={clearHistory}
        />
      </div>

    </main>

  )

}    