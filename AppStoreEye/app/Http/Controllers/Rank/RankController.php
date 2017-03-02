<?php

namespace App\Http\Controllers\Rank;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RankController extends Controller
{
    public function getRealTimeRank()
    {
        #return view('real_time_rank')->withPages(Page::all());
        $current_time = strval(date('y-m-d h:i:s',time()));
        return view('rank.realtimerank')->with('current_time', $current_time);

    }

    public function currentRealTimeRank(){
        
    }
}
