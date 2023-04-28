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
        Schema::create('document', function (Blueprint $table) {
            $table->id();
            $table->string('nameDoc');
            $table->enum('typeDoc',['att-scolaire','att-interrupstion','get-deplôme','get-bac']);
            $table->string('data');
            $table->datetime('sendingDate');
            $table->datetime('receiveDate');
            $table->enum('status', ['pending', 'accepted', "rejected"])
                ->default("pending");
            $table->foreignId('user')
                        ->constrained('users', 'id')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');

        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('document');
    }
};
