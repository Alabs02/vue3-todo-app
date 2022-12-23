import {Module} from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const todoModule: Module<any, any> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default todoModule
