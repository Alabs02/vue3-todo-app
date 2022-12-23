import {MutationTree} from 'vuex'

// TYPES
import {ITheme} from '@/store/models'

// TODO: Remember to import an interface for mutation tree.

export enum EMutations {
  SET_DARK_STATE = 'SET_DARK_STATE'
}

const mutations: MutationTree<ITheme.IThemeState> = {
  [EMutations.SET_DARK_STATE]: (state, payload) => {
    state.dark = payload
  }
}

export default mutations
