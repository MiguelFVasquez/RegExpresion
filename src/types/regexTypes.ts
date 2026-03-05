export interface EvaluationResult {
  input: string
  accepted: boolean
  match?: string
}

export interface RegexEvaluation {
  regex: string
  results: EvaluationResult[]
}