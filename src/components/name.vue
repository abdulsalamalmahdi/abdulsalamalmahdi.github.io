<template>
  <div class="name">
     <canvas id="scene"></canvas>
  </div>
</template>

<script>


import { gsap,
 //Linear,
//  random, 
//  Sine, 
//  Elastic 
 } from "gsap";
import { EaselPlugin } from "gsap/EaselPlugin";

gsap.registerPlugin(EaselPlugin);
export default {
  name:'Name', 
  mounted:function(){
let canvas = document.querySelector("#scene"),
  ctx = canvas.getContext("2d"),
  particles = [],
  particles2= [],
  amount = 0,
  mouse = {
    x: 0,
    y: 0
  },
  radius = 1;


//let colors = ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"];
 let colors = ["#ff1900", "#fcbbbb"];
//  colors=    (()=>{
//                 let hash="#";
//                     let com= '0123456789ABCDEF';
//                   for (let i =0; i < 6; i++){
//                       hash += com[Math.floor(Math.random() * 16)]
//                   }
//                   return hash
//                 })()

let ww = (canvas.width = window.innerWidth);
let wh = (canvas.height = window.innerHeight);
class Particle {
  constructor(x, y) {
  
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.dest = {
      x: x,
      y: y
    };
     this.r = Math.random() * 5 + 2;
    this.vx = (Math.random() - 0.5) * 20;
    this.vy = (Math.random() - 0.5) * 20;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.94;
   // this.h = h;
    this.color=  colors[Math.floor(Math.random() * 6)];
   
  // (()=>{
  //               let f = (n, k = (n + h * 12) % 12) =>
  //   0.5 - 0.5 * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  // let rgb2hex = (r, g, b) =>
  //   "#" +
  //   [r, g, b]
  //     .map(x =>
  //       Math.round(x * 255)
  //         .toString(16)
  //         .padStart(2, 0)
  //     )
  //     .join("");
  // return rgb2hex(f(0), f(8), f(4));
  //               })()
    //[Math.floor(Math.random() * 6)];
    // const duration1 = random(3, 5);
    // const duration2 = random(1, 5);
    // const sides = 8;
    // const angle = (Math.PI * 2) / sides;
    // this.pathAnimation0 = gsap.timeline({repeat:-1});
    //  this.pathAnimation = gsap.timeline();

    // for (let i = 1; i <= sides; i++) {
    //   let x = ww / 2 + radius * Math.sin(i * angle);
    //   let y = wh / 2 - radius * Math.cos(i * angle);

      // this.pathAnimation0.to(this, 1, {x: x+0.001, y:y+0.0001,scale:1.2, yoyo: true });
       //this.pathAnimation.to(this,0.005,{x:x/2, y:y/2 ,scale:1})
    // }
  }

 changeColor(){
  
// let h = Math.round(Math.random(5));
// console.log(h)

//    this.color=   colors[h]
  //(()=>{
  //               let hash="#";
  //                   let com= '0123456789ABCDEF';
  //                 for (let i =0; i < 6; i++){
  //                     hash += com[Math.floor(Math.random() * 16)]
  //                 }
  //                 return hash

//  let f = (n, k = (n + h * 12) % 12) =>
//     0.5 - 0.5 * Math.max(Math.min(k - 3, 9 - k, 1), -1);
//   let rgb2hex = (r, g, b) =>
//     "#" +
//     [r, g, b]
//       .map(x =>
//         Math.round(x * 255)
//           .toString(16)
//           .padStart(2, 0)
//       )
//       .join("");
//   return rgb2hex(f(0), f(8), f(4));

               // })()
 
}
  render() {
    this.accX = (this.dest.x - this.x) / 100;
    this.accY = (this.dest.y - this.y) / 100;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();

    let a = this.x - mouse.x;
    let b = this.y - mouse.y;

    let distance = Math.sqrt(a * a + b * b);
    if (distance < radius * 70) {
      this.accX = (this.x - mouse.x) / 100;
      this.accY = (this.y - mouse.y) / 100;
      this.vx += this.accX;
      this.vy += this.accY;
    }
  }
}

// function random(min, max) {
//   if (max == null) {
//     max = min;
//     min = 0;
//   }
//   if (min > max) {
//     var tmp = min;
//     min = max;
//     max = tmp;
//   }
//   return min + (max - min) * Math.random();
// }

// function randomInt(min, max) {
//   if (max == null) {
//     max = min;
//     min = 0;
//   }
//   if (min > max) {
//     var tmp = min;
//     min = max;
//     max = tmp;
//   }
//   return Math.floor(min + (max - min + 1) * Math.random());
// }

function initScene() {
  ww = canvas.width = window.innerWidth;
  wh = canvas.height = window.innerHeight;
  console.log(ww);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "bold " + ww / 10 + "px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText('ABDULSALAM', ww / 2, wh / 2);

  var data = ctx.getImageData(0, 0, ww, wh).data;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";

  particles = [];
  for (var i = 0; i < ww; i += Math.round(ww / 150)) {
    for (var j = 0; j < wh; j += Math.round(ww / 150)) {
      if (data[(i + j * ww) * 4 + 3] > 150) {
        particles.push(new Particle(i, j, Math.round(Math.random(5))));
        particles2.push(new Particle(i, j, Math.round(Math.random(5))));
      }
    }
  }
  amount = particles.length;
}

function render() {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < amount; i++) {
    particles[i].render();
  }
}

 
initScene();
requestAnimationFrame(render);

// function onMouseClick(){
//   radius++;
//   if(radius ===5){
//     radius = 0;
//   }
// }
function onMouseMove(e){

  // if ((((e.clientX - ww) <(-700) )||((e.clientX - ww) >(-1500))) && (((e.clientY - wh) > -450 )||((e.clientY - wh) < -300 ))){
    
     mouse.x = e.clientX ;
  mouse.y = e.clientY ;
 // }
 
}

window.addEventListener('mousemove',onMouseMove)

  }

}
</script>

<style scoped>
body{
    margin:0;
    overflow: hidden;
    font-size:0;
}
canvas{
    
    /* background: black; */
    width: 90vw;
    height: 60vh;
    margin: 0;
}
.name{
  display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}
</style>


