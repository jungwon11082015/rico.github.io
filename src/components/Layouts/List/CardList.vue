<template>
    <ul class="card--list">
        <li class="card__item" v-for="(item, index) in  displayedItems" :key="item.id">
            <router-link :to="{ name: 'WorkView', params: { id: item.id }}">
                <div class="video__dimd"></div>
                <video loop playsinline muted autoplay>
                    <source :src="item.dataSrc" type="video/mp4">
                </video>
                <ul class="card--tag__list">
                <li>{{ item.skill[0] }}</li>
                <li>{{ item.skill[1] }}</li>
                </ul>
            </router-link>
        </li>
    </ul>
</template>
      
<script>
import { ref, onMounted, onUpdated, watch, inject } from 'vue';
import { storage } from '@/firebase/init.js';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';
import axios from 'axios'
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'CardList',
    props: {
        itemLimit: {
            type: Number,
        },
   
    },
    setup(props) {
        const emitter = inject('emitter');
        const jsonData = ref({});
        const displayedItems = ref([]);
        const isDataShow = () => {
            emitter.emit('workDataJson', true);
        };
        const firebaseData = async () => {
            const storageInstance = storage;
            const jsonFileRef = storageRef(storageInstance, `works.json`);
            try {
                const downloadURL = await getDownloadURL(jsonFileRef);
                const res = await axios.get(downloadURL);
                const workitems = res.data;
                jsonData.value = workitems;
                isDataShow();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const videoDimds = () => {
            const gnbItems = gsap.utils.toArray(".video__dimd");
            gnbItems.forEach((item) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                    }
                });
                tl.set(item, { autoAlpha: 1, left: 0 });
                tl.to(item, 0.75, {
                    left: "100%",
                    ease: Power2.out
                });
            });
        };

        const updateDisplayedItems = (newVal) => {
            if (Array.isArray(newVal)) {
                displayedItems.value = props.itemLimit !== undefined
                    ? newVal.slice(0, props.itemLimit)
                    : newVal;
            }
        };

        watch(jsonData, updateDisplayedItems);

   
        onMounted(() => {
            firebaseData();
        });
        onUpdated( () =>{
            videoDimds();
        })
 
        return {
            jsonData,
            displayedItems,
            videoDimds,
        };
    }
}
</script>
      
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

.card {
    &--list {
        >li {
            position: relative;
            margin: vw(0 0 50px 0);
            border-radius: vw(15px);
            overflow: hidden;
            height: vw(750px);

            a {
                display: block;
                height: inherit;

                .video__dimd {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    z-index: 5;
                }

                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 0;
                }
            }
        }
    }

    &--tag__list {
        position: absolute;
        bottom: vw(50px);
        left: vw(30px);
        display: flex;

        >li {
            border-radius: vw(30px);
            font-size: vw(40px);
            padding: vw(14px 30px);
            margin-left: vw(20px);
            background: #fff;
            color: $dpColor;
            font-weight: 600;

            &:first-child {
                margin-left: 0;
            }

            &:nth-child(odd) {
                background: $dpColor;
                color: #fff;
            }
        }
    }
}

@media (max-width: 960px) {
    .card {
        &--tag__list {
            >li{
                font-size:vw(60px);
            }
        }
    }
}
</style>
      