import React from 'react'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
import ForbiddenErrorTemplate from '@/components/domain/errors/ForbiddenErrorTemplate'
import NotFoundErrorTemplate from '@/components/domain/errors/NotFoundErrorTemplate'
import ErrorMessages from '@/config/errorMessages'

type ErrorGatewayProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorGateway = ({ error, reset }: ErrorGatewayProps) => {
  switch (error.message) {
    case ErrorMessages.Forbidden:
      return <ForbiddenErrorTemplate onClickButton={() => reset()} />
    case ErrorMessages.NotFound:
      return <NotFoundErrorTemplate onClickButton={() => reset()} />
    default:
      return <DefaultErrorTemplate onClickButton={() => reset()} />
  }
}

export default ErrorGateway
