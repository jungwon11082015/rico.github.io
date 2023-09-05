<template>
    <section class="client">
    <div class="inner">
        <h2>Client</h2>
        <h3>최고의 회사들과 협업을 해본 경험이 있습니다.</h3>
        <ClientList />
    </div>
    </section>
</template>
      
<script>
import ClientList from '@/components/Layouts/List/ClientList.vue'
import { ref, onMounted } from 'vue';
import { gsap, power3 } from 'gsap';




export default {
    name: 'Client',
    props: {
    },
    components: {
        ClientList
    },

    setup() {
        onMounted(() => {

        })
        return {
        };
    }
}
</script>
      
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";
    section{
        padding:vw( 100px 0 );
        align-items: start;
        .inner {
            display: block;
            h2 {
                @include breakDevicePoint( font-size, vw(60px), vw(120px), null ); 
                @include breakDevicePoint(text-align, left, center, null);
                color: $dpColor;
                font-weight: bold;
                letter-spacing: vw(-1px);
                margin-bottom: vw(30px);
            }
            h3{
                @include breakDevicePoint( font-size, vw(28px), vw(70px), null ); 
                @include breakDevicePoint(text-align, left, center, null);
                color: #141414;
                font-family: 'Noto Sans Korean';
                font-weight: 600;
                letter-spacing: vw(-1px);
            }
        }


    }
</style>
      