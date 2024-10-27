import { getUser } from "../lib/auth";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import UserButton from "./UserButton";
import { Package2, Search } from "lucide-react";

async function Header() {
  const user = await getUser();

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      {/* Left side - Logo and Navigation Links */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">StructOptima</span>
        </Link>
        <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/protected-route"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Recipes
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            In-progress
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Special
          </Link>
        </nav>
      </div>

      {/* Right side - Search and LoginLogoutButton */}
      <div className="flex items-center gap-4">
        <form className="relative hidden sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search products..."
            className="pl-8 sm:w-[200px] md:w-[300px]"
          />
        </form>
        <div className="absolute right-4">
          {user ? (
            // `${user.email}`
            <UserButton user={user} />
          ) : (
            <Link href="/login" className="hover:text-emerald-600">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );

}

export default Header;
