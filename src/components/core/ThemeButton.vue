<template>
  <button name="theme-button" class="theme-btn" @click="toggleAppTheme">
    <img :src="getIconPath" alt="Button Icon" />
  </button>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  import {createNamespacedHelpers} from 'vuex'

  // HELPERS
  import { imageUrl } from '@/utils/helpers';

  const {mapGetters, mapActions} = createNamespacedHelpers('theme')

  export default defineComponent({
    name: 'ThemeButton',

    computed: {
      ...mapGetters(['getIsDarkTheme']),

      getIconPath(): string {
        return this.getIsDarkTheme
          ? imageUrl('/static/icons/ICON-SUN.SVG')
          : imageUrl('/static/icons/ICON-MOON.SVG')
      }
    },

    methods: {
      ...mapActions(['toggleTheme']),

      toggleAppTheme() {
        this.toggleTheme(!this.getIsDarkTheme)

        const currentTheme = this.getIsDarkTheme ? 'dark' : 'light'

        localStorage.setItem('theme', currentTheme)
      }
    }
  })
</script>

<style lang="scss" scoped>
  .theme-btn {
    @apply w-7
      h-7
      laptop:w-8
      laptop:h-8
      p-[7px]
      rounded-full
      overflow-hidden
      cursor-pointer
      grid
      place-items-center
      transition-all
      hover:bg-dark-blue
      focus:bg-dark-blue
      shadow-sm
      hover:shadow-lg
      bg-transparent;
  }
</style>
