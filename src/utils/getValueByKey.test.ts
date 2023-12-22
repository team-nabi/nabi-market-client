import { describe, it, expect } from 'vitest'
import { getValueByKey } from './getValueByKey'

describe('getValueByKey 함수 테스트', () => {
  it('정상적인 경우: 일치하는 키가 있는 경우 해당 값 반환', () => {
    const array = [
      { key: 'name', value: 'Alice' },
      { key: 'age', value: '30' },
    ]
    const result = getValueByKey(array, 'name')
    expect(result).toBe('Alice')
  })

  it('키가 없는 경우: 일치하는 키가 없을 때 undefined 반환', () => {
    const array = [
      { key: 'name', value: 'Alice' },
      { key: 'age', value: '30' },
    ]
    const result = getValueByKey(array, 'gender')
    expect(result).toBeUndefined()
  })

  it('빈 배열: 빈 배열을 전달했을 때 undefined 반환', () => {
    const array = [] as any
    const result = getValueByKey(array, 'name')
    expect(result).toBeUndefined()
  })

  it('잘못된 형식의 입력: 객체 배열 대신 다른 형식의 입력 처리', () => {
    const invalidInput = 'This is not an array'
    const result = () => getValueByKey(invalidInput, 'name')
    expect(result).toThrow(TypeError)
  })
})
