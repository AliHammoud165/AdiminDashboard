<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use App\Models\Role;


class rolescontrollers extends Controller
{
public function getall(){
    $roles=Role::all();
    return response()->json($roles,200);
}

public function store(Request $request){
    $request->validate([
        'name'=>'required|string|max:255',
    ]);

    $role=Role::create([
        'name'=>$request->input('name'),

    ]);
    return response()->json([$role],200);
}
}
