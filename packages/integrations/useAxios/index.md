---
category: '@Integrations'
---

# useAxios

[`axios`](https://github.com/axios/axios) 的封装

## Install

```bash
npm i axios
```

## Usage

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { data, isFinished } = useAxios('/api/posts')
```

或使用 axios 的实例

```ts
import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

const instance = axios.create({
  baseURL: '/api',
})

const { data, isFinished } = useAxios('/posts', instance)
```

使用带有配置选项的 axios 实例

```ts
import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

const instance = axios.create({
  baseURL: '/api',
})

const { data, isFinished } = useAxios('/posts', { method: 'POST' }, instance)
```

当您不传递 `url` 时。默认值为 `{immediate: false}`
```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios()
execute(url)
```

这里的执行函数url是可选的，url2会代替url1。
```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios(url1, {}, { immediate: false })
execute(url2)
```

执行函数以网络请求的结果解析。
```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios()
const result = await execute(url)
```

执行函数以网络请求的结果解析。

```ts
import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

const instance = axios.create({
  baseURL: '/api',
})

const { data, isFinished } = useAxios('/posts', { method: 'POST' }, instance, {
  immediate: false,
})
```
