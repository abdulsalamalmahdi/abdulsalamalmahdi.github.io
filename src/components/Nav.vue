<template>
  <div class='nav'>
   <router-link class="li" to='/home'>home</router-link>
    <router-link class="li" to='/face'>face</router-link>
 </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
  position: fixed;
  width: 100%;
  height: 7%;
  background-color: rgb(39, 53, 80);
}
.li{
  color: wheat;
  margin-top: 3rem;
  margin-left: 1rem;
  padding: 1rem;
}
</style>