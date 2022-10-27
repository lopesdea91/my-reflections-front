<script setup lang="ts">
import { useRouter } from "vue-router";
const { push } = useRouter();
</script>

<template>
  <div class="post-content-header">
    <span
      class="owner"
      @click="
        () =>
          push({
            name: 'ProfileId',
            params: {
              id: 1,
            },
          })
      "
    >
      name
    </span>
  </div>
</template>

<style lang="scss" scoped>
.post-content-header {
  @apply flex items-center justify-between gap-2;

  .owner {
    @apply text-stone-300 font-semibold leading-3 cursor-pointer;
  }
}
</style>