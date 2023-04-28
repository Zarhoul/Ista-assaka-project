<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('filieres', function (Blueprint $table) {
            $table->id();
            $table->string("NameFormation"); 
            $table->string("abbreviation");
            $table->enum("NiveauFormation", ['Technicien spécialisé', 'Technicien','Qualification','BP','Spécialisation'])
                ->nullable();
            $table->enum("TypeFormation", ['Diplômante', 'Qualifiante'])
                ->default('Diplômante');
            $table->enum("AnneeEtude", ['Première année', 'Deuxième année'])
                ->default('Première année');
            $table->boolean("CoursJour")->default(false);
            $table->boolean("CoursSoir")->default(false);
            $table->enum("NiveauScolaire",["Lycéen","Bachelier","Bac +3","passrelle"]);
            $table->string("url");
             $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('filieres');
    }
};
