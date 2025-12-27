<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TypeController extends Controller
{
    /**
     * GET /api/types
     * Lấy danh sách thể loại
     */
    public function index()
    {
        return response()->json(
            DB::table('type')->get()
        );
    }

    /**
     * GET /api/types/{id}
     * Lấy chi tiết thể loại
     */
    public function show($id)
    {
        $type = DB::table('type')
            ->where('type_id', $id)
            ->first();

        if (!$type) {
            return response()->json([
                'message' => 'Type not found'
            ], 404);
        }

        return response()->json($type);
    }

    /**
     * POST /api/types
     * Thêm thể loại
     */
    public function store(Request $request)
    {
        if (!$request->type_id || !$request->name) {
            return response()->json([
                'message' => 'type_id and name are required'
            ], 400);
        }

        $exists = DB::table('type')
            ->where('type_id', $request->type_id)
            ->exists();

        if ($exists) {
            return response()->json([
                'message' => 'Type already exists'
            ], 400);
        }

        DB::table('type')->insert([
            'type_id' => $request->type_id,
            'name'    => $request->name
        ]);

        return response()->json([
            'message' => 'Type created successfully'
        ], 201);
    }

    /**
     * PUT /api/types/{id}
     * Cập nhật thể loại
     */
    public function update(Request $request, $id)
    {
        if (!$request->name) {
            return response()->json([
                'message' => 'name is required'
            ], 400);
        }

        $updated = DB::table('type')
            ->where('type_id', $id)
            ->update([
                'name' => $request->name
            ]);

        if ($updated === 0) {
            return response()->json([
                'message' => 'Type not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Type updated successfully'
        ]);
    }

    /**
     * DELETE /api/types/{id}
     * Xóa thể loại
     */
    public function destroy($id)
    {
        $deleted = DB::table('type')
            ->where('type_id', $id)
            ->delete();

        if ($deleted === 0) {
            return response()->json([
                'message' => 'Type not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Type deleted successfully'
        ]);
    }
}

