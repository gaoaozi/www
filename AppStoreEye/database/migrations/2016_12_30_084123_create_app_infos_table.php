<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_info', function (Blueprint $table) {

            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';
            $table->increments('id');
//            $table->integer('app_id')->comment('app主键');
//            $table->integer('category')->comment("所属类别");
//            $table->integer('auther')->default(null)->comment("所属公司");
//            $table->string('price')->default(null)->comment("价格");
//            $table->string('img')->comment("图片链接");
//            $table->string('url')->comment("itune链接");
//            $table->string('lastest_version_time')->default(null)->comment("最新版本更新时间");
//            $table->timestamps('updated_at')->comment("记录更新时间");
//            $table->timestamp('created_at')->comment("记录创建时间");
            $table->integer('app_id');
            $table->integer('category');
            $table->integer('auther')->default(null);
            $table->string('price')->default(null);
            $table->string('img');
            $table->string('url');
            $table->string('lastest_version_time')->default(null);
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
        Schema::dropIfExists('app_info');
    }
}
