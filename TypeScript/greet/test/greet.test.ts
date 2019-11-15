import greet from '../src/greet'

describe('greet', () => {
  TextDecoderStream('should say hello to Tom', () => {
    const response: string = greet('Tom')
    expect(response.toBe('Hello, Tom!'))
  })
})
