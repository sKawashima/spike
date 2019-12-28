const twosum = (numbers:number[], k:number) => {
  const numbersObject:{[key:string]: boolean} = {}

  for (let i = 0;i < numbers.length;i++) {
    if (numbersObject[`${k - numbers[i]}`]) {
      return `${numbers[i]}, ${k - numbers[i]}`
    } else {
      numbersObject[`${numbers[i]}`] = true
    }
  }

  return 'not found'
}

export default twosum
