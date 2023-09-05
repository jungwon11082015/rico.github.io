<template>
    <aside id="skeletons">
        
        <template  v-if="typeValue =='list' ">
            <ul class="skeleton--list" :class="isChange ? 'full' : '' ">
                <li v-for="item in listLength" :style="{ height: listItemHeight + 'px' }"></li>
            </ul>
        </template>
        <template v-if="typeValue == 'card'">
            <div class="skeleton--card"></div>
        </template>
    </aside>
</template>
    
<script>
  import { ref, computed } from 'vue';
  export default {
    name: 'Skeleton',
    props: {
        SkeletorType:{
          type:String,
        },
        SkeletorLocation:{
            type:String
        },
        SkeletorLength:{
            type: Number
        },
        SkeletorHeight:{
            type: Number
        }
    },
    setup( props ) {
        const typeValue = ref('');
        const locationValue = ref('');
        const isChange = ref( false );
        const listLength = ref( 0 );
        const listItemHeight = ref( 0 );

        typeValue.value = props.SkeletorType;
        locationValue.value = props.SkeletorLocation;
        listLength.value = props.SkeletorLength;
        listItemHeight.value = props.SkeletorHeight;

        const computedListItemHeight = computed(() => listItemHeight.value);


        if( locationValue.value  == 'main' ){
            isChange.value = true;
        }
        return{ 
            typeValue,
            locationValue,
            isChange,
            listLength,
            listItemHeight,
            computedListItemHeight
        }
    }
  }
  </script>
    
<style lang="scss" scoped>
#skeletons{
    display: block;
    .skeleton{
        display: block;
        width:100%;
        height:100%;

        &--card{
            display: block;
            width:100%;
            height:100%;
            padding-bottom: 50%;
            background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
            border-radius: 1rem;
            background-size: 200% 100%;
            background-position: 100% 0;
            animation: load 1s infinite;
        }
        &--list{
            margin-bottom: vw(100px);
            @include breakDevicePoint( padding,  vw(0 200px), vw(0 400px), null ); 
            li{
                display: block;
                width:100%;
                height:vw(300px);
                margin-top: vw(30px);
                background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
                border-radius: 1rem;
                background-size: 200% 100%;
                background-position: 100% 0;
                animation: load 1s infinite;
              
            }
            &.full{
                padding:0;
            }
        }
    }
}
@keyframes load {
    100% {
        background-position: -100% 0;
    }
}


// .skeleton_loading {
//     width: vw(1000px);
//     height: vw(1000px);
// }
// /* 스켈레톤 이미지 */
// .skeleton_img {
//     width: 100%;
//     height: 100%;
// }

// /* 스켈레톤 텍스트 */
// .skeleton_text {
//     margin-bottom: 0.5rem;
//     height: 1rem;
// }
// .skeleton_text:nth-child(1) {
//     width: 50%;
//     height: 1.5rem;
// }
// .skeleton_text:nth-child(2) {
//     width: 20%;
//     height: 0.8rem;
// }
// .skeleton_text:last-child {
//     width: 80%;
// }

// .skeleton_loading{
//     background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
//     border-radius: 1rem;
//     background-size: 200% 100%;
//     background-position: 100% 0;
//     animation: load 1s infinite;
// }

// @keyframes load {
//     100% {
//         background-position: -100% 0;
//     }
// }

  </style>
    