<template>
  <div name="app-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {useMeta} from 'vue-meta'

  export default {
    setup() {
      useMeta({
        htmlAttrs: {lang: 'en', amp: true}
      })
      return {}
    }
  }
</script>
