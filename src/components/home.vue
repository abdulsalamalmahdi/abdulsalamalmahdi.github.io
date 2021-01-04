<template>
   <!-- v-for="el in arr" 
        :key="el.width" 
        :ref='el.ref' :hex="el"  -->
    <div class="btn_-ontainer" @click="clickAni">

       <!-- <Button class="hex-btn"
       @vanish="vanishFunc"
        /> -->
     <Logo :vanProp="this.vanish"/>
  </div>
</template>

<script>
import { gsap, Linear, Sine, Power0 } from "gsap";
//import Button from './Button';
import Logo from './Logo';
export default {
name: 'home',
data:()=>({
  vanish: false,
arr:[{
  ref:"left",
  width:"100",
  height:"100",
  fill:`#${Math.random(0,5).toString().replace('0.', '').slice(0,1)}3f8f8`,
},{
  ref:"right",
  width:"90",
  height:"90",
  fill:`#${Math.random(0,5).toString().replace('0.', '').slice(0,1)}3f8f8`,
},{
  ref:"top",
  width:"80",
  height:"80",
  fill:`#${Math.random(0,5).toString().replace('0.', '').slice(0,1)}3f8f8`,
}]
}),
mounted:function(){

},
methods:{
clickAni(){
  // this.animateAll(this.$refs.left)
},
animateAll(el){
  console.log(el)
  let t1= gsap.timeline();
  t1.to(el,1,{x:-50, ease: Linear.easeInOut})
},
vanishFunc(){
  this.vanish= true;
  
}
},
components: {
    Logo,
   // Button,
}
}


</script>

<style>
.hex-btn{
  position: absolute;
  left: 39%;
  top: 60%;
}
.btn-container{
  position: absolute;
}
</style>