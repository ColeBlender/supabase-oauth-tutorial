import Link from "next/link";

function Header() {
  return (
    <header className="bg-zinc-900 h-16 flex items-center w-full absolute justify-center">
      <nav className="flex gap-8 items-center">
        <Link href="/" className="hover:text-emerald-600">
          Home
        </Link>
        <Link href="/protected-route" className="hover:text-emerald-600">
          Protected Route
        </Link>
        <Link href="/login" className="hover:text-emerald-600">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
