<script setup lang="ts">
import PostContentHeader from "./PostContentHeader.vue";
import PostContentBody from "./PostContentBody.vue";
import PostContentFooter from "./PostContentFooter.vue";
</script>

<template>
  <div class="post-content">
    <PostContentHeader />

    <span class="divisor"></span>

    <PostContentBody v-bind="$attrs" />

    <PostContentFooter />
  </div>
</template>

<style lang="scss" scoped>
.post-content {
  @apply flex flex-col gap-2;

  .divisor {
    @apply border-stone-800 border-b;
  }
}
</style>