/**
 * @param {Object} credenciais
 * @return {Promise<unknown>}
 */
export function criarAcesso (credenciais) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ token: 'deu-certo' }), 400)
  })
}

/**
 * @return {Promise<unknown>}
 */
export function recuperarUsuario () {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ nome: 'William' }), 100)
  })
}
