<script setup lang="ts">
import { actions } from "../navbar/state";
const { btnMenu, btnBack, title } = defineProps({
  btnMenu: {
    type: Boolean,
    default: false,
  },
  btnBack: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});
const hasActions = !!title && (!!btnMenu || !!btnBack);
</script>

<template>
  <div class="page-header">
    <button 
      class="icon-base page-header-only-mobile"
      @click="actions.toggleStatusMenu"
    >
      <Icon icon="fa-solid fa-bars" />
    </button>
    <span class="page-header-divisor page-header-only-mobile"></span>
    <button v-if="btnBack" class="icon-base">
      <Icon icon="fa-solid fa-arrow-left" />
    </button>
    <span v-if="hasActions" class="page-header-divisor"></span>
    <h3 v-if="title">{{ title }}</h3>
  </div>
</template>

