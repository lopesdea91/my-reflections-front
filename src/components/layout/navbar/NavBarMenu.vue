<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import navbarState from "./state";

const menuList = computed(() => [
  { label: "Página Inicial", icon: "fa-solids fa-home", to: "" },
  { label: "Explorar", icon: "fa-solids fa-hashtag", to: "" },
  { label: "Notificações", icon: "fa-regular fa-bell", to: "" },
  { label: "Items Salvos", icon: "fa-solids fa-bookmark", to: "" },
]);

const debounce = ref();

function handleResize() {
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    navbarState.actions.setStatusMenu(false);
  }, 50);
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <ul class="app-navbar-list">
    <li class="app-navbar-list-item" v-for="(item, i) in menuList" :key="i">
      <div class="icon icon-base">
        <Icon class="" v-if="item.icon" :icon="item.icon" />
      </div>
      <span class="label">{{ item.label }}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.app-navbar-list {
  @apply flex flex-col overflow-y-auto;

  @media (max-width: 479px) {
    @apply w-[90%] mx-auto;
  }

  @media (min-width: 480px) {
    @apply w-full items-center;
  }

  @media (min-width: 1024px) {
    @apply items-stretch;
  }
}

.app-navbar-list-item {
  @apply h-12  flex items-center cursor-pointer text-stone-200;

  &:hover {
    @apply bg-stone-800 duration-150;
  }

  .icon {
    @media (min-width: 1024px) {
      @apply ml-2;
    }
  }

  .label {
    @media (min-width: 480px) {
      @apply px-2 hidden truncate font-light;
    }

    @media (min-width: 1024px) {
      @apply block;
    }
  }
}
</style>