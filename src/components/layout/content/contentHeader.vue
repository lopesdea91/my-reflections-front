<script setup lang="ts">
defineProps({
  btnBack: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="page-header">
    <button v-show="btnBack" class="icon-base">
      <Icon icon="fa-solid fa-arrow-left" />
    </button>
    <h3 v-show="title">{{ title }}</h3>
  </div>
</template>