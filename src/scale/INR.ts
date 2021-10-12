import { scale } from '../Scale'
import { PositiveRational } from '../PositiveRational'
import { unsafePositiveRational } from './unsafePositiveRational'

export const INR: unique symbol = Symbol.for('INR')
export type INR = typeof INR

declare module '../Scale' {
  interface Scale {
    /** Indian rupee */
    [INR]: {
      INR: PositiveRational
      rupee: PositiveRational
      paisa: PositiveRational
    }
  }
}

scale[INR] = {
  INR: unsafePositiveRational([100, 1]),
  rupee: unsafePositiveRational([1, 1]),
  paisa: unsafePositiveRational([100, 1])
}
