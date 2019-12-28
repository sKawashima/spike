import twosum from '../src/twosum'

describe('twosum', () => {
  test('1,3,6,7: 10', () => {
    const responce = twosum([1,3,6,7], 10)
    expect(responce).toBe('7, 3')
  })

  test('1,2,3,5,8: 9', () => {
    const responce = twosum([1,2,3,5,8], 9)
    expect(responce).toBe('8, 1')
  })
})
