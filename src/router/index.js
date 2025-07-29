import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import ContactDetail from '../views/ContactDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add', name: 'AddContact', component: AddContact },
  { path: '/edit/:id', name: 'EditContact', component: EditContact, props: true },
  { path: '/contact/:id', name: 'ContactDetail', component: ContactDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
