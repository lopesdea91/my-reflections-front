
<script setup lang>
import { state } from "./state";
</script>
<template>
  <Transition name="page-content-loading">
    <div v-if="state.loading" class="page-content-loading">
      <Icon icon="fa-solid fa-rotate" />
    </div>
  </Transition>
</template>

<style lang="scss">
.page-content-loading-enter-active,
.page-content-loading-leave-active {
  transition: all 0.5s ease;
}

.page-content-loading-enter-from {
  @apply -mt-3;
}

.page-content-loading-leave-to {
  @apply mt-3;
}

.page-content-loading-enter-from,
.page-content-loading-leave-to {
  opacity: 0;
}
</style>