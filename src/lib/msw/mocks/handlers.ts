import { authHandlers } from './authHandlers'
import { cardHandlers } from './cardHandler'
import { dibsHandlers } from './dibsHandlers'
import { imageHandlers } from './imageHandlers'
import { suggestionHandlers } from './suggestionHandlers'
import { testHandlers } from './testHandler'
import { userHandlers } from './userHandlers'

export const handlers = [
  ...testHandlers,
  ...authHandlers,
  ...cardHandlers,
  ...dibsHandlers,
  ...suggestionHandlers,
  ...userHandlers,
  ...imageHandlers,
]
