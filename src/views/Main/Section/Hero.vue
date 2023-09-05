<template>
  <section class="hero">
    <div class="inner">
      <h2 class="hero--title" ref="textTarget">
        <div class="hero--text">
              <em class="on">Radiant</em>
              <em>Inspirational</em>
              <em>Cheerful</em>
              <em>Optimistic</em>
        </div>
      </h2>
      <h3 class="hero--name" ref="textTitle">RICO</h3>
      <div class="hero--layout">
        <div class="hero--slogan">도전을 즐기며<br /> 실패를 즐기는 사람.</div>
        <div class="hero--description">사용자 UI 인터페이스를<br />생각하는 사람</div>
      </div>
    </div>
  </section>
</template>
    
<script>
import { ref, onMounted, onUnmounted  } from 'vue';
import { gsap, Power0, Power2, power3, Expo } from 'gsap';

export default {
  name: 'Intro',
  props: {
  },

  setup() {
    const textTarget = ref( "" );
    const textTitle = ref( "" );

    const visualShow = () => {
      const textItems =  gsap.utils.toArray(".hero--text em");
      textItems.forEach((item, index) =>{
          gsap.set( textItems, {  opacity:0, scale:.5   });
          gsap.to(item, 0.75, {
              opacity:1, scale:1, transformOrigin:"50% 50%",
              ease: Expo.easeOut,
              delay: 1.5 * index,
              onStart: () => {
                  textItems.forEach((otherItem, otherIndex) => {
                      if (otherIndex !== index) {
                          otherItem.style.opacity = 0;
                      }
                  });
              },
              onComplete: () => {
                if (index === textItems.length - 1) {
                  gsap.to( item, 0.75, {  opacity:0, ease:Power0.easeInOut, delay:0.25, onComplete: () =>{
                    if( textTarget.value != null ){
                      textTarget.value.remove();
                      textTitle.value.classList.add( "on" );
                    }
                  }})
                }
              }
          });
      }); 
    }

    onMounted(() => {
      visualShow();
    })

    onUnmounted( () =>{
      visualShow();
    });

    return {
      textTarget,
      textTitle,
      visualShow
    };
  }

}
</script>
    
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

.hero {
  width: 100%;
  position: relative;
  justify-content: center;

  .inner {
    display: block;
    @include breakDevicePoint( padding-top, null, vw(250px), null ); 
  }

  &--text{
    position: relative;
    padding-bottom: vw(750px);
    width: 100%;
    overflow: hidden;
    em{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      font-size:vw(550px);
      color: $dpColor;
      font-weight: bold;
      opacity: 0;
      &:nth-child(2){
        font-size:vw(320px);
      }
      &:nth-child(3){
        font-size:vw(490px);
      }
      &:nth-child(4){
        font-size:vw(390px);
      }
     
    }
  }
  &--name{
      display: none;
      font-size:vw(850px);
      color: $dpColor;
      font-weight: bold;
      text-align: center;
      &.on{
        display: block;
      }
  }

  &--layout {
    display: flex;
    justify-content: space-between;
  }

  &--slogan {
    font-size: vw(30px);
    color: $dpColor;
    font-weight: 600;
    line-height: 1.3;
    font-family: 'Noto Sans Korean';
  }

  &--description {
    font-size: vw(30px);
    color: $dpColor;
    font-weight: 600;
    line-height: 1.3;
    font-family: 'Noto Sans Korean';
    text-align: right;
  }


}
</style>
    