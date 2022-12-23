<template>
  <div
    name="todo-card"
    class="todo-card"
    :class="{'todo-card--hover': !todoTask.is_completed}"
  >
    <div class="todo-card__content">
      <div
        v-if="todoTask.is_completed"
        class="todo-card__circle-linear"
        @click="completedTask"
      >
        <img :src="checkIcon" alt="check icon" />
      </div>

      <div v-else class="todo-card__circle" @click="completedTask"></div>

      <div
        class="todo-card__title"
        :class="{'todo-card__title--completed': todoTask.is_completed}"
        >{{ todoTask.task }}</div
      >
    </div>

    <div class="todo-card__actions">
      <button class="todo-card__btn" @click="removeTask">
        <img :src="crossIcon" alt="Remove Icon" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  // HELPERS
  import {imageUrl} from '@/utils/helpers'

  export default defineComponent({
    name: 'TodoCard',

    props: {
      todoTask: {
        type: Object,
        default: () => ({})
      }
    },

    data() {
      return {
        crossIcon: imageUrl('/static/icons/ICON-CROSS.SVG'),
        checkIcon: imageUrl('/static/icons/ICON-CHECK.SVG')
      }
    },

    methods: {
      completedTask() {
        this.$emit('toggle-task-status', this.todoTask.uuid)
      },

      removeTask() {
        this.$emit('remove-task', this.todoTask.uuid)
      }
    }
  })
</script>

<style lang="scss" scoped>
  .todo-card {
    @apply w-full
    p-3
    flex
    items-center
    justify-between
    border-b-[0.5px]
    dark:border-dark-blue-gray-300
    dark:bg-dark-desaturated-blue
    transition-colors
    cursor-pointer;

    &:hover {
      .todo-card__btn {
        display: grid;
      }
    }

    &--hover {
      @apply hover:dark:bg-dark-blue;
    }

    &__content {
      @apply flex
      items-center;
    }

    &__circle {
      @apply h-4
      w-4
      rounded-full
      border-[0.5px]
      border-light-blue-gray-50
      dark:border-dark-blue-gray-300
      transition-colors
      duration-[1.5s]
      ease-in-out;

      &-linear {
        @apply h-4
        w-4
        grid
        place-items-center
        rounded-full
        transition-colors
        duration-[1.5s]
        ease-in-out
        bg-gradient-to-b
        from-[#57ddff]
        to-[#c058f3]
        overflow-hidden;
      }
    }

    &__title {
      @apply text-[14px]
      ml-3
      text-light-blue-gray-300
      dark:text-dark-blue-gray-50;

      &--completed {
        @apply text-light-blue-gray-100
        dark:text-dark-blue-gray-200
        line-through;
      }
    }

    &__btn {
      @apply hidden
      h-4
      w-4
      p-[3px]
      rounded-full
      place-items-center
      transition-all
      hover:scale-125
      focus:scale-125;
    }
  }
</style>
