import { authHandlers } from './authHandlers'
import { dibsHandlers } from './dibsHandlers'
import { itemHandlers } from './itemHandlers'
import { myItemHandlers } from './myItemHandlers'
import { suggestCheckHandlers } from './suggestCheckHandlers'
import { suggestHandlers } from './suggestHandlers'
import { testHandlers } from './testHandler'
import { userHandlers } from './userHandlers'

export const handlers = [
  ...testHandlers,
  ...authHandlers,
  ...itemHandlers,
  ...dibsHandlers,
  ...suggestHandlers,
  ...suggestCheckHandlers,
  ...myItemHandlers,
  ...userHandlers,
]
