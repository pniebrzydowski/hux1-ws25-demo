export const transformArray = (originalArray: number[][]): number[][] => {
  const newArray = []
  for (let i = 0; i < originalArray.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      const newRow = []
      for (let k = 0; k < 3; k++) {
        const row = originalArray[i + k]
        if (row) {
          const val1 = row[j * 3]
          const val2 = row[j * 3 + 1]
          const val3 = row[j * 3 + 2]
          if (val1 !== undefined && val2 !== undefined && val3 !== undefined) {
            newRow.push(val1, val2, val3)
          }
        }
      }
      newArray.push(newRow)
    }
  }
  return newArray
}
