<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        if (!$this->inExceptArray($request)) {
            $response->headers->add([
                'Access-Control-Allow-Origin' => '*',
                'Access-Control-Allow-Headers' => 'Origin, Content-Type, Cookie, Accept, multipart/form-data, application/json, XMLHttpRequest, Authorization',
                'Access-Control-Allow-Methods' => 'POST,GET,OPTIONS,PUT,DELETE',
                'Access-Control-Allow-Credentials' => 'true'
            ]);
        }
        return $response;
    }

    protected $except = [

    ];

    /**
     * Determine if the request has a URI that should pass through CSRF verification.
     *
     * @param  \Illuminate\Http\Request $request
     * @return bool
     */
    protected function inExceptArray($request)
    {
        foreach ($this->except as $except) {
            if ($except !== '/') {
                $except = trim($except, '/');
            }

            if ($request->is($except)) {
                return true;
            }
        }

        return false;
    }

}
