import { createRouter, createWebHistory } from "vue-router";
import SongsList from "@/views/SongsList.vue";

const routes = [
  {
    path: "/",
    redirect: "/songs",
  },
  {
    path: "/songs",
    name: "SongsList",
    component: SongsList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
