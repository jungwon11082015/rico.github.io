<template>
  <div id="work">
    <div class="inner">
      <div class="work_top_content">
        <div class="work_text_box js-motion">
          <h2 class="work--title">WORK</h2>
          <h3 class="work--info" ref="title">
            참여했던 프로젝트를<br />
            소개합니다.
          </h3>
          <h4 class="work--subtitle js-motion" ref="subTitle">
          <span class="count" ref="count">0</span>개의 프로젝트를 성공적으로 해냈습니다.
          </h4>
        </div>
      </div>
      <CardList :workJsonItem="jsonData" :itemLength="5" />
    </div>
  </div>
</template>
    
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap, Expo, Power2, Linear } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardList from '@/components/Layouts/List/CardList.vue'
gsap.registerPlugin(ScrollTrigger);


export default {
  name: 'WorkList',
  props: {
  },
  components: {
    CardList,
  },
  setup() {
    const title = ref(null);
    const subTitle = ref(null);
    const count = ref( 0 );
    const game = {score:0};
    
    const titleShow =  () =>{
      
      const items = gsap.utils.toArray(".js-motion");
      gsap.set(  items, { opacity: 0, y:50 });
        gsap.to(  items, 0.75, { opacity: 1, y:0, ease:Expo.easeInOut, onComplete: () => {
          gsap.to( game, 4, {score:"+=58", roundProps:"score", ease:Linear.easeNone, onUpdate:upDateHandler});
      }});

      items.forEach( (item) =>{
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top  center",
                // markers:true,
                scrub: true,

            }
        });
        tl.set(item, { autoAlpha: 1  });
        tl.to(item, 0.75, {
            autoAlpha:0,
            ease: Power2.out
        });
      });
    }

    const upDateHandler = () => {
      if( count.value == null) return;
      count.value.innerText = game.score;
    }

    onMounted(() => {
      titleShow();
    })

    onBeforeUnmount(() => {
      titleShow();
      upDateHandler();
    })

    return {
      title,
      subTitle,
      count
    };
  }
}
</script>
    
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";
$bg-width: 50px;
$bg-height: 50px;

#work {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC) repeat 0 0;
      -webkit-animation: bg-scrolling-reverse 0.92s infinite;
      -moz-animation: bg-scrolling-reverse 0.92s infinite;
      -o-animation: bg-scrolling-reverse 0.92s infinite;
      animation: bg-scrolling-reverse 0.92s infinite;
      -webkit-animation-timing-function: linear;
      -moz-animation-timing-function: linear;
      -o-animation-timing-function: linear;
      animation-timing-function: linear;
      
  .inner {
    display: block;
    .work_top_content{

      .work_text_box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include breakDevicePoint(  padding,  vw(400px 0), vw(420px 0 400px), null ); 
        @include breakDevicePoint(  flex-direction, row, column, null ); 
      }
      @keyframes  bg-scrolling-reverse {
          100% { background-position: $bg-width $bg-height; }
        }
    }
 
  }
  .work--title{
    text-align: center;
    padding-bottom: vw(40px);
    font-weight: 700;
    color: $dpColor;
    @include breakDevicePoint( font-size, vw(30px), vw(180px), null ); 
    @include breakDevicePoint( display,  none, block, null ); 
  }
  .work--info{
      color: #141414;
      font-weight: bold;
      letter-spacing: vw(-3px);
      line-height: 1.3;
      font-family: 'Noto Sans Korean';
      @include breakDevicePoint(  font-size,  vw(80px),vw(120px), null ); 
      @include breakDevicePoint( text-align,  left, center, null ); 
      @include breakDevicePoint( width,  45%, 100%, null ); 
    }

    .work--subtitle  {
        color: #141414;
        font-weight: bold;
        letter-spacing: vw(-3px);
        line-height: 1.3;
        font-family: 'Noto Sans Korean';
        @include breakDevicePoint(  font-size,  vw(80px),vw(120px), null ); 
        @include breakDevicePoint( text-align,  left, center, null ); 
        @include breakDevicePoint( width,  55%, 72%, null ); 
        .count{
          display: inline-block;
          text-align: center;
          @include breakDevicePoint(  font-size,  vw(80px),vw(120px), null ); 
          @include breakDevicePoint( width,  vw(100px),vw(120px), null ); 
          color: $dpColor;
        }
      }

}
</style>
    