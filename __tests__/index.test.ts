import { hello } from '../library/index'

test('CONSTANTS', () => {
  const response = hello()
	expect(response).toBe('dis')
})
