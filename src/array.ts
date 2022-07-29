// Простые обертки для методов Array, чтобы пофиксить проблемы с
// производительностью тайпчекера на сложных типах МойСклад, возникающие при
// использовании нативных методов массива

// TODO Костыль! Не очевидно и не юзабельно на практике. Нужно решать проблему иначе.

export function filter<T, S extends T>(
  arr: T[],
  predicate: (value: T, index: number, array: T[]) => value is S
): S[]

export function filter<T>(
  arr: T[],
  predicate: (value: T, index: number, array: T[]) => unknown
): T[]

export function filter(arr: unknown[], predicate: (...args: any[]) => unknown) {
  return arr.filter(predicate)
}

export function flatMap<T, U>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => U | ReadonlyArray<U>
): U[] {
  return arr.flatMap(callback)
}

export function map<T, U>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => U
): U[] {
  return arr.map(callbackfn)
}
