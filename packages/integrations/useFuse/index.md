---
category: '@Integrations'
---

# useFuse

在零依赖库 [Fuse.js](https://github.com/krisk/fuse) 之上使用可组合项轻松实现模糊搜索。

来自 Fuse.js 网站：

> 什么是模糊搜索？
> 
> 一般来说，模糊搜索（更正式地称为近似字符串匹配）是一种查找与给定模式（而不是完全）近似相等的字符串的技术。

## Install Fuse.js as a peer dependency

### NPM

```bash
npm install fuse.js
```

### Yarn

```bash
yarn add fuse.js
```

## Usage

```ts
import { ref } from 'vue'
import { useFuse } from '@vueuse/integrations/useFuse'

const data = [
  'John Smith',
  'John Doe',
  'Jane Doe',
  'Phillip Green',
  'Peter Brown',
]

const input = ref('Jhon D')

const { results } = useFuse(input, data)

/*
 * Results:
 *
 * { "item": "John Doe", "index": 1 }
 * { "item": "John Smith", "index": 0 }
 * { "item": "Jane Doe", "index": 2 }
 *
 */
```
