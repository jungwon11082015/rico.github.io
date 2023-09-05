<template>
    <section class="about">
      <div class="inner">
        <h2>About Me</h2>
        <div class="about_container">
          <div class="about_text_box">
            <h3>도전은 고개를 숙일 때만 장애물이 된다.</h3>
            <span>-Ray Davis</span>
          </div>
          <div class="swiper_content">
            <div class="swiper-control" v-if="!isMobile">
              <button type="button" class="btn btn-swiper-prev" @click="btnSwiperPrev"></button>
              <div class="siwper-pageing">
                <span>{{ currentIndex }}</span>
                <span>/</span>
                <span>4</span>
              </div>
              <button type="button" class="btn btn-swiper-next" @click="btnSwiperNext"></button>
            </div>
            <div class="swiper-box">
              <swiper :loop="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange"
                :breakpoints="{
                  '961': {
                      slidesPerView: 1.25,
                      spaceBetween: 60,
                      centeredSlides: true,
                  },
                  '1280': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      centeredSlides: false,
                  },
                }"
              >
                <swiper-slide v-for="(imgSrc, index) in imageSources" :key="index">
                  <router-link to="/Work">
                    <img :src="imgSrc" alt="">
                  </router-link>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { gsap, power3 } from 'gsap';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  
  export default {
    name: 'About',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const swiperInstance = ref();
      const currentIndex = ref(1);
      const isMobile = ref(false);
  
      const imageSources = [
        '@/assets/images/aboute_me_img_01.jpg',
        '@/assets/images/aboute_me_img_02.jpg',
        '@/assets/images/aboute_me_img_03.jpg',
        '@/assets/images/aboute_me_img_04.jpg',
      ];
  
      const onSwiper = (swiper) => {
        if (!swiper) return;
        swiperInstance.value = swiper;
        currentIndex.value = swiper.realIndex + 1;
      };
  
      const swiperUpdate = () => {
        swiperInstance.value.update();
      };
  
      const btnSwiperPrev = () => {
        swiperInstance.value.slidePrev();
      };
  
      const btnSwiperNext = () => {
        swiperInstance.value.slideNext();
      };
  
      const onSlideChange = () => {
        currentIndex.value = swiperInstance.value.realIndex + 1;
      };
  
      onMounted(() => {
        window.addEventListener('resize', swiperUpdate);
        isMobile.value = window.innerWidth < 961;
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener('resize', swiperUpdate);
      });
  
      return {
        currentIndex,
        onSwiper,
        btnSwiperPrev,
        btnSwiperNext,
        onSlideChange,
        isMobile,
        imageSources,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/scss/__variables.scss";
  
  section {
    padding: vw(100px 0);
    align-items: start;
  
    .inner {
      display: block;
  
      h2 {
        @include breakDevicePoint(font-size, vw(60px), vw(120px), null);
        @include breakDevicePoint(text-align, left, center, null);
        color: $dpColor;
        font-weight: bold;
        letter-spacing: vw(-1px);
        margin-bottom: vw(30px);
      }
  
      .about_container {
        position: relative;
        @include breakDevicePoint(padding-left, vw(200px), 0, null);
  
        .about_text_box {
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: right;
          margin-left: vw(200px);
          padding-top: vw(60px);
          @include breakDevicePoint(width, vw(1100px), 100vw, null);
          @include breakDevicePoint(margin-left, vw(60px), 0, null);
          @include breakDevicePoint(padding-top, vw(60px), 0, null);
          @include breakDevicePoint(text-align, right, center, null);
          z-index: 10;
  
          h3 {
            font-size: vw(70px);
            font-family: 'Noto Sans Korean';
            letter-spacing: vw(-3px);
            line-height: vw(100px);
            font-weight: 700;
          }
  
          span {
            font-size: vw(60px);
          }
        }
  
        .swiper_content {
          @include breakDevicePoint(margin, vw(-20px 0 0 230px), vw(-20px 0 0 0), null);
          @include breakDevicePoint(width, vw(1000px), 100%, null);
  
          .swiper-control {
            position: absolute;
            top: vw(870px);
            left: vw(250px);
            align-items: center;
            @include breakDevicePoint(display, flex, none, null);
  
            .btn {
              width: vw(14px);
              height: vw(10px);
              background: url(@/assets/images/btn_swiper_prev.svg) 0 0 no-repeat;
              background-size: 100% auto;
  
              &.btn-swiper-next {
                background: url(@/assets/images/btn_swiper_next.svg) 0 0 no-repeat;
                background-size: 100% auto;
              }
            }
  
            .siwper-pageing {
              font-size: vw(28px);
              margin: vw(0 20px);
            }
          }
  
          .swiper-box {
            position: relative;
            overflow: hidden;
            width: 230%;
            @include breakDevicePoint(width, 230%, 100%, null);
  
            .swiper-slide {
              a {
                display: block;
  
                > img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
  </style>