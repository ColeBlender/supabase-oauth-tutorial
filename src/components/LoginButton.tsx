"use client";

import { loginAction } from "@/actions/users";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

function LoginButton() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickLoginButton = (provider: Provider) => {
    startTransition(async () => {
      const { errorMessage, url } = await loginAction(provider);
      if (!errorMessage && url) {
        router.push(url);
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <button
      className="bg-black border-white border w-48 py-2 rounded-md hover:bg-emerald-950"
      onClick={() => handleClickLoginButton("github")}
      disabled={isPending}
    >
      {isPending ? "Logging in..." : "Login with GitHub"}
    </button>
  );
}

export default LoginButton;
