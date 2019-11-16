const fibonacci:(n: number) => number = (n:number) => {
  if (n === 0) return 1
  else if (n === 1) return 1
  else return (fibonacci(n - 1) + fibonacci(n - 2))
}

export default fibonacci
