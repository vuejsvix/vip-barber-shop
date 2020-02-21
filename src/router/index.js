import { recuperarUsuario } from 'src/domains/Acesso/acessoServico'
import Vue from 'vue'
import VueRouter from 'vue-router'

import $store from 'src/store'

import acesso, { inicio } from 'src/modules/Acesso/routes'
import painel from 'src/modules/Painel/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: inicio
  },
  ...acesso,
  ...painel
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = $store.state.token
  if (to.meta.public || token) {
    next()
    return
  }
  next(inicio)
})

router.beforeEach((to, from, next) => {
  const token = $store.state.token
  const usuario = $store.state.usuario
  if (!token || usuario) {
    next()
    return
  }
  recuperarUsuario()
    .then((usuario) => $store.dispatch('registrarUsuario', usuario))
    .then(() => next())
    .catch(() => next(inicio))
})

export default router
