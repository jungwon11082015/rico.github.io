<template>
  <section id="sections">
    <Hero />
    <Client />
    <Work />
  </section>
</template>
  
<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios'


import Hero from '@/views/Main/Section//Hero.vue'
import Work from '@/views/Main/Section/Work.vue'
import Client from '@/views/Main/Section/Client.vue'
export default {
  name: 'Index',
  props: {
  },
  components: {
    Hero,
    Client,
    Work,
  },
  setup() {
    onMounted(() => {
    });

    return {
    };
  }
}
</script>
  
<style lang="scss" scoped>
#sections {
  overflow: hidden;
}
</style>
  