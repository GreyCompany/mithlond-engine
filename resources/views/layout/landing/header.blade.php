<header class="page-header">
  <div>
    <h1>Mithlond Engine</h1>
    <h2>Czy odważysz się wypłynąć?</h2>
  </div>
  <nav>
    <div class="container" v-active-link.exact="['li']">
      <ul class="left hide-on-med-and-down">
        <li><a href="{{route('landing.about')}}">O grze</a></li>
        <li><a href="#">Autorzy</a></li>
        <li><a href="#">Regulamin</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
      <ul class="right">
        <li><a href="{{route('login')}}">Logowanie</a></li>
        <li><a href="/register">Rejestracja</a></li>
      </ul>
    </div>
  </nav>
</header>