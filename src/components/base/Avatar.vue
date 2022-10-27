<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
});
</script>

<template>
  <img
    :src="src"
    alt="avatar"
  />
</template>

<style lang="scss" scoped>
img {
  @apply w-12 h-12 object-contain rounded-full;
}
</style>