<template>
  <div id="app">
     <Logo/>
   <div class="nav">
    <header>
        <div class="logo">
            
         
        </div>
        <nav>
            <a class="menu-link" href="#name"><span>HOME</span></a>
            <a class="menu-link" href="#"><span>EXPERIENCE</span></a>
            <a class="menu-link" href="#"><span>PORTFOLIO</span></a>
            <a class="menu-link" href="#"><span>CONTACT</span></a>
            <a class="menu-link" href="#"><span>STORY</span></a>
        </nav>
       

    </header>

  </div>
  <Name/>
  <Card/>
  <!-- <Face/> -->

  </div>
</template>

<script>
import Logo from './components/logo'

import Name from './components/name';
import Card from './components/card';
//import Face from './components/Face';
export default {
  name: 'App',
  components: {
   Name,
   Card,
  //  Face,
  Logo,
  
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
}


body {
    margin: 0;
    font-family: agency-fb, sans-serif;
    // background-image: url("../assets/img/bg-image.jpg");
    background-color: black;
}

nav{
  width: inherit;
  height: inherit;

  flex-wrap: nowrap;
    align-content: space-between;
    justify-content: space-evenly;
    align-items: center;
}
header {
  //overflow: hidden;
  margin-top: 3rem;
    display: flex;
    justify-content: center;
    padding-left: 48px;
    padding-right: 48px;

    .logo {
       margin-right: 4rem; 
    }

   
}

.menu-link {
  margin-left: 0.5rem;
    display: inline-block;
    background-color: red;
    width: 199px;
    height: 120px;
    text-decoration: none;
    color: #b0b0b0;
    font-size: 27px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    background: rgb(46,46,46);
    background: linear-gradient(180deg,
     rgba(46,46,46,0.8) 0%, rgba(46,46,46,0.8) 71%, rgba(46,46,46,0) 100%);

    -webkit-transform: skewX(45deg) translateY(-200px);
    -moz-transform: skewX(45deg) translateY(-200px);
    -ms-transform: skewX(45deg) translateY(-200px);
    -o-transform: skewX(45deg) translateY(-200px);
    transform: skewX(45deg);
    &:after {
        display: block;
        content: "";
        position: relative;
        top: 42px;
        height: 10px;
        width: 100%; 
        background-color: #8c8c8c;
    }

    &:hover {
        background: rgb(69,69,69);
        background: linear-gradient(180deg,
         rgba(69,69,69,0.8) 0%, 
         rgba(69,69,69,0.8) 71%, 
         rgba(69,69,69,0) 100%);
    }

    span {
        display: block;
        position: relative;
        top: 33px;
        -webkit-transform: skewX(-45deg);
        -moz-transform: skewX(-45deg);
        -ms-transform: skewX(-45deg);
        -o-transform: skewX(-45deg);
        transform: skewX(-45deg);
    }
}


.menu-link.active {
    color: #fff;
    background: rgb(163, 6,6);
    background: linear-gradient(180deg, 
    rgba(163,6,6, 0.6) 0%,
    rgba(163,6,6, 1) 71%,
    rgba(163,6,6, 0) 100%
    );

    &:after {
        background-color: #ff4e1d;
    }

    &:hover {
        background: rgb(189,10,10);
        background: linear-gradient(180deg, 
        rgba(189,10,10,0.6) 0%,
        rgba(189,10,10,1) 71%, 
        rgba(189,10,10,0) 100%);

        &:after {
            background-color: #ff732e;
        }
    }
}
</style>
