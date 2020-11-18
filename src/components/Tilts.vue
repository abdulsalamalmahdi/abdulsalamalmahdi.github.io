<template>
  <div @mousemove="move"  ref="el" id="app-container" data-tilt >
    
<div v-ease :style="{transform:rotation,  backgroundSize:this.cover }" id="chld" ref="chld"></div>
  <div v-ease :style="{transform:rotation, background:glare, backgroundSize:this.cover }" class="glaring">
      <!-- <h3>para</h3> -->
      <a href="">
         <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam porro repellendus modi maxime accusantium, velit ut assumenda atque expedita nostrum accusamus officiis aperiam neque quia, impedit quae. Non, praesentium quisquam!</span>   
      </a>
    
               </div>

</div>


</template>

<script>

//import VanillaTilt from 'vanilla-tilt';
export default {
name: 'Tilts',
data:()=>({
    cover:'cover',
    dg:'',
    per:'',
    boxRect: null,
    boxCenter:[],
    angle:null,
}),
props:{
    e:{
        type:Object
    }
},
mounted:function(){
    // console.log(this.$refs)
    // VanillaTilt.init(this.$refs.el);
    
},
methods:{
    move(e){
        const box= this.$refs.chld
      this.boxRect = box.getBoundingClientRect();
     this.boxCenter= [this.boxRect.left - box.offsetWidth/2, this.boxRect.top - box.offsetHeight/2]
     console.log(this.boxCenter)
     this.angle= Math.atan2(e.pageX - this.boxCenter[0], - (e.pageY - this.boxCenter[1])) * (180/Math.PI) 
 let mouseX= e.clientX;
 let mouseY= e.clientY;
let halfWidth= window.innerWidth/2;
let halfheight= window.innerHeight/2;
 this.dg = (mouseX- halfWidth)/halfWidth;
 this.per=(mouseY - halfheight)/halfheight


// updateReflection(this.dg * 180, this.per * 180);
    },
    // updateReflection(dg, per){

    //     const box= this.$refs.chld;

    // }
   
},
computed:{
    rotation(){
        return  `rotateX(${this.per * 30}deg) rotateY(${this.dg *30}deg)`
    },
    glare(){
        return  `linear-gradient(${this.per * 180}deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) ${this.dg * 100}%,rgba(255,255,255,0) 100%), url('${this.imgUrl}')`
   // 
    }
}
}
</script>
<style lang="scss" scoped>
$black: #000;
$white: #fff;
$colorN1: #e66465;
$colorN2: #9198e5;

#app-container{
    background-color: rgb(13, 2, 41);
    background-size: cover;
    padding: 0;
    margin: 0;
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
#chld{
    
    height: 60vh;
    width: 40vw;
    border-radius: 15px;
    // box-shadow: -4px 18px 51px -19px rgba(214,185,0,1);
    background:
        linear-gradient(red, transparent),
        linear-gradient(to top left, lime, transparent),
        linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
    
}
// #app_container{
    
//     perspective: 30em;

// }
.glaring{
    position:absolute;
   height: 60vh;
    width: 40vw;
    border-radius: 15px;
   // box-shadow: -4px 18px 51px -19px rgba(214,185,0,1);
    // background:
    //     linear-gradient(red, transparent),
    //     linear-gradient(to top left, lime, transparent),
    //     linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;

  
   a {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			text-align: center;
			color: #fff;
			font-size: 24px;
			font-weight: normal;
			line-height: 1.5;
			transition: 600ms ease;
			border-radius: 0px;

			span {
				transform: translateZ(50px) scale(0.7);
			}
		}
    // h3{
    //   font-size: 70 px;
    //   color: $white;
    //   text-shadow: 0 0 5px $black;
    // }
}


        /* v-vpshow classes */
.before-enter {
  opacity: 0;
}

.enter {
  transition: opacity 2s ease;  
}
/* ---------------- */


</style>