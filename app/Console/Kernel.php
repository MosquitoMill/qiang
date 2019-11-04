<?php

namespace App\Console;

use App\Console\Commands\ResetRiderDayOrderNumber;
use App\Console\Commands\ResetRiderMonthOrderNumber;
use App\Console\Commands\ResetRiderWeekOrderNumber;
use App\Console\Commands\ResetStoreMaxNumber;
use function foo\func;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
        Commands\ResetStoreMaxNumber::class,
        ResetStoreMaxNumber::class,
        ResetRiderDayOrderNumber::class,
        ResetRiderWeekOrderNumber::class,
        ResetRiderMonthOrderNumber::class

    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
        $schedule->command('reset:max_number')->dailyAt('01:30')->before(function () {
            \Log::info('开始重置店铺最大流水号！');
        })->after(function () {
            \Log::info('重置店铺流水号成功！');
        });

        $schedule->command('reset:day_order_number')->dailyAt('01:30')->before(function () {
            \Log::info('开始重置骑手日订单量！');
        })->after(function () {
            \Log::info('重置骑手日订单量成功！');
        });

        $schedule->command('reset:week_order_number')->weekly()->sundays()->at('01:30')->before(function () {
            \Log::info('开始重置骑手周订单量！');
        })->after(function () {
            \Log::info('重置骑手周订单量成功！');
        });

        $schedule->command('reset:month_order_number')->monthlyOn(1, '01:30')->before(function () {
            \Log::info('开始重置骑手月订单量！');
        })->after(function () {
            \Log::info('重置骑手月订单量成功！');
        });
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
