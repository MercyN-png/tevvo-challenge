import { describe, it, expect } from 'vitest'
import { sortCountriesByName } from '../utils/sortCountries'

describe('sortCountriesByName', () => {
  it('should sort countries alphabetically', () => {
    const input = [
      { name: { common: 'Kenya' } },
      { name: { common: 'Brazil' } },
      { name: { common: 'Austria' } }
    ]
    const result = sortCountriesByName(input)
    expect(result.map(c => c.name.common)).toEqual(['Austria', 'Brazil', 'Kenya'])
  })
})
