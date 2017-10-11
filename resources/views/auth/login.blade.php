@extends('layout.landing')

@section('content')
  <v-flex xs12 md6 lg4 offset-md3 offset-lg4>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Logowanie</h3>
        </div>
      </v-card-title>
      <v-flex px-3>
        <me-login-form action="{{ route('login') }}"></me-login-form>
      </v-flex>
    </v-card>
  </v-flex>
@endsection