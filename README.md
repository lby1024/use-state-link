### 下载

```
npm i use-state-link --save
```

### 使用
```ts
import create from 'use-state-link'

const useCount = create(9)

const AddBtn = () => {
  const [n, setN] = useCount()

  return <button onClick={()=>setN(n+1)} >{n}加</button>
}

const MinusBtn = () => {
  const [n, setN] = useCount()

  return <button onClick={()=>setN(n-1)} >{n}减</button>
}
```
