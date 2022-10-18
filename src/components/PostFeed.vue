<script setup lang="ts">
</script>

<template>
  <div class="post-feed">
    <div class="column-avatar">
      <img src="https://ui-avatars.com/api?name=avatar-teste" alt="avatar" />
    </div>
    <div class="column-content">
      <div class="info">
        <span class="owner">name</span>
        <span class="created">22/05/2022</span>
      </div>

      <p class="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corrupti
        inventore. lore
      </p>

      <div class="actions">
        <button class="action like">
          <span>12</span>
          <div>
            <Icon icon="fa-solid fa-thumbs-up" />
          </div>
        </button>
        <button class="action dislike">
          <span>12</span>
          <div>
            <Icon icon="fa-solid fa-thumbs-down" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-feed {
  @apply grid grid-cols-2 gap-2 p-3 px-2 mb-2 -mx-2 border-stone-700 border-b;
  grid-template-columns: min-content 1fr;

  .column-avatar {
    @apply w-12 flex justify-center;

    img {
      @apply w-12 h-12 object-contain rounded-full;
    }
  }
  .column-content {
    @apply  flex flex-col gap-3;

    .info {
      @apply flex items-start justify-between;

      .owner {
        @apply text-stone-300 font-semibold leading-3;
      }
      .created {
        @apply font-bold text-xs text-stone-600 tracking-wider font-mono;
      }
    }
    .text {
      @apply text-sm text-stone-400 leading-5 font-extralight cursor-pointer;

      &:hover {
        @apply text-stone-200 duration-150;
      }
    }
    .actions {
      @apply flex gap-2;

      .action {
        @apply text-sm text-stone-400 flex items-start gap-2 px-1 border-stone-700 border;

        &:hover {
          @apply text-stone-200 duration-150;
        }
      }

      .action.dislike {
        div {
          @apply relative top-0.5;
        }
      }
    }
  }
}
</style>
