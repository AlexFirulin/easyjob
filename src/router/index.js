import { createRouter, createWebHistory } from 'vue-router'
import NewsList from '@/components/NewsList.vue'
import MainPage from '@/components/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:
  [
    { name: 'NewsList', path: '/news', component: NewsList },
    {name: 'MainPage', path: '/', component: MainPage}
  ]
})

export default router
