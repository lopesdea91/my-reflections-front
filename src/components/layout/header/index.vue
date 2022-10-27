<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import contentState from "@/components/layout/content/state";
import { state as headerState } from "@/components/layout/header/state";
import navbarState from "@/components/layout/navbar/state";

const { back } = useRouter();

const hasActions = computed(
  () => !!headerState.title && (headerState.btnMenu || headerState.btnBack)
);
</script>

<template>
  <div
    class="app-content-header"
    :class="{
      'show-btn-back': headerState.btnBack,
      'show-divisor-back': hasActions,
    }"
  >
    <button
      class="icon-base app-content-header-only-mobile"
      @click="navbarState.actions.toggleStatusMenu"
    >
      <Icon icon="fa-solid fa-bars" />
    </button>

    <span class="app-content-header-divisor app-content-header-only-mobile" />

    <button class="btn-back icon-base" @click="back()">
      <Icon icon="fa-solid fa-arrow-left" />
    </button>

    <span class="app-content-header-divisor divisor-back" />

    <Transition name="title">
      <h3 v-if="headerState.title">{{ headerState.title }}</h3>
    </Transition>

    <Transition name="loading">
      <div v-if="contentState.state.loading" class="app-content-loading">
        <Icon icon="fa-solid fa-rotate" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.loading-enter-active,
.loading-leave-active {
  transition: all 0.5s ease;
}
.loading-enter-from {
  @apply -mt-3;
}
.loading-leave-to {
  @apply mt-3;
}
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}

.title-enter-active,
.title-leave-active {
  transition: opacity 0.2s ease;
}
.title-enter-from,
.title-leave-to {
  opacity: 0;
}

.app-content-header {
  @apply z-20 w-full h-12 flex items-center absolute top-0 rounded shadow-sm bg-gradient-to-r from-stone-800 to-stone-900;
  max-width: calc(600px - 2px);
  transform: translateX(calc(50vw - 50%));

  @media (max-width: 479px) {
    @apply w-[95%] px-2;
  }
  @media (min-width: 480px) {
    @apply border-stone-700 border-b;
  }

  &-divisor {
    @apply block h-6 border-stone-700 border-l ml-1 mr-2;
  }

  &-only-mobile {
    @media (min-width: 480px) {
      @apply hidden;
    }
  }

  &.show-btn-back {
    .btn-back {
      @apply duration-200 opacity-0 w-0 m-0 overflow-hidden;
    }
  }
  &.show-divisor-back {
    .divisor-back {
      @apply duration-200 opacity-0 w-0 m-0 overflow-hidden;
    }
  }

  @media (min-width: 480px) {
    h3 {
      @apply ml-2;
    }
  }
}

.app-content-loading {
  @apply z-30 absolute top-3 right-2 w-8 h-8 flex items-center justify-center text-stone-400 text-2xl animate-spin;
}
</style>