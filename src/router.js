import Vue from "vue";
import Router from "vue-router";
import Home from './components/home';
import Logo from './components/Logo';
import Mypic from './components/Mypic';
import Tilts from './components/Tilts';
import Face from './components/Face';
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "projects",
      component: Tilts,
    },
    {
      path: "/face",
      name: "Face",
      component: Face,
    },
  ],
});