<template>
    <section class="card" >
        <div class="inner"  > 
            <h2>Project Work</h2>
            <template v-if="isShow">
                <CardList  :itemLimit="5" />
            </template> 
            <template v-else>
                <Skeletor :SkeletorHeight="750"  :SkeletorLength="5" :SkeletorLocation="`main`"  :SkeletorType="`list`"/>
            </template> 
            <AllWork /> 
        </div>  
    </section>
</template>
       
<script>
import { ref, inject, onMounted, watch } from 'vue';
import CardList from '@/components/Layouts/List/CardList.vue'
import AllWork from '@/components/Layouts/buttons/AllWork.vue'
import Skeletor from "@/components/Layouts/common/Skeleton.vue";

export default {
    name: 'Work',
    components: {
        CardList,
        AllWork,
        Skeletor
    },

    setup() {
        const emitter = inject('emitter');  
        const isCheck = ref( false );
        const isShow = ref(false);

        const loadDataChek  =  () => {
            setTimeout( () =>{
                isShow.value = true;
            },1500);
        };
        watch(isCheck, loadDataChek);
        onMounted(() => {
            emitter.on('workDataJson', (value) => {
                isCheck.value = true;
            });
            loadDataChek();
        })
        return {
            isShow,
            isCheck
        };
    }
}
</script>
      
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

section {
    padding: vw(100px 0);
    align-items: start;

    .inner {
        display: block;

        h2 {
            font-size: vw(60px);
            color: $dpColor;
            font-weight: bold;
            letter-spacing: vw(-1px);
            margin-bottom: vw(30px);
        }
    }


}
</style>
      