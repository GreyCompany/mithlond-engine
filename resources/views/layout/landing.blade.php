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
      {{--@include('layout.landing.header')--}}
      {{--<main class="container">--}}
        {{--<div class="row">--}}
        {{--</div>--}}
      {{--</main>--}}
      {{--<footer class="page-footer">--}}
        {{--<div class="container"></div>--}}
        {{--<div class="footer-copyright">--}}
          {{--<div class="container"></div>--}}
        {{--</div>--}}
      {{--</footer>--}}

      @include('layout.landing.header')
      <main>
        <section>
          <v-layout
              column
              wrap
              class="container my-2"
              align-center
          >
            @yield('content')
          </v-layout>
        </section>
      </main>

      <v-footer>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="ml-3">
              &copy; 2017 <a href="#">GreyCompany</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>

    </v-app>

    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/landing.js') }}"></script>
  </body>
</html>