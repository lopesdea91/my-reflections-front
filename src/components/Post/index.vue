<script setup lang="ts">
import PostAvatar from "./PostAvatar.vue";
import PostContent from "./PostContent.vue";
import PostContentMenu from "./PostContentMenu.vue";
</script>

<template>
  <div class="post">
    <PostAvatar src="https://ui-avatars.com/api?name=avatar-teste" />

    <PostContent v-bind="$attrs" />

    <PostContentMenu />
  </div>
</template>

<style lang="scss">
.post {
  @apply grid grid-cols-3 gap-2 items-start p-3 px-2 mb-2 -mx-2 border-stone-700 border-b;
  grid-template-columns: min-content 1fr min-content;
}
</style>