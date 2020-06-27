/**
 * @type {string}
 */
const BASE_URL = process.env.VUE_APP_REST_ENPOINT

export const http = (path, data, method = 'POST') => {
  return fetch(`${BASE_URL}/${path}`, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer'
  })
}

/**
 * @param {Object} credenciais
 * @return {Promise}
 */
export function criarAcesso (credenciais) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ token: 'deu-certo' }), 400)
  })
  // return http('api/v1/auth/sign-in', credenciais)
  //   .then(response => response.json())
  //   .then(({ data }) => data)
}

/**
 * @return {Promise}
 */
export function recuperarUsuario () {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ nome: 'William' }), 100)
  })
}
