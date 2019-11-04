<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $imgBaseUrl = 'http://' . env('IMG_ENDPOINT');
        $cdnBaseUrl = 'http://' . env('CDN_ENDPOINT');
        return view('home',
            compact('imgBaseUrl', 'cdnBaseUrl')
        );
    }
}
