import { scale } from '../Scale'
import { PositiveRational } from '../PositiveRational'
import { unsafePositiveRational } from './unsafePositiveRational'

export const RUB: unique symbol = Symbol.for('RUB')
export type RUB = typeof RUB

declare module '../Scale' {
  interface Scale {
    /** Russian ruble */
    [RUB]: {
      RUB: PositiveRational
      ruble: PositiveRational
      kopek: PositiveRational
    }
  }
}

scale[RUB] = {
  RUB: unsafePositiveRational([100, 1]),
  ruble: unsafePositiveRational([1, 1]),
  kopek: unsafePositiveRational([100, 1])
}
