import fibonacci from '../src/fibonacci'

describe('fibonacci', () => {
  test('should return 1 when 0', () => {
    const responce = fibonacci(0)
    expect(responce).toBe(1)
  })

  test('should return 1 when 1', () => {
    const responce = fibonacci(1)
    expect(responce).toBe(1)
  })

  test('should return 1 when 2', () => {
    const responce = fibonacci(2)
    expect(responce).toBe(2)
  })

  test('should return 1 when 10', () => {
    const responce = fibonacci(10)
    expect(responce).toBe(89)
  })
})
