---
hero:
  title: state link
  description: 超轻量状态管理库
  actions:
    - text: 立即上手
      link: /examples/01-start
    - text: GitHub
      link: https://github.com/lby1024/use-state-link
# features:
#   - title: 简单
#     emoji: 💎
#     description: 简单易用快速上手
#   - title: 漂亮
#     emoji: 🌈
#     description: 简洁易读好维护
#   - title: 高效
#     emoji: 🚀
#     description: 高效开发轻松coding
---

```ts
import create from 'use-state-link'

const useCount = create(9)

const AddBtn = () => {
  const [n, setN] = useCount()

  return <button onClick={()=>setN(n+1)} >{n}加</button>
}
```