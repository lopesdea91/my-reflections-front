<script setup lang="ts">
import FormLogin from "@/components/FormLogin.vue";
import FormRegister from "@/components/FormRegister.vue";
import { ref } from "vue";

const form = ref<string>("login");

function showForm(value: string) {
  form.value = value;
}
</script>

<template>
  <div class="app-content page-auth">
    <Transition name="title-section" mode="out-in">
      <h2 class="title" v-if="form === 'login'">Login</h2>
      <h2 class="title" v-else>Cadastro</h2>
    </Transition>

    <hr class="divisor" />

    <Transition name="opacity" mode="out-in">
      <FormLogin v-if="form === 'login'" @showForm="showForm" />
      <FormRegister v-else @showForm="showForm" />
    </Transition>
  </div>
</template>

<style lang="scss">
.page-auth {
  @apply mt-10 flex flex-col items-center;

  .form,
  .title,
  .divisor {
    min-width: 250px;
  }
  .title {
    @apply text-2xl;
  }
  .divisor {
    @apply border-stone-700 border-b mb-3;
  }
  .btn-group {
    @apply justify-between;
  }
}
</style>
