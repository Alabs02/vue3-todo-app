import {ActionTree} from 'vuex'
import {uuid} from 'vue-uuid'
import _cloneDeep from 'lodash/cloneDeep'

// TYPES
import {ITodo} from '@/store/models'
import {EMutations} from './mutations'

// JSON DATA
import {data} from './json'

const actions: ActionTree<ITodo.ITodoState, any> = {
  fetchTodoTasks({commit}): void {
    const serializedTodoTasks: ITodo.ITodoTask[] = data.map((todo) => {
      return {
        uuid: uuid.v4(),
        ...todo,
      }
    })

    commit(EMutations.SET_ALL_TODO_TASKS, serializedTodoTasks)
  },

  addTodoTask({commit, state}, payload: ITodo.ITodoTask) {
    const todoTasks = _cloneDeep(state.allTodoTasks)

    let newTodoTasks = [...todoTasks, payload]

    commit(EMutations.SET_ALL_TODO_TASKS, newTodoTasks)
  },

  updateTodoTask({commit, state}, {uuid}: {uuid: string}) {
    const todoTasks = _cloneDeep(state.allTodoTasks)

    const index = todoTasks.findIndex((todo) => todo.uuid === uuid)

    if (index !== -1) {
      todoTasks[index].is_completed = !todoTasks[index].is_completed

      commit(EMutations.SET_ALL_TODO_TASKS, todoTasks)
    }
  },

  updateElements({commit}, payload) {
    commit(EMutations.SET_ALL_TODO_TASKS, payload)
  },

  deleteTodoTask({commit, state}, {uuid}: {uuid: string}) {
    const todoTasks = _cloneDeep(state.allTodoTasks)

    const filteredTodoTasks = todoTasks.filter((todo) => todo.uuid !== uuid)

    commit(EMutations.SET_ALL_TODO_TASKS, filteredTodoTasks)
  },

  deleteCompletedTodoTasks({commit, state}) {
    const todoTasks = _cloneDeep(state.allTodoTasks)

    const filteredTodoTasks = todoTasks.filter((todo) => !todo.is_completed)

    commit(EMutations.SET_ALL_TODO_TASKS, filteredTodoTasks)
  },
}

export default actions
