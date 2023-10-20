import { SetupWorker, SharedOptions } from 'msw'
import { SetupServer } from 'msw/node'

let server: SetupServer | null = null
let worker: SetupWorker | null = null
const option: SharedOptions = {
  onUnhandledRequest: 'bypass',
}
export const initMockApi = async () => {
  if (server) {
    server.close()
    server = null
  }
  if (worker) {
    worker.stop()
    worker = null
  }

  if (typeof window === 'undefined') {
    server = (await import('@/lib/msw/server')).server
    server.listen(option)
  } else {
    worker = (await import('@/lib/msw/worker')).worker
    worker.start(option)
  }

  return [server, worker]
}
