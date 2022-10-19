<script setup lang="ts">
import Dropdown from "./base/Dropdown.vue";
import { useRouter } from "vue-router";
const { push } = useRouter();
const { link } = defineProps({
  link: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="post">
    <div class="column-avatar">
      <img src="https://ui-avatars.com/api?name=avatar-teste" alt="avatar" />
    </div>

    <div class="column-content">
      <div class="header">
        <span class="owner">name</span>
        <span class="created">22/05/2022</span>
      </div>

      <span class="divisor"></span>

      <a v-if="link" class="text" @click="push('/post/1')">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corrupti
        inventore. lore
      </a>
      <p v-else class="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corrupti
        inventore. lore
      </p>

      <div class="footer">
        <button class="btn like">
          <span>12</span>
          <div>
            <Icon icon="fa-solid fa-thumbs-up" />
          </div>
        </button>
        <button class="btn dislike">
          <span>12</span>
          <div>
            <Icon icon="fa-solid fa-thumbs-down" />
          </div>
        </button>
      </div>
    </div>

    <Dropdown>
      <li>
        <a>Action</a>
      </li>
      <li>
        <a>Action Action Action</a>
      </li>
      <li>
        <a>ActionAction ActionActionAction</a>
      </li>
    </Dropdown>
  </div>
</template>

<style lang="scss">
.post {
  @apply grid grid-cols-3 gap-2 items-start p-3 px-2 mb-2 -mx-2 border-stone-700 border-b;
  grid-template-columns: min-content 1fr min-content;

  .column-avatar {
    @apply w-12 flex justify-center;

    img {
      @apply w-12 h-12 object-contain rounded-full;
    }
  }
  .column-content {
    @apply flex flex-col gap-2;

    .header {
      @apply flex items-center justify-between gap-2;

      .owner {
        @apply text-stone-300 font-semibold leading-3;
      }
      .created {
        @apply font-bold leading-3 text-xs text-stone-600 tracking-wider font-mono;
      }
    }

    .text {
      @apply text-sm text-stone-200 leading-5 font-extralight;
    }
    a.text {
      @apply text-stone-400 duration-150;
      &:hover {
        @apply text-stone-200;
      }
    }

    .footer {
      @apply flex gap-2;

      .btn {
        @apply text-sm text-stone-400 flex items-start gap-2 px-1 border-stone-700 border;

        &:hover {
          @apply text-stone-200 duration-150;
        }
      }

      .btn.dislike {
        div {
          @apply relative top-0.5;
        }
      }
    }

    .divisor {
      @apply border-stone-800 border-b;
    }
  }
}
</style>