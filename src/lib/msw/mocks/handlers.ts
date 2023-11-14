import { authHandlers } from './authHandlers'
import { itemHandlers } from './cardHandler'
import { dibsHandlers } from './dibsHandlers'
import { imageHandlers } from './imageHandlers'
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
  ...imageHandlers,
]
