import { Environment } from '@/config/environment'

class FetchAPI {
  private baseURL: string
  private headers: { [key: string]: string }

  private static instance: FetchAPI

  private constructor() {
    this.baseURL = Environment.apiAddress() ?? ''
    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  public static getInstance(): FetchAPI {
    if (!FetchAPI.instance) {
      FetchAPI.instance = new FetchAPI()
    }
    return FetchAPI.instance
  }

  public setBaseURL(url: string): void {
    this.baseURL = url
  }

  public setDefaultHeader(key: string, value: string): void {
    this.headers[key] = value
  }

  public async get(
    endpoint: string,
    customHeaders: { [key: string]: string } = {},
  ): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'GET',
      headers: { ...this.headers, ...customHeaders },
    })
    return response
  }

  public async post(
    endpoint: string,
    body: any,
    customHeaders: { [key: string]: string } = {},
  ): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: { ...this.headers, ...customHeaders },
      body: JSON.stringify(body),
    })
    return response
  }

  public async put(
    endpoint: string,
    body: any,
    customHeaders: { [key: string]: string } = {},
  ): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PUT',
      headers: { ...this.headers, ...customHeaders },
      body: JSON.stringify(body),
    })
    return response
  }

  public async delete(
    endpoint: string,
    customHeaders: { [key: string]: string } = {},
  ): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'DELETE',
      headers: { ...this.headers, ...customHeaders },
    })
    return response
  }
}

export default FetchAPI
