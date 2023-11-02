import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'

const postLogin = async () => {
  const response = await fetch(Environment.apiAddress() + ApiEndPoint.login(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}

export { postLogin }
