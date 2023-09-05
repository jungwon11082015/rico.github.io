<template>
  <section id="blog">
    <div class="inner">
      <div class="posting--contents">
        <div class="posting--info" v-for="(tag, index) in pageItem.tags"  :key="index">
          <em v-dompurify-html="tag"></em>
          <span>{{ formatDate(pageItem.date)}}</span>
        </div>
        <h2 class="posting--title">
          {{ pageItem.title}}
        </h2>
        <div class="posting--context" :class="isHtml ? 'html' : ''"  v-dompurify-html="pageItem.content">
        </div>
      </div>
    </div>
  </section>
</template>
    
<script>
import { ref, reactive, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios'


export default {
  name: 'BlogView',
  postId: {
    type: String,
    required: true,
  },
  components: {},
  setup() {
    const route = useRoute();
    const pageId = route.params.id;
    const pageItem = ref([]);
    const ACCESS_TOKEN = "88f0ff4e5c7f1fca1ceee0437e6771d5_e4db11b9a579e41ca6dde90025c7e146";
    const isHtml = ref( false );

    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    const tstoryitemView = async () => {
        try {
            const response = await axios.get("https://www.tistory.com/apis/post/read?", {
                params: {
                  access_token: ACCESS_TOKEN,
                  blogName: 'rico86',
                  output: 'json',
                  postId:pageId
                },
            })
            pageItem.value = response.data.tistory.item;
            isHtml.value = true;
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    onMounted(() => {
      tstoryitemView();
    });

    return {
      formatDate,
      pageItem,
      isHtml
    };
  }
}
</script>
    
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

  #blog {
    
    .inner{
      display: block;
      @include breakDevicePoint(padding, vw(300px), vw(150px), null);
    }
    .posting{
      &--contents{
        @include breakDevicePoint(padding-top, null, vw(240px), null);
      }
      &--info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include breakDevicePoint(padding-bottom, vw(40px), null, null);
        em{
          display: block;
          width: 80%;
          font-style: normal;
          color: $dpColor;
          @include breakDevicePoint(font-size, vw(24px),  vw(60px), null);
          font-weight: 600;
          font-family: 'Noto Sans Korean';
        }
        span{
          display: block;
          width: 20%;
          text-align: right;
          @include breakDevicePoint(font-size, vw(24px),  vw(60px), null);
        }
      }
      &--title{
        width: 100%;
        line-height: 68px;
        font-weight: bold;
        color: #000;
        letter-spacing: -1px;
        font-family: 'Noto Sans Korean';
        @include breakDevicePoint(font-size, vw(58px),  vw(140px), null);
        @include breakDevicePoint(padding-bottom, vw(120px), vw(100px), null);
      }
      &--context{
        line-height: 1.7;
        ::v-deep p,
        ::v-deep span,
        ::v-deep h3 {
          color: #000;
          @include breakDevicePoint(margin-bottom, vw(16px), null, null);
          @include breakDevicePoint(font-size, vw(24px), vw(40px), null);
        }
        

        ::v-deep table  {
          width: 100%;
          border:vw(1px) solid #191919;
          td{padding: 8px 0;}
        }
        ::v-deep table tr {
          border:vw(1px) solid #191919;
        }
        ::v-deep table td {
          border:vw(1px) solid #191919;
          @include breakDevicePoint(font-size, vw(24px), vw(40px), null);
        }
        ::v-deep ol {
          box-sizing: border-box;
          @include breakDevicePoint(padding, vw(30px), vw(40px), null);
          li{
            @include breakDevicePoint(font-size, vw(24px), vw(40px), null);
          }
        }
        ::v-deep pre{
          background: #191919;
          color: #fff;
          @include breakDevicePoint(padding, vw(10px), null, null);
          @include breakDevicePoint(font-size, vw(24px), vw(40px), null);
        }
      }
    }
  }
</style> 
    