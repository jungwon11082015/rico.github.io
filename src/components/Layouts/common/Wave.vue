<template>
    <aside id="wave">
      <div class="waves">
        <div class="wave type2"></div>
        <!-- <div class="wave type3"></div>
        <div class="wave type4"></div>
        <div class="wave type5"></div> -->
      </div>
    </aside>
</template>
    
  <script>
  export default {
    name: 'Wave',
    props: {
    }
  }
  </script>
    
  <style lang="scss" scoped>
  @import "@/assets/scss/__variables.scss";
  aside{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0; 
    width:100%;
    height: 100%;
    transform: translateY(100%);
    z-index: 100;
    .waves{
      position:relative;
      height: inherit;
      .wave{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        &.type2{
          top:10%;
          background: $dpColor;
          // background: red;
        }
      }
    }
  }

  </style>
    