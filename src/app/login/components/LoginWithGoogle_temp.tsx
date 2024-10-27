"use client";

import { loginGoogleAction } from "@/actions/users";
import { Button } from "@/components/ui/button";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

function LoginWithGoogle() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickLoginButton = (provider: Provider) => {
    startTransition(async () => {
      const { errorMessage, url } = await loginGoogleAction(provider);
      if (!errorMessage && url) {
        router.push(url);
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <Button
      className=" w-full "
      onClick={() => handleClickLoginButton("google")}
      disabled={isPending}
    >
      {isPending ? "Logging in..." : "Login with Google"}
    </Button>
  );
}

export default LoginWithGoogle;
