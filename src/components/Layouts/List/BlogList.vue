<template>
    <template v-if="responseData.length && isView > 0">
        <ul class="blog--list" >
            <li class="blog--item"  v-for="post in responseData" :key="post.id">
                <router-link :to="{name: 'BlogView', params: { id: post.id }}">
                    <figure class="blog--thumbnail">
                        <img :src="blogInfoData[0]" alt="thumbnail">
                    </figure>
                    <div class="blog--context">
                        <div class="blog--hashtag">
                            <em>{{ blogInfoData[2]}}</em>
                        </div>
                        <em class="blog--title">{{ post.title }}</em>
                        <!-- <div class="blog--text">
                            엘루오의 DT(Digital Transformation) 깊게 들여다 보기 10<br />
                            Frog Design의 Adaptive Design, IDEO의 'Design Thinking' 방법론
                        </div> -->
                        <div class="blog--info">
                            <span class="blog--date">{{ formatDate(post.date) }}</span> 
                            <span class="blog--writer">{{ blogInfoData[1] }}</span>
                        </div>
                    </div>
                </router-link>
            </li> 
        </ul>
    </template>

    <template v-else>
        <Skeletor :SkeletorType="`list`"/>
    </template>

</template>
      
<script>

import { ref, onMounted, toRefs, reactive, defineProps  } from 'vue';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skeletor from "@/components/Layouts/common/Skeleton.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'BlogList',
    props: {
        responseData: {
            type: Array,
            required: true
        },
        blogInfoData: {
            type: Array,
            required: true
        },
        SkeletorType:{
          type:String,
        }
    },
    components: {
        Skeletor,
    },
    setup( props ) {
        const isView = ref( false );
        const formatDate = (dateString) => {
            const dateObject = new Date(dateString);
            const year = dateObject.getFullYear();
            const month = String(dateObject.getMonth() + 1).padStart(2, '0');
            const day = String(dateObject.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        onMounted(() => {
            setTimeout( ()=>{
                isView.value = true;
            },1000)
        });
        

        return {
            isView,
            formatDate
        };
    }
}
</script>
      
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

.blog {
    &--list {
        @include breakDevicePoint(padding, vw(0 200px), vw(0), null ); 
        @include breakDevicePoint(margin, vw(100px 0 120px), null, null ); 
        >li {
           border-top: vw(2px) solid #181818;
           >a{
                display: flex;
                justify-content: space-around;
                align-items: center;
                &:hover{
                    .blog--title{
                        &:before{
                            content: '';
                        }
                    }
                }
            }
            &:last-child{
                border-bottom: vw(2px) solid #181818;
            }   
        }
    }
    &--thumbnail{
        display: flex;
        justify-content: center;
        align-content: center;
        @include breakDevicePoint(width, vw(144px),  vw(200px), null ); 
        @include breakDevicePoint(padding, vw(60px 0), vw(120px 0), null ); 
        >img{
            width: 100%;
        }
    }
    &--context{ 
        @include breakDevicePoint(width, vw(765px), null, null ); 
    }
    &--hashtag{ 
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        @include breakDevicePoint(min-height, vw(29px), null, null ); 
        @include breakDevicePoint(max-height, vw(100px), null, null ); 
        @include breakDevicePoint(margin-bottom, vw(20px), null, null ); 
        >em{
            display: block;
            width: 100%;
            font-family: 'Noto Sans Korean';
            color: $dpColor;
            font-weight: 600;  
            letter-spacing: vw(-0.5px);
            @include breakDevicePoint(font-size, vw(25px), vw(50px), null ); 
        }
    }
    &--title{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-weight: bold;
        color: #222;
        letter-spacing: vw(-1px);
        font-family: 'Noto Sans Korean';
        @include breakDevicePoint(font-size, vw(40px), vw(60px), null ); 
        @include breakDevicePoint(max-height, vw(85px), null, null ); 
        @include breakDevicePoint(margin-bottom, vw(20px), null, null ); 
        &:hover{
            color: $dpColor;
        }
    }
    &--text{
        font-family: 'Noto Sans Korean';
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: 1.3;
        color: #555;
        letter-spacing: vw(-1px);
        @include breakDevicePoint(max-height, vw(120px), vw(50px), null ); 
        @include breakDevicePoint(font-size, vw(26px), vw(50px), null ); 
        @include breakDevicePoint(margin-bottom, vw(20px), vw(40px), null ); 


    }
    &--info{
        display: flex;
        align-items: center;
        span{ 
            color: #888;
            @include breakDevicePoint(font-size, vw(26px), vw(40px), null ); 
        }
    }
    &--date{ 
        display: inline-block;
        @include breakDevicePoint(padding-right, vw(20px), vw(40px), null ); 
    }
    &--writer{
        display: inline-block;
        vertical-align: top;
        &::before{
            content: '';
            display: inline-block;
            background:url("@/assets/images/icon_editor.png") 0 0 no-repeat;
            @include breakDevicePoint(width, vw(18px),  vw(30px), null ); 
            @include breakDevicePoint(height, vw(18px),  vw(30px), null ); 
            @include breakDevicePoint(background-size, vw(18px) auto,  vw(30px) auto, null ); 
            @include breakDevicePoint(padding-right, vw(6px), null, null ); 
        }
    }
   
}

</style>
      