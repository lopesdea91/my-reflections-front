<script setup lang="ts">
defineProps({
  content: { type: String, default: "" },
});
</script>

<template>
  <a v-bind="$attrs">
    <!-- <div v-if="icon && iconPosition === 'left'">
      <Icon :icon="icon" />
    </div> -->

    {{ content }}

    <slot v-if="!content" />

    <!-- <div v-if="icon && iconPosition === 'rigth'">
      <Icon :icon="icon" />
    </div> -->
  </a>
</template>

<style lang="scss" scoped>
a {
  @apply flex items-center justify-center gap-2 p-1 cursor-pointer text-sm text-blue-300 underline;

  &:hover {
    @apply text-stone-400 duration-150;
  }
}
</style>