<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{
    /**
     * Lấy danh sách role
     * GET /api/roles
     */
    public function index()
    {
        return response()->json(
            DB::table('role')->get()
        );
    }

    /**
     * Lấy chi tiết role theo id
     * GET /api/roles/{id}
     */
    public function show($id)
    {
        $role = DB::table('role')
            ->where('role_id', $id)
            ->first();

        if (!$role) {
            return response()->json([
                'message' => 'Role not found'
            ], 404);
        }

        return response()->json($role);
    }

    /**
     * Thêm role
     * POST /api/roles
     */
    public function store(Request $request)
    {
        $exists = DB::table('role')
            ->where('role_id', $request->role_id)
            ->exists();

        if ($exists) {
            return response()->json([
                'message' => 'Role already exists'
            ], 400);
        }

        DB::table('role')->insert([
            'role_id' => $request->role_id,
            'name'    => $request->name
        ]);

        return response()->json([
            'message' => 'Role created successfully'
        ], 201);
    }

    /**
     * Cập nhật role
     * PUT /api/roles/{id}
     */
    public function update(Request $request, $id)
    {
        $updated = DB::table('role')
            ->where('role_id', $id)
            ->update([
                'name' => $request->name
            ]);

        if ($updated === 0) {
            return response()->json([
                'message' => 'Role not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Role updated successfully'
        ]);
    }

    /**
     * Xóa role
     * DELETE /api/roles/{id}
     */
    public function destroy($id)
    {
        $deleted = DB::table('role')
            ->where('role_id', $id)
            ->delete();

        if ($deleted === 0) {
            return response()->json([
                'message' => 'Role not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Role deleted successfully'
        ]);
    }
}
