<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * ĐĂNG KÝ
     * POST /api/register
     */
    public function register(Request $request)
{
    // 1️⃣ Validate tối thiểu
    if (
        !$request->usrname ||
        !$request->passwd ||
        !$request->email
    ) {
        return response()->json([
            'message' => 'Missing required fields'
        ], 422);
    }

    // 2️⃣ Check trùng username hoặc email
    $exists = DB::table('usr')
        ->where('usrname', $request->usrname)
        ->orWhere('email', $request->email)
        ->exists();

    if ($exists) {
        return response()->json([
            'message' => 'Username or email already exists'
        ], 409);
    }

    // 3️⃣ Insert user mới (role mặc định: R1 = user)
    DB::table('usr')->insert([
        'usrname' => $request->usrname,
        'passwd'  => Hash::make($request->passwd),
        'name'    => $request->name ?? $request->usrname,
        'email'   => $request->email,
        'role_id' => 'R1'
    ]);

    return response()->json([
        'message' => 'Register successful'
    ], 201);
}

    /**
     * ĐĂNG NHẬP
     * POST /api/login
     * (GIỮ NGUYÊN LOGIC BẠN ĐANG DÙNG)
     */
   public function login(Request $request)
{
    $username = $request->input('usrname');
    $password = $request->input('passwd');

    if (!$username || !$password) {
        return response()->json([
            'message' => 'Username and password are required'
        ], 400);
    }

    $user = DB::table('usr')
        ->where('usrname', $username)
        ->first();

    if (!$user || !Hash::check($password, $user->passwd)) {
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    return response()->json([
        'message' => 'Login successful',
        'user' => [
            'usr_id'  => $user->usr_id,
            'usrname' => $user->usrname,
            'name'    => $user->name,
            'email'   => $user->email,
            'role_id' => $user->role_id
        ]
    ], 200);
}


    /**
     * ĐĂNG XUẤT
     * POST /api/logout
     * (SPA → FE tự xoá localStorage)
     */
    public function logout()
    {
        return response()->json([
            'message' => 'Logout successful'
        ]);
    }
}
