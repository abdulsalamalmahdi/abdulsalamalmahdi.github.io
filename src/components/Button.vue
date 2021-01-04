<template>
  <div  @click="clickAni">
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
      <!-- <style type="text/css">
	.st0{opacity:0.33;}
	.st1{fill:#0000FF;}
</style> -->
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
      <!-- <style type="text/css">
	.st0{opacity:0.33;}
	.st1{fill:#0000FF;}
</style> -->
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
      <!-- <style type="text/css">
	.st0{opacity:0.33;}
	.st1{fill:#0000FF;}
</style> -->
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
      <!-- <style type="text/css">
	.st0{opacity:0.33;}
	.st1{fill:#0000FF;}
</style> -->
      <g class="st0">
        <polygon
          class="st1"
          fill="#2000FF"
          points="75,0 25,0 0,46.58 25,93.17 75,93.17 100,46.58 	"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { gsap, Linear, Sine, Power0 } from "gsap";
export default {
  name: "Button",
  mounted: function() {
      gsap.timeline()
      .to(this.$refs.bottom,0.1,{rotateY:"+=50", yoyo:true, repeat:-1})
        .to(this.$refs.top,0.1, {rotateY:"-=50", yoyo:true, repeat:-1})
        .to(this.$refs.left,0.5, {rotateY:"-=360", yoyo:true, repeat:-1})
  },
  props: {
    hex: {
      type: Object,
    },
    width: {
      type: String,
    },
  },
  methods: {
    clickAni() {
        Object.keys(this.$refs).map( ref=>{
            this.animateAll(this.$refs[`${ref}`], ref, 300 )
        })
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
          coor ="x"
    
      }
      gsap
        .timeline()
        .to(el, 1, {
          [coor]: pos,
          opacity: 0,
          ease: Linear.easeNone,
        });
        this.$emit('vanish')
    },
  },
};
</script>

<style>
.hex {
  position: absolute;
  color: white;
  width: fit-content;
  left: 38%;
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
</style>
