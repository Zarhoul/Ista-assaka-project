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
        //info(id, title, date, content)
         Schema::create('infos', function (Blueprint $table) {
          $table->id()->autoIncrement();
          $table->string("name");
          $table->text("description");
          $table->string("email");
          $table->string("address");
          $table->string("phoneNumber");
        });
         
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('infos');

    }
};
