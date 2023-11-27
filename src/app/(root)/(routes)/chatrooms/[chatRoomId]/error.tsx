'use client'

// Error components must be Client Components
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import ErrorMessages from '@/config/errorMessages'
import { useToast } from '@/hooks/useToast'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()
  const { toast } = useToast()
  useEffect(() => {
    if (error.message === ErrorMessages.Forbidden) {
      toast({
        title: 'Forbidden',
        description: ErrorMessages.Forbidden,
        duration: 2000,
      })
    }
    if (error.message === ErrorMessages.Unauthorized) {
      router.push(AppPath.login())
      toast({
        title: 'Unauthorized',
        description: ErrorMessages.Unauthorized,
        duration: 2000,
      })
    }
    if (error.message === ErrorMessages.NotFound) {
      toast({
        title: 'Not Found',
        description: ErrorMessages.NotFound,
        duration: 2000,
      })
    }
  }, [error, router, toast])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>
        <strong>Error:</strong> {error.message} ({error?.name})
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
