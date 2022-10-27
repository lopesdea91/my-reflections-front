<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from "vue";
import { actions as headerActions } from "@/components/layout/header/state";

onBeforeMount(() => {
  headerActions.setTitle("Conta");
});
onBeforeUnmount(() => {
  headerActions.reset();
});
</script>

<template>
  <div class="app-content">
    <h1>Conta</h1>
  </div>
</template>
