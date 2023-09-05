<template>
    <div id="work">
      <template v-if="hasFetchedData">
        <div class="work_visual">
          <img :src="currentItem.view?.viewBigImgSrc" :alt="currentItem.project">
        </div>
      </template>
      <template v-else>
        <Skeletor  :SkeletorType="`card`"/>
      </template>

      <div class="inner">
        <section class="overview">
          <div class="text_inner">
            <div class="overview_title_box">
              <em class="title">OVERVIEW</em> 
               <h2 v-dompurify-html="currentItem.view?.overviewTitle"></h2>
            </div>
            <div class="overview_text_box">
              <dl v-for="(item, index) in currentItem.view?.websiteInfo" :key="index">
                <dt >{{ item.title }}</dt>
                <dd>{{ item.description }}</dd>
               <!-- <dd>{{ subItem.subText }}</dd>  -->
              </dl>
            </div>
          </div>
        </section>
        <section class="mission">
          <div class="text_inner">
              <em class="title">MISSION</em>
              <h3 v-dompurify-html="currentItem.view?.middleTitle"></h3>
              <img :src="currentItem.view?.middleBigImgSrc" alt="">
          </div>
        </section>

        <section class="goals">
          <div class="text_inner">
            <em class="title">PROJECT GOALS</em>
            <ol class="goals_list">
              <li v-for="(subItem, index) in  currentItem.view?.defineList" :key="index">
                <dl>
                  <dt>0{{index+1 }}</dt>
                  <dd v-dompurify-html="subItem.title"></dd>
                  <dd>{{ subItem.description}}</dd>
                </dl>
              </li>
            </ol>
          </div>
    
        </section>
      </div>

      <Pagination />
      <!-- <Pagination :prev-Info="prevInfo" :next-Info="nextInfo"  :current-page="currentPage" :total-pages="totalPages" /> -->
  
    </div>
  </template>
    
  <script>
  import { ref, onMounted, watch, watchEffect  } from 'vue';
  import { useRoute  } from 'vue-router';
  import { storage } from '@/firebase/init.js';
  import { ref as storageRef, getDownloadURL } from 'firebase/storage';
  import axios from 'axios'
  import { useWorkStore } from '@/store/index'
  import Pagination from '@/components/Layouts/common/Pagination.vue'
  import Skeletor from "@/components/Layouts/common/Skeleton.vue";


  
  export default {
    name: 'worksView',
    props: {
    },
    components: { 
      Pagination,
      Skeletor
    },
    setup(props) {
      const route = useRoute();
      const currentItem = ref({});
      const hasFetchedData = ref(false);
      const currentPage = ref(0);
      const paginationStore = useWorkStore();

      const fetchWorkItems = async () => {  
        if (!hasFetchedData.value) { 
          const storageInstance = storage;
          const jsonFileRef = storageRef(storageInstance, `works.json`);

          try {
              const downloadURL = await getDownloadURL(jsonFileRef);
              const res = await axios.get(downloadURL);
              currentPage.value =  res.data[route.params.id-1].id;
              currentItem.value = res.data[route.params.id-1];

              hasFetchedData.value = true; 
              paginationStore.currentPage = res.data[route.params.id-1].id;
              paginationStore.list = res.data;
              paginationStore.totalPage = res.data.length;
              
              
            } catch (error) {
              console.error("Error fetching data:", error);
          }
        }
      };

      watch(route,  () =>{
        hasFetchedData.value = false;
        fetchWorkItems();
      });

      watchEffect(() => {
        const newId = Number(route.params.id);
        paginationStore.currentPage = newId;
      });

      onMounted(() => {
        fetchWorkItems();
      });

      return {
        currentPage,
        hasFetchedData,
        currentItem,
        routeParamsId:  Number(route.params.id),
        paginationStore
      };
    },
  }
  </script>
    
  <style lang="scss" scoped>
  @import "@/assets/scss/__variables.scss";

  #work {
    
    .work_visual{
      >img{ width: 100%; }
    }
    .inner{
      display: block;
      .text_inner{
        display: flex;
        padding:vw( 100px);
        justify-content: space-between;
        align-items:center;
        overflow: hidden;
        @include breakDevicePoint( flex-direction,  row, row, column ); 
        .overview_title_box{
          @include breakDevicePoint( width,  vw(892px), vw(892px), vw(100%) ); 
          .title{ 
            display:block;
            @include breakDevicePoint( font-size,  vw(26px), null, vw(66px) ); 
            @include breakDevicePoint( margin-bottom,  vw(10px), vw(30px), null ); 
            color: $dpColor;
            font-weight: 600;
          }
          h2{
            // font-size:vw(40px);
            @include breakDevicePoint( font-size,  vw(40px), null, vw(80px) ); 
            font-weight: bold;
            line-height: 1.35; 
            @include breakDevicePoint( line-height,  vw(1.35), vw(1.2), null ); 
          }
        }
        .overview_text_box{
          // width: 45%;
          @include breakDevicePoint( width,  vw(730px), vw(730px), vw(100%) ); 
          @include breakDevicePoint( padding-top,  null, null, vw(50px) ); 
          dl{
            dt{
              @include breakDevicePoint( margin-bottom,  vw(16px), null, vw(24px) ); 
              font-size:vw(24px);
              @include breakDevicePoint( font-size,  vw(24px), vw(24px), vw(52px) ); 
              font-weight: bold;
            }
            dd{
              @include breakDevicePoint( margin-bottom,  vw(24px), null, vw(48px) ); 
              @include breakDevicePoint( font-size,  vw(22px), vw(22px), vw(46px) ); 
              line-height: 1.35;
            }
          }
        }
      }
      .mission{
        display: block;
        .text_inner{
          display: block;
          position: relative;
          // 
          .title{ 
            display:block;
            font-size:vw(26px);
            padding-top: vw(120px);
            margin-bottom: vw(30px);
            color: $dpColor;
            font-weight: 600;
          }
          h3{
            display: inline-block;
            position: relative;
            font-size:vw(50px);
            font-family: 'Noto Sans Korean';
            font-weight: bold;
            line-height: 1.2;
            z-index: 2;
            &:after{
              content: '';
              display: block;
              position: absolute;
              bottom:0;
              left:-15%; 
              width: 100%;
              height: 72%;
              background: #fff;
              z-index: -1;
            }
          }
          img{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
          }
        }
      }
      .goals{
        flex-direction:row;
        justify-content: space-between;
        .text_inner{
          padding:vw( 100px);
          align-items: start;
          .title{
            display:block;
            @include breakDevicePoint( font-size,  vw(26px), null, vw(66px) ); 
            color: $dpColor;
            font-weight: 600;
          }
          .goals_list{
            display: flex;
            flex: 1;
            @include breakDevicePoint(  display,  flex,  null, block ); 
            @include breakDevicePoint(  margin-left,  vw(100px),  null, 0 ); 
            @include breakDevicePoint( padding-top,  null, null, vw(30px) ); 
            li{
              @include breakDevicePoint( margin-top,  null, null, vw(52px) ); 
              dl{
                dt{
                  margin-right: vw(18px);
                  float: left; 
                  // font-size:vw(24px);
                  @include breakDevicePoint( font-size,  vw(24px), vw(24px), vw(52px) ); 
                  font-weight: bold;
                  color: $dpColor;
                  height: vw(150px);
                  &+dd{
                    margin-top:vw(-8px);
                    // font-size:vw(30px);
                    @include breakDevicePoint( font-size,  vw(30px), null, vw(52px) ); 
                    font-weight: bold;
                  }
                }
                dd{
                  margin-top: vw(14px);
                  float: left;
                  width: 80%;
                  font-size: vw(18px);
                  @include breakDevicePoint( width,  vw(393), null, 95% ); 
                  @include breakDevicePoint( font-size,  vw(22px), vw(22px), vw(46px) ); 
                  line-height: 1.35;
                  font-family: 'Noto Sans Korean';
                }
                &:after{
                  content: '';
                  display: block;
                  clear: both;
                }
              }
              &:first-child{ margin-top:0; }
            }
          }

        }
      }
    }
   
  }
  </style> 
    