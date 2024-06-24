
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
// paths that require authentication
const requireAuth= ["/analytics/dashboard", "/analytics/customer" ,"/analytics/offer" ,"/analytics/artist"];
export async function middleware(request) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  if (requireAuth.some((path) => pathname.startsWith(path))) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    //check not logged in
    if (!token) {
     const url=  new URL(`/analytics/login`, request.url);
      
      return NextResponse.redirect(url);
    }
  }
  return res;
}