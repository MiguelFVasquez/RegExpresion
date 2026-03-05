interface Props {

  value: string
  setValue: (value: string) => void
  onEvaluate: () => void

}

export default function StringInput({ value, setValue, onEvaluate }: Props) {

  return (

    <div>

      <h2>Cadena a evaluar</h2>

      <div className="input-group">

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ingrese una cadena para evaluar si pertenece al lenguaje definido por la expresión regular"
        />

        <button onClick={onEvaluate}>
          Evaluar
        </button>

      </div>

    </div>

  )

}