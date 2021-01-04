<template>
  <div @mouseover="logIt">
    <canvas id="canvas2"></canvas>
    <div class="containterF">
      <Tilts />
      <Tilts />
    </div>

    <!-- <div class="containterF">

<div class="d0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum
      rem assumenda ad facilis aut animi reiciendis at consequuntur unde
      exercitationem distinctio voluptas perspiciatis iure molestias,
      praesentium fugit quae impedit.
    </div>
    <div class="d1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum
      rem assumenda ad facilis aut animi reiciendis at consequuntur unde
      exercitationem distinctio voluptas perspiciatis iure molestias,
      praesentium fugit quae impedit.
    </div>
    <div class="d2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum
      rem assumenda ad facilis aut animi reiciendis at consequuntur unde
      exercitationem distinctio voluptas perspiciatis iure molestias,
      praesentium fugit quae impedit.
    </div>
    <div class="d3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum
      rem assumenda ad facilis aut animi reiciendis at consequuntur unde
      exercitationem distinctio voluptas perspiciatis iure molestias,
      praesentium fugit quae impedit.
    </div>
    <div class="d4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum
      rem assumenda ad facilis aut animi reiciendis at consequuntur unde
      exercitationem distinctio voluptas perspiciatis iure molestias,
      praesentium fugit quae impedit.
    </div>
    </div> -->
  </div>
</template>

<script>
import Tilts from "./Tilts";
import Img from "../../public/image";
import { gsap, Linear, random, Sine, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Face",
  data: () => ({
    items: [{ message: "Foo" }, { message: "Bar" }, { message: "Rar" }],

    mouse: {
      x: null,
      y: null,
    },
  }),
  mounted: function() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    // console.log(window.innerWidth);
    canvas.height = window.innerHeight;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fill();

    let particles = [];

    // get mouse mouse position ///////////////////////////////
    let mouse = {
      x: null,
      y: null,
      radius: 80,
      deltaX: null,
      deltaY: null,
    };

    // window.addEventListener('mousemove',
    // 	function(event){
    // 		mouse.x = event.x + canvas.clientLeft/2;
    // 		mouse.y = event.y + canvas.clientTop/2;
    // });
    console.log(canvas.clientLeft);
    function drawImage() {
      let imageWidth = png.width || png.naturalWidth;
      let imageHeight = png.height || png.naturalHeight;
      const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
      console.log(data);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      class Particle {
        constructor(x, y, color, size) {
          (this.segment = 300), (this.b = 1);
          (this.x = x * Math.random(-1600, 1600)),
            (this.y = y * Math.random(-1600, 1600)),
            (this.color = color),
            (this.size = 2),
            (this.baseX = x),
            //   +canvas.width / 2 - png.width * 2
            (this.baseY = y),
            //+canvas.height / 2 - png.width * 2,
            (this.density = Math.random() * 10 + 2);
          //      this.faceAnim = gsap.timeline({repeat:-1, repeatDelay:2});
          //      this.faceAnim.to(this, 1, { x: `+=${canvas.width/2}`,  ease: Elastic.easeNone })

          //  this.faceAnim.time(Math.random(this.faceAnim.duration()));

          this.tl = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".container",
              pin: true, // pin the trigger element while active
              start: "top top", // when the top of the trigger hits the top of the viewport
              end: "+=600", // end after scrolling 500px beyond the start
              scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
              // snap: {
              //   // snapTo: "labels", // snap to the closest label in the timeline
              //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
              //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
              // },
            },
          });
          this.tl.to(this, 1, {
            x: Math.round(x / 7 + (canvas.width - 1400)),
            y: Math.round(y / 7 + (canvas.height - 300)),
          });
        }

        draw() {
          ctx.beginPath();

          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }

        update() {
          ctx.fillStyle = this.color;

          this.draw();
        }
      }
      function init() {
        particles = [];

        for (var y = 0, y2 = data.height; y < y2; y++) {
          for (var x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
              let b = 1;

              let positionX = x;
              let positionY = y;

              let color =
                "rgb(" +
                data.data[y * 4 * data.width + x * 4] +
                "," +
                data.data[y * 4 * data.width + x * 4 + 1] +
                "," +
                data.data[y * 4 * data.width + x * 4 + 2] +
                ")";

              particles.push(
                new Particle(positionX * 20, positionY * 20, color)
              );
            }
          }
        }
      }
      function animate() {
        requestAnimationFrame(animate);

        ctx.fillRect(0, 0, innerWidth, innerHeight);

        for (let particle of particles) {
          particle.update();
        }
      }
      init();
      animate();
      window.addEventListener("resize", function() {
        console.log("resizing");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      });
    }

    const png = new Image();

    png.src = Img.src;
    window.addEventListener("load", (e) => {
      console.log("page has been loaded");
      ctx.drawImage(png, 0, 0);
      drawImage();
    });
  },
  methods: {
    logIt(e) {},
  },
  components: {
    Tilts,
  },
};
</script>

<style>
#canvas2 {
  position: fixed;
  z-index: -1;
  border: 1px solid black;
}
.containterF {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  top: 2rem;
  
}
.containterF div {
  height: 30%;
  width: 20%;
  margin: 3rem;
}
.d0 {
  text-decoration: none;
  color: #cccccc;
  font-size: 0.5em;
  position: relative;
  color: rgb(116, 111, 187);
}
.d1 {
  text-decoration: none;
  color: #cccccc;
  font-size: 1em;
  position: relative;
  color: rgb(116, 111, 187);
}
.d2 {
  text-decoration: none;
  color: #cccccc;
  font-size: 1em;
  position: relative;
  color: rgb(116, 111, 187);
}
.d3 {
  text-decoration: none;
  color: #cccccc;
  font-size: 1em;
  position: relative;
  color: rgb(116, 111, 187);
}
.d4 {
  text-decoration: none;
  color: #cccccc;
  font-size: 1em;
  position: relative;
}
</style>
