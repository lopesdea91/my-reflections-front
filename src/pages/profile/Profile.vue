<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from "vue";
import { actions as headerActions } from "@/components/layout/header/state";

onBeforeMount(() => {
  headerActions.setTitle("Perfil");
});
onBeforeUnmount(() => {
  headerActions.reset();
});
</script>

<template>
  <div class="app-content">
    <h1>Profile</h1>
  </div>
</template>
