<template>
  <div name="search-bar" class="search-bar">
    <div class="search-bar__circle" @click="createTodoTask"></div>

    <input
      id="search-bar"
      type="text"
      class="search-bar__input"
      placeholder="Create a new todo..."
      autocomplete="off"
      :value="modelValue"
      @input="updateModelValue($event)"
      @keydown.enter="createTodoTask"
    />
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'SearchBar',

    props: {
      modelValue: {
        type: String,
        default: '',
      },
    },

    methods: {
      updateModelValue(event: any) {
        console.log('Changes:', event.target.value)
        this.$emit('modelValue', event.target.value)
      },

      createTodoTask() {
        this.$emit('add-task')
      },
    },
  })
</script>

<style lang="scss" scoped>
  .search-bar {
    @apply w-full
    relative
    rounded-[4px]
    shadow-md
    focus-within:shadow-lg
    overflow-hidden
    transition-all;

    &__circle {
      @apply h-4
      w-4
      rounded-full
      border-[0.5px]
      border-light-blue-gray-50
      dark:border-dark-blue-gray-300
      absolute
      top-[50%]
      left-4
      translate-y-[-50%]
      transition-colors
      duration-[1.5s]
      ease-in-out;
    }

    &__input {
      @apply w-full
      pl-10
      rounded-[4px]
      border-none
      outline-none
      hover:border-none
      hover:outline-none
      focus:border-none
      focus:outline-none
      text-[14px]
      placeholder:text-light-blue-gray-200
      placeholder:dark:text-dark-blue-gray-100
      placeholder:text-[14px]
      text-light-blue-gray-200
      dark:text-dark-blue-gray-100
      bg-white
      dark:bg-dark-desaturated-blue
      hover:dark:bg-dark-blue
      focus:dark:bg-dark-blue
      transition-colors
      duration-[1.5s]
      ease-in-out;
    }
  }
</style>
