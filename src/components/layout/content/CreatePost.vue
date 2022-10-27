<script setup lang="ts">
import { ref } from "vue";
import contentState from "./state";

const textPost = ref<string>("");

function onSubmit() {
  contentState.actions.startLoading();

  setTimeout(() => {
    contentState.actions.endLoading();

    textPost.value = "";
  }, 1500);
}
</script>
<template>
  <Form @onSubmit="onSubmit" class="form">
    <InputTextarea
      v-model="textPost"
      placeholder="O que está pensando agora? 123"
      :disabled="contentState.state.loading"
      rows="3"
      class="input"
    />
    <Button icon="fa-solid fa-share" type="submit" />
  </Form>
</template>

<style lang="scss" scoped>
.form {
  @apply flex flex-col items-end  p-2 -mt-3 mb-2 -mx-2  border-stone-700 border-b;

  .input {
    @apply m-0;
  }
  button {
    min-width: 75px;
  }
}
</style>