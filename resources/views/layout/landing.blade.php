<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>{{ config('app.name') }}</title>

    <link rel="stylesheet" href="{{ asset('css/landing.css') }}">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
    <v-app id="app" dark>

      @include('layout.landing.header')
      <main>
        <section>
          <v-container
              column
              wrap
              class="container my-2"
              align-center
          >
            @yield('content')
          </v-container>
        </section>
      </main>


    @include('layout.landing.footer')
    </v-app>

    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/landing.js') }}"></script>
  </body>
</html>