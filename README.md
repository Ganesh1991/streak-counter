# @Ganesh1991/streak-counter - basic typescript app

## Install

```shell
npm add @Ganesh1991/streak-counter
```

## Usage

```
import {streakCounter} from '@jsjoeio/streak-counter'

const today = new Date()
const streak = streakCounter(localStorage, today)
// streak returns an object:
// {
// currentCount: 1,
// lastLoginDate: "11/11/2021",
// startDate: "11/11/2021",
// }
```
