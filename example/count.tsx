import React from "react"
import create from 'use-state-link'
import { Button, ConfigProvider, theme, Flex } from 'antd'

const useCount = create(9)

export default () => {

  return <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }} >
    <Flex gap='large'>
      <Add />
      <Minus />
    </Flex>
  </ConfigProvider>
}

const Add = () => {
  const [n, setN] = useCount()

  return <Button onClick={()=>setN(n+1)} type='primary' >{n}加</Button>
}

const Minus = () => {
  const [n, setN] = useCount()

  return <Button onClick={()=>setN(n-1)} >{n}减</Button>
}