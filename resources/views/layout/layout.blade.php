<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{config('app.name')}}</title>
    <link rel="stylesheet" href="{{asset('css/smooth.css')}}">
    <script defer src={{asset("scripts/smooth.js")}}></script>
</head>

<body>
<header>
    <p>{{config('app.name')}}</p>
</header>

<div class="something">
    <div>
        @include('layout.nav')
    </div>
    {{-- Page content --}}
    @yield('content')
</div>

<footer>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat lacinia felis vel malesuada. Morbi
        cursus posuere cursus. Aliquam ut eros dui. Praesent consequat ligula non sapien pharetra auctor. Aliquam
        vulputate augue id nulla efficitur sodales. Vestibulum est urna, condimentum eget suscipit in, placerat sit amet
        lectus.</p>
</footer>

</body>
</html>
