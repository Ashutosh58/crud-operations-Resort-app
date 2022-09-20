import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';
import Add from '../components/Add.vue';
import Update from '../components/Update.vue';

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/log-in",
    name: "LogIn",
    component: LogIn
  },
  {
    path: "/add",
    name: "Add",
    component: Add
  },
  {
    path: "/update/:id",
    name: "Update",
    component: Update
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
