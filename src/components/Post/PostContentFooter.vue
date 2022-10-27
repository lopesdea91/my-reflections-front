<script setup lang="ts">
</script>

<template>
  <div class="post-content-footer">
    <span class="created">22/05/2022</span>

    <ButtonGroup>
      <Button content="12" icon="fa-solid fa-thumbs-up" />
      <Button content="12" icon="fa-solid fa-thumbs-down" />
    </ButtonGroup>
  </div>
</template>

<style lang="scss" scoped>
.post-content-footer {
  @apply flex;

  @media (max-width: 479px) {
    @apply flex-col;
  }
  @media (min-width: 480px) {
    @apply items-end justify-between;
  }

  .created {
    @apply font-bold leading-3 text-xs text-stone-600 tracking-wider font-mono;
  }
  @media (max-width: 479px) {
    .created {
      @apply mb-4;
    }
  }
}
</style>