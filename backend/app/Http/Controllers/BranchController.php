<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    /**
     * GET /api/branches
     * Lấy danh sách địa điểm
     */
    public function index()
    {
        return response()->json(
            DB::table('branch')->get()
        );
    }

    /**
     * GET /api/branches/{id}
     * Lấy chi tiết địa điểm
     */
    public function show($id)
    {
        $branch = DB::table('branch')
            ->where('branch_id', $id)
            ->first();

        if (!$branch) {
            return response()->json([
                'message' => 'Branch not found'
            ], 404);
        }

        return response()->json($branch);
    }

    /**
     * POST /api/branches
     * Thêm địa điểm
     */
    public function store(Request $request)
    {
        if (!$request->branch_id || !$request->name) {
            return response()->json([
                'message' => 'branch_id and name are required'
            ], 400);
        }

        $exists = DB::table('branch')
            ->where('branch_id', $request->branch_id)
            ->exists();

        if ($exists) {
            return response()->json([
                'message' => 'Branch already exists'
            ], 400);
        }

        DB::table('branch')->insert([
            'branch_id' => $request->branch_id,
            'name'      => $request->name
        ]);

        return response()->json([
            'message' => 'Branch created successfully'
        ], 201);
    }

    /**
     * PUT /api/branches/{id}
     * Cập nhật địa điểm
     */
    public function update(Request $request, $id)
    {
        if (!$request->name) {
            return response()->json([
                'message' => 'name is required'
            ], 400);
        }

        $updated = DB::table('branch')
            ->where('branch_id', $id)
            ->update([
                'name' => $request->name
            ]);

        if ($updated === 0) {
            return response()->json([
                'message' => 'Branch not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Branch updated successfully'
        ]);
    }

    /**
     * DELETE /api/branches/{id}
     * Xóa địa điểm
     */
    public function destroy($id)
    {
        $deleted = DB::table('branch')
            ->where('branch_id', $id)
            ->delete();

        if ($deleted === 0) {
            return response()->json([
                'message' => 'Branch not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Branch deleted successfully'
        ]);
    }
}

