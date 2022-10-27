<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useStoreSystem } from "../../../store/useStoreSystem";
import navbarState from "../navbar/state";

const { push } = useRouter();

const { logged } = useStoreSystem();

const windowWidth = ref<number>(0);

function handleClick() {
  if (windowWidth.value <= 480) {
    navbarState.actions.setStatusMenu(false);
  }

  push({ name: logged ? "Account" : "Auth" });
}

function setWindowWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", setWindowWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", setWindowWidth);
});
</script>


<template>
  <div class="app-navbar-profile" @click="handleClick">
    <div class="icon icon-base">
      <Icon icon="fa-solids fa-user" />
    </div>
    <span class="label"> Perfil </span>
  </div>
</template>
 
 <style lang="scss" scoped>
.app-navbar-profile {
  @apply h-12 flex items-center border-stone-700 border-b cursor-pointer;

  @media (max-width: 479px) {
    @apply w-[90%] mx-auto;
  }

  @media (min-width: 480px) {
    @apply w-[75%] justify-center;
  }

  @media (min-width: 1024px) {
    @apply w-full justify-start;
  }

  .icon {
    @media (min-width: 1024px) {
      @apply ml-2;
    }
  }

  .label {
    @media (min-width: 480px) {
      @apply px-2 hidden truncate font-light;
    }

    @media (min-width: 1024px) {
      @apply block;
    }
  }
}
</style>