import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {PAGES_URL} from "@/constants";
import {TOKEN_TYPES} from "@/services/token/token.types";

export function middleware(request: NextRequest) {
    const {nextUrl, url, cookies} = request;
    const isUserAuth = cookies.get(TOKEN_TYPES.ACCESS_TOKEN)?.value;

    if (nextUrl.pathname === '/' && !isUserAuth) {
        return NextResponse.redirect(new URL(PAGES_URL.AUTH, url))
    }

    if (nextUrl.pathname.startsWith(PAGES_URL.CABINET) && !isUserAuth) {
        return NextResponse.redirect(new URL(PAGES_URL.AUTH, url))
    }

    if((nextUrl.pathname === PAGES_URL.AUTH || nextUrl.pathname === '/') && isUserAuth) {
        return NextResponse.redirect(new URL(PAGES_URL.CABINET, url))
    }
}

export const config = {
    matcher: '/:path*',
}