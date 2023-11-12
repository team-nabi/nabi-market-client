const ErrorMessages = {
  Unauthorized: '인증되지 않은 사용자입니다.',
  Forbidden: '해당 요청에 대한 권한이 없습니다.',
  NotFound: '해당하는 요청을 찾을 수 없습니다.',
  ServerError: '서버에 오류가 발생했습니다.',
} as const

export default ErrorMessages
