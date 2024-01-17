import { useState } from "react"
import { useMounted } from "./useMounted"
import { deepClone } from "./deepclone"
import { Fn } from "./type"
/**
 * @param applyMiddleWare 已经执行过一次的applyMiddleWare
 */
export const createStore = <T>(initState: T, applyMiddleWare?: Fn) => {
  let state:T = initState
  const renders: Function[] = []

  const get = () => deepClone(state) as T

  const set = (v: T) => {
    state = v
    renders.forEach(fn => fn())
  }

  let newSet:Fn
  if (applyMiddleWare) {
    newSet = applyMiddleWare(get, set)
  }

  const subscrible = (fn: Function) => {
    renders.push(fn)
    return () => {
      const index = renders.indexOf(fn)
      renders.splice(index, 1)
    }
  }

  return (data?: any) => {
    const [_, update] = useState({})
    const setFn = newSet || set
    
    useMounted(() => {
      if(data) setFn(data)
      const unsub = subscrible(()=>update({}))
      return () => unsub()
    })

    return [get(), setFn] as const
  }
}

// export default createStore