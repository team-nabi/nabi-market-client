import { authHandlers } from './authHandlers'
import { dibsHandlers } from './dibsHandlers'
import { itemHandlers } from './itemHandlers'
import { suggestCheckHandlers } from './suggestCheckHandlers'
import { suggestHandlers } from './suggestHandlers'
import { testHandlers } from './testHandler'

export const handlers = [
  ...testHandlers,
  ...authHandlers,
  ...itemHandlers,
  ...dibsHandlers,
  ...suggestHandlers,
  ...suggestCheckHandlers,
]
