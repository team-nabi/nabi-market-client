import { authHandlers } from './authHandlers'
import { dibsHandlers } from './dibsHandlers'
import { itemHandlers } from './itemHandlers'
import { suggestHandlers } from './suggestHandlers'
import { testHandlers } from './testHandler'
import { userHandlers } from './userHandlers'

export const handlers = [
  ...testHandlers,
  ...authHandlers,
  ...itemHandlers,
  ...dibsHandlers,
  ...suggestHandlers,
  ...userHandlers,
]
