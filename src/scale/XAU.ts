import { scale } from '../Scale'
import { PositiveRational } from '../PositiveRational'
import { unsafePositiveRational } from './unsafePositiveRational'

export const XAU: unique symbol = Symbol.for('XAU')
export type XAU = typeof XAU

declare module '../Scale' {
  interface Scale {
    /** Gold. No canonical smallest unit */
    [XAU]: {
      'troy-ounce': PositiveRational
      grain: PositiveRational
      milligrain: PositiveRational
      micrograin: PositiveRational
      kilogram: PositiveRational
      gram: PositiveRational
      milligram: PositiveRational
      microgram: PositiveRational
    }
  }
}

scale[XAU] = {
  'troy-ounce': unsafePositiveRational([1, 1]),
  grain: unsafePositiveRational([480, 1]),
  milligrain: unsafePositiveRational([480000, 1]),
  micrograin: unsafePositiveRational([480000000, 1]),
  kilogram: unsafePositiveRational([31103477, 1000000000]),
  gram: unsafePositiveRational([31103477, 1000000]),
  milligram: unsafePositiveRational([31103477, 1000]),
  microgram: unsafePositiveRational([31103477, 1])
}
