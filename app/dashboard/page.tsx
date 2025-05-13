import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const cookieStore = cookies();
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h1 className="text-2xl font-bold">
        This is the protected page for the Dashboard
      </h1>
      <h2 className="mb-4 text-2xl font-bold">Welcome to your Dashboard</h2>
    </div>
  );
}
