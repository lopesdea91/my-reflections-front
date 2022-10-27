<script setup lang="ts">
import { useRouter } from "vue-router";
import navbarState from "../navbar/state";
const { back } = useRouter();
const { btnMenu, btnBack, content } = defineProps({
  btnMenu: {
    type: Boolean,
    default: false,
  },
  btnBack: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
    default: "",
  },
});

const hasActions = !!content && (!!btnMenu || !!btnBack);
</script>

<template>
  <div class="app-content-header">
    <button
      class="icon-base app-content-header-only-mobile"
      @click="navbarState.actions.toggleStatusMenu"
    >
      <Icon icon="fa-solid fa-bars" />
    </button>

    <span class="app-content-header-divisor app-content-header-only-mobile"></span>

    <button v-if="btnBack" class="icon-base" @click="back()">
      <Icon icon="fa-solid fa-arrow-left" />
    </button>

    <span v-if="hasActions" class="app-content-header-divisor"></span>
    
    <h3 v-if="content">{{ content }}</h3>
  </div>
</template>

