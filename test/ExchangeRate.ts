import * as M from '../src'
import * as ER from '../src/ExchangeRate'
import { BTC } from '../src/scale/BTC'
import { JPY } from '../src/scale/JPY'
import { unsafePositiveRational } from '../src/scale/unsafePositiveRational'
import { assertEqualDense, unsafeInteger } from './helpers'

describe('ExchangeRate', () => {
  it('exchange', () => {
    const jpybtc = ER.wrap<JPY, BTC>([unsafePositiveRational([3, 1000000]), JPY, BTC])
    const btc = M.dense.fromInteger(BTC, M.integer.one)
    const jpy = M.dense.fromInteger(JPY, unsafeInteger(2))
    const result = btc.add(ER.exchange(jpybtc)(jpy))
    assertEqualDense(result)(new M.dense.Dense(BTC, unsafePositiveRational([500003, 500000])))
  })
})
