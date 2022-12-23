<template>
  <div name="app-layout" class="app-layout">
    <div class="app-layout__header">
      <div class="app-layout__toolbar">
        <div class="app-layout__toolbar-content">
          <div class="app-layout__toolbar-title">Todo</div>

          <theme-button></theme-button>
        </div>
      </div>
    </div>

    <div class="app-layout__body">
      <div class="app-layout__body-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {createNamespacedHelpers} from 'vuex'

  // COMPONENTS
  import ThemeButton from '@/components/core/ThemeButton.vue'

  // HELPERS
  import {imageUrl} from '@/utils/helpers'

  const {mapGetters} = createNamespacedHelpers('theme')

  export default defineComponent({
    name: 'AppLayout',

    components: {
      ThemeButton,
    },

    data() {
      return {}
    },

    computed: {
      ...mapGetters(['getIsDarkTheme']),
    },

    methods: {
      getBannerPath(): string {
        return this.getIsDarkTheme
          ? imageUrl('/static/images/BG-MOBILE-DARK.svg')
          : imageUrl('/static/images/BG-MOBILE-LIGHT.svg')
      },
    },
  })
</script>

<style lang="scss" scoped>
  .app-layout {
    @apply w-full
    min-h-[100.3vh]
    m-0
    p-0
    bg-white
    dark:bg-dark-blue
    transition-all
    duration-[1.5s]
    ease-in-out;

    &__header {
      @apply w-full
      h-60
      p-0
      m-0
      mt-[-3px]
      bg-hero-bg-mobile-light
      laptop:bg-hero-bg-desktop-light
      dark:bg-hero-bg-mobile-dark
      laptop:dark:bg-hero-bg-desktop-dark
      bg-cover
      bg-no-repeat
      bg-center
      transition-all
      duration-[1.5s]
      ease-in-out;
    }

    &__toolbar {
      @apply w-full
      grid
      place-items-center;

      &-content {
        @apply w-[90%]
        laptop:w-[35%]
        py-14
        flex
        items-center
        justify-between;
      }

      &-title {
        @apply uppercase
        text-white
        font-medium
        text-[24px]
        laptop:text-[28px]
        select-none
        tracking-[0.5em];
      }
    }

    &__body {
      @apply w-full
      mt-[-112px]
      grid
      place-items-center;

      &-main {
        @apply w-[90%]
          laptop:w-[35%];
      }
    }
  }
</style>
