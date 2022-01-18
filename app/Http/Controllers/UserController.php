<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = User::with('courses')->get();


        return response()->json($user);
    }

    public function getUserById($id)
    {
        return User::with('courses')->find($id);
    }
}
