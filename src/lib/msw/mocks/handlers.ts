import { authHandlers } from './authHandlers'
import { dibsHandlers } from './dibsHandlers'
import { itemHandlers } from './itemHandlers'
import { suggestHandlers } from './suggestHandlers'
import { suggestionCheckHandlers } from './suggestionCheckHandlers'
import { testHandlers } from './testHandler'

export const handlers = [
  ...testHandlers,
  ...authHandlers,
  ...itemHandlers,
  ...dibsHandlers,
  ...suggestHandlers,
  ...suggestionCheckHandlers,
]
