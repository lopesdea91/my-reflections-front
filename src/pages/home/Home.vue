<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from "vue";
import { actions as headerActions } from "@/components/layout/header/state";
import CreatePost from "@/components/layout/content/CreatePost.vue";
import Post from "@/components/Post/index.vue";

onBeforeMount(() => {
  headerActions.setTitle("Home");
});
onBeforeUnmount(() => {
  headerActions.reset();
});
</script>

<template>
  <div class="app-content">
    <!-- <Title content="Página Inicial" /> -->

    <CreatePost />

    <Post linkPost />

    <!-- <Form class="form-login" @onSubmit="teste">
      <Text content="Login" size="display" />

      <InputText label="E-mail" v-model="form.email" />
      <InputText label="Senha" v-model="form.password" />

      <ButtonGroup class="py-1">
        <Button
          content="Entrar"
          type="submit"
          icon="fa-solid fa-share"
          icon-position="rigth"
        />
        <Button
          content="Entrar"
          type="submit"
          icon="fa-solid fa-share"
          icon-position="rigth"
        />
      </ButtonGroup>
    </Form> -->
  </div>

  <!-- <div class="page-content-home"> -->

  <!-- <ContentHeader title="Página inicial" />

  <ContentCreatePost /> -->

  <!-- <PostFeed />
    <PostFeed />
    <PostFeed />
    <PostFeed /> -->
  <!-- </div> -->
  <!-- <div class="page-aside">aside</div> -->
</template>

<style lang="scss" scoped>
.container {
  @apply w-full max-w-sm border-stone-800 border shadow-stone-600 shadow py-2 px-4 flex flex-col gap-3;
}
</style>