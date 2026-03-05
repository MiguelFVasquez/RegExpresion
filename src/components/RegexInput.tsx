interface Props {

  regex: string
  setRegex: (value: string) => void

}

export default function RegexInput({ regex, setRegex }: Props) {
    
  return (

    <div>

      <h2>Expresión Regular</h2>

      <div className="input-group">

        <input
          type="text"
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
          placeholder="Ej: a*b*c"
        />

      </div>

    </div>

  )

}