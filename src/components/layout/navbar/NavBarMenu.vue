<script setup lang="ts">
import { computed } from "@vue/runtime-core";

const menuList = computed(() => [
  { label: "Página Inicial", icon: "fa-solids fa-home", to: "" },
  { label: "Explorar", icon: "fa-solids fa-hashtag", to: "" },
  { label: "Notificações", icon: "fa-regular fa-bell", to: "" },
  { label: "Items Salvos", icon: "fa-solids fa-bookmark", to: "" },
]);
</script>

<template>
  <ul class="navbar-list">
    <li class="navbar-list-item" v-for="(item, i) in menuList" :key="i">
      <div class="icon">
        <Icon class="" v-if="item.icon" :icon="item.icon" />
      </div>
      <span class="label">{{ item.label }}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.navbar-list {
  @apply flex flex-col gap-1;

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

.navbar-list-item {
  @apply flex items-center cursor-pointer;

  .icon {
    @apply w-8 h-8 flex items-center justify-center;
    @media (max-width: 479px) {
      @apply h-10;
    }
    @media (min-width: 1024px) {
      @apply w-6  ml-2;
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