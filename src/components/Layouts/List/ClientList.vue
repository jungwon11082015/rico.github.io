<template>
    <ul class="clent__list">
        <li class="client_items">
            <figure>
                <img src="@/assets/images/f&f.jpg" class="figure_item" alt="에프엔에프">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/casamia.jpg" class="figure_item" alt="신세계까사">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/bing.jpg" class="figure_item" alt="빙그레">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/coca.jpg" class="figure_item" alt="코라콜라">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/magnum.jpg" class="figure_item" alt="매그넘">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/p&g.jpg" class="figure_item" alt="p&g">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/meritz.jpg" class="figure_item"  alt="메리츠화재">
            </figure>
        </li>

        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/lifeplanet.jpg" class="figure_item"  alt="교보라이프플래닛">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/samsung.jpg" class="figure_item" alt="삼성화재">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/nexon.jpg" class="figure_item"  alt="넥슨">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/nc.jpg" class="figure_item" alt="엔씨소프트">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/hodoo.jpg" class="figure_item" alt="호두잉글리시">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/simmons.jpg" class="figure_item"  alt="시몬스">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/bullsone.jpg" class="figure_item" alt="불스원">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/shany.jpg" class="figure_item" alt="샤니">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/goodpeople.jpg" class="figure_item"  alt="좋은사람들">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/amore.jpg" class="figure_item" alt="아모레퍼시픽">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/realbarrier.jpg" class="figure_item"  alt="리얼베리어">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/six.jpg" class="figure_item"  alt="식스코인">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/mindbridge.jpg" class="figure_item"   alt="마인드브릿지">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/carby.jpg" class="figure_item" alt="카비">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/madforgarlic.jpg" class="figure_item"  alt="메드포갈릭">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/lg.jpg" class="figure_item" alt="lg전자">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/toxnfill.jpg" class="figure_item" alt="톡스앤필">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/ramada.jpg" class="figure_item" alt="라마다호텔">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/funbeerking.jpg" class="figure_item"  alt="펀비어킹">
            </figure>
        </li>
        <li class="client_items">
            
            <figure>
                <img src="@/assets/images/soomlab.jpg" class="figure_item" alt="숨랩">
            </figure>
        </li>

    </ul>
</template>
      
<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'ClientCard',
    props: {
    },


    setup() {
     
        const cardListShow = () => {
            const clientItems = gsap.utils.toArray(".figure_item");
            clientItems.forEach((item, index) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        // markers:true,
                        start: "top +=800",
                        // end: "+=500",
                    }
                });
                tl.set(item, { y: 0, opacity: 0 });
                tl.to(item, 0.75, { scale: 1, opacity:1, ease: Expo.easeInOut, delay: index * 0.02});
            })
        }
        onMounted(() => {
            cardListShow();
        })

        onUnmounted(() => {
            cardListShow();
        })

        return {
            // cardListShow
        };
    }
}
</script>
      
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

.clent__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
        position: relative;
        @include breakDevicePoint(width, 20%, 33.3333%, null);
        overflow: hidden;
        @include breakDevicePoint(margin,  vw(10px), 0, null);
        figure {
            width: 100%;

            >img {
                width: 100%;
                opacity: 0;
                transform: scale(.5);
            }
        }
    }
}</style>
      