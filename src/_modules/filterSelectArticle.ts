import { has } from 'rambdax'

export function filterSelectArticle(db: DBInstance[]): any {
  const hasDePart = db.filter(
    has('dePart'),
  )

  const filtered = hasDePart.filter(
    x => x.dePart.includes('der'),
  )

  return filtered
}
