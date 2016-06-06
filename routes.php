<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


//Route::get('/', function(){
//	return view('welcome');	   
//});

// Route::get('/', function () {
// 	return "hello World";
// });


// Route::get('test',function () {
// 	return views("pages.test");
// });

Route::get('/', [
   'as' => '/', 
   'uses' => 'PagesController@getIndex'
]);

Route::get('about', [
   'as' => 'about', 
   'uses' => 'PagesController@getAbout'
]);

Route::get('contact', [
   'as' => 'about', 
   'uses' => 'PagesController@getContact'
]);

Route::get('help', [
   'as' => 'about', 
   'uses' => 'PagesController@getHelp'
]);


