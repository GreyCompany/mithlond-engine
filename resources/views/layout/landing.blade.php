<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>{{ config('app.name') }}</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
    <div id="app">
      @include('layout.landing.header')
      <main class="container">
        <div class="row">
          @yield('content')
        </div>
      </main>
      <footer class="page-footer">
        <div class="container"></div>
        <div class="footer-copyright">
          <div class="container">&copy; 2017 <a href="#">GreyCompany</a></div>
        </div>
      </footer>
    </div>

    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
  </body>
</html>