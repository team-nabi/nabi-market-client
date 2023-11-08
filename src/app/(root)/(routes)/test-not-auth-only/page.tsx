'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/useToast'
import { handleApiError } from '@/lib/handleApiError'
import { getTest } from '@/services/test/test'

const NotAuthOnly = () => {
  const router = useRouter()
  const { toast } = useToast()

  const onClickButton = async () => {
    try {
      await getTest()
    } catch (error) {
      const { shouldRedirect, message } = handleApiError(error)
      if (shouldRedirect) {
        router.push(shouldRedirect)
      } else {
        console.log(shouldRedirect, error)
        toast({
          title: 'Error',
          description: message,
          duration: 1000,
        })
      }
    }
  }

  return (
    <div>
      NotAuthOnly
      <br />
      <button onClick={onClickButton}>login</button>
    </div>
  )
}

export default NotAuthOnly
