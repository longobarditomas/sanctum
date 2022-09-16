<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Solist;
use App\Models\Artist;
use App\Models\Album;
use App\Models\AlbumArtist;
use App\Models\Concert;

class UserController extends Controller
{
    
    public function artist(Request $request) {
        $artist = Artist::solist()->where('userID', $request->user()->id)->first();
        return response()->json($artist);
    }
    
    public function artists(Request $request) {
        $artists = Solist::with('country')->where('userID', $request->user()->id)->orderBy('is_ensemble')->get();
        return response()->json($artists);
    }

    public function ensembles(Request $request) {
        $ensembles = Artist::ensemble()->where('userID', $request->user()->id)->get();
        return response()->json($ensembles);
    }

    public function albums(Request $request) {
        $artists = Artist::where('userID', $request->user()->id)->pluck('id')->toArray();
        $album_artist = AlbumArtist::whereIn('artistID', $artists)->pluck('albumID')->toArray();
        $albums  = Album::with('artist')->whereIn('id', $album_artist)->get();
        return response()->json($albums);
    }

    public function concerts(Request $request) {
        $concerts = Concert::with('country')->where('userID', $request->user()->id)->get();
        return response()->json($concerts);
    }

}
