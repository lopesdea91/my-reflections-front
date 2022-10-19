<script setup lang="ts">
import { ref } from "vue";
const status = ref<boolean>(false);
const list = ref(null);

function open() {
  status.value = true;
}
function close() {
  status.value = false;
}

function clickOutside() {
  close();
  window.removeEventListener("click", clickOutside);
}
function subscribe() {
  window.addEventListener("click", clickOutside);
}
function unSubscribe() {
  window.removeEventListener("click", clickOutside);
}

function handler() {
  if (!status.value) {
    open();
    setTimeout(subscribe);
  } else {
    close();
    unSubscribe();
  }
}
</script>

<template>
  <div class="dropdown">
    <button class="icon-base" @click="handler">
      <Icon icon="fa-solid fa-ellipsis" />
    </button>
    <ul
      ref="list"
      :class="{
        hidden: !status,
      }"
    >
      <slot />
    </ul>
  </div>
</template>

<style lang="scss">
.dropdown {
  @apply relative border-stone-700 border;
  ul {
    @apply absolute right-0 min-w-max text-stone-800 bg-white z-50 list-none rounded-sm;
  }
  li {
    @apply text-left text-base px-2 leading-7 cursor-pointer hover:bg-stone-200 duration-150;
  }
}
</style>