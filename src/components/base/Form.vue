<template>
  <form @submit.prevent="$emit('onSubmit')" autocomplete="off">
    <slot />
  </form>
</template>