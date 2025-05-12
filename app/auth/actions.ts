"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type AuthState = {
  error?: string | null;
} | null;

export async function signInWithEmail(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      error: error.message,
    };
  }

  // Redirect on success
  redirect("/dashboard");
}

export async function signInWithGoogle() {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  // Get the current origin for the callback URL
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = process.env.NEXT_PUBLIC_SITE_URL || "localhost:3000";
  const callbackUrl = `${protocol}://${host}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: callbackUrl,
    },
  });

  if (error) {
    return { error: error.message };
  }

  // Redirect to the provider URL
  if (data?.url) {
    redirect(data.url);
  }

  return { error: "Could not get provider URL" };
}

export async function signUp(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        first_name: formData.get("firstName") as string,
        last_name: formData.get("lastName") as string,
      },
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  // Redirect on success
  redirect("/dashboard");
}
