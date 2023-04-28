<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
// use App\Http\Controllers\NewsController;
use App\Http\Controllers\StatController;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\TraineeController;
use App\Http\Controllers\InfosController;
use App\Http\Controllers\DoccumentController;
use App\Http\Controllers\JsonDataController;
use App\Http\Controllers\ImportFiliereController;
// use App\Http\Controllers\ExcelController;

Route::apiResource("/auth", AuthController::class);

Route::post('/import-excel', [ExcelController::class,'importExcelToMySQL']);
Route::apiResource("/stats", StatController::class) -> only(["index"]);

Route::group([
	"middleware" => "auth"
], function (){
	Route::apiResource("/user", UserController::class);
	Route::apiResource("/user/role", RoleController::class);
	// Route::apiResource("/news", NewsController::class);
	
	Route::apiResource("/meeting", MeetingController::class);
	Route::apiResource("/filiere", FiliereController::class);
	Route::apiResource("/stagiaire", TraineeController::class);
	Route::apiResource("/infos", InfosController::class);
	Route::apiResource("/document", DoccumentController::class);
	Route::post('/import', [JsonDataController::class,"import"]);


});
Route::get("/infos",[InfosController::class,"index"]);
Route::get("/filiere", [FiliereController::class,"index"]);

// TODO : REMOVE AFTER DEV
Route::post("/import", [ImportFiliereController::class, "import"]);

// apiResource
// index
// show
// store
// update
// destroy