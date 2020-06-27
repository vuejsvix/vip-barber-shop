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

// valida a rota pública
router.beforeEach((to, from, next) => {
  const token = $store.state.token
  if (to.meta.public || token) {
    next()
    return
  }
  next(inicio)
})

// valida a sessão
router.beforeEach((to, from, next) => {
  // se for public ignora e segue o jogo
  if (to.meta.public) {
    next()
    return
  }

  // pega o token da sessão
  const token = $store.state.token
  // não tem token...
  if (!token) {
    // cê tá fora champs
    next({ path: inicio, query: { voltar: to.path } })
    return
  }

  // pega o usuário da sessão
  const usuario = $store.state.usuario
  // se tem usuário...
  if (usuario) {
    // segue o jogo
    next()
    return
  }

  // pega o usuário do servidor
  recuperarUsuario()
    .then((usuario) => $store.dispatch('registrarUsuario', usuario))
    .then(() => next())
    .catch(() => next(inicio))
})

export default router
