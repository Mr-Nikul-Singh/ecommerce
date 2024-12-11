<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $colors = [
            'red',
            'blue',
            'green',
            'yellow',
            'orange',
            'purple',
            'black',
            'white',
        ];

        $shop = User::role('root')->whereHas('shop')->first()?->shop;

        foreach ($colors as $color) {
            $shop->colors()->create([
                'name' => $color,
            ]);
        }
    }
}
