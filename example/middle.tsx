import React, { useState } from "react"
import { Button, ConfigProvider, theme, Flex, Input, Checkbox } from 'antd'
import create, { applyMiddleWare } from 'use-state-link'
import { persist } from "./persist"
import { loger } from "./loger"

const {initialData, middleWare} = persist('count', 0)

const useCountPersist = create(
  initialData,
  applyMiddleWare(middleWare, loger)
)

const useCount = create(0)

export default () => {
  const [a, setA] = useCount()
  const [b, setB] = useCountPersist()

  const add = () => {
    setA(a+1)
    setB(b+1)
  }

  const refresh = () => location.reload()

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }} >
      <Flex gap='large' vertical>
        <div>A: {a}</div>
        <div>B: {b}</div>
        <Flex gap='small'>
          <Button onClick={add} type="primary" >加</Button>
          <Button onClick={refresh} >刷新页面</Button>
        </Flex>
      </Flex>
    </ConfigProvider>
  )

}
