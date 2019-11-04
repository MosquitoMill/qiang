<?php

namespace App\Providers;

use App\Interfaces\AdminInterface;
use App\Models\Admins;
use App\Repositories\AdminRepository;
use App\Repositories\ModelRepository;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->singleton(AdminInterface::class, AdminRepository::class);
        $this->app->alias(AdminInterface::class, 'admin');

        $this->app->singleton('admin', function ($app) {
            return new AdminRepository(new Admins());
        });

    }
}
