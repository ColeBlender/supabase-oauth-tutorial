"use client";

import { GitHubIcon } from "@/components/ui/social-icons";

function LoginButton() {
  const handleClickLoginButton = () => {};

  return (
    <button
      className="bg-black border-white border w-56 py-2 rounded-md hover:bg-emerald-950 flex items-center justify-center gap-2"
      onClick={() => handleClickLoginButton()}
    >
      <GitHubIcon />
      Login with Github
    </button>
  );
}

export default LoginButton;
