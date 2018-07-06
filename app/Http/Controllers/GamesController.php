<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Logic\CardsRetriever;

class GamesController extends Controller
{
   
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('game');
    }
}
