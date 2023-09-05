<template>
  <footer>
    <div class="sns_contents">
      <div v-if="false">
        <h2>SNS</h2>
        <ul class="sns_list">
          <li>
            <a href="javascript:;">I</a>
          </li>
          <li>
            <a href="javascript:;">F</a>
          </li>
          <li>
            <a href="javascript:;">G</a>
          </li>
        </ul>
      </div>

    </div>
    <div class="inner">
      <!-- <span class="copyright">매 순간을 마지막인 것처럼 살아라!</span> -->
      <div class="logo">RICO</div>
      <span> @2023 RICO PORTFOLIO</span>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";

footer {
  .sns_contents {
    display: flex;
    // justify-content: start;
    border-top: 1px solid $dpColor;
    margin: vw(0 30px);
    padding-top: vw(30px);

    h2 {
      font-size: vw(48px);
      color: $dpColor;
      font-weight: bold;
    }

    .sns_list {
      display: flex;
      margin: vw(4px 0 0 20px);

      li {
        margin:vw( 0 3px);
        a {
          display: block;
          font-size: vw(20px);
          background: $dpColor;
          color: #fff;
          padding: vw(10px 20px);
          border-radius: 50px;
          font-weight: 600;
          box-sizing: border-box;
          &:hover{
            background: #141414;
            color: #fff;
            transition:  all .75s;
          }
        }
      }
    }
  }

  .inner {
    align-items: flex-end;

    span {
      font-size: vw(20px);
      color: $dpColor;
      font-weight: 600;
    }

    .logo {
      font-size: vw(120px);
      color: $dpColor;
      font-weight: 600;
    }
  }
}
</style>
  