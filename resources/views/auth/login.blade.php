@extends('layout.landing')

@section('content')
  <v-flex xs12 md6 offset-md3>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Logowanie</h3>
        </div>
      </v-card-title>
      <v-flex px-3 pb-1>
        <v-form method="POST" action="{{ route('login') }}">
          {{ csrf_field() }}
          <v-text-field
              label="E-mail"
              name="email"
              required
          ></v-text-field>
          <v-text-field
              label="Hasło"
              name="password"
              type="password"
              required
          ></v-text-field>
          <v-checkbox
              label="Zapamiętaj mnie"
              name="remember"
          ></v-checkbox>
        </v-form>
      </v-flex>
    </v-card>
  </v-flex>
  <div class="col m8 offset-m2">
    {{-- TODO: Acctualy whole div.card has to be moved to it's Vue Component if we want ajax based form here --}}
    <div class="">
      <div class="card-content">
        <div class="card-title">Rejestracja</div>
        <form id="register" method="POST" action="{{ route('login') }}">
          {{--
          Now it won't work, 'cause I removed csrf_field().
          Axios has X-CSRF-TOKEN header set, so ajax will work eventually.
          --}}
          <div class="row">
            <div class="input-field col m6 offset-m3">
              <input id="email" type="email" required>
              <label for="email">Adres e-mail</label>
            </div>

            <div class="input-field col m6 offset-m3">
              <input id="password" type="password" required>
              <label for="password">Hasło</label>
            </div>


            <div class="input-field col m6 offset-m3">
              <div class="checkbox">
                <input type="checkbox" name="remember" id="remember"/>
                <label for="remember">Zapamiętaj mnie</label>
              </div>
            </div>
          </div>

        </form>
      </div>
      <div class="card-action">
        <a href="#submit">Zaloguj</a>
      </div>
    </div>
  </div>
@endsection