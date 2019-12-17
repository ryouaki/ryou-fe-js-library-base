import { echoHello } from './../src/index'

describe('Demo test', () => {
  test('Say hello world', () => {
    const str = echoHello('world')
    expect(str).toBe('Hello world');
  });
})