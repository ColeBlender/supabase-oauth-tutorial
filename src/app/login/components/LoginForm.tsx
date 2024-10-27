// components/LoginForm.tsx
"use client";

import LogInWithGoogle from "@/app/login/components/LoginWithGoogle_temp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LogInWithEmail from "./LoginWithEmail";
import SignupButton from "./SignupButton";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <LogInWithEmail />
          <LogInWithGoogle />
          <SignupButton />
        </div>
      </CardContent>
    </Card>
  );
}
