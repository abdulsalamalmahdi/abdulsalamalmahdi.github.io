<template>
  <div class="container">
	<div
     v-tilting="{
    reverse: true,
	max: 5,
	speed: 400,
	scale: 1.12,
	glare: true,
	reset: true,
	perspective: 500,
	transition: true,
	'max-glare': 0.75,
	'glare_prerender': false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45
  }" 
     class="flex-item bg-one tilt">
		<a href="#nothing"> <span>3D Card <br/> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illo quidem facilis nobis inventore alias, nihil voluptate, quasi porro nulla assumenda aperiam doloremque non! Quia excepturi dignissimos nostrum debitis assumenda.</span></span> </a>
        <img @mouseover="scaleImg()" @mouseleave="()=> scaleImg()" ref="image" src="../assets/img/bg-image.jpg" alt="">
        
	</div>
  </div>
</template>

<script>
import {gsap, Linear} from 'gsap'
export default {
    name:'Card',
   data(){
     return{
         scale:false,
     }
   },
    mounted:function(){
      
       
      
            
           
        
    
    },
    methods:{
        scaleImg(){
            let img = this.$refs.image;
           this.scale= !this.scale;
            if(this.scale){
 console.log(this.scale)
            gsap.timeline().to(img,0.5,{scale:1.2, ease: Linear.easeNoned})
        }else if(!this.scale){

           console.log(this.scale)
            gsap.timeline().to(img,0.5,{scale:1, ease: Linear.easeNone})
        }
        }
    }

}
</script>

<style lang="scss">
*,
*::before,
*::after {
	box-sizing: border-box;
}
.container {
	height: 50vh;
    width: 100vw;
	
	padding: 3em 1em;
    flex-direction: column;
    align-content: center;
    align-items: center;
display: flex;
	.flex-item {
        width: 50%;
        height: 100%;
		margin: 25px;
		border-radius: 2px;
		padding: 4.5em 5em;
		position: relative;
        display: flex;
		a  {
		position: relative;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 50%;
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
	}
}

.tilt {
	box-shadow: 0 20px 30px -13px rgba(0, 0, 0, 0.7);
	transform-style: preserve-3d;

	transform: perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
	&:hover {
		box-shadow: 0 40px 70px -15px rgba(0, 0, 0, 0.7);
	}
}

.bg-one {
	background: linear-gradient(45deg, rgb(255, 25, 75), rgb(130, 21, 240));
}

.bg-two {
	background: linear-gradient(45deg, rgb(255, 95, 75), rgb(130, 21, 100));
}

img{
          
        
           top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 20vw;
			height: 30vh;
			// display: flex;
			// justify-content: center;
			// align-items: center;
			// text-decoration: none;
			// text-align: center;
			// color: #fff;
			// font-size: 24px;
			// font-weight: normal;
			// line-height: 1.5;
			// transition: 600ms ease;
			// border-radius: 0px;
            }
</style>