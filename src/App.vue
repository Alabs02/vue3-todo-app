<template>
  <div name="app" id="app-root" :class="getIsDarkTheme ? 'dark' : 'light'">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapActions, mapGetters} = createNamespacedHelpers('theme')

  export default defineComponent({
    name: 'App',

    computed: {
      ...mapGetters(['getIsDarkTheme']),
    },

    mounted() {
      this.configureAppTheme()
    },

    methods: {
      ...mapActions(['toggleTheme']),

      configureAppTheme() {
        if (localStorage.getItem('theme') === undefined) {
          if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
          ) {
            localStorage.setItem('theme', 'dark')
            this.toggleTheme(true)
          } else {
            localStorage.setItem('theme', 'light')
            this.toggleTheme(false)
          }
        } else {
          const currentTheme = localStorage.getItem('theme')
          this.toggleTheme(currentTheme === 'dark')
        }
      },
    },
  })
</script>

<style lang="scss">
  html,
  body,
  #app-root {
    @apply bg-white
      dark:bg-dark-bg;
  }
</style>
