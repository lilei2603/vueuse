---
category: '@Integrations'
---

# useQRCode

[`qrcode`](https://github.com/soldair/node-qrcode) 的封装

## Install 

```bash
npm i qrcode
```

## Usage

```ts
import { useQRCode } from '@vueuse/integrations/useQRCode'

// `qrcode` will be a ref of data URL
const qrcode = useQRCode('text-to-encode')
```

或将 ref 传递给它，返回的数据 URL ref 将随着源 ref 的更改而更改。

```ts
import { ref } from 'vue'
import { useQRCode } from '@vueuse/integrations/useQRCode'

const text = ref('text-to-encode')
const qrcode = useQRCode(text)
```

```html
<input v-model="text" type="text">
<img :src="qrcode" alt="QR Code" />
```
