---
category: Utilities
---

# useStepper

为构建多步骤向导界面提供帮助。

## Usage

### 步骤作为数组

```js
import { useStepper } from '@vueuse/core'

const {
  steps,
  stepNames,
  index,
  current,
  next,
  previous,
  isFirst,
  isLast,
  goTo,
  goNext,
  goPrevious,
  goBackTo,
  isNext,
  isPrevious,
  isCurrent,
  isBefore,
  isAfter,
} = useStepper([
  'billing-address',
  'terms',
  'payment',
])

// Access the step through `current`
console.log(current.value) // 'billing-address'
```

### 步骤作为对象

```js
import { useStepper } from '@vueuse/core'

const {
  steps,
  stepNames,
  index,
  current,
  next,
  previous,
  isFirst,
  isLast,
  goTo,
  goNext,
  goPrevious,
  goBackTo,
  isNext,
  isPrevious,
  isCurrent,
  isBefore,
  isAfter,
} = useStepper({
  'user-information': {
    title: 'User information',
  },
  'billing-address': {
    title: 'Billing address',
  },
  'terms': {
    title: 'Terms',
  },
  'payment': {
    title: 'Payment',
  },
})

// Access the step object through `current`
console.log(current.value.title) // 'User information'
```
