<template>
  <HeaderLayout />
  <routerView  />
  <FooterLayout />
  <Wave/>
</template>

<script>
import HeaderLayout from '@/components/Layouts/common/Header.vue'
import FooterLayout from '@/components/Layouts/common/Footer.vue'
import Wave from '@/components/Layouts/common/Wave.vue'
export default { 
  name: 'App',
  components: {
    HeaderLayout,
    FooterLayout,
    Wave
  }
}
</script>

