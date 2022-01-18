<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProfessorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'course_id' => $this->faker->numberBetween(1,3),
            'image' => $this->faker->imageUrl($width = 640, $height = 480),
        ];
    }
}
