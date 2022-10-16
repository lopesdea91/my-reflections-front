<template>
  <div class="navbar-profile">
    <div class="icon">
      <Icon icon="fa-solids fa-user" />
    </div>
    <span class="label"> Perfil </span>
  </div>
</template>

<style lang="scss" scoped>
.navbar-profile {
  @apply h-12 flex items-center border-y my-2 cursor-pointer;

  @media (max-width: 479px) {
    @apply w-[90%] mx-auto;
  }
  @media (min-width: 480px) {
    @apply w-full justify-center;
  }
  @media (min-width: 1024px) {
    @apply justify-start;
  }

  .icon {
    @apply w-8 h-8 flex items-center justify-center;
    @media (min-width: 1024px) {
      @apply w-6 ml-2;
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