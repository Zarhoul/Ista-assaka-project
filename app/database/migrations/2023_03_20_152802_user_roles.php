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
        Schema::create('user_roles', function (Blueprint $table) {
            $table->foreignId('user')
                        ->constrained('users', 'id')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');
            $table->foreignId('role')
                        ->constrained('roles', 'id')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');

            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_roles');
    }
};
