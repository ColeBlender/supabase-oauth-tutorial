import LoginButton from "../../components/LoginButton";
import SignOutButton from "../../components/SignOutButton";
import { getUser } from "../../lib/auth";

async function LoginPage() {
  const user = await getUser();

  return <>{user ? <SignOutButton /> : <LoginButton />}</>;
}

export default LoginPage;
