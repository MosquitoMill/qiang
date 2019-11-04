{{-- Template for Vue --}}
<!DOCTYPE html>
<html style="height: 100%">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>藏品管理系统</title>
    <link href="{{asset('/css/vendor.css')}}" rel="stylesheet">
    <link href="{{asset('/css/app.css')}}" rel="stylesheet">
</head>
<body  style="height: 100%;">
<div id="app"></div>
<script>
    window.Laravel = {
        csrfToken: "{{ csrf_token() }}",
        baseUrl: "{{ url('/')}}",
        apiToken: "{{ auth()->user()->api_token }}",
        imgBaseUrl: "{{ $imgBaseUrl }}",
        cdnBaseUrl: "{{ $cdnBaseUrl }}"
    };
</script>

<script src="{{asset('/js/manifest.js')}}"></script>
<script src="{{asset('/js/vendor.js')}}"></script>
<script src="{{asset('/js/app.js')}}"></script>

@stack('script')
</body>

</html>