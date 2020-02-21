<template>
  <v-container>
    <v-card
      class="mx-auto my-12 outer-card"
      max-width="374"
    >
      <v-card-title>
        <v-card
          class="v-header py-2 mx-auto my-n12"
          max-width="364"
          raised
        >
          <v-card-title>
            <v-row
              justify="center"
              color="white"
            >
              <h4>Entrar</h4>
            </v-row>
          </v-card-title>
          <v-card-actions>
            <v-row
              justify="center"
              color="white"
            >

              <v-btn
                icon
                color="white"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                color="white"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                icon
                color="white"
              >
                <v-icon>mdi-google-plus</v-icon>
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-card-title>
      <br />
      <v-card-text class="my-4">
        <v-text-field
          label="Email"
          prepend-icon="mdi-email"
          color="purple"
          v-model="registro.email"
        />
        <v-text-field
          type="password"
          label="Senha"
          prepend-icon="mdi-lock-outline"
          color="purple"
          v-model="registro.senha"
        />
      </v-card-text>
      <v-card-actions>
        <v-row justify="center">
          <v-btn
            normal
            text
            color="success"
            @click="entrar"
          > Entrar
          </v-btn>
        </v-row>
      </v-card-actions>
      <v-card-actions>
        <v-row justify="center">
          <v-btn
            small
            to="/acesso/cadastro"
            color="success"
          > Não tenho uma conta
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { criarAcesso } from 'src/domains/Acesso/acessoServico'

export default {
  name: 'Entrar',
  data: () => ({
    registro: {
      email: 'wilcorrea@gmail.com',
      senha: 'aq1sw2de3'
    }
  }),
  methods: {
    /**
     */
    entrar () {
      criarAcesso(this.registro)
        .then(this.entrarSucesso)
        .catch(this.entrarErro)
    },
    /**
     */
    entrarSucesso (resposta) {
      this.$store.dispatch('criarSessao', { ...resposta, lembrar: false })
    },
    /**
     */
    entrarErro (erro) {
      window.alert(JSON.stringify(erro))
    }
  }
}
</script>

<style scoped>
.v-header {
  background-image: linear-gradient(60deg, #66bb6a, #388e3c);
  text-align: center;
  width: 100%;
  margin-top: -40px;
}

h4 {
  font-family: "Times New Roman", Times, serif;
  color: white;
}

.outer-card {
  border-radius: 8px !important;
}

.v-input__icon--prepend .v-icon {
  color: black;
}
</style>
