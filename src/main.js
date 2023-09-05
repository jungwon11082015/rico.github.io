import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import globalMixin  from '@/assets/js/globalResizeMixin'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger"
import VueDOMPurifyHTML from 'vue-dompurify-html'
import mitt from 'mitt'
gsap.registerPlugin(ScrollTrigger);
 
//css import 
import '@/assets/scss/__reset.scss';
import '@/assets/scss/__Layouts.scss';


const emitter = mitt();
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueDOMPurifyHTML)
app.use(globalMixin);
app.config.globalProperties.$gsap = gsap;
app.provide('emitter', emitter);      
app.mount('#app');
  