<template>
  <section id="contact">
    <div class="inner">
      <h2>REQUIREMENT</h2>
      <h3>어떤 프로젝트를 같이 진행해볼까요?</h3>
      <div class="form_box">
        <form @submit.prevent="submitForm">
          <div class="row">
            <div>
              <label for="user-name">성함</label>
              <input type="text" id="user-name" v-model="name"  ref="nameInput" @input="validateName" placeholder="이름을 입력해주세요.">
              <span v-if="nameError" class="error">{{ nameError }}</span>
            </div>
            <div>
              <label for="user-name">이메일</label>
              <input type="email" id="user-email" v-model="email" ref="emaiInput" @input="validateEmail" placeholder="이메일을 입력해주세요.">
              <span v-if="emailError" class="error">{{ emailError }}</span>
            </div>
          </div>
          <div class="row full">
            <div class="full">
              <label for="user-phone">연락처</label>
              <input type="tel" id="user-phone" v-model="phoneNumber" ref="phoneInput" @input="validatePhoneNumber"
                placeholder="연락처를 입력해주세요." maxlength="13">
              <span v-if="phoneError" class="error">{{ phoneError }}</span>
            </div>
          </div>
          <div class="row full">
            <div class="textarea_box">
              <label for="user-project">프로젝트 내용</label>
              <textarea id="user-project" v-model="projectName" ref="projectInput" @input="validateTextarea" placeholder="프로젝트 내용을 입력해주세요.">
                      </textarea>
              <span v-if="projectError" class="error">{{ projectError }}</span>
            </div>
          </div>
          <button type="submit" class="btn-send">보내기</button>
        </form>
      </div>
    </div>
  </section>
</template>
    
<script>
import { ref, watch, onMounted } from 'vue';
import { db, storage } from '@/firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';

export default {
  name: 'contact',
  props: {
  },
  components: {
  },
  setup() {
    const name = ref('');
    const email = ref('');
    const phoneNumber = ref('');
    const projectName = ref('');
    const nameError = ref('');
    const emailError = ref('');
    const phoneError = ref('');
    const projectError = ref('');
    const nameInput = ref( null );
    const emaiInput  = ref( null );
    const phoneInput = ref( null );
    const projectInput = ref( null );

    const validateName = () => {
      if (name.value.length < 0) {
        nameError.value = '성함을 입력해주세요.';
      } else {
        nameError.value = '';
      }
    };

    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email.value.length < 0) {
        emailError.value = '이메일 입력해주세요.';
      } else if (!emailPattern.test(email.value) && email.value.length > 0) {
        emailError.value = '유효한 이메일 주소를 입력해주세요.';
      } else {
        emailError.value = '';
      }
    };

    const validatePhoneNumber = () => {
      const phonePattern = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
      const cleanedPhoneNumber = phoneNumber.value.replace(/[^\d]/g, '');

      if( cleanedPhoneNumber.substr(0,2) == '02' ){
        if(cleanedPhoneNumber.length <= 5) {//02-123-5678
          phoneNumber.value = cleanedPhoneNumber.substr(0, 2) + '-' + cleanedPhoneNumber.substr(2, 3)
        }
        else if(cleanedPhoneNumber.length > 5 && cleanedPhoneNumber.length <= 9) {//02-123-5678
          phoneNumber.value = cleanedPhoneNumber.substr(0, 2) + '-' + cleanedPhoneNumber.substr(2, 3) + '-' + cleanedPhoneNumber.substr(5)
        }
        else if(cleanedPhoneNumber.length > 9) {//02-1234-5678
          phoneNumber.value = cleanedPhoneNumber.substr(0, 2) + '-' + cleanedPhoneNumber.substr(2, 4) + '-' + cleanedPhoneNumber.substr(6)
        }
      }else{
          if(cleanedPhoneNumber.length < 8) {
            phoneNumber.value = cleanedPhoneNumber
          }
          else if(cleanedPhoneNumber.length == 8){
            phoneNumber.value = cleanedPhoneNumber.substr(0, 4) + '-' + cleanedPhoneNumber.substr(4)
          }
          else if(cleanedPhoneNumber.length == 9){
            phoneNumber.value = cleanedPhoneNumber.substr(0, 3) + '-' + cleanedPhoneNumber.substr(3, 3) + '-' + cleanedPhoneNumber.substr(6)
          }
          else if(cleanedPhoneNumber.length == 10){
            phoneNumber.value = cleanedPhoneNumber.substr(0, 3) + '-' + cleanedPhoneNumber.substr(3, 3) + '-' + cleanedPhoneNumber.substr(6)
          }
          else if(cleanedPhoneNumber.length > 10) { //010-1234-5678
            phoneNumber.value = cleanedPhoneNumber.substr(0, 3) + '-' + cleanedPhoneNumber.substr(3, 4) + '-' + cleanedPhoneNumber.substr(7)
          }
        }

      if (phoneNumber.value.length < 0) {
        phoneError.value = '휴대폰 번호를 입력해주세요.';
      } else if (!phonePattern.test(phoneNumber.value) && phoneNumber.value.length > 0) {
        phoneError.value = '유효하지 않은 전화 번호. 11자리 숫자를 입력하세요.';
      } else {
        phoneError.value = '';
      }
    };

    const validateTextarea = () => {
      if (projectName.value.trim() === '' && projectName.value.length < 0) {
        projectError.value = '프로젝트 내용을 입력해주세요.';
      } else {
        projectError.value = '';
      }
    }

    const submitForm = async (event) => {
      event.preventDefault();

      try {
        if (name.value && email.value && phoneNumber.value && projectName.value) {
          const colRef = collection(db, 'formData');
          const newData = {
            name: name.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            projectName: projectName.value,
          };

          const docRef = await addDoc(colRef, newData);
          alert('프로젝트 의뢰를 완료했습니다. 감사합니다.');
          name.value = '';
          email.value = '';
          phoneNumber.value = '';
          projectName.value = '';
          nameError.value = '';
          emailError.value = '';
          phoneError.value = '';
          projectError.value = '';

        } else {
          if( name.value.length == 0 ){
            nameError.value = '성함을 입력해주세요.';
            nameInput.value.focus();
            alert( "성함을 입력해주세요" );
          }else if( email.value.length == 0 ){
            emailError.value = '이메일 입력해주세요.';
            alert( "이메일 입력해주세요. ")
            emaiInput.value.focus();
          }else if( phoneNumber.value.length == 0 ){
            phoneError.value = '휴대폰번호를 입력해주세요';
            phoneInput.value.focus();
            console.log( phoneInput.value );
            alert( "휴대폰번호를 입력해주세요.");
          }else if( projectName.value.length == 0  ){
            projectError.value = '프로젝트 내용을 입력해주세요.';
            console.log( projectInput, projectInput.value );
            projectInput.value.focus();
            alert( "프로젝트 내용을 입력해주세요.");
          }
        }
      } catch (error) {
        console.error("error", error);
      }

    };
   

    watch(name, () => {
      validateName();
    });

    watch(email, () => {
      validateEmail();
    });

    watch(phoneNumber, () => {
      validatePhoneNumber();
    });

    watch(projectName, () => {
      validateTextarea();
    });

    onMounted(() => {

    });

    return {
      name,
      email,
      phoneNumber,
      nameError,
      emailError,
      phoneError,
      projectError,
      projectName,
      nameInput,
      emaiInput,
      phoneInput,
      projectInput,
      submitForm,
      validateName,
      validateEmail,
      validatePhoneNumber,
      validateTextarea,
     
    };
  }
}
</script>
    
<style lang="scss" scoped>
@import "@/assets/scss/__variables.scss";
$bg-width: 50px;
$bg-height: 50px;
#contact {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC) repeat 0 0;
      -webkit-animation: bg-scrolling-reverse 0.92s infinite;
      -moz-animation: bg-scrolling-reverse 0.92s infinite;
      -o-animation: bg-scrolling-reverse 0.92s infinite;
      animation: bg-scrolling-reverse 0.92s infinite;
      -webkit-animation-timing-function: linear;
      -moz-animation-timing-function: linear;
      -o-animation-timing-function: linear;
      animation-timing-function: linear;

  .inner {
    display: block;
    @include breakDevicePoint( padding,  vw(200px), vw(400px 10px 200px), null ); 

    h2 {
      text-align: center;
      padding-bottom: vw(20px);
      @include breakDevicePoint( font-size, vw(120px), vw(180px), null ); 
      font-weight: 700;
      color: $dpColor;
    } 

    h3 {
      padding-bottom: vw(100px);
      text-align: center;
      @include breakDevicePoint(  font-size,  vw(80px),vw(110px), null ); 
      font-family: 'Noto Sans Korean';
      font-weight: 700;
    }

    .form_box {
      @include breakDevicePoint(width, vw(1000px), 90vw, null );
      margin: 0 auto;

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include breakDevicePoint(display, flex,  block, null );

        >div {
          position: relative;
          width: 50%;
          margin-bottom: vw(50px);
          @include breakDevicePoint(width, 50%, 100%, null );

          label {
            display: block;
            margin-bottom: vw(20px);
            @include breakDevicePoint(font-size, vw(18px),vw(48px), null );
            font-family: 'Noto Sans Korean';
            font-weight: bold;
          }

          input {
            border: 0;
            border-bottom: vw(2px) solid #141414;
            width: 100%;
            @include breakDevicePoint(padding, vw(14px 40px),vw(28px 80px), null );
            box-sizing: border-box;
            @include breakDevicePoint(font-size, vw(20px),vw(48px), null );
            @include breakDevicePoint(letter-spacing, vw(-2px), vw(-5px), null );
          }

          textarea {
            border: 0;
            width: 100%;
            border-bottom: vw(2px) solid #141414;
            @include breakDevicePoint( min-height, vw(250px),vw(560px), null );
            @include breakDevicePoint( padding, vw(40px),vw(80px), null );
            box-sizing: border-box;
            @include breakDevicePoint(font-size, vw(20px),vw(48px), null );
            line-height: 1.5;
            font-family: 'Noto Sans Korean';
            border:vw(2px) solid #191919;
            @include breakDevicePoint(letter-spacing, vw(-2px), vw(-5px), null );
          }

          .error {
            display: block;
            color: $dpColor;
            font-family: 'Noto Sans Korean';
            font-weight: bold;
            @include breakDevicePoint(margin,vw(10px 0),vw(20px 0), null );
            @include breakDevicePoint(font-size, vw(20px),vw(40px), null );
          }

          &:first-child {
            margin-right: vw(20px);
          }

          &.full {
            margin-right: 0;
          }
        }

        &.full {
          >div {
            width: 100%;
            &.textarea_box {
              margin-right: 0;
            }
          }
        }
      }

      .btn-send {
        width: 100%;
        background: $dpColor;
        color: #fff;
        font-family: 'Noto Sans Korean';
        font-weight: 700;
        transition: all .3s;
        @include breakDevicePoint(padding, vw(20px 0),vw(40px 0), null );
        @include breakDevicePoint(font-size, vw(28px),vw(48px), null );

        &:hover {
          background: #141414;
          color: #fff;
        }
      }
    }

  }

  @keyframes         bg-scrolling-reverse {
          100% { background-position: $bg-width $bg-height; }
        }
}
</style> 
    