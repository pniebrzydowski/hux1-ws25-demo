import { describe, it, expect } from 'vitest'
import { isValidSudokuNumber } from './isValidSudokuNumber'

describe('isValidSudokuNumber', () => {
  it('returns true for integers 1 through 9', () => {
    for (let n = 1; n <= 9; n++) {
      expect(isValidSudokuNumber(n)).toBe(true)
    }
  })

  it('returns false for integers outside the 1-9 range', () => {
    const cases = [0, -1, 10, 100]
    cases.forEach((n) => expect(isValidSudokuNumber(n)).toBe(false))
  })

  it('returns false for non-integer numbers even if within range', () => {
    const cases = [1.1, 2.5, 8.0001]
    cases.forEach((n) => expect(isValidSudokuNumber(n)).toBe(false))
  })

  it('returns false for NaN and infinities', () => {
    const cases = [NaN, Infinity, -Infinity]
    cases.forEach((n) => expect(isValidSudokuNumber(n)).toBe(false))
  })

  it('accepts numeric expressions and Number(...) results that are valid integers in range', () => {
    expect(isValidSudokuNumber(Number('5'))).toBe(true)
    expect(isValidSudokuNumber(2 + 3)).toBe(true)
    expect(isValidSudokuNumber(9.0)).toBe(true)
  })
})
