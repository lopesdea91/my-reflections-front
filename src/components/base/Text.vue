<script setup lang="ts">
import { computed } from "@vue/runtime-core";

const { size } = defineProps({
  content: { type: String, default: "" },
  size: { type: String, default: "normal" },
});

const classes = computed(() => {
  return {
    display: size === "display",
    large: size === "lg",
    normal: size === "md",
    small: size === "sm",
  };
});
</script>

<template>
  <p class="text" :class="classes">
    {{ content }}
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.text {
  @apply mb-2;

  &.display {
    @apply text-3xl leading-loose;
  }
  &.title {
    @apply text-2xl leading-loose;
  }
  &.large {
    @apply text-xl leading-relaxed;
  }
  &.normal {
    @apply text-base leading-8;
  }
  &.small {
    @apply text-sm leading-6;
  }
}
</style>