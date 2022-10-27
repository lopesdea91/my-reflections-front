<script setup lang="ts">
import navbarState from "./state";
import { useStoreSystem } from "../../../store/useStoreSystem";

const { logged } = useStoreSystem();
</script>

<template>
  <div
    class="app-navbar"
    :class="{
      active: navbarState.state.statusMenu,
    }"
  >
    <slot />
  </div>
</template>