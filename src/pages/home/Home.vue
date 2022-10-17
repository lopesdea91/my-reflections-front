<script setup lang="ts">
import ContentHeader from "../../components/layout/content/contentHeader.vue";
import ContentCreatePost from "../../components/layout/content/ContentCreatePost.vue";
import Loading from "../../components/layout/content/Loading.vue";
</script>

<template>
  <div class="page-content">
    <Loading />
    <ContentHeader title="Página inicial" />
    <ContentCreatePost />
    <h1>Home</h1>
  </div>
  <div class="page-aside">aside</div>
</template>