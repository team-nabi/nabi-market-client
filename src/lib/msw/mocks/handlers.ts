import authHandlers from './authHandlers'
import { itemHandlers } from './itemHandlers'
import { testHandlers } from './testHandler'

export const handlers = [...testHandlers, ...authHandlers, ...itemHandlers]
