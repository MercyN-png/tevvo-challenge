export function sortCountriesByName(countries) {
  return [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  )
}
