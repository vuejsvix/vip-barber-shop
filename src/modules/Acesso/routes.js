/**
 * @type {string}
 */
export const inicio = '/acesso/entrar'

/**
 * @type {Array}
 */
export default [
  {
    path: '/acesso',
    component: () => import('src/modules/Acesso/AcessoLeiaute.vue'),
    children: [
      {
        path: '',
        redirect: inicio
      },
      {
        path: inicio,
        component: () => import('src/views/acesso/Entrar.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '/acesso/cadastro',
        component: () => import('src/views/acesso/Cadastro.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '/acesso/recuperar-senha',
        component: () => import('src/views/acesso/RecuperarSenha.vue'),
        meta: {
          public: true
        }
      }
    ]
  }
]
