<template>
    <header :class="isOpen ? 'open' : ''">
        <div class="inner">
            <h1>
                <router-link to="/" ref="logo">R</router-link>
            </h1>
            <h2 class="title" ref="title">Creative Ui Developer</h2>
            <button type="button" class="menu" @click="gnbChecked">
                <span v-if="!isOpen">Menu</span>
                <span v-else>Close</span>
            </button> 
        </div>
    </header>
    <nav class="nav" ref="gnbTarget" :class="isMobile ? 'mobile' : ''">
        <div class="inner" >
            <ul class="nav__list">
                <li><routerLink to="/" @click.native="gnbClose"><span class="nav__item">Home</span></routerLink></li>
                <li><routerLink to="/Work" @click.native="gnbClose"><span class="nav__item">Work</span></routerLink></li>
                <li><routerLink to="/Contact" @click.native="gnbClose"><span class="nav__item">Contact</span></routerLink></li>
                <li><routerLink to="/Blog" @click.native="gnbClose"><span class="nav__item">Blog</span></routerLink></li>
            </ul>
            <ul class="info_list">
                <li class="sns_item">
                    <dt >Social</dt>
                    <dd>
                        <a href="https://www.instagram.com/heojeongweon2087/" target="_blank">Instagram</a>
                    </dd>
                    <dd>
                        <a href="https://www.facebook.com/hpro86" target="_blank">Facebook</a>
                    </dd>
                    <dd>
                        <a href="https://github.com/kararico" target="_blank">GitHub</a>
                    </dd>
                </li>
                <li class="sns_item">
                    <dt>Email</dt>
                    <dd>
                        <a href="mailto:ixkfo86@gmail.com">ixkfo86@gmail.com</a>
                    </dd>
                </li>
            </ul>
        </div>

    </nav>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { gsap, Expo, Power0 } from 'gsap';
import scrollEvent from '@/assets/js/scrollEvent';
import globalResizeMixin from '@/assets/js/globalResizeMixin';

export default {
    name: 'Header',
    mixins: [scrollEvent, globalResizeMixin],
    props: {
    },
    setup() {
        const sT = ref(0);
        const rotateValue = ref(0);
        const isOpen = ref( false );
        const logo = ref(null);
        const gnbTarget = ref(null);
        let rotatePrevValue = 0;
        const title = ref( null );
        const body = document.body;
       
        const handleScroll = () => {
            sT.value = window.scrollY;
            rotateValue.value = sT.value / 10;
            rotatePrevValue = rotateValue.value;
            logo.value.$el.style.transform = 'rotate(' + Math.floor(rotateValue.value) + 'deg)';
            if( sT.value > 0 ){
                gsap.to( title.value, 0.05, { y: -340+"%", opacity:0, ease:Power0.easeInOut });
            }else{
                gsap.to( title.value, 0.08, { y: 0, opacity:1, ease:Power0.easeInOut });
            }
        };


        const gnbChecked = () => {
            isOpen.value = !isOpen.value;
            if( isOpen.value ){
                gnbOpen();
            }else{
                gnbClose();
            }
        }
   
        const gnbOpen = () => {
            const gnbItems =  gsap.utils.toArray(".nav__item");
            const snsItems = gsap.utils.toArray(".sns_item");
            const transformValue = logo.value.$el.style.transform;
            const numericValue = parseFloat(transformValue.match(/[-\d.]+/)[0]);
          
            if( isOpen.value ){
                gsap.to( gnbTarget.value, 0.01, { y: 0, ease:Power0.easeOut, onComplete: ()=>{
                    gsap.killTweensOf(".nav__item");
                    setTimeout( () =>{
                        gnbItems.forEach((item, index) =>{
                            gsap.to( item, 0.2,{  y:0, opacity:1, ease:Power0.easeInOut, delay: index * 0.025 });
                        }); 
                        snsItems.forEach((item, index) =>{
                            gsap.to( item, 0.2,{  opacity:1, ease:Power0.easeInOut, delay: index * 0.1 });
                        }); 
                    },600 )
                    
                }});
                body.style.overflow = "hidden";
                if(  numericValue > 0 ){
                    logo.value.$el.style.transform = 'rotate(0deg)';
                }

            }
        }

        const gnbClose = () => {
            isOpen.value = false;
            const gnbItems =  gsap.utils.toArray(".nav__item");
            const snsItems = gsap.utils.toArray(".sns_item");
            gsap.to( gnbTarget.value, 0.01, { y: -100+"%" , ease:Power0.easeIn, onComplete: () =>{
                gnbItems.forEach((item) =>{
                    gsap.to( item, 0, {  y:-100+"%", opacity:0, ease:Expo.easeInOut });
                }); 
                snsItems.forEach((item) =>{
                    gsap.to( item, 0, { opacity:0, ease:Expo.easeInOut });
                }); 
            }});
            body.style.overflow = "auto";
            logo.value.$el.style.transform = 'rotate(' + Math.floor(rotatePrevValue) + 'deg)';
        }

        onMounted(() => { 
            handleScroll();
        });


        return {
            handleScroll,
            gnbOpen,
            gnbClose,
            gnbChecked,
            sT,
            rotateValue,
            isOpen,
            logo,
            gnbTarget,
            rotatePrevValue,
            title,
        };
    }
}
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: vw(30px 0 0 0);
    z-index: 10;

    .inner {
        h1 {
            position: relative;
            @include breakDevicePoint( width, 48px, vw(88px), vw(166px) ); 
            @include breakDevicePoint( height, 48px, vw(88px), vw(166px)); 
            a {
                position: absolute;
                top: 0; 
                left: 0;
                display: flex;
                width: inherit;
                height: inherit;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                background: $dpColor;
                overflow: hidden;
                z-index: 20;
                text-align: center;
                color: #fff;
                @include breakDevicePoint( font-size, 32px, vw(58px), vw(80px) ); 
                font-weight: 600;
                border: 2px solid #fff;
                z-index: 2;
                transition: all .2s;

                &:hover {
                    top: vw(-8px);
                }
            }

            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: inherit;
                height: inherit;
                border: 2px solid #fff;
                border-radius: 50%;
                background: $dpColor;
                z-index: 1;
            }
        }

        .title {
            font-size: vw(22px);
            @include breakDevicePoint( font-size, 22px, vw(85px), null ); 
            color: $dpColor;
            font-weight: 600; 
        }

        .menu {
            position: relative;
            @include breakDevicePoint( width,  vw(90px), vw(100px), vw(180px) ); 
            @include breakDevicePoint( height, vw(40px), vw(60px), vw(120px) );  
            span {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                font-weight: 600;
                color: #fff;
                background: $dpColor;
                width: inherit;
                height: inherit;
                @include breakDevicePoint( font-size, vw(22px), vw(30px), vw(55px) ); 
                @include breakDevicePoint(line-height, vw(40px), vw(60px), vw(120px) ); 
                @include breakDevicePoint(border-radius, vw(20px), vw(20px), vw(50px) ); 
                border: 2px solid #fff;
                z-index: 2;
                transition: all .2s;

            }

            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                @include breakDevicePoint(width, vw(90px), vw(100px), vw(180px) ); 
                @include breakDevicePoint(height, vw(40px), vw(60px), vw(120px) ); 
                @include breakDevicePoint(border-radius, vw(20px), vw(20px), vw(50px) ); 
                border: 2px solid transparent;

                background: $dpColor;
                z-index: 1;

            }

            &:hover {
                span {
                    @include breakDevicePoint(top, vw(-8px), null, null ); 
                }
            }

        }
    }

    &.open {
        z-index: 60;
        .inner {
            h1 {
                a {
                    background: #fff;
                    color: #141414;
                    border: 2px solid #141414;
                }

                &:after {
                    content: '';
                    border: 2px solid #141414;
                    border-radius: 50%;
                    background: transparent;
                    z-index: 1;
                }
            }

            .title {
                color: #fff;
            }

            .menu {
                span {
                    color: #141414;
                    background: #fff;
                    border: 2px solid #141414;
                    z-index: 2;
                    transition: all .2s;
                }

                &:after {
                    content: '';
                    background: $dpColor;
                    border: 2px solid #141414;
                }

                &:hover {
                    span {
                        top: vw(-8px);
                    }
                }

            }

        }
        nav{

        }
    }
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $dpColor;
    @include breakDevicePoint( padding-top, 250px, vw(500px), null ); 
    z-index: 30;
    transform-origin: top center;
    transform: translateY(-101%);
    will-change: transform;
    transition: all 0.75s;

    .inner {
        flex-direction: row;
        @include breakDevicePoint( flex-direction, row, column, null ); 
        .nav__list {
            @include breakDevicePoint( width, auto, 100%, null ); 
            @include breakDevicePoint( text-align, left, center, null ); 
            li {
             
                font-weight: bold;
                @include breakDevicePoint( width, 384px, auto, null ); 
                font-size:vw(120px);
                a{
                    position: relative;
                    display: inline-block;
                    @include breakDevicePoint( width, 100%, vw(720px), null ); 
                    padding-bottom: vw(136px);
                    @include breakDevicePoint( padding-bottom, 136px, vw(240px), null ); 
                    overflow: hidden;
                    span{
                        position: absolute;
                        top:0; left:0;
                        transform: translateY(105%);
                        opacity: 0;
                        @include breakDevicePoint( top, vw(10px), vw(0), null ); 
                        @include breakDevicePoint( font-size, 100px, vw(220px), vw(180px) ); 
                    }
                    &:before{
                        content: "";
                        display: block;
                        position: absolute;
                        top: 0; right: 0; bottom: 0; left: 0;
                        inset: 0 0 0 0;
                        background: #141414;
                        z-index: -1;
                        transition: transform .3s ease;
                        transform: scaleX(0);
                        transform-origin: bottom right;
                        @include breakDevicePoint( content, "", none, null ); 
                    }
                    
                    &:hover{
                        color: #fff;
                        &:before{
                            transform: scaleX(1);
                            transform-origin: bottom left;
                        }
                    }
                }
            }
        }
        .info_list {
            display: flex;
            text-align: right;
            @include breakDevicePoint(display, flex, none, null ); 
            @include breakDevicePoint(align-self, flex-end, flex-start, null ); 
            @include breakDevicePoint(text-align, right, left, null ); 
            @include breakDevicePoint(margin, vw(0 0 70px 0), vw(0 auto), null ); 
            @include breakDevicePoint(flex-direction, column, row, null ); 
            @include breakDevicePoint(justify-content, flex-start, space-between, null ); 
            li{
                display: flex;
                flex-direction: column;
                @include breakDevicePoint(justify-content, flex-end,  flex-start, null ); 
                opacity: 0;
                dt{
                    font-size:vw(20px);
                    margin:vw(10px 0);
                    font-weight: 500;
                    @include breakDevicePoint(font-size, 20px, vw(120px), null ); 
                }
                dd{
                    @include breakDevicePoint(font-size, 30px, vw(120px), null ); 
                    font-weight: bold;
                    a{
                        &:hover{
                            color: #fff;
                        }
                    }
                   
                }
            }
        }
       
    }
    &.mobile{
        padding-top:0;
        display: flex;
        align-items: center;
        justify-items: center;
        .inner{
            display: block;
        }
    }
}

</style>
  