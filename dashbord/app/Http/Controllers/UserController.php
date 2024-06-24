<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash; // Import Hash facade for password hashing

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('role')->get(); // Eager load the 'role' relationship

        $users->transform(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'active' => $user->active,
                'role_id' => $user->role_id,
                'role_name' => $user->role ? $user->role->name : null, // Access role name
            ];
        });

        return response()->json($users);
    }

    public function getNeed()  
    {
        $users = User::with('role')->get(); // Eager load the role relationship

        $users->transform(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'active' => $user->active,
                'role_id' => $user->role_id,
                'rolename' => $user->role->name,
                'image'=>$user->image
            ];
        });

        return response()->json($users, 200);
    }

    public function storeuser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|max:255',
            'role_id' => 'required|integer',
            'active' => 'required|boolean',
            'image'=>'nullable|string'
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role_id' => $request->input('role_id'),
            'active' => $request->input('active'),
            'image'=>$request->input('image')
        ]);

        return response()->json($user, 200); // Return the created user object
    }
    public function deleteAll()
    {
        User::truncate(); // Deletes all records from the 'users' table

        return response()->json(['message' => 'All users have been deleted'], 200);
    }

    public function changeStatus(Request $request)
    {
        $userId = $request->id;
    
        $user = User::find($userId);
    
        if ($user !== null) {
            $user->active = !$user->active;
            $user->save(); 
            return response()->json(['message' => 'User status updated successfully']);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function delete(Request $request){
        $userId=$request->id;
        $user = User::find($userId);
        if ($user !== null) {
            $user->delete();
            return response()->json(['message' => 'User  Deleted successfully']);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }

    }

    public function changeRole(Request $request, $role_id)
    {
        $userId = $request->id; // Adjust according to how 'id' is passed in the request
        $user = User::find($userId);

        if ($user) {
            $user->role_id = $role_id;
            $user->save();

            return response()->json(['message' => 'User role updated successfully']);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'id' =>'required|integer',
            'old_password' => 'required|string',
            'new_password' => 'required|string',
        ]);

        $user = User::find($request->id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json(['message' => 'Old password is incorrect'], 400);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json(['message' => 'Password updated successfully']);
    }
    public function searchByName(Request $request)
    {
        $name = $request->input('name');
        $users = User::where('name', 'LIKE', '%' . $name . '%')->with('role')->get();

        $users->transform(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'active' => $user->active,
                'role_id' => $user->role_id,
                'role_name' => $user->role ? $user->role->name : null,
            ];
        });

        return response()->json($users);
    }
}
    

