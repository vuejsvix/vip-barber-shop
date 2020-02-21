export const painel = '/painel'

/**
 * @type {Array}
 */
export default [
  {
    path: painel,
    component: () => import('src/modules/Painel/PainelLayout.vue'),
    children: [
      {
        path: '/painel/administracao/usuarios',
        component: () => import('src/views/painel/administracao/Usuarios.vue')
      }
    ]
  }
]
