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
      <header>
        <div class="page-header">
          <h1>Mithlond Engine</h1>
          <h2>Czy odważysz się wypłynąć</h2>
        </div>
        <nav>
          <div class="container">
            <ul class="left hide-on-med-and-down">
              <li class="active"><a href="#">O grze</a></li>
              <li><a href="#">Autorzy</a></li>
              <li><a href="#">Regulamin</a></li>
              <li><a href="#">Kontakt</a></li>
            </ul>
            <ul class="right">
              <li><a href="#">Logowanie</a></li>
              <li><a href="#">Rejestracja</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main class="container">
        <article class="card">
          <div class="card-content white-text">
            <span class="card-title">Czym jest Mithlond Engine?</span>
            <p>Na pewno nie paczką cukierków.</p>
          </div>
        </article>
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