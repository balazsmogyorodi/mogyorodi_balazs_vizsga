<?php

use App\Models\Tema;
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
        Schema::create('temas', function (Blueprint $table) {
            $table->id('id');
            $table->string(('temanev'));
            $table->timestamps();
        });


        Tema::create([
            'temanev' => "Ház"
        ]);
        Tema::create([
            'temanev' => "Iskola"
        ]);
        Tema::create([
            'temanev' => "Munka"
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('temas');
    }
};
