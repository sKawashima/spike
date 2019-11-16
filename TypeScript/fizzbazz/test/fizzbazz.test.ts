import fizzbazz from '../src/fizzbazz'

describe('fizzbazz', () => {
  test('should return 1 when 1', () => {
    const response:string = fizzbazz(1)
    expect(response).toBe('1')
  })

  test('should return fizz when 12', () => {
    const response:string = fizzbazz(12)
    expect(response).toBe('fizz')
  })

  test('should return bazz when 10', () => {
    const response:string = fizzbazz(10)
    expect(response).toBe('bazz')
  })

  test('should return fizzbazz when 15', () => {
    const response:string = fizzbazz(15)
    expect(response).toBe('fizzbazz')
  })
})
