
import { itemHandlers } from './itemHandler'
import authHandlers from './authHandlers'
import { testHandlers } from './testHandler'

export const handlers = [...testHandlers, ...authHandlers]
