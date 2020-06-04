# Vue Influe

## Install

Simple Influe2 Vue plugin

```bash
npm install vue-influ2
```

Start using it in your Vue application.

```js
import Vue from 'vue'
import { influTracker } from 'vue-influ2'

Vue.use(influTracker, {
    id: 'XXXXXXX' // Influe2 tracker id
})
// (https://www.influ2.com/tracker?clid=XXXXXX) - tracker id
```

### Parameters

#### Id:

Your Influe2 tracker id is a required parameter.

```js 
id: 'XXXXXXX' 
```