<template>
  <div
    class="
      text-uppercase
      mt-4
      text-center
      py-4
      card-title
      font-weight-bold
      secondary--text
    "
  >
    <slot>Title</slot>
  </div>
</template>

<script>
export default {
  name: "AuthCardTitle",
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.card-title {
  background-color: $primary;
  border-bottom: 5px solid $secondary !important;
  letter-spacing: 4px;
  font-size: 1.2rem;
}
</style>
