<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FilmController extends Controller
{
    /**
     * GET /api/films?offset=0&limit=10
     * Lấy danh sách phim theo offset
     */
    public function index(Request $request)
    {
        $offset = $request->get('offset', 0);
        $limit  = $request->get('limit', 10);

        $films = DB::table('film')
            ->offset($offset)
            ->limit($limit)
            ->get();

        return response()->json($films);
    }

    /**
     * GET /api/films/{id}
     * Lấy chi tiết phim
     */
    public function show($id)
    {
        $film = DB::table('film')
            ->where('film_id', $id)
            ->first();

        if (!$film) {
            return response()->json([
                'message' => 'Film not found'
            ], 404);
        }

        return response()->json($film);
    }

    /**
     * POST /api/films
     * Thêm phim
     */
    public function store(Request $request)
    {
        if (!$request->film_id || !$request->name || !$request->type_id) {
            return response()->json([
                'message' => 'film_id, name, type_id are required'
            ], 400);
        }

        $exists = DB::table('film')
            ->where('film_id', $request->film_id)
            ->exists();

        if ($exists) {
            return response()->json([
                'message' => 'Film already exists'
            ], 400);
        }

        DB::table('film')->insert([
            'film_id'            => $request->film_id,
            'name'               => $request->name,
            'directors'          => $request->directors,
            'type_id'            => $request->type_id,
            'has_caption'        => $request->has_caption ?? false,
            'period'             => $request->period,
            'age'                => $request->age,
            'language'           => $request->language,
            'description'        => $request->description,
            'trailer_video_link' => $request->trailer_video_link,
            'photo_link'         => $request->photo_link,
            'banner_link'        => $request->banner_link,
            'start'              => $request->start,
            'rating'             => $request->rating,
            'promotion_id'       => $request->promotion_id
        ]);

        return response()->json([
            'message' => 'Film created successfully'
        ], 201);
    }

    /**
     * PUT /api/films/{id}
     * Cập nhật phim
     */
    public function update(Request $request, $id)
    {
        $updated = DB::table('film')
            ->where('film_id', $id)
            ->update($request->only([
                'name',
                'directors',
                'type_id',
                'has_caption',
                'period',
                'age',
                'language',
                'description',
                'trailer_video_link',
                'photo_link',
                'banner_link',
                'start',
                'rating',
                'promotion_id'
            ]));

        if ($updated === 0) {
            return response()->json([
                'message' => 'Film not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Film updated successfully'
        ]);
    }

    /**
     * DELETE /api/films/{id}
     * Xóa phim
     */
    public function destroy($id)
    {
        $deleted = DB::table('film')
            ->where('film_id', $id)
            ->delete();

        if ($deleted === 0) {
            return response()->json([
                'message' => 'Film not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Film deleted successfully'
        ]);
    }
}

