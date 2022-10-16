<script setup lang="ts">
</script>

<template>
  <div class="content">
    <h1>Home</h1>
  </div>
  <div class="aside">aside</div>
</template>

<style lang="scss">
.content {
  @apply text-center;
}
.aside {
  @apply text-center;
  @apply hidden lg:flex flex-col items-center justify-self-start;
  @media (min-width: 1024px) {
    @apply w-44;
  }
  @media (min-width: 1280px) {
    @apply w-52;
  }
}
</style>
