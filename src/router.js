import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Contacts from './components/pages/Contacts.vue';
import Projects from './components/pages/Projects.vue';
import ProjectDetail from './components/pages/ProjectDetail.vue';
import Error404 from './components/pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    },
    {
      path: '/progetti/dettaglio-post:slug',
      name: 'postdetail',
      component: ProjectDetail
    }
  ]
})

export {router};