"use client";

import { loginEmailAction } from "@/actions/users";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { Mail } from "lucide-react";

function LogInWithEmail() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const { errorMessage } = await loginEmailAction(formData);
      if (!errorMessage) {
        toast.success("Successfully logged in");
        // Redirect to the desired page after login
        router.push("/"); // Change '/dashboard' to your desired route
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            "Logging in..."
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" /> 
              Login
            </>
          )}{" "}
        </Button>
      </div>
    </form>
  );
}

export default LogInWithEmail;
