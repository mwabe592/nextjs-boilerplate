import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async (cookieStore: ReturnType<typeof cookies>) => {
  const cookieObject = await cookieStore;

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieObject.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieObject.set({ name, value, ...options });
          } catch (error) {
            // Handle the error here
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieObject.set({ name, value: "", ...options });
          } catch (error) {
            // Handle the error here
          }
        },
      },
    },
  );
};
