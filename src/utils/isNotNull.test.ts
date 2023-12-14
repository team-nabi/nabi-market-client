import { describe, expect, expectTypeOf, it } from 'vitest'
import { isNotNull } from './isNotNull'

describe('isNotNull 함수 테스트', () => {
  it('null일 경우 false 반환', () => {
    expect(isNotNull(null)).toBe(false)
  })

  it('null이 아닐 경우 true 반환', () => {
    expect(isNotNull(undefined)).toBe(true)
  })

  it('null을 제외한 해당 타입 반환', () => {
    expectTypeOf(isNotNull).toBeFunction()

    const originalValues = ['hi', null, 'there']
    const filteredValues = originalValues.filter(isNotNull<string>)
    //FIXME: 타입 검사에 대한 유효성 처리(라이브러리 문제)
    expectTypeOf(filteredValues).toMatchTypeOf<string[]>()
  })
})
