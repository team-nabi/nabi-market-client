import authHandlers from './authHandlers'
import { itemHandlers } from './itemHandler'
import { testHandlers } from './testHandler'
import { itemHandlers } from './itemHandlers'

export const handlers = [...testHandlers, ...authHandlers, ...itemHandlers]
