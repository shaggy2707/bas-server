<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $course = Course::with('users', 'professor')->get();


        return response()->json($course);
    }

    public function getCourseById($id)
    {
        return Course::with('users', 'professor')->find($id);
    }
}
