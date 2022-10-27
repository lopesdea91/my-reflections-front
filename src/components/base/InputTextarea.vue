<script setup lang="ts">
defineProps({
  name: { type: String, default: "" },
  label: { type: String, default: "" },
  modelValue: { type: String },
  input: { type: String, default: "" },
});
</script>

<template>
  <div v-bind="$attrs">
    <label v-if="label" :for="name" class="">{{ label }}</label>
    <textarea
      :id="name"
      :value="modelValue"
      @input="({ target }) => $emit('update:modelValue', target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<style lang="scss" scoped>
div {
  @apply w-full mb-2;
}
label {
  @apply block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300;
}
textarea {
  @apply bg-transparent w-full outline-none p-3 text-sm text-stone-400 placeholder-stone-500;

  &:focus {
    @apply border-stone-500 bg-stone-800;
  }

  &:disabled {
    @apply bg-gradient-to-r from-stone-700 to-stone-800;
  }
}
</style>