import {feneck} from '../src/feneck'

describe('feneck', () => {
  test('example1', () => {
    const res = feneck(3, 1, [4,1,5])
    expect(res).toBe(5)
  })
  test('example2', () => {
    const res = feneck(8, 9, [7,9,3,2,3,8,4,6])
    expect(res).toBe(0)
  })
  test('example3', () => {
    const res = feneck(3, 0, [1000,1000,1000])
    expect(res).toBe(3000)
  })
})
