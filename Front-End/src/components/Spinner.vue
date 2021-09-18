<template>
  <div class="spinner-wrapper">
    <div class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.spinner-wrapper{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>
