<template >
  <div id="app">
 <!-- <Nav/> -->
 <router-view :key="$route.path" class="body"/>
  </div>
</template>

<script>
import Nav from "./components/Nav"
import Logo from './components/Logo'
import HelloWorld from './components/HelloWorld.vue'
import Mypic from './components/Mypic'

//import Tilts from './components/Tilts'
export default {
  name: 'App',
  mounted:function(){
  },
  data:()=>({

  }),
  components: {
   HelloWorld,
    //Tilts,
    Mypic,
    Logo,
    Nav,
  }
}
</script>

<style lang='scss'>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
 overflow: hidden;
  width: 100vw;
  height: 100vh;
  // background-color: #2c3e50;
}


.view{
  width: 100%;
  height: 100%;
}
.body{
  width: 100%;
  height: 100%;
}
</style>
