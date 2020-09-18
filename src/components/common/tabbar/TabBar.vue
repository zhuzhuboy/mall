<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
 
};
</script>

<style>
.tab-bar {
  display: flex;
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  text-align: center;
  background-color: #f3f3f3;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
}
</style>