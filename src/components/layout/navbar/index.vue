<script setup lang="ts">
import NavBar from "./NavBar.vue";
import NavBarBrand from "./NavBarBrand.vue";
import NavBarProfile from "./NavBarProfile.vue";
import NavBarMenu from "./NavBarMenu.vue";
</script>

<template>
  <NavBar>
    <NavBarBrand />
    <NavBarProfile />
    <NavBarMenu />
  </NavBar>
</template>

<style lang="scss" scoped>
.app-navbar {
  @apply flex flex-col overflow-hidden text-stone-200 z-20;

  @media (max-width: 479px) {
    @apply absolute w-full h-full right-full bg-stone-900 duration-200;

    &.active {
      @apply right-0;
    }
  }

  @media (min-width: 480px) {
    @apply flex flex-col items-center justify-self-end w-12;
    grid-column: 1;
    grid-row: 1/3;
  }

  @media (min-width: 1024px) {
    @apply w-36;
  }
}
</style>