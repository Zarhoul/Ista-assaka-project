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
        Schema::create('post_files', function (Blueprint $table) {
            $table->foreignId('post')
                        ->constrained('posts', 'id')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');
            $table->foreignId('file')
                        ->constrained('files', 'id')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
