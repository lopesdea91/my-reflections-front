<script setup lang="ts">
import NavBarBrand from "./NavBarBrand.vue";
import NavBarProfile from "./NavBarProfile.vue";
import NavBarMenu from "./NavBarMenu.vue";
import { state, actions } from "./state";
</script>

<template>
  <div
    class="navbar"
    :class="{
      active: state.statusMenu,
    }"
  >
    <NavBarBrand />
    <NavBarProfile />
    <NavBarMenu />
  </div>
</template>

<style lang="scss">
.navbar {
  @media (max-width: 479px) {
    @apply absolute w-full h-full right-full bg-slate-900 duration-200;

    &.active {
      @apply right-0;
    }
  }
  @media (min-width: 480px) {
    // @apply hidden sm:flex flex-col items-center;
    @apply flex flex-col items-center justify-self-end w-12;
  }
  @media (min-width: 1024px) {
    @apply w-36;
  }
}
</style>