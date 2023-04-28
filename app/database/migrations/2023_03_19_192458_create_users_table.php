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
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('last_name', 50);
        $table->string('first_name', 50);
        $table->string('username', 50)->unique();
        $table->string('email', 100)->nullable();
        $table->string('cin', 20);
        $table->string('address', 100)->nullable();
        $table->string('password');
        $table->string('tel', 20)->unique();
        $table->unsignedBigInteger('stg_id')->nullable();
        $table->foreign('stg_id')->references('id')->on('trainee')->onDelete('cascade')->onUpdate('cascade');
        $table->foreignId('profile')->nullable()->constrained('files')->onDelete('cascade')->onUpdate('cascade');;
    });
}



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
