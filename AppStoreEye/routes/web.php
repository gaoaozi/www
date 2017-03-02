<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', array('as'=>'index', function () {
    return view('index');
}
));

Route::group(['prefix' => 'rank', 'namespace' => 'Rank'], function()
{
    Route::get('/realtimerank', 'RankController@getRealTimeRank');
    #return view('rank.realtimerank');
    Route::get('/index/country/{country}/device/{device}/brand/{brand}/genre/{genre}', 'RankController@currentRealTimeRank');
});


Route::group(['prefix' => 'asm', 'namespace' => 'Asm'], function()
{
    Route::get('/index', 'AsmController@index');
    Route::get('/adsintroduce', function () {
        return view('asm.adsintroduce');
    });
    Route::get('/aboutus', function () {
        return view('asm.aboutus');
    });
});





Route::get('/about', function () {
    return view('about');
});
Route::get('/work', function () {
    return view('work');
});
Route::get('/contact', function () {
    return view('contact');
});
Auth::routes();

Route::get('/home', 'HomeController@index');

