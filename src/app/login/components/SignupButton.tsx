'use client'

import Link from "next/link"

export default function SignupButton() {
  return (
    <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
  )
}
