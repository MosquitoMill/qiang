<?php

namespace App\Http\Middleware;

class LogAPI
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        if (\Config::get('app.debug')) {
            \Log::debug("请求: " . $request->url());
        }

        return $next($request);
    }
}
