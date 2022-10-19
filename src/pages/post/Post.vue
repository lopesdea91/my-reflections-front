<script setup lang="ts">
import ContentHeader from "../../components/layout/content/contentHeader.vue";
import Loading from "../../components/layout/content/Loading.vue";
import Post from "../../components/Post.vue";
</script>

<template>
  <div class="page-content">
    <Loading />
    <ContentHeader btnBack title="Post" />

    <Post />
  </div>
</template>
