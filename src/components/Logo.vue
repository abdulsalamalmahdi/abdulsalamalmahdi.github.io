<template>
  <div class="canvas-container">
     <svg
      ref="top"
      class="hex"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      :height="100"
      :width="100"
      viewBox="0 0 100 100"
      style="enable-background:new 0 0 100 100;"
      xml:space="preserve"
    >
      <g class="st0">
        <polygon
          class="st1"
          fill="#0000FF"
          points="75,0 25,0 0,46.58 25,93.17 75,93.17 100,46.58 	"
        />
      </g>
    </svg>
    <svg
      ref="left"
      @click="clickAni"
      class="hex"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      :height="90"
      :width="90"
      viewBox="0 0 100 100"
      style="enable-background:new 0 0 100 100;"
      xml:space="preserve"
    >
      <g class="st0">
        <polygon
          class="st1"
          fill="#1000FF"
          points="75,0 25,0 0,46.58 25,93.17 75,93.17 100,46.58 	"
        />
      </g>
    </svg>
    <svg
      ref="right"
      @click="clickAni"
      class="hex"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      :height="80"
      :width="80"
      viewBox="0 0 100 100"
      style="enable-background:new 0 0 100 100;"
      xml:space="preserve"
    >
      <g class="st0">
        <polygon
          class="st1"
          fill="#3000FF"
          points="75,0 25,0 0,46.58 25,93.17 75,93.17 100,46.58 	"
        />
      </g>
    </svg>
    <svg
      ref="bottom"
      @click="clickAni"
      class="hex"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      :height="80"
      :width="80"
      viewBox="0 0 100 100"
      style="enable-background:new 0 0 100 100;"
      xml:space="preserve"
    >
      <g class="st0">
        <polygon
          class="st1"
          fill="#2000FF"
          points="75,0 25,0 0,46.58 25,93.17 75,93.17 100,46.58 	"
        />
      </g>
    </svg>
    <canvas id="canvas1"></canvas>
  </div>
</template>

<script>
import { gsap, Linear, Sine } from "gsap";
export default {
  name: "Logo",
  data: function() {
    return {
      particles: [],
      vanish: false,
      cx: "",
      cy: "",
    };
  },
  // props: {
  //   vanProp: {
  //     type: Boolean,
  //   },
  //   hex: {
  //     type: Object,
  //   },
  // },
  mounted() {
    let mountPrts = this.particles;
    gsap
      .timeline()
      .to(this.$refs.bottom, 0.1, { rotateY: "+=50", yoyo: true, repeat: -1 })
      .to(this.$refs.top, 0.1, { rotateY: "-=50", yoyo: true, repeat: -1 })
      .to(this.$refs.left, 0.5, { rotateY: "-=360", yoyo: true, repeat: -1 });

    class Particle {
      constructor(centerX, centerY, radius, sides, path, van) {
        this.x = centerX;
        this.y = centerY - radius;
        this.path = path;
        this.offset = randomInt(5, 12);
        this.scale = 1;
        this.rotation = 0;
        this.alpha = random(0.5, 1);
        this.color = ["#5be5f5", "#84e9f5", "#a2ecf5", "#00eeff", "#FFFFFF"];
        this.fillStyle = this.color[Math.floor(5 * Math.random())];
        const duration1 = random(3, 5);
        const duration2 = random(1, 5);
        const minScale = random(0.2, 0.4);
        const angle = (Math.PI * 2) / sides;

        for (let i = 1; i <= sides; i++) {
          const x = centerX + radius * Math.sin(i * angle);
          const y = centerY - radius * Math.cos(i * angle);
          let t1;
          const coas = setTimeout(() => {
            t1 = gsap.timeline();
            t1.fromTo(
              this,
              duration2,
              {
                x: random(3000, -3000),
                y: random(3000, -3000),
                ease: Linear.easeInOut,
              },
              { x, y, ease: Linear.easeNone }
            );
            t1.time(random(t1.duration()));
          }, 1000);
          this.pathAnimation = gsap.timeline({ repeat: -1 });

          const shape = setTimeout(() => {
            this.pathAnimation.to(this, duration2, {
              x,
              y,
              ease: Linear.easeNone,
              onComplete: (function() {
                t1.kill();
              })(),
            });
          }, 1500);

          // if(this.vanish){
          //   this.pathAnimation.to(this,duration1,{x: this.x, y:this.y, ease: Linear.easeNone})
          // }

          this.pathAnimation.time(random(this.pathAnimation.duration()));
          this.rotationAnimation = gsap
            .timeline({ repeat: -1 })
            .to(this, duration2, {
              rotation: Math.PI * 2,
              ease: Linear.easeNone,
            });

          this.scaleAnimation = gsap
            .timeline({ repeat: -1, yoyo: true })
            .to(this, duration2 / 2, {
              scale: minScale,
              ease: Sine.easeInOut,
            });

          // this.pathAnimation.time(random(this.pathAnimation.duration()));
          this.rotationAnimation.time(
            random(this.rotationAnimation.duration())
          );
          this.scaleAnimation.time(this.rotationAnimation.time());
          this.pathAnimation.time(random(this.pathAnimation.duration()));
          this.rotationAnimation = gsap
            .timeline({ repeat: -1 })
            .to(this, duration2, {
              rotation: Math.PI * 2,
              ease: Linear.easeNone,
            });

          this.scaleAnimation = gsap
            .timeline({ repeat: -1, yoyo: true })
            .to(this, duration2 / 2, {
              scale: minScale,
              ease: Sine.easeInOut,
            });

          this.pathAnimation.time(random(this.pathAnimation.duration()));
          this.rotationAnimation.time(
            random(this.rotationAnimation.duration())
          );
          this.scaleAnimation.time(this.rotationAnimation.time());
        }
      }

      draw(context) {
        const x = this.x + Math.cos(this.rotation) * this.offset;
        const y = this.y + Math.sin(this.rotation) * this.offset;

        context.save();
        context.translate(x, y);
        context.scale(this.scale, this.scale);
        context.fillStyle = this.fillStyle;
        context.globalAlpha = this.alpha;
        context.fill(this.path);
        context.restore();
      }
    }

    const canvas = document.querySelector("#canvas1");
    const context = canvas.getContext("2d");
    const numParticles = 300;
    const particleRadius = 20;
    const viewRatio = 0.8;
    const sides = 5;
    const path = createPath(sides, particleRadius);

    let vw = (canvas.width = window.innerWidth);
    let vh = (canvas.height = window.innerHeight);
    this.cx = vw / 2;
    this.cy = vh / 2;
    let clk = false;
    const radius = Math.min(this.cx, this.cy) * viewRatio;
    // const particles = [];

    for (let i = 0; i < numParticles; i++) {
      mountPrts.push(
        new Particle(this.cx, this.cy, radius, sides, path, this.vanVal)
      );
    }

    gsap.ticker.add(render);

    function render() {
      context.clearRect(0, 0, vw, vh);

      for (let particle of mountPrts) {
        particle.draw(context);
      }
    }

    function createPath(sides, radius) {
      const path = new Path2D();
      const angle = (Math.PI * 2) / sides;

      for (let i = 0; i < sides; i++) {
        const x = radius * Math.sin(i * angle);
        const y = -radius * Math.cos(i * angle);

        if (i === 0) {
          path.moveTo(x, y);
        } else {
          path.lineTo(x, y);
        }
      }

      return path;
    }

    function random(min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
      }
      return min + (max - min) * Math.random();
    }

    function randomInt(min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
      }
      return Math.floor(min + (max - min + 1) * Math.random());
    }
  },
  methods: {
    clickAni() {
      this.vanish = true;
      Object.keys(this.$refs).map((ref) => {
        this.animateAll(this.$refs[`${ref}`], ref, 300);
      });
      let globe = this;

      this.particles.map((par) => {
        function go() {
          par.pathAnimation.kill();
          globe.$router.push("/projects");
        }

        par.newAnim = gsap
          .timeline()
          .to(par, 1, {
            x: this.cx,
            y: this.cy,
            opacity: 0.5,
            ease: Linear.easeNone,
            onComplete: go,
          });
        par.newAnim.time(Math.random(par.pathAnimation.duration()));
        //par.newAnim.time(par.random(par.pathAnimation.duration()))
      });
    },
    animateAll(el, dir, pos) {
      if (!dir) {
        console.log("an arrgument is missing");
      }

      let coor = "";
      if (dir === "top") {
        coor = "y";
        pos = -pos;
      }
      if (dir === "bottom") {
        coor = "y";
      }
      if (dir === "left") {
        coor = "x";
        pos = -pos;
      }
      if (dir === "right") {
        coor = "x";
      }
      gsap.timeline().to(el, 1, {
        [coor]: pos,
        opacity: 0,
        ease: Linear.easeNone,
      });
      this.$emit("vanish");
    },
  },
  computed: {
    // height(){
    //    switch (this.$vuetify.breakpoint.name) {
    //         case 'xs': return 220
    //         case 'sm': return 400
    //         case 'md': return 500
    //         case 'lg': return 600
    //         case 'xl': return 800
    // }
    // },
    // width(){
    //     switch (this.$vuetify.breakpoint.name) {
    //         case 'xs': return 220
    //         case 'sm': return 400
    //         case 'md': return 500
    //         case 'lg': return 600
    //         case 'xl': return 800
    // }
    // }
  },
};
</script>
<style scoped>
#canvas {
  position: absolute;
  top: 30%;
}
.hex {
  position: absolute;
  color: white;
  width: fit-content;
  left: 41%;
  top: 50%;
}
.st1 {
  opacity: 50%;
  position: absolute;
  width: fit-content;
}
.st0 {
  fill: aqua;
  opacity: 50%;
  position: absolute;
  width: fit-content;
}
.g2 {
  fill: aqua;
  opacity: 50%;
  position: absolute;
  width: fit-content;
}
h1 {
  position: absolute;
  top: 10%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  color: wheat;
}
#canvas1 {
}

</style>
