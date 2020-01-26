/**
 * @param n モンスターの数
 * @param k 必殺技の回数
 * @param h 体力array
 */
export const feneck = (n:number, k:number, h:number[]) => {
  let sum = 0
  h.sort()
  for(let i = 0; i < n - k; i++) {
    sum += h[i]
  }
  return sum
}
