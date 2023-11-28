import { cookies } from 'next/headers'
import { Environment } from '@/config/environment'

const getServerCookie = () => {
  const cookieStore = cookies()
  const token = cookieStore.get(Environment.tokenName())

  return token?.value
}

const setServerCookie = ({
  key,
  value,
}: {
  key: string
  value: string | undefined
}) => {
  if (!value) return
  const cookieStore = cookies()
  cookieStore.set(key, value)
}

export { getServerCookie, setServerCookie }
