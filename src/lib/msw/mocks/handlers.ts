import authHandlers from './authHandlers'
import { testHandlers } from './testHandler'
import { itemHandlers } from './itemHandlers'

export const handlers = [...testHandlers, ...authHandlers, ...itemHandlers]
