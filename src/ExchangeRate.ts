import { Newtype } from 'newtype-ts'
import { Eq } from 'fp-ts/Eq'
import { Ord } from 'fp-ts/Ord'
import { Dense } from './Dense'
import * as PR from './PositiveRational'
import { unsafeCoerce } from 'fp-ts/function'

export interface ExchangeRate<S, D> extends Newtype<['ExchangeRate', S, D], [PR.PositiveRational, S, D]> {}

export const wrap: <S, D>(er: [PR.PositiveRational, S, D]) => ExchangeRate<S, D> = unsafeCoerce

export const unwrap: <S, D>(er: ExchangeRate<S, D>) => [PR.PositiveRational, S, D] = unsafeCoerce

export const exchange =
  <S extends symbol, D extends symbol>(er: ExchangeRate<S, D>) =>
  (s: Dense<S>): Dense<D> => {
    const [r, , d] = unwrap(er)
    const d2 = new Dense(d, s.value)
    return d2.mul(r)
  }

export const getEq = <S, D>(): Eq<ExchangeRate<S, D>> => unsafeCoerce(PR.Eq)

export const getOrd = <S, D>(): Ord<ExchangeRate<S, D>> => unsafeCoerce(PR.Ord)
