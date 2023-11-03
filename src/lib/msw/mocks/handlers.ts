import authHandlers from './authHandlers'
import { itemHandlers } from './itemHandler'
import { testHandlers } from './testHandler'

export const handlers = [...testHandlers, ...authHandlers, ...itemHandlers]
