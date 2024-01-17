import { Fn } from "./type"

export const applyMiddleWare = (...middleWare: Fn[]) => (get: Fn, set: Fn) => {
  middleWare = middleWare.map(fn => fn({ get, set }))

  const fn = (next: Fn) => (value: any) => {
    set(value)
    next(value)
  }

  middleWare = [...middleWare, fn]

  const newSet = (value: any) => {
    run(middleWare, value)
  }

  return newSet
}

const run = (middleWare: Fn[], value: any) => {
  const chooseFn = (i: number, value: any) => {
    const fn = middleWare[i]
    const next = (value: any) => chooseFn(i+1, value)
    fn && fn(next)(value)
  }
  chooseFn(0, value)
}
