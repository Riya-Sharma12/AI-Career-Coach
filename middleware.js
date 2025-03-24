// import { clerkMiddleware , createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";


// const isProtectedRoute = createRouteMatcher([
//     "/dashboard(.*)",
//     "/resume(.*)",
//     "/interview(.*)",
//     "/ai-cover-letter(.*)",
//     "/onboarding(.*)",
//   ]);
// export default clerkMiddleware(async(auth,req)=>{
//     const {userId} = await auth()

//     if(!userId && isProtectedRoute(req)){
//         const {redirectToSignIn} = await auth()
//         return redirectToSignIn()
//     }
//     return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };


import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId, redirectToSignIn } = auth();

  // ✅ Allow public routes (including sign-in/sign-up) without auth
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Allow public routes for Clerk auth pages
    "/((?!_next|.*\\.(?:css|js|map|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|otf|webp|json|txt|xml|csv|pdf|docx?|xlsx?|zip)).*)",
    "/(api|trpc)(.*)",
    "/sign-in",
    "/sign-up",
  ],
};
