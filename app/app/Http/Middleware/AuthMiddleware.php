<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Token;

class AuthMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // fetch the token
        $token = Token::whereToken($request -> token) -> first();
        if(!isset($token)) return response() -> json([
            "error" => "invalid token"
        ], 401);
        // get the user
        define("AUTH_USER", $token -> owner);

        return $next($request);
    }
}
