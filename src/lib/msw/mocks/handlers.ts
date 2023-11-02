import { itemHandlers } from './itemHandler'
import { testHandlers } from './testHandler'

export const handlers = [...testHandlers, ...itemHandlers]
