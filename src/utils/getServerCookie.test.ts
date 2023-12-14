import { describe, expect, it, vi } from 'vitest'
import { getServerCookie, setServerCookie } from './getServerCookie'

const mockSet = vi.fn()

vi.mock('next/headers', () => ({
  cookies: vi.fn(() => ({
    get: vi.fn((key) => (key === 'token' ? { value: 'test-token' } : null)),
    set: mockSet,
  })),
}))

vi.mock('@/config/environment', () => ({
  Environment: {
    tokenName: vi.fn(() => 'token'),
  },
}))

describe('getServerCookie 함수 테스트', () => {
  it('getServerCookie는 Environment의 토큰 값을 반환한다.', () => {
    const token = getServerCookie()
    expect(token).toBe('test-token')
  })
})

describe('setServerCookie 함수 테스트', () => {
  it('setServerCookie는 value가 falsy일 경우 저장하지 않는다.', () => {
    setServerCookie({ key: 'user', value: undefined })
    expect(mockSet).not.toHaveBeenCalled()
  })

  it('setServerCookie는 입력 받은 key, value를 쿠키에 저장한다.', () => {
    setServerCookie({ key: 'user', value: 'kim' })
    expect(mockSet).toHaveBeenCalledWith('user', 'kim')
  })
})
