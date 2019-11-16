export default (n:number) => {
  if (n % (3 * 5) === 0) {
    return 'fizzbazz'
  } else if (n % 3 === 0) {
    return 'fizz'
  } else if (n % 5 === 0) {
    return 'bazz'
  } else {
    return n.toString()
  }
}
