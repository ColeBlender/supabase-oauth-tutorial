"use client";

function LoginButton() {
  const handleClickLoginButton = () => {};

  return (
    <button
      className="bg-black border-white border w-48 py-2 rounded-md hover:bg-emerald-950"
      onClick={() => handleClickLoginButton()}
    >
      Login with Github
    </button>
  );
}

export default LoginButton;
