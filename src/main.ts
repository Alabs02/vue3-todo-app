import {createApp} from 'vue'
import App from '@/App.vue'

import {createMetaManager} from 'vue-meta'

// STORE
import {store} from '@/store'

// ROUTER
import router from '@/router'

// GLOBAL STYLES
import '@/styles/globals.scss'

createApp(App).use(store).use(router).use(createMetaManager()).mount('#app')
