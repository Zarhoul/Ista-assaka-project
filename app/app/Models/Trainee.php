<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User_roles;
use App\Models\Filiere;

class Trainee extends Model
{
    use HasFactory;
    
    public $timestamps = false;
    protected $fillable = [
        
          
 "CNE"    ,                 
 "diplomat"  ,                 
 "codeMassar" ,                
 "dateNaissance" ,                
 "idFilliere"
        
    ];
    function filiere(){
        return $this -> hasOne(Filiere::class, 'id', 'idFilliere');
    }
}
