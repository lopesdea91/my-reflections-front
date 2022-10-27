<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import contentState from "./layout/content/state";

const { push } = useRouter();

const form = reactive({
  email: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
});

function validateFields() {
  const msg = (str: string) => (str ? "" : "Campo obrigatório");

  form.email.error = msg(form.email.value);
  form.password.error = msg(form.password.value);

  return (
    Object.values(form).length !==
    Object.values(form).filter((el) => !el.error).length
  );
}

function onSubmit() {
  if (validateFields()) {
    return;
  }
  contentState.actions.startLoading();

  setTimeout(() => {
    contentState.actions.endLoading();
    push({ name: "Feed" });
  }, 1500);
}
</script>

<template>
  <Form @onSubmit="onSubmit" class="form">
    <InputText
      label="E-mail"
      name="login-email"
      v-model="form.email.value"
      :error="form.email.error"
    />
    <InputText
      label="Senha"
      name="login-password"
      type="password"
      v-model="form.password.value"
      :error="form.password.error"
    />

    <ButtonGroup>
      <Button
        content="Entrar"
        icon="fa-solid fa-right-to-bracket"
        type="submit"
      />
      <TextLink @click="$emit('showForm', 'register')" content="não tenho conta" />
    </ButtonGroup>
  </Form>
</template>

<style lang="scss" scoped>
</style>
