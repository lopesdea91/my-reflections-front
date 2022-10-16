<script setup lang="ts">
import { ref } from "vue";
import { actions } from "./state";

const debounce = ref();

function handleResize(e: any) {
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    actions.setStatusMenu(false);
  }, 50);
}

window.addEventListener("resize", handleResize);
</script>

<template>
  <div class="navbar-brand">
    <div class="icon">
      <Icon icon="fa-brands fa-twitter" />
    </div>
    <button class="close" @click="actions.toggleStatusMenu">
      <Icon icon="fa-solids fa-xmark" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.navbar-brand {
  // @apply py-3 sm:py-1 text-2xl;
  @apply w-full flex items-center mt-2;

  @media (max-width: 479px) {
    @apply w-[90%] mx-auto h-14 justify-between;
  }
  @media (min-width: 480px) {
    @apply h-8 justify-center;
  }

  .icon {
    @apply w-8 h-8 flex items-center justify-center;
    @media (max-width: 479px) {
      @apply h-10;
    }
    @media (min-width: 1024px) {
      @apply w-6  ml-2;
    }
  }

  .close {
    @apply cursor-pointer w-10 h-8 border;
    @media (min-width: 480px) {
      @apply hidden;
    }
  }
}
</style>