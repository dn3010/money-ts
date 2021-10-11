---
title: ExchangeRate.ts
nav_order: 4
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [ExchangeRate (interface)](#exchangerate-interface)
- [unwrap (constant)](#unwrap-constant)
- [wrap (constant)](#wrap-constant)
- [exchange (function)](#exchange-function)
- [getEq (function)](#geteq-function)
- [getOrd (function)](#getord-function)

---

# ExchangeRate (interface)

**Signature**

```ts
export interface ExchangeRate<S, D> extends Newtype<['ExchangeRate', S, D], [PR.PositiveRational, S, D]> {}
```

# unwrap (constant)

**Signature**

```ts
export const unwrap: <S, D>(er: ExchangeRate<S, D>) => [PR.PositiveRational, S, D] = ...
```

# wrap (constant)

**Signature**

```ts
export const wrap: <S, D>(er: [PR.PositiveRational, S, D]) => ExchangeRate<S, D> = ...
```

# exchange (function)

**Signature**

```ts
export const exchange =
  <S extends string, D extends string>(er: ExchangeRate<S, D>) =>
  (s: Dense<S>): Dense<D> => ...
```

# getEq (function)

**Signature**

```ts
export const getEq = <S, D>(): Eq<ExchangeRate<S, D>> => ...
```

# getOrd (function)

**Signature**

```ts
export const getOrd = <S, D>(): Ord<ExchangeRate<S, D>> => ...
```
