<script setup lang="ts">
import { ref } from "vue";
import { state, actions } from "./state";

const textPost = ref<string>("");

function onSubmit() {
  actions.startLoading();

  setTimeout(() => {
    actions.endLoading();

    textPost.value = "";
  }, 1500);
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="contentCreatePost">
    <textarea
      v-model="textPost"
      class="textarea"
      :disabled="state.loading"
      placeholder="O que está pensando agora?"
    />
    <button type="submit" class="btn-base">
      <Icon icon="fa-solid fa-share" />
    </button>
  </form>
</template>

<style lang="scss" scoped>
.contentCreatePost {
  @apply flex flex-col items-end gap-1 p-1 mb-2 border-stone-700 border-y;
}
</style>