<template>
  <div name="main-page">
    <search-bar @model-value="updateFormTitle" @add-task="createTodoTask" />

    <div class="main-page__card">
      <div class="main-page__card-body">
        <div class="main-page__card-content">
          <draggable v-model="sortableTodoTasks" @change="log">
            <transition-group>
              <template
                v-for="todoTask in sortableTodoTasks"
                :key="todoTask.uuid"
              >
                <todo-card
                  id="`card${todoTask.uuid}`"
                  :todo-task="todoTask"
                  @toggle-task-status="toggleTodoTaskStatus"
                  @remove-task="removeTodoTask"
                />
              </template>
            </transition-group>
          </draggable>
        </div>
      </div>

      <div class="main-page__card-footer">
        <div class="main-page__card-footer-start"
          >{{ getFilteredTodoTasksCount }} items left</div
        >

        <div class="main-page__card-footer-center">
          <text-button copy="All" @click="updateCurrentFilter('all')" />
          <text-button copy="Active" @click="updateCurrentFilter('active')" />
          <text-button
            copy="Completed"
            @click="updateCurrentFilter('completed')"
          />
        </div>

        <div class="main-page__card-footer-end">
          <text-button
            copy="Clear Completed"
            @click="deleteCompletedTodoTasks"
          />
        </div>
      </div>
    </div>

    <div class="main-page__panel">
      <text-button
        copy="All"
        :classes="['font-semibold']"
        :is-active="currentFilter === 'all'"
        @click="updateCurrentFilter('all')"
      />
      <text-button
        copy="Active"
        :classes="['font-semibold']"
        :is-active="currentFilter === 'active'"
        @click="updateCurrentFilter('active')"
      />
      <text-button
        copy="Completed"
        :classes="['font-semibold']"
        :is-active="currentFilter === 'completed'"
        @click="updateCurrentFilter('completed')"
      />
    </div>

    <div class="main-page__info">Drag and drop to reoder list</div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {uuid} from 'vue-uuid'
  import {createNamespacedHelpers} from 'vuex'

  // PLUGINS
  import {VueDraggableNext} from 'vue-draggable-next'

  // COMPONENTS
  import SearchBar from '@/components/forms/SearchBar.vue'
  import TodoCard from '@/components/core/TodoCard.vue'
  import TextButton from '@/components/core/TextButton.vue'

  // TYPES
  import {ITodo} from '@/store/models'

  const {mapActions, mapGetters} = createNamespacedHelpers('todo')

  export default defineComponent({
    name: 'MainPage',

    components: {
      SearchBar,
      TodoCard,
      TextButton,
      Draggable: VueDraggableNext,
    },

    data() {
      return {
        uuid: uuid.v1(),
        currentFilter: 'all',
        form: {
          uuid: '',
          task: '',
          is_completed: false,
        },
      }
    },

    computed: {
      ...mapGetters(['getAllTodoCount', 'getAllTodoTasks']),

      getFilteredTodoTasks(): ITodo.ITodoTask[] {
        var vm = this as any

        switch (vm.currentFilter) {
          case 'active':
            return vm.getAllActiveTodoTasks()
          case 'completed':
            return vm.getAllCompletedTodoTasks()
          default:
            return vm.getAllTodoTasks
        }
      },

      getFilteredTodoTasksCount(): number {
        var vm = this as any
        return vm.getFilteredTodoTasks.length
      },

      sortableTodoTasks: {
        get() {
          var vm = this as any
          return vm.getFilteredTodoTasks
        },

        set(payload: any) {
          console.log({payload})
          this.updateElements(payload)
        },
      },
    },

    created() {
      this.fetchTodoTasks()
    },

    methods: {
      ...mapActions([
        'fetchTodoTasks',
        'updateTodoTask',
        'deleteTodoTask',
        'addTodoTask',
        'updateElements',
        'deleteCompletedTodoTasks',
      ]),

      generateUUID(): string {
        return this.$uuid.v4()
      },

      updateFormTitle(value: string) {
        this.form.task = value
      },

      updateCurrentFilter(filterKey: string) {
        this.currentFilter = filterKey
      },

      toggleTodoTaskStatus(todoUUID: string) {
        this.updateTodoTask({uuid: todoUUID})
      },

      createTodoTask() {
        if (this.form.task.length >= 3) {
          this.form.uuid = uuid.v4()
          this.addTodoTask(this.form)
        } else {
          alert('You need to input atleast three characters!')
        }
      },

      removeTodoTask(todoUUID: string) {
        this.deleteTodoTask({uuid: todoUUID})
      },

      getAllActiveTodoTasks(): ITodo.ITodoTask[] {
        return this.getAllTodoTasks.filter(
          (todoTask: ITodo.ITodoTask) => !todoTask.is_completed
        )
      },

      getAllCompletedTodoTasks(): ITodo.ITodoTask[] {
        return this.getAllTodoTasks.filter(
          (todoTask: ITodo.ITodoTask) => todoTask.is_completed
        )
      },

      log(event: any) {
        console.log({event})
      },
    },
  })
</script>

<style lang="scss" scoped>
  .main-page {
    @apply w-full;

    &__card {
      @apply w-full
      mt-5
      bg-white
      dark:bg-dark-desaturated-blue
      rounded-[4px]
      overflow-x-hidden
      shadow-xl
      dark:shadow-[#0F0F17];

      &-footer {
        @apply p-3
        flex
        items-center
        justify-between;

        &-start {
          @apply text-[12px]
          font-medium
          text-light-blue-gray-200
          dark:text-dark-blue-gray-200;
        }

        &-center {
          @apply hidden
          laptop:flex
          items-center
          gap-x-2;
        }
      }
    }

    &__panel {
      @apply mt-4
      p-3
      bg-white
      dark:bg-dark-desaturated-blue
      rounded-[4px]
      flex
      laptop:hidden
      gap-x-4
      justify-center
      items-center
      overflow-hidden
      shadow-2xl
      dark:shadow-[#0F0F17];
    }

    &__info {
      @apply mt-8
      text-[14px]
      flex
      justify-center
      font-medium
      text-light-blue-gray-200
      dark:text-dark-blue-gray-200;
    }
  }
</style>
