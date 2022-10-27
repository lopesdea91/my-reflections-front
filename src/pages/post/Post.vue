<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from "vue";
import { actions as headerActions } from "@/components/layout/header/state";
import Post from "../../components/Post/index.vue";

onBeforeMount(() => {
  headerActions.setTitle("Postagem");
  headerActions.useBtnBack();
});
onBeforeUnmount(() => {
  headerActions.reset();
});
</script>

<template>
  <div class="app-content">
    <Post />
  </div>
</template>
