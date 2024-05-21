<?php

use App\Models\Szavak;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id('id');
            $table->string('angol');
            $table->string('magyar');
            $table->foreignId('temaId')->references('id')->on('temas');
            $table->timestamps();
        });
        Szavak::create([
            'angol' => 'house',
            'magyar' => 'ház',
            'temaId' => 1
        ]);
        Szavak::create([
            'angol' => 'living room',
            'magyar' => 'nappali',
            'temaId' => 1
        ]);
        Szavak::create([
            'angol' => 'kitchen',
            'magyar' => 'konyha',
            'temaId' => 1
        ]);
        Szavak::create([
            'angol' => 'teacher',
            'magyar' => 'tanár',
            'temaId' => 2
        ]);
        Szavak::create([
            'angol' => 'student',
            'magyar' => 'tanuló',
            'temaId' => 2
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szavaks');
    }
};
