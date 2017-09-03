@extends('layout.landing')

@section('content')
  <div class="col m12">
    <article class="card">
      <header class="card-title"><h1>Regulamin</h1></header>
      <div class="card-content">
        {{ $rules }}
      </div>
    </article>
  </div>
@endsection
