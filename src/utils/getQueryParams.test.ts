import { describe, it, expect } from 'vitest'
import { getQueryParams } from './getQueryParams'

describe('getQueryParams 함수 테스트', () => {
  it('일반적인 경우: 객체를 쿼리 파라미터 문자열로 변환', () => {
    const params = { name: 'Alice', age: '30' }
    const result = getQueryParams(params)
    expect(result).toBe('name=Alice&age=30')
  })

  it('빈 객체: 빈 객체를 전달했을 때 빈 문자열 반환', () => {
    const params = {}
    const result = getQueryParams(params)
    expect(result).toBe('')
  })

  it('null 또는 undefined 값 포함: null 또는 undefined 값을 무시하고 문자열 변환', () => {
    const params = {
      name: 'Alice',
      age: null,
      gender: undefined,
      city: 'New York',
    }
    const result = getQueryParams(params)
    expect(result).toBe('name=Alice&city=New+York')
  })

  it('특수 문자 처리: 특수 문자를 올바르게 인코딩', () => {
    const params = {
      'user name': 'Alice & Bob',
      city: 'New York',
      details: 'age=30&height=170',
    }
    const result = getQueryParams(params)
    expect(result).toBe(
      'user+name=Alice+%26+Bob&city=New+York&details=age%3D30%26height%3D170',
    )
  })
})
