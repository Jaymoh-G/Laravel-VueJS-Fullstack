<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{

    public function ControllerMethod()
    {
        return response()->json([
            'msg' => "this is a test message"
        ]);
    }

    public function notFound()
    {
        return "Error";
    }
    public function TestApi()
    {
        return response()->json(['msg' => "some error occured"], 422);
    }
}
