<template>
  <div name="todo-app-not-found-page"> </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'TodoAppNotFoundPage',

    created() {
      this.$router.replace('/')
    }
  })
</script>

<style lang="scss" scoped></style>
