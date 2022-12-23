import {GetterTree} from 'vuex'

// TYPES
import {ITodo} from '@/store/models'

const getters: GetterTree<ITodo.ITodoState, any> = {
  getAllTodoTasks: (state): ITodo.ITodoTask[] => {
    return state.allTodoTasks
  },

  getAllTodoCount: (state): number => {
    return state.allTodoTasks.length
  },
}

export default getters
