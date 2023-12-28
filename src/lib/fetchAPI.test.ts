import { afterEach } from 'node:test'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ServerError,
  ApiError,
} from './errors'
import FetchAPI from './fetchAPI'

describe('FetchAPI 클래스', () => {
  let fetchInstance: FetchAPI
  const baseUrl = 'https://example.com/test'

  beforeEach(() => {
    fetchInstance = FetchAPI.getInstance()
    fetchInstance.setBaseURL(baseUrl)
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('GET 요청이 성공적으로 이루어지는지 테스트', async () => {
    const mockResponseBody = { id: 1, name: 'Test' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    const response = await fetchInstance.get('/test')

    expect(response).toEqual(mockResponseBody)
    expect(global.fetch).toHaveBeenCalledWith(
      `${baseUrl}/test`,
      expect.objectContaining({
        method: 'GET',
      }), // 두번째 객체가 { method: 'GET' }을 포함하고 있는지 확인
    )
  })

  it('POST 요청이 성공적으로 이루어지는지 테스트', async () => {
    const mockResponseBody = { id: 1, message: 'post success' }
    const mockRequestBody = { id: 1, name: 'post body test' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    const response = await fetchInstance.post('/test', mockRequestBody)

    expect(response).toEqual(mockResponseBody)
    expect(global.fetch).toHaveBeenCalledWith(
      `${baseUrl}/test`,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(mockRequestBody),
      }), // 두번째 객체가 { method: 'POST', body }을 포함하고 있는지 확인
    )
  })

  it('DELETE 요청이 성공적으로 이루어지는지 테스트', async () => {
    const mockResponseBody = { id: 1, name: 'Test' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    const response = await fetchInstance.delete('/test')

    expect(response).toEqual(mockResponseBody)
    expect(global.fetch).toHaveBeenCalledWith(
      `${baseUrl}/test`,
      expect.objectContaining({
        method: 'DELETE',
      }), // 두번째 객체가 { method: 'DELETE' }을 포함하고 있는지 확인
    )
  })

  it('PUT 요청이 성공적으로 이루어지는지 테스트', async () => {
    const mockResponseBody = { id: 1, message: 'put success' }
    const mockRequestBody = { id: 1, name: 'put body test' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    const response = await fetchInstance.put('/test', mockRequestBody)

    expect(response).toEqual(mockResponseBody)
    expect(global.fetch).toHaveBeenCalledWith(
      `${baseUrl}/test`,
      expect.objectContaining({
        method: 'PUT',
        body: JSON.stringify(mockRequestBody),
      }), // 두번째 객체가 { method: 'PUT' }을 포함하고 있는지 확인
    )
  })

  it('401 Unauthorized 에러 처리 검증', async () => {
    const mockResponseBody = { message: 'failed' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    await expect(fetchInstance.get('/unauthorized')).rejects.toThrow(
      UnauthorizedError,
    )
  })

  it('403 Forbidden 에러 처리 검증', async () => {
    const mockResponseBody = { message: 'failed' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    await expect(fetchInstance.get('/forbidden')).rejects.toThrow(
      ForbiddenError,
    )
  })

  it('404 Not Found 에러 처리 검증', async () => {
    const mockResponseBody = { message: 'failed' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    await expect(fetchInstance.get('/notFound')).rejects.toThrow(NotFoundError)
  })

  it('500 Server 에러 처리 검증', async () => {
    const mockResponseBody = { message: 'failed' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    await expect(fetchInstance.get('/serverError')).rejects.toThrow(ServerError)
  })

  it('예상치 못한 에러 처리 검증', async () => {
    const mockResponseBody = { message: 'failed' }
    const mockResponse = new Response(JSON.stringify(mockResponseBody), {
      status: 418, // I'm a teapot
      headers: { 'Content-Type': 'application/json' },
    })

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    await expect(fetchInstance.get('/unexpected')).rejects.toThrow(ApiError)
  })

  it('메서드 동작 과정에서 에러가 발생할 때 에러 발생 검증', async () => {
    const errorMessage = 'Network Error'
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error(errorMessage))

    await expect(fetchInstance.get('/test')).rejects.toThrow(errorMessage)
  })
})
