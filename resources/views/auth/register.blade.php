<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>注册</title>

    <link href="{{asset('/css/vendor.css')}}" rel="stylesheet">
    <link href="{{asset('/css/app.css')}}" rel="stylesheet">
</head>
<body class="gray-bg">
    <div id="register"></div>

    <script>
        window.Laravel = {
            csrfToken: "{{ csrf_token() }}",
            baseUrl: "{{ url('/')}}"
        };
    </script>
    <script src="{{asset('/js/manifest.js')}}"></script>
    <script src="{{asset('/js/vendor.js')}}"></script>
    <script src="{{asset('/js/register.js')}}"></script>

</body>

</html>

