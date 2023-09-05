<template>
    <section id="blog">
        <div class="inner">
            <h2>BLOG</h2>
            <p class="blog--word">현재 등록된 글 <em>{{count}}</em>개입니다.</p>
            <BlogList :responseData="responseItems" :blogInfoData="blogInfoItem" />
        </div>
    </section>
</template>
  
<script>
import { defineProps } from 'vue';
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { gsap, Expo, Power2, Linear } from 'gsap';
import BlogList from '@/components/Layouts/List/BlogList.vue'
import axios from 'axios'


export default {
    name: 'Blog',
    defineProps: {
        responseData: {
            type: Array,
            required: true
        },
        blogInfoData: {
            type: Array,
            required: true
        }
    },

    components: {
        BlogList
    },

    setup(props) {
        const responseItems = ref([]);
        const blogInfoItem = ref([]);
        const count = ref( 0 );
        const ACCESS_TOKEN = "88f0ff4e5c7f1fca1ceee0437e6771d5_e4db11b9a579e41ca6dde90025c7e146";
        const game = {score:0};

        const tstoryList = async () => {
            try {
                const response = await axios.get("https://www.tistory.com/apis/post/list", {
                    params: {
                    access_token: ACCESS_TOKEN,
                    output: 'json',
                    blogName: 'rico86',
                    page: '1',
                    },
                })
                
                responseItems.value = response.data.tistory.item.posts;
                count.value =  response.data.tistory.item.totalCount-1;
                countValue( count.value );
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        const countValue = ( count ) => {
              gsap.to( game, 1, {score: `+=${count}`, roundProps:"score", ease:Expo.easeInOut, onUpdate:upDateHandler});
        }

        const upDateHandler = () => {
            if( count.value == null) return;
            count.value = game.score;
        }

        const tstoryInfo = async () => {
            try {
                const response = await axios.get("https://www.tistory.com/apis/blog/info?", {
                    params: {
                        access_token: ACCESS_TOKEN,
                        output: 'json',
                    },
                });

                const blogImg =  response.data.tistory.item.blogs[0].profileImageUrl;
                // const blogImg =  response.data.tistory.item.blogs[0].profileThumbnailImageUrl;
                const blogName =  response.data.tistory.item.blogs[0].nickname;
                const blogDescription =  response.data.tistory.item.blogs[0].description;

                blogInfoItem.value.push( blogImg, blogName, blogDescription );
                
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };
        onMounted(() => {
            tstoryList();
            tstoryInfo();
        });

        onBeforeUnmount(() => {
            tstoryList();
            tstoryInfo();
            countValue();
            upDateHandler();
        })



        
        return {
            responseItems,
            count,
            blogInfoItem,
            tstoryList,
        };
    }
}
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

#blog {
    .inner {
        display: block;
        @include breakDevicePoint( padding,  vw(200px 0), vw(400px 0), null ); 
        h2 {
            text-align: center;
            font-weight: bold;
            color: $dpColor;
            padding-bottom: vw(20px);
            // @include breakDevicePoint( padding-top, vw(200px), vw(400px), null ); 
            @include breakDevicePoint( font-size, vw(120px), vw(180px), null ); 
        }

        .blog--word {
            text-align: center;
            font-family: 'Noto Sans Korean';
            font-weight: 600;
            color: #181818;
            @include breakDevicePoint(padding, vw(20px 0), null, null ); 
            @include breakDevicePoint(  font-size,  vw(80px),vw(120px), null ); 
            
            >em {
                @include breakDevicePoint(  font-size,  vw(80px),vw(120px), null ); 
                color: $dpColor;

            }
        }
    }
}
</style>
  