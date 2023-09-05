"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[961],{3961:function(e,a,l){l.r(a),l.d(a,{default:function(){return q}});var r=l(3396),u=l(9242),t=l(7139);const n=e=>((0,r.dD)("data-v-f225d764"),e=e(),(0,r.Cn)(),e),o={id:"contact"},s={class:"inner"},v=n((()=>(0,r._)("h2",null,"REQUIREMENT",-1))),i=n((()=>(0,r._)("h3",null,"어떤 프로젝트를 같이 진행해볼까요?",-1))),p={class:"form_box"},c={class:"row"},m=n((()=>(0,r._)("label",{for:"user-name"},"성함",-1))),d={key:0,class:"error"},h=n((()=>(0,r._)("label",{for:"user-name"},"이메일",-1))),b={key:0,class:"error"},f={class:"row full"},g={class:"full"},_=n((()=>(0,r._)("label",{for:"user-phone"},"연락처",-1))),w={key:0,class:"error"},E={class:"row full"},N={class:"textarea_box"},y=n((()=>(0,r._)("label",{for:"user-project"},"프로젝트 내용",-1))),I={key:0,class:"error"},j=n((()=>(0,r._)("button",{type:"submit",class:"btn-send"},"보내기",-1)));function k(e,a,l,n,k,H){return(0,r.wg)(),(0,r.iD)("section",o,[(0,r._)("div",s,[v,i,(0,r._)("div",p,[(0,r._)("form",{onSubmit:a[8]||(a[8]=(0,u.iM)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent"]))},[(0,r._)("div",c,[(0,r._)("div",null,[m,(0,r.wy)((0,r._)("input",{type:"text",id:"user-name","onUpdate:modelValue":a[0]||(a[0]=e=>n.name=e),ref:"nameInput",onInput:a[1]||(a[1]=(...e)=>n.validateName&&n.validateName(...e)),placeholder:"이름을 입력해주세요."},null,544),[[u.nr,n.name]]),n.nameError?((0,r.wg)(),(0,r.iD)("span",d,(0,t.zw)(n.nameError),1)):(0,r.kq)("",!0)]),(0,r._)("div",null,[h,(0,r.wy)((0,r._)("input",{type:"email",id:"user-email","onUpdate:modelValue":a[2]||(a[2]=e=>n.email=e),ref:"emaiInput",onInput:a[3]||(a[3]=(...e)=>n.validateEmail&&n.validateEmail(...e)),placeholder:"이메일을 입력해주세요."},null,544),[[u.nr,n.email]]),n.emailError?((0,r.wg)(),(0,r.iD)("span",b,(0,t.zw)(n.emailError),1)):(0,r.kq)("",!0)])]),(0,r._)("div",f,[(0,r._)("div",g,[_,(0,r.wy)((0,r._)("input",{type:"tel",id:"user-phone","onUpdate:modelValue":a[4]||(a[4]=e=>n.phoneNumber=e),ref:"phoneInput",onInput:a[5]||(a[5]=(...e)=>n.validatePhoneNumber&&n.validatePhoneNumber(...e)),placeholder:"연락처를 입력해주세요.",maxlength:"13"},null,544),[[u.nr,n.phoneNumber]]),n.phoneError?((0,r.wg)(),(0,r.iD)("span",w,(0,t.zw)(n.phoneError),1)):(0,r.kq)("",!0)])]),(0,r._)("div",E,[(0,r._)("div",N,[y,(0,r.wy)((0,r._)("textarea",{id:"user-project","onUpdate:modelValue":a[6]||(a[6]=e=>n.projectName=e),ref:"projectInput",onInput:a[7]||(a[7]=(...e)=>n.validateTextarea&&n.validateTextarea(...e)),placeholder:"프로젝트 내용을 입력해주세요."},"\r\n                      ",544),[[u.nr,n.projectName]]),n.projectError?((0,r.wg)(),(0,r.iD)("span",I,(0,t.zw)(n.projectError),1)):(0,r.kq)("",!0)])]),j],32)])])])}var H=l(4870),x=l(3901),D=l(4287),P={name:"contact",props:{},components:{},setup(){const e=(0,H.iH)(""),a=(0,H.iH)(""),l=(0,H.iH)(""),u=(0,H.iH)(""),t=(0,H.iH)(""),n=(0,H.iH)(""),o=(0,H.iH)(""),s=(0,H.iH)(""),v=(0,H.iH)(null),i=(0,H.iH)(null),p=(0,H.iH)(null),c=(0,H.iH)(null),m=()=>{e.value.length<0?t.value="성함을 입력해주세요.":t.value=""},d=()=>{const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;a.value.length<0?n.value="이메일 입력해주세요.":!e.test(a.value)&&a.value.length>0?n.value="유효한 이메일 주소를 입력해주세요.":n.value=""},h=()=>{const e=/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,a=l.value.replace(/[^\d]/g,"");"02"==a.substr(0,2)?a.length<=5?l.value=a.substr(0,2)+"-"+a.substr(2,3):a.length>5&&a.length<=9?l.value=a.substr(0,2)+"-"+a.substr(2,3)+"-"+a.substr(5):a.length>9&&(l.value=a.substr(0,2)+"-"+a.substr(2,4)+"-"+a.substr(6)):a.length<8?l.value=a:8==a.length?l.value=a.substr(0,4)+"-"+a.substr(4):9==a.length||10==a.length?l.value=a.substr(0,3)+"-"+a.substr(3,3)+"-"+a.substr(6):a.length>10&&(l.value=a.substr(0,3)+"-"+a.substr(3,4)+"-"+a.substr(7)),l.value.length<0?o.value="휴대폰 번호를 입력해주세요.":!e.test(l.value)&&l.value.length>0?o.value="유효하지 않은 전화 번호. 11자리 숫자를 입력하세요.":o.value=""},b=()=>{""===u.value.trim()&&u.value.length<0?s.value="프로젝트 내용을 입력해주세요.":s.value=""},f=async r=>{r.preventDefault();try{if(e.value&&a.value&&l.value&&u.value){const r=(0,D.hJ)(x.db,"formData"),v={name:e.value,email:a.value,phoneNumber:l.value,projectName:u.value};await(0,D.ET)(r,v);alert("프로젝트 의뢰를 완료했습니다. 감사합니다."),e.value="",a.value="",l.value="",u.value="",t.value="",n.value="",o.value="",s.value=""}else 0==e.value.length?(t.value="성함을 입력해주세요.",v.value.focus(),alert("성함을 입력해주세요")):0==a.value.length?(n.value="이메일 입력해주세요.",alert("이메일 입력해주세요. "),i.value.focus()):0==l.value.length?(o.value="휴대폰번호를 입력해주세요",p.value.focus(),console.log(p.value),alert("휴대폰번호를 입력해주세요.")):0==u.value.length&&(s.value="프로젝트 내용을 입력해주세요.",console.log(c,c.value),c.value.focus(),alert("프로젝트 내용을 입력해주세요."))}catch(m){console.error("error",m)}};return(0,r.YP)(e,(()=>{m()})),(0,r.YP)(a,(()=>{d()})),(0,r.YP)(l,(()=>{h()})),(0,r.YP)(u,(()=>{b()})),(0,r.bv)((()=>{})),{name:e,email:a,phoneNumber:l,nameError:t,emailError:n,phoneError:o,projectError:s,projectName:u,nameInput:v,emaiInput:i,phoneInput:p,projectInput:c,submitForm:f,validateName:m,validateEmail:d,validatePhoneNumber:h,validateTextarea:b}}},T=l(89);const U=(0,T.Z)(P,[["render",k],["__scopeId","data-v-f225d764"]]);var q=U}}]);
//# sourceMappingURL=961.0c48f10c.js.map