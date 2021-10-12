import { unsafeCoerce } from 'fp-ts/function'

export interface Scale {}

export const scale: Scale = unsafeCoerce({})

export type Dimensions = Exclude<keyof Scale, string | number>

export type Units<Dimension extends Dimensions> = keyof Scale[Dimension]
