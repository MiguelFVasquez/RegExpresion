export function normalizeRegex(regex: string): string {
  return regex.replace(/\s+/g, "")
}

export function isValidRegex(regex: string): boolean {

  try {

    const normalized = normalizeRegex(regex)
    new RegExp(normalized)

    return true

  } catch {

    return false

  }

}