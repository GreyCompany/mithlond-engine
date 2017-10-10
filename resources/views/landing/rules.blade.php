@extends('layout.landing')

@section('content')
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Regulamin</h3>
      </div>
    </v-card-title>
    <div class="px-3 pb-1">
      {{ $rules }}
    </div>
  </v-card>
@endsection
