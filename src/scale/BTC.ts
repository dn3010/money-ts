import { scale } from '../Scale'
import { PositiveRational } from '../PositiveRational'
import { unsafePositiveRational } from './unsafePositiveRational'

export const BTC: unique symbol = Symbol.for('BTC')
export type BTC = typeof BTC

declare module '../Scale' {
  interface Scale {
    /** Bitcoin */
    [BTC]: {
      BTC: PositiveRational
      bitcoin: PositiveRational
      satoshi: PositiveRational
    }
  }
}

scale[BTC] = {
  BTC: unsafePositiveRational([100000000, 1]),
  bitcoin: unsafePositiveRational([1, 1]),
  satoshi: unsafePositiveRational([100000000, 1])
}
