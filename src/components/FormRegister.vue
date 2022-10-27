<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
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
  passwordConfirm: {
    value: "",
    error: "",
  },
});

function validateFields() {
  const msg = (str: string) => (str ? "" : "Campo obrigatório");

  form.email.error = msg(form.email.value);
  form.password.error = msg(form.password.value);
  form.passwordConfirm.error = msg(form.passwordConfirm.value);

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
      name="register-email"
      v-model="form.email.value"
      :error="form.email.error"
    />
    <InputText
      label="Senha"
      name="register-password"
      type="password"
      v-model="form.password.value"
      :error="form.password.error"
    />
    <InputText
      label="Confirme a senha"
      type="password"
      name="register-passwordConfirm"
      v-model="form.passwordConfirm.value"
      :error="form.passwordConfirm.error"
    />

    <ButtonGroup>
      <Button
        content="Criar conta"
        icon="fa-solid fa-user-plus"
        type="submit"
      />
      <TextLink @click="$emit('showForm', 'login')" content="já tenho conta" />
    </ButtonGroup>
  </Form>
</template>

<style lang="scss" scoped>
</style>
