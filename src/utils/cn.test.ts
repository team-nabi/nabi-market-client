import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn utility 함수', () => {
  it('classname을 적절히 merge합니다', () => {
    const result = cn('bg-red-500', 'text-white', [
      'hover:bg-blue-500',
      'active:bg-green-500',
    ])
    expect(result).toBe(
      'bg-red-500 text-white hover:bg-blue-500 active:bg-green-500',
    )
  })

  it('falsy한 값은 무시합니다', () => {
    const result = cn('bg-red-500', false && 'text-white', [
      'hover:bg-blue-500',
      null,
      undefined,
      'active:bg-green-500',
    ])
    expect(result).toBe('bg-red-500 hover:bg-blue-500 active:bg-green-500')
  })
})
