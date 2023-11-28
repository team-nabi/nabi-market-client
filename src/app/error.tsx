'use client'

import ErrorGateway from '@/components/domain/errors/ErrorGateway'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({
  error,
  reset,
}: Readonly<ErrorPageProps>) {
  return <ErrorGateway error={error} reset={reset} />
}
