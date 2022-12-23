import {createStore, createLogger} from 'vuex'

// STORE MODULES
import {theme, todo} from './modules'

const isDevMode: boolean = import.meta.env.DEV

const vuexLogger = isDevMode ? createLogger() : () => {}

const store = createStore({
  plugins: [vuexLogger],

  // STORE MODULES
  modules: {
    theme,
    todo,
  },
})

export {store, isDevMode}
