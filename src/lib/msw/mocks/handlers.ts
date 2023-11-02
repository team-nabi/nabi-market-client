import { itemHandler } from './itemHandlers'
import { testHandlers } from './testHandler'

export const handlers = [...testHandlers, ...itemHandler]
