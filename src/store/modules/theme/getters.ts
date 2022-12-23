import {GetterTree} from 'vuex'

// TYPES
import {ITheme} from '@/store/models'

const getters: GetterTree<ITheme.IThemeState, any> = {
  getIsDarkTheme: (state) => {
    return state.dark
  },
}

export default getters
