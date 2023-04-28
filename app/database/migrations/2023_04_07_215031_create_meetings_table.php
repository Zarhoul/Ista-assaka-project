<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('meetings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user')
                    ->constrained('users', 'id')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
            $table->datetime("created");
            $table->enum("status", ["pending", "accepted", "rejected"])->default("pending");
            $table->datetime("meeting_time")->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('meetings');
    }
};
