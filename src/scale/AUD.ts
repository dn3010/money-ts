import { scale } from '../Scale'
import { PositiveRational } from '../PositiveRational'
import { unsafePositiveRational } from './unsafePositiveRational'

export const AUD: unique symbol = Symbol.for('AUD')
export type AUD = typeof AUD

declare module '../Scale' {
  interface Scale {
    /** Australian dollar */
    [AUD]: {
      AUD: PositiveRational
      dollar: PositiveRational
      cent: PositiveRational
    }
  }
}

scale[AUD] = {
  AUD: unsafePositiveRational([100, 1]),
  dollar: unsafePositiveRational([1, 1]),
  cent: unsafePositiveRational([100, 1])
}
