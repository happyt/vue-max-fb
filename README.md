# vue-max-fb

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
vue create vue-max-fb
* router, vuex, eslint
```
vue add vuetify. v1.3.8
yarn serve

yarn run build
```
.env file for environment variables

vuetify puts in 
```
<v-content>
<HelloWorld/>
</v-content>
```
need to replace with 
```
<v-content>
<v-container fluid>
<router-view></router-view>
</v-container>
</v-content>
```
add to routes to remove #
```
,
mode: 'history'
```
Here use firebase
```
yarn add firebase

import * as firebase from 'firebase'
var fbconfig = require(`./fb-config.js`)
```
fb-config.js
```
module.export = {
    apiKey: "",
    authDomain: ",
    databaseURL: ",
    projectId: "",
    storageBucket: "",
  }
```

need change/add
- modules
- better components/modules
- strings for consts
- separate file for consts
- phone auth
- PWA
