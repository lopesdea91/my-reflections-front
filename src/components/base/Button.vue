
<script setup lang="ts">
defineProps({
  content: { type: String, default: "" },
  type: { type: String, default: "button" },
  cssType: { type: String, default: "" },
  size: { type: String, default: "md" },
  icon: { type: String, default: "" },
  iconPosition: { type: String, default: "left" },
});
</script>

<template>
  <button :type="type" v-bind="$attrs" >
    <div v-if="icon && iconPosition === 'left'">
      <Icon :icon="icon" />
    </div>

    {{ content }}

    <slot v-if="!content" />

    <div v-if="icon && iconPosition === 'rigth'">
      <Icon :icon="icon" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
button {
  @apply flex items-center justify-center gap-2 px-2 py-1 border-stone-700 border;

  &:hover {
    @apply text-stone-400 duration-150;
  }
}
</style>