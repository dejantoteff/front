export function normalizeLanguage(language: Language): string {
  return `${language.toLowerCase()}-${language}`
}
