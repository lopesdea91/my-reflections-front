<script setup lang="ts">
import Avatar from "../base/Avatar.vue";
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="avatar">
    <Avatar :src="src" />
  </div>
</template>
<style lang="scss" scoped>
.avatar {
  @apply w-12 flex justify-center;
  @media (min-width: 1024px) {
    @apply w-20;
  }

  img {
    @media (min-width: 1024px) {
      @apply w-16 h-16;
    }
  }
}
</style>