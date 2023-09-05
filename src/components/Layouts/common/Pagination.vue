<template>
    <div class="work_project" :class="currentPage > 1 &&  currentPage != totalItems ? 'on' : '' ">
        <div class="project_info" v-if="currentPage > 1">
            <router-link :to="prevProjectUrl" @click="prevPage" :style="prevInfoBg" >
                <em class="text">Prev Project</em>
                <em class="title">{{prevInfoName}}</em>
            </router-link>
        </div>
        <div class="project_info"  v-if="currentPage != totalItems" >
            <router-link :to="nextProjectUrl" @click="nextPage" :style="nextInfoBg">
                <em class="text">Next Project</em>
                <em class="title">{{ nextInfoName }}</em>
            </router-link>
        </div>
    </div>
</template>  

<script>

import { computed  } from 'vue';
import { useWorkStore } from '@/store/index'

const  paginationStore = useWorkStore();

export default {
    name: 'Pagination',
    setup() { 
        const startIndex = computed(() => paginationStore.startIndex);
        const currentPage = computed(() => paginationStore.currentPage);
        const totalItems =  computed(() => paginationStore.totalItem);

        const nextInfoName = computed(() => {
            if (paginationStore.nextInfo && paginationStore.nextInfo.project) {
                return paginationStore.nextInfo.project;
            }
            return ''; 
        });
        const prevInfoName = computed(() => {
            if (paginationStore.prevInfo && paginationStore.prevInfo.project) {
                return paginationStore.prevInfo.project;
            }
            return ''; 
        });

        const prevPage = () => {
            if (currentPage.value > 1) {
                paginationStore.setCurrentPage(currentPage.value - 1);
            }
        }


        const nextPage = () => {
            paginationStore.setCurrentPage(currentPage.value + 1);

        }

        const nextInfoBg = computed( () => {
            if (paginationStore.nextInfo && paginationStore.nextInfo.view.middleBigImgSrc) {
                return{
                    background: `url(${paginationStore.nextInfo.view.middleBigImgSrc})`
                }
            }
            return null; 
        })

        const prevInfoBg = computed( () => {
            if (paginationStore.prevInfo && paginationStore.prevInfo.view.middleBigImgSrc) {
                return{
                    background: `url(${paginationStore.prevInfo.view.middleBigImgSrc})`
                }   
            }
            return null; 
        })


        const prevProjectUrl = computed(() => `/workView${currentPage.value - 1}`);
        const nextProjectUrl = computed(() => `/workView${currentPage.value + 1}`);

        return {
            startIndex,
            // endIndex,
            currentPage,
            prevPage,
            nextPage,
            prevProjectUrl,
            nextProjectUrl,
            nextInfoName,
            prevInfoName,
            nextInfoBg,
            prevInfoBg,
            totalItems
        };
    }

}


</script>
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

.work_project {
    .project_info {
        a {
            position: relative;
            padding: vw(50px 100px);
            display: block;
            width: 100%;
            background:  transparent;
            background-size:cover !important;
            @include breakDevicePoint( height,  vw(260px), null,vw(380px) ); 
            box-sizing: border-box;
           
            em {
                position: relative;
                display: block;
                z-index: 10;
            }

            .text {
                position: relative;
                // font-size: vw(30px);
                @include breakDevicePoint( font-size,  vw(30px), null, vw(50px) ); 
                font-weight: 600;
                color: #fff;
                font-family: 'Barlow Semi Condensed', 'Noto Sans Korean';
                z-index: 10;
            }

            .title {
                @include breakDevicePoint( padding-top,  vw(30px), null, vw(50px) ); 
                text-align: center;
                // font-size: vw(55px);
                @include breakDevicePoint( font-size,  vw(55px), null, vw(70px) ); 
                color: #fff;
                font-family: 'Barlow Semi Condensed', 'Noto Sans Korean';
                font-weight: bold;
            }
            &:after{
                content: '';
                position: absolute;
                top:0; left:0;
                width: 100%;
                height: 100%;
                background: rgba( 0, 0, 0, 0.4);
                z-index: 5;
            }
        }
       
    }

    &.on {
        display: flex;
        justify-content: space-between;

        .project_info {
            width: 50%;
        }
    }
}
</style>