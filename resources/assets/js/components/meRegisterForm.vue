<template>
  <v-form method="post" :action="action" @submit.prevent="onSubmit">
    <v-text-field
        label="Nazwa użytkownika"
        v-model="form.name"
        :rules="rules.name"
        ref="name"
        counter="10"
        required
    ></v-text-field>
    <v-text-field
        label="E-mail"
        v-model="form.email"
        :rules="rules.email"
        ref="email"
        required
    ></v-text-field>
    <v-text-field
        label="Hasło"
        v-model="form.password"
        :rules="rules.password"
        ref="password"
        type="password"
        required
    ></v-text-field>
    <v-text-field
        label="Powtórz hasło"
        v-model="form['password-confirm']"
        :rules="rules['password-confirm']"
        ref="password-confirm"
        type="password"
        required
    ></v-text-field>
    <v-card-actions>
      <v-btn flat color="blue" :disabled="!isValid() ? 'disabled' : null" type="submit">Zarejestruj</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
  import Form from 'common/form'

  export default {
    props: {
      action: {
        type: String,
        required: true,
        default: ''
      }
    },
    data() {
      return {
        form: new Form({
          name: '',
          email: '',
          password: '',
          'password-confirm': ''
        }),
        hidPass: true,
        allowSend: false,
        rules: {
          name: [
            (v) => !!v || 'Nazwa użytkownika jest wymagana',
            (v) => v.length >= 3 || 'Nazwa użytkownika nie może być krótsza niż 3 znaki',
            (v) => v.length < 10 || 'Nazwa użytkownika nie może być dłuższa niż 10 znaków'
          ],
          email: [
            (v) => !!v || 'E-mail jest wymagany',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'To nie jest poprawny adres e-mail'
          ],
          password: [
            (v) => !!v || 'Hasło jest wymagane',
            (v) => !!v.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?!.*\s)(.{5,})$/) || 'Hasło powinno zawierać jedną małą literę, jedną dużą literę, znak specjalny i cyfrę'
          ],
          'password-confirm': [
            (v) => !!v || 'Potwierdzenie hasła jest wymagane',
            (v) => v === this.form.password || 'Hasła nie pasują do siebie'
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        if (this.isValid()) {
          console.log(this.form)
        }
      },
      isValid() {
        let hasIterated = false
        for (const input in this.$refs) {
          if (!this.$refs[input].valid) {
            return false
          }
          hasIterated = true
        }
        return hasIterated
      }
    }
  }
</script>

<style>
  .btn {
    margin-left: -1rem;
  }
</style>