<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>登录</title>

    <link href="{{asset('/css/app.css')}}" rel="stylesheet">
    <style>
        .gray-bg{
            background-color: #f3f3f4;
        }
        * {
            box-sizing: border-box;
        }
        body {
            font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 13px;
            color: #676a6c;
            overflow-x: hidden;
            line-height: 1.6;
            margin: 0;
            display: block;
        }
        .loginscreen.middle-box {
            width: 300px;
        }
        .animated {
            -webkit-animation-duration: .5s;
            animation-duration: .5s;
        }
        .middle-box {
            max-width: 400px;
            z-index: 100;
            margin: 0 auto;
            padding-top: 40px;
        }
        .text-center {
            text-align: center;
        }
        h2 {
            font-size: 24px;
        }
        h1, h2, h3, h4, h5, h6 {
            font-weight: 100;
        }
        h3, h4, h5 {
            margin-top: 5px;
            font-weight: 600;
        }
        h3 {
            font-size: 16px;
        }
        .m-t {
            margin-top: 15px;
        }
        m-b {
            margin-bottom: 15px;
        }
        form {
            display: block;
            margin-top: 0em;
        }
        .form-group {
            margin-bottom: 15px;
        }
        p {
            margin: 0 0 11px;
            display: block;
            -webkit-margin-before: 1em;
            -webkit-margin-after: 1em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
        }
        input, button, select, textarea {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }
        button, input, optgroup, select, textarea {
            color: inherit;
            font: inherit;
            margin: 0;
        }
        .full-width {
            width: 100% !important;
        }
        .btn-primary {
            background-color: #1ab394;
            border-color: #1ab394;
            color: #FFFFFF;
        }
        .btn {
            border-radius: 3px;
        }
        .form-control {
            background-color: #FFFFFF;
            background-image: none;
            border: 1px solid #e5e6e7;
            border-radius: 1px;
            color: inherit;
            display: block;
            padding: 6px 12px;
            transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
            width: 100%;
            font-size: 14px;
            box-shadow: none;
            line-height: 1.6;
            height: 36px;
        }
        .form-control:focus {
            border-color: #1ab394 !important;
            outline: 0;
        }
        .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary, .btn-primary:active:focus, .btn-primary:active:hover, .btn-primary.active:hover, .btn-primary.active:focus {
            background-color: #18a689;
            border-color: #18a689;
            color: #FFFFFF;
        }
        .btn:hover, .btn:focus, .btn.focus {
            text-decoration: none;
        }
        body.mini-navbar.fixed-sidebar .profile-element, .block {
            display: block !important;
        }
    </style>
</head>
<body class="gray-bg">

<div class="middle-box text-center loginscreen animated fadeInDown">
    <div>
        <div style="margin-top: 40%;">
            <h2 class="">藏品管理系统</h2>
        </div>

        <h3>Welcome to Collection</h3>

        <form class="m-t" role="form" method="POST" action="{{ url('/login') }}">
            {{csrf_field()}}

            <div class="form-group{{ $errors->has('username') ? ' has-error' : '' }}">
                <input id="username" type="text" class="form-control" name="username" value="{{ old('username') }}"
                       placeholder="用户名" required autofocus>
                @if ($errors->has('username'))
                    <span class="help-block">
                        <strong>{{ $errors->first('username') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <input id="password" type="password" class="form-control" name="password" placeholder="密码" required>
                @if ($errors->has('password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>

            {{--<div class="form-group">--}}
                {{--<div class="">--}}
                    {{--<div class="checkbox">--}}
                        {{--<label>--}}
                            {{--<input type="checkbox" name="remember"> 记住我--}}
                        {{--</label>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
            <button type="submit" class="btn btn-primary block full-width m-b">登录</button>
        </form>
        <p class="m-t">
            <small></small>
        </p>
    </div>
</div>

<!-- Mainly scripts -->
<script>
    window.Laravel = {
        csrfToken: "{{ csrf_token() }}",
        baseUrl: "{{ url('/')}}"
    };
</script>
{{--<script src="{{asset('/js/manifest.js')}}"></script>--}}
{{--<script src="{{asset('/js/vendor.js')}}"></script>--}}
{{--<script src="{{asset('/js/app.js')}}"></script>--}}

</body>

</html>

