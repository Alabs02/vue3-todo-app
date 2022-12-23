import {MutationTree} from 'vuex'

// TYPES
import {ITodo} from '@/store/models'

export enum EMutations {
  SET_ALL_TODO_TASKS = 'SET_ALL_TODO_TASKS'
}

const mutations: MutationTree<ITodo.ITodoState> = {
  [EMutations.SET_ALL_TODO_TASKS]: (state, payload: ITodo.ITodoTask[]) => {
    state.allTodoTasks = payload
  }
}

export default mutations
