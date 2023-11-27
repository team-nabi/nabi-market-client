import { authHandlers } from './authHandlers'
import { dibsHandlers } from './dibsHandlers'
import { historyHandlers } from './historyHandlers'
import { imageHandlers } from './imageHandlers'
import { suggestionHandlers } from './suggestionHandlers'
import { testHandlers } from './testHandler'
import { userHandlers } from './userHandlers'

export const handlers = [
  ...testHandlers,
  ...authHandlers,
  ...dibsHandlers,
  ...suggestionHandlers,
  ...userHandlers,
  ...historyHandlers,
  ...imageHandlers,
]
