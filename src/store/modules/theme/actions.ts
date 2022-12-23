import {ActionTree} from 'vuex'

// TYPES
import {ITheme} from '@/store/models'
import {EMutations} from './mutations'

// TODO: Remember to import an interface for action tree.

const actions: ActionTree<ITheme.IThemeState, any> = {
  toggleTheme({commit}, payload: boolean) {
    commit(EMutations.SET_DARK_STATE, payload)
  }
}

export default actions
