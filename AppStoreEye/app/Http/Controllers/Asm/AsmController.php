<?php

namespace App\Http\Controllers\Asm;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AsmController extends Controller
{
    //
    public function index(){
        return view('asm.index');

    }
}
