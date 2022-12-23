export interface ITodoTask {
  uuid: string
  task: string
  is_completed: boolean
}

export interface ITodoState {
  allTodoTasks: ITodoTask[]
}
