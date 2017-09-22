<header class="elevation-2">
  <v-parallax src="images/banner.jpg" height="300">
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="flat transparent elevation-0" href="{{ route('landing.about') }}">O grze</v-btn>
        <v-btn class="flat transparent elevation-0" href="#">Autorzy</v-btn>
        <v-btn class="flat transparent elevation-0" href="{{ route('landing.rules') }}">Regulamin</v-btn>
        <v-btn class="flat transparent elevation-0" href="#">Kontakt</v-btn>
      </v-toolbar-items>
      <v-spacer style="min-width: 0;"></v-spacer>
      <v-toolbar-items>
        <v-btn class="flat transparent elevation-0" href="{{ route('login') }}">
          <v-icon>mdi-account-key</v-icon>
          <span class="icon--right hidden-md-and-down">Logowanie</span>
        </v-btn>
        <v-btn class="flat transparent elevation-0" href="{{ route('register') }}">
          <v-icon>mdi-account-plus</v-icon>
          <span class="icon--right hidden-md-and-down">Rejestracja</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout
        column
        align-center
        justify-center
        class="white--text"
    >
      <h1 class="white--text mb-2 display-3">Mithlond Engine</h1>
      <div class="headline mb-3 text-xs-center">Czy odważysz się wypłynąć?</div>
    </v-layout>
  </v-parallax>
</header>