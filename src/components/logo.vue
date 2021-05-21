<template>
  <div class="background">
          <canvas ref="can" id="canvas"></canvas>
  </div>
</template>

<script>

import Gl from "../utils/index";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//  import vertexf from '../utils/vertex.glsl'
// import fragment from "../utils/fragment.glsl";

export default {
  data:function(){
    return{
      scrollPos:"",
    }
  },
mounted:function (){
 
console.log(window)
window.addEventListener('click', this.scrollEv)
let can = this.$refs.can;



let scene= new Gl(can);
scene.init()
   
},
methods:{
  scrooEv(){
    console.log(this.scrollPos)
  }
}
}
</script>

<style>
.background{
  position: absolute;
    z-index: -444;
    width: 100vw;
    height: 100vh;
}
#canvas{
    width: 600px;
    height: 600px;
}
</style>