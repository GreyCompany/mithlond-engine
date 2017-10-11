<template>
  <v-form method="post" :action="action" @submit.prevent="onSubmit">
    <v-text-field
        label="E-mail"
        v-model="form.email"
        required
    ></v-text-field>
    <v-text-field
        label="Hasło"
        v-model="form.password"
        type="password"
        required
    ></v-text-field>
    <v-checkbox
        label="Zapamiętaj mnie"
        v-model="form.remember"
    ></v-checkbox>
    <v-card-actions>
      <v-btn flat class="blue--text" type="submit">Zaloguj</v-btn>
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
          email: '',
          password: '',
          remember: false
        }),
        hidPass: true
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form)
      }
    }
  }
</script>

<style>
  .btn{
    margin-left: -1rem;
  }
</style>