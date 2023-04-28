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
         Schema::create('trainees', function (Blueprint $table) {
            // trianee(id,firstname,lastname,diplomat,CIN,CEF,CNE)
            // ignore profile for now
          $table->id()->autoIncrement();
          $table->string("CNE");
          $table->enum("diplomat",['Oui,Non']);
          $table->date('dateNaissance');
          $table->string("codeMassar")->nullable();
          $table->foreignId('idFilliere')->constrained('filieres')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
         Schema::dropIfExists('trainees');
    }
};
