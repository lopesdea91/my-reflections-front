<script setup lang="ts">
defineProps({
  name: { type: String, default: "" },
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  modelValue: { type: String },
  error: { type: String, default: "NINO" },
});
</script>

<template>
  <div>
    <label v-if="label" :for="name" class="">{{ label }}</label>
    <input
      :id="name"
      :value="modelValue"
      @input="({ target }) => $emit('update:modelValue', target.value)"
      v-bind="$attrs"
      :type="type"
      :class="{
        error: !!error,
      }"
      autocomplete="off"
    />
    <Transition>
      <span v-show="error">{{ error }}</span>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
div {
  @apply mb-2;
}
label {
  @apply block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300;
}
input {
  @apply block p-2 w-full sm:text-xs text-stone-300 rounded
    border border-gray-700 focus:border-gray-500 
    outline-none bg-stone-800;

  &.error {
    @apply border-red-600 shadow-red-400 shadow-sm;
  }
}
span {
  @apply block text-end text-xs mt-1;
}
</style>