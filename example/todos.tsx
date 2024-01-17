import React, { useState } from "react"
import create from 'use-state-link'
import { Button, ConfigProvider, theme, Flex, Input, Checkbox } from 'antd'

type Item = {
  id: number
  value: string
  done: boolean
}
type List = Item[]|[]
const useList = create<List>([])

const useTodos = () => {
  const [arr, setArr] = useList()

  const add = (v: any) => {
    const item = {
      id: new Date().getTime(),
      done: false,
      value: v
    }
    setArr([...arr, item])
  }

  const remove = (id: number) => {
    const target = arr.find(item => item.id === id)
    if(!target) return
    const index = arr.indexOf(target as never)
    if(index<0) return
    arr.splice(index, 1)
    setArr(arr)
  }

  const update = (id: number) => {
    const list = arr.map(item => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })
    setArr(list)
  }

  return { list: arr, add, remove, update }
}

export default () => (
  <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }} >
    <Flex gap='large' vertical>
      <InputTodo />
      <List />
    </Flex>
  </ConfigProvider>
)

const InputTodo = () => {
  const [v, setV] = useState('')
  const todos = useTodos()

  const add = () => {
    todos.add(v)
    setV('')
  }

  return (
    <Flex gap='small' style={{width: 300}} >
      <Input value={v} onChange={e => setV(e.target.value)} />
      <Button onClick={add} >todo</Button>
    </Flex>
  )
}

const List = () => {
  const { remove, update, list } = useTodos()
  
  return (
    <div>
      {
        list.map(item => (
          <Flex key={item.id} gap='small' align="center">
            <Checkbox onClick={()=>update(item.id)}>
              {item.value}
            </Checkbox>

            <Button type='link' onClick={()=>remove(item.id)} >删除</Button>
          </Flex>
        ))
      }
    </div>
  )
}
