import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("AuthCallback: Processing callback");
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/dashboard";

  console.log("next url is:", next);

  if (code) {
    console.log("AuthCallback: Exchanging code for session");
    const cookieStore = cookies();
    const supabase = await createClient(cookieStore);
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("AuthCallback: Error:", error);
      return NextResponse.redirect(
        new URL("/auth/signin?error=auth-failed", requestUrl.origin),
      );
    }

    // Redirect to the next page if provided, otherwise go to dashboard
    console.log("AuthCallback: Success, redirecting to:", next);
    return NextResponse.redirect(new URL(next, requestUrl.origin));
  }

  console.log("AuthCallback: No code present, redirecting to error page");
  return NextResponse.redirect(
    new URL("/auth/auth-code-error", requestUrl.origin),
  );
}
