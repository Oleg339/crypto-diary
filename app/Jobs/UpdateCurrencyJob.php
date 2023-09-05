<?php

namespace App\Jobs;

use App\Models\Currency;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class UpdateCurrencyJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct()
    {

    }

    public function handle(): void
    {
        $currencies = Currency::all();

        foreach ($currencies as $currency) {
//            $currency->rates()->create(['rate' => 30000]);
            $ticket = $currency->ticket;
            $rate = null;
            //api call $rate =
            $currency->rates()->create(['rate' => $rate]);
            sleep(3);
        }


    }
}
