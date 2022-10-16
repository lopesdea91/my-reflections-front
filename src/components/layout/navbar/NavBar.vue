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