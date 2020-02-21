import Vue from 'vue'
import Vuex from 'vuex'
import $router from 'src/router'
import { painel } from 'src/modules/Painel/routes'

Vue.use(Vuex)

let token = ''
if (localStorage.getItem('t')) {
  token = localStorage.getItem('t')
}
if (sessionStorage.getItem('t')) {
  token = sessionStorage.getItem('t')
}

const escrever = (token, lembrar) => {
  if (lembrar) {
    localStorage.setItem('t', token)
    return
  }
  sessionStorage.setItem('t', token)
}

const MUTATION_SALVAR_TOKEN = 'salvarToken'
const MUTATION_CARREGAR_USUARIO = 'carregarUsuario'

export default new Vuex.Store({
  state: {
    token: token,
    usuario: undefined
  },
  mutations: {
    [MUTATION_SALVAR_TOKEN] (state, token) {
      state.token = token
    },
    [MUTATION_CARREGAR_USUARIO] (state, usuario) {
      state.usuario = usuario
    }
  },
  actions: {
    criarSessao (contexto, dados) {
      const { token, lembrar } = dados
      contexto.commit(MUTATION_SALVAR_TOKEN, token)
      escrever(token, lembrar)
      $router.push(painel)
    },
    registrarUsuario (contexto, usuario) {
      contexto.commit(MUTATION_CARREGAR_USUARIO, usuario)
    }
  }
})
