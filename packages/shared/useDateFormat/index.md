---
category: Utilities
---

# useDateFormat

受 [dayjs](https://github.com/iamkun/dayjs) 启发，根据传入的token字符串获取格式化日期。

**所有可用格式的列表（默认为 HH:mm:ss）：**

| 格式    | 输出             | 描述                                   |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | 两位数年份                              |
| `YYYY` | 2018             | 四位数年份                              |
| `M`    | 1-12             | 月份，从 1 开始                         |
| `MM`   | 01-12            | 月份，两位数                            |
| `D`    | 1-31             | 月份中的日期                            |
| `DD`   | 01-31            | 月份中的日期，2 位数字                   |
| `H`    | 0-23             | 小时                                   |
| `HH`   | 00-23            | 小时， 2 位数字                         |
| `h`    | 1-12             | 小时，12 小时制                         |
| `hh`   | 01-12            | 小时，12 小时制，2 位数字                |
| `m`    | 0-59             | 分钟                                  |
| `mm`   | 00-59            | 分钟，2 位数字                         |
| `s`    | 0-59             | 秒                                    |
| `ss`   | 00-59            | 秒，2 位数字                            |
| `SSS`  | 000-999          | 毫秒，3 位数字                          |
| `d`    | 0-6              | 星期几，星期日为 0                      |

## Usage

```html
<script setup lang="ts">

import { ref, computed } from 'vue-demi'
import { useNow, useDateFormat } from '@vueuse/core'

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

</script>

<template>
  <div>{{ formatted }}</div>
</template>
```
