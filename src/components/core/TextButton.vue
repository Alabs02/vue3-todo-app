<template>
  <button
    name="text-button"
    class="text-button font-medium"
    :class="{
      [getClasses]: true,
      'text-button--active': isActive
    }"
    :disabled="disabled"
  >
    {{ copy }}
  </button>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'TextButton',

    props: {
      copy: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      classes: {
        type: Array,
        default: () => []
      },
      isActive: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      getClasses() {
        return this.classes.join(' ')
      }
    }
  })
</script>

<style lang="scss" scoped>
  .text-button {
    @apply text-[12px]
    text-light-blue-gray-200
    dark:text-dark-blue-gray-200
    hover:text-primary
    focus:text-primary
    hover:dark:text-primary
    focus:dark:text-primary
    transition-colors;

    &--active {
      color: hsl(220, 98%, 61%) !important;
    }
  }
</style>
