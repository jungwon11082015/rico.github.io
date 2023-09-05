
export default function (app) {
  app.mixin({
    data() {
      return {
        vw: 0,
        vh: 0,
        isMobile:false
      };
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.vw = window.innerWidth;
        this.vh = window.innerHeight;
        if( this.vw >= 961 ){
          document.documentElement.style.setProperty('--vw', `${this.vw}px`);
          document.documentElement.style.setProperty('--vh', `${this.vh}px`);
          this.isMobile = false;
        }else{
          this.vw * 0.01;
          this.vh * 0.01;
          document.documentElement.style.setProperty('--vw', `${this.vw}px`);
          document.documentElement.style.setProperty('--vh', `${this.vh}px`);
          this.isMobile = true;
        }
      },
    }
  });
}