import { authHandlers } from './authHandlers'
import { itemHandlers } from './itemHandlers'
import { suggestHandlers } from './suggestHandlers'
import { testHandlers } from './testHandler'

export const handlers = [
  ...testHandlers,
  ...authHandlers,
  ...itemHandlers,
  ...suggestHandlers,
]
