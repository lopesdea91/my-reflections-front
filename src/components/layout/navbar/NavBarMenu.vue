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