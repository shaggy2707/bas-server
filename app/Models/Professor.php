<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Course;

class Professor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'image'
    ];

    public function professorCourses()
    {
        return $this->belongsTo(Course::class);
    }
}
