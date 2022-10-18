<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { actions } from "./state";

const debounce = ref();

function handleResize(e: any) {
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    actions.setStatusMenu(false);
  }, 50);
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
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