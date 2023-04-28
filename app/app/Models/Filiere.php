<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Trainee;
class Filiere extends Model
{
    use HasFactory;
    protected $fillable=[
    "NameFormation",
    "abbreviation",
    "NiveauFormation",
    "TypeFormation",
    "AnneeEtude",
    "ModeFormation",
    "NiveauScolaire",
    "url" 
];
function stagiaires(){
        return $this -> belongsTo(Trainee::class,'user');
    }
}
