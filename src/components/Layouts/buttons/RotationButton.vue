<template>
    <div class="rotation_banner">

    </div>
  </template>
  
  <script>
  export default {
    name: 'RotationButton',
    props: {
    } 
  }
  </script>
  
  <style lang="scss" scoped>
    .rotation_banner{
        position: fixed;
        left: -95px;
        border-radius: 15px;
        border: 1px solid;
        bottom: 130px;
        width: 250px;
        padding: 0 10px;
        height: 35px;
        line-height: 33px; 
        overflow: hidden;
        z-index: 11;
        transform: rotate(-90deg);
    }
  </style>
  