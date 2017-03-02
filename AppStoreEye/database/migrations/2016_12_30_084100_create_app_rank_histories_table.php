<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppRankHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_rank_history', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';
            $table->increments('id');
//            $table->integer('app_id')->comment('app主键');
//            $table->integer('rank')->comment('app排名');
//            $table->integer('list')->comment('free/gross/paid类型');
//            $table->integer('category')->comment('排名类型:总榜单、单类别榜单');
//            $table->integer('device')->comment('设备:iphone/ipad');
//            $table->string('country')->comment('国家');
//            $table->timestamps('update_at')->comment('记录更新时间');
//            $table->timestamp('created_at')->comment('记录创建时间');
            $table->integer('app_id');
            $table->integer('rank');
            $table->integer('list');
            $table->integer('category');
            $table->integer('device');
            $table->string('country');
            $table->timestamp('updated_at');
            $table->timestamp('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_rank_history');
    }
}
