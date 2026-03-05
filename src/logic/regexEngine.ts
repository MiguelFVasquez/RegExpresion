import type { EvaluationResult } from "../types/regexTypes"

export function evaluateString(
  regex: string,
  input: string
): EvaluationResult {

  try {

    // eliminar espacios de la expresión
    const normalized = regex.replace(/\s+/g, "")

    const pattern = new RegExp(`^${normalized}$`)

    const accepted = pattern.test(input)

    const match = input.match(new RegExp(normalized))

    return {
      input,
      accepted,
      match: match ? match[0] : undefined
    }

  } catch {

    return {
      input,
      accepted: false
    }

  }

}