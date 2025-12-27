<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PromotionController extends Controller
{
    // GET /api/promotions?offset=0&limit=10
    public function index(Request $request)
    {
        $offset = (int) $request->query('offset', 0);
        $limit  = (int) $request->query('limit', 10);

        $data = DB::table('promotion')
            ->offset($offset)
            ->limit($limit)
            ->orderBy('promotion_id', 'desc')
            ->get();

        return response()->json($data);
    }

    // GET /api/promotions/{id}
    public function show($id)
    {
        $promotion = DB::table('promotion')
            ->where('promotion_id', $id)
            ->first();

        if (!$promotion) {
            return response()->json(['message' => 'Promotion not found'], 404);
        }

        return response()->json($promotion);
    }

    // POST /api/promotions
    public function store(Request $request)
    {
        $id = $request->get('promotion_id');
        $name = $request->get('name');
        $discount = $request->get('discount');

        if ($id === null || $name === null || $discount === null) {
            return response()->json(['message' => 'Missing data'], 400);
        }

        $exists = DB::table('promotion')
            ->where('promotion_id', $id)
            ->exists();

        if ($exists) {
            return response()->json(['message' => 'Promotion already exists'], 400);
        }

        DB::table('promotion')->insert([
            'promotion_id' => $id,
            'name' => $name,
            'discount' => $discount
        ]);

        return response()->json(['message' => 'Promotion created'], 201);
    }

    // PUT /api/promotions/{id}
    public function update(Request $request, $id)
    {
        $updated = DB::table('promotion')
            ->where('promotion_id', $id)
            ->update([
                'name' => $request->get('name'),
                'discount' => $request->get('discount')
            ]);

        if ($updated === 0) {
            return response()->json(['message' => 'Promotion not found'], 404);
        }

        return response()->json(['message' => 'Promotion updated']);
    }

    // DELETE /api/promotions/{id}
    public function destroy($id)
    {
        $deleted = DB::table('promotion')
            ->where('promotion_id', $id)
            ->delete();

        if ($deleted === 0) {
            return response()->json(['message' => 'Promotion not found'], 404);
        }

        return response()->json(['message' => 'Promotion deleted']);
    }
}

