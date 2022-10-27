<script setup lang="ts">
import { useRouter } from "vue-router";
const { push } = useRouter();
</script>

<template>
  <div class="app-navbar-brand">
    <div class="icon icon-base" @click="() => push({ name: 'Feed' })">
      <Icon icon="fa-brands fa-twitter" />
    </div>
    <!-- <button class="close" @click="actions.toggleStatusMenu">
      <Icon icon="fa-solids fa-xmark" />
    </button> -->
  </div>
</template>

<style lang="scss" scoped>
.app-navbar-brand {
  @apply h-12 flex items-center;

  @media (max-width: 479px) {
    @apply w-[90%] mx-auto opacity-0;
  }

  @media (min-width: 480px) {
    @apply w-[75%] justify-center border-stone-700 border-b;
  }
  
  @media (min-width: 1024px) {
    @apply w-full;
  }

  .icon {
    @apply cursor-pointer;

    @media (min-width: 1024px) {
      @apply ml-2;
    }
  }

  .close {
    @apply cursor-pointer w-10 border-stone-700 border;

    @media (min-width: 480px) {
      @apply hidden;
    }
  }
}
</style>