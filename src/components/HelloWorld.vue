<template>
  <div class="tilts">
   <div v-tilt="{
  maxTilt: 20,
  speed: 500,
  perspective: 3000
}" class="box js-tilt">
    <div class="box-contain">
      <h1>what up</h1>
       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis ipsum, quibusdam illum reiciendis ullam veritatis aspernatur similique. Amet fugiat nesciunt ipsa enim neque eaque. Fugit, dignissimos sint! Provident, quis.</span>
    </div>
  </div>
  
  <div v-tilt="{glare: true, 'max-glare': .5}" class="box js-tilt-glare">
    <div class="box-contain">
       <span>Glare effect</span>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$black: #000;
$white: #fff;
$colorN1: #e66465;
$colorN2: #9198e5;

body {
  height: 100vh;
}

.tilts {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 600px;
  background-image: linear-gradient($colorN1, $colorN2);
  transform-style: preserve-3d;
  &-contain {
    transform: translateZ(50px);
    span {
      font-size: 25px;
      color: $white;
      text-shadow: 0 0 5px $black;
    }
    h1{
      font-size: 25px;
      color: $white;
      text-shadow: 0 0 5px $black;
    }
  }
}
</style>