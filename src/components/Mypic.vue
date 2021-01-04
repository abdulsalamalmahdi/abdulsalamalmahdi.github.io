<template>
 <div class="min-h-screen  bg-gray-900 pb-20 grid">
  
  
  <div v-tilting="{
       max: 25,
  speed: 1000,
  transition: true,
  }" class="card my-20  px-8 py-20 absolute ">
    <h2 class="name text-gray-100 text-center text-xl font-medium uppercase transition-all duration-500 opacity-0 z-10 absolute top-0 left-0 w-full">ABDULSALAM ALMAHDI</h2>
    <a href="" class="hi  absolute bottom-0 bg-gray-600 text-white hover:text-black font-medium px-4 py-2 rounded-full transition-all duration-500 opacity-0 z-10 bg-cyberpunk">SAY HI</a>
    <div class="image image-1">
      <img src="../../public/me2.jpg" alt="ABDULSALAM " class="product rounded transition-all duration-500">  
    </div>  
  </div>
  </div>
</template>

<script>
export default {
name: 'Mypic',
props:{
  pic:{
    type: Boolean,
  },
  mounted(){
    console.log("kdjfkdjf")
  }
}
}
</script>

<style lang="scss" scoped>
:root {
  --cyberpunk-yellow: #f0e801;
  --among-us-red: #c51110;
  --fall-guys-pink: #fa40a3;
}

/* .bg-cyberpunk:hover {
  background: var(--cyberpunk-yellow);
}
.bg-among-us:hover {
  background: var(--among-us-red);
}
.bg-fall-guys:hover {
  background: var(--fall-guys-pink);
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

.card {
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
}

.name {
  transform: translate3d(0, 0, 100px);
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
}

.card:hover .name {
  top: 1rem;
  opacity: 1;
}

.hi {
  left: 50%;
  transform: translate3d(-50%, 0, 50px);
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
}

.card:hover .hi {
  bottom: 1rem;
  opacity: 1;
}

img {
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
}

.card:hover img {
  transform: translate3d(0, 0, 50px);
  transform-style: preserve-3d;
}

.image::before {
  content: "";
  border-radius: .25rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: .25rem;
  opacity: 0;
  transition: all .5s;
}

.card:hover .image::before {
  opacity: .2;
}

.image-1::before {
  background: center / cover url("../../public/me2.jpg");
}
</style>