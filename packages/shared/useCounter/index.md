---
category: Utilities
---

# useCounter

实用的基础计数器。

## Basic Usage

```js
import { useCounter } from '@vueuse/core'

const { count, inc, dec, set, reset } = useCounter()
```

## Usage with options

```js
import { useCounter } from '@vueuse/core'

const { count, inc, dec, set, reset } = useCounter(1, { min: 0, max: 16 })
```
