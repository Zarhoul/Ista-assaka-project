<?php

namespace App\Http\Controllers;

use App\Http\Auth;
use Illuminate\Http\Request;
use App\Models\Roles;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Roles::all();
            return response()->json(['roles' => $roles]);;
    }

    public function store (Request $request) {
    if (Auth::user()->role !== 'admin') {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $role = Roles::create([
        'name' => $request->input('name')
    ]);
    return response()->json(['role' => $role], 201);
}
    public function update(Request $request, $id) {
    if (Auth::user()->role !== 'admin') {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $role = Roles::find($id);
    if (!$role) {
        return response()->json(['error' => 'Role not found'], 404);
    }
    $role->update([
        'name' => $request->input('name')
    ]);
    return response()->json(['role' => $role]);

    // public function destroy($id)
    // {
    //     $role = Role::findOrFail($id);
    //     $role->delete();
    //     return response()->json(['message' => 'Role deleted']);
    }
}
