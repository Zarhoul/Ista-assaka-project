<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    public function definition(): array
    {
        return [
            "last_name"=>$this->faker->name(),
            "first_name"=>$this->faker->name(),
            'username' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            "cin"=> $this -> faker->regexify('[A-Za-z0-9]{20}'),
            "address"=> $this->faker->name(),
            "tel" => $this->faker->regexify('^0[1-9]([-. ]?[0-9]{2}){4}$'), // generate a French phone number
            'password' => hash("sha256", "password"), // password
            "stg_id"=>null,
            "profile" =>null,
        
        ];
    }
}
