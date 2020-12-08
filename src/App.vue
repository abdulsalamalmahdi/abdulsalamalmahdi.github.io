<template>
  <div id="app">
    <!-- <tilts
   v-for="el in arr" :key="el.id"
    /> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Mypic/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Mypic from './components/Mypic'

//import Tilts from './components/Tilts'
export default {
  name: 'App',
  data:()=>({
arr:[{id:1},{id:2},{id:3}]
  }),
  components: {
   HelloWorld,
    //Tilts,
    Mypic,
  }
}
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100vw;
  height: 100vh;
  background-color: #2c3e50;
}


</style>
