import { setupWorker } from 'msw'
import { handlers } from '@/lib/msw/mocks/handlers'

export const worker = setupWorker(...handlers)
