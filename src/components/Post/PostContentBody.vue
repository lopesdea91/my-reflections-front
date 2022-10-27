<script setup lang="ts">
import { useRouter } from "vue-router";
const { push } = useRouter();

defineProps({
  linkPost: { type: Boolean, default: false },
});
</script>

<template>
  <div class="post-content-body">
    <p
      class="text"
      :class="{
        pointer: linkPost,
      }"
      @click="
        () =>
          linkPost &&
          push({
            name: 'PostId',
            params: {
              id: 2,
            },
          })
      "
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corrupti
      inventore. lore
    </p>
  </div>
</template>

<style lang="scss" scoped>
.post-content-body {
  .text {
    @apply text-lg text-stone-400 duration-150 font-extralight;

    &.pointer {
      @apply cursor-pointer;

      &:hover {
        @apply text-stone-200;
      }
    }
  }
}
</style>