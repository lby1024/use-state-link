---
nav: 案例
title: 中间件
order: 12
toc: content
---

```ts
import create, { applyMiddleWare } from 'use-state-link'
import { persist } from "./persist"
import { loger } from "./loger"

const {initialData, middleWare} = persist('count', 0)

const useCountPersist = create(
  initialData,
  applyMiddleWare(middleWare, loger)
)
```

这里用到了两个中间件: `loger`和`persist`
- `loger`的作用是数据变化前和后打印数据值
- `persist`的作用是将数据保存在localstorage中,实现数据持久化

<code src='../../example/middle' ></code>