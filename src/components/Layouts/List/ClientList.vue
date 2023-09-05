<template>
    <ul class="clent__list">
        <li class="client_items" v-for="(item, index ) in processedList" :key="index">
            <figure>
                <img :src="item.imageSrc" class="figure_item" :alt="item.alt" />
            </figure>
        </li>
    </ul>
</template>
      
<script>
import { ref, computed, onMounted, onUnmounted, nextTick  } from 'vue';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'ClientCard',
    props: {
    },


    setup() {
        const listItem = ref([
            {
                "src": "f&f.jpg",
                "alt": "에프엔에프"
            },
            {
                "src": "casamia.jpg",
                "alt": "신세계까사"
            },
            {
                "src": "bing.jpg",
                "alt": "빙그레"
            },
            {
                "src": "coca.jpg",
                "alt": "코라콜라"
            },
            {
                "src": "magnum.jpg",
                "alt": "매그넘"
            },
            {
                "src": "p&g.jpg",
                "alt": "p&g"
            },
            {
                "src": "meritz.jpg",
                "alt": "메리츠화재"
            },
            {
                "src": "lifeplanet.jpg",
                "alt": "교보라이프플래닛"
            },
            {
                "src": "samsung.jpg",
                "alt": "삼성화재"
            },
            {
                "src": "nexon.jpg",
                "alt": "넥슨"
            },
            {
                "src": "nc.jpg",
                "alt": "엔씨소프트"
            },
            {
                "src": "hodoo.jpg",
                "alt": "호두잉글리시"
            },
            {
                "src": "simmons.jpg",
                "alt": "시몬스"
            },
            {
                "src": "bullsone.jpg",
                "alt": "불스원"
            },
            {
                "src": "shany.jpg",
                "alt": "샤니"
            },
            {
                "src": "goodpeople.jpg",
                "alt": "좋은사람들"
            },
            {
                "src": "amore.jpg",
                "alt": "아모레퍼시픽"
            },
            {
                "src": "realbarrier.jpg",
                "alt": "리얼베리어"
            },
            {
                "src": "six.jpg",
                "alt": "식스코인"
            },
            {
                "src": "mindbridge.jpg",
                "alt": "마인드브릿지"
            },
            {
                "src": "carby.jpg",
                "alt": "카비"
            },
            {
                "src": "madforgarlic.jpg",
                "alt": "메드포갈릭"
            },
            {
                "src": "lg.jpg",
                "alt": "lg전자"
            },
            {
                "src": "toxnfill.jpg",
                "alt": "톡스앤필"
            },
            {
                "src": "ramada.jpg",
                "alt": "라마다호텔"
            },
            {
                "src": "funbeerking.jpg",
                "alt": "펀비어킹"
            },
            {
                "src": "soomlab.jpg",
                "alt": "숨랩"
            }
        ])
        const processedList = ref([]);
        
        const cardListShow = () => {
            const clientItems = gsap.utils.toArray(".figure_item");
            console.log(clientItems, clientItems.length );
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
            processedList.value = listItem.value.map(item => ({
                ...item,
                imageSrc: require(`@/assets/images/${item.src}`)
            }));
            nextTick(cardListShow);
        })

        onUnmounted(() => {
            cardListShow();
        })

        return {
            processedList
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
      