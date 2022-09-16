<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\EnsembleController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ConcertController;
use App\Http\Controllers\AuditionController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get('/user/artist', [UserController::class, 'artist']);
});
