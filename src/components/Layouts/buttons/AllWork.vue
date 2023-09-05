<template>
   <section class="work">
    <router-link  to="work">
        <h2>
            <span>All</span>
            <span>
                Work
                <svg viewBox="0 0 96 60" fill="none" class="arrow" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 26C1.79086 26 1.93129e-07 27.7909 0 30C-1.93129e-07 32.2091 1.79086 34 4 34L4 26ZM94.8284 32.8284C96.3905 31.2663 96.3905 28.7337 94.8284 27.1716L69.3726 1.71573C67.8105 0.153637 65.2778 0.153637 63.7157 1.71573C62.1536 3.27783 62.1536 5.81049 63.7157 7.37259L86.3431 30L63.7157 52.6274C62.1536 54.1895 62.1536 56.7222 63.7157 58.2843C65.2778 59.8464 67.8105 59.8464 69.3726 58.2843L94.8284 32.8284ZM4 34L92 34L92 26L4 26L4 34Z"></path>
                </svg>
            </span>
        </h2>
    </router-link>

   </section>
</template>
      
<script>
import { ref, onMounted } from 'vue';
import { gsap, power3 } from 'gsap';



export default {
    name: 'Work',
    props: {
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
.work {
    padding-top:0;
    padding-bottom: 0;
    h2{
        position: relative;
        display: flex;
        flex-direction: column;
        span{
            font-size:vw(160px);
            color: $dpColor;
            font-weight: bold;
         
            &:hover{
                .arrow{
                    margin-left: vw(30px);
                }
            }
        }
        .arrow{ 
            position: relative;
            display:inline-flex;
            width:vw(100px);
            color: $dpColor;
            fill: $dpColor;
            vertical-align: middle;
            left:vw(-30px);
            transition: all 0.3s ease;
        }
    }
}
</style>
      