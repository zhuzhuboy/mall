<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
}
</style>
