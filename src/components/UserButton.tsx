
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import Image from "next/image"; // Import Next.js Image component
import SignOutButton from "./SignOutButton";

type Props = {
  user: User;
};

const UserButton = ({ user }: Props) => {
  

  // Extract user's full name and avatar URL from user_metadata
  const fullName = user.user_metadata?.full_name || "User";
  const avatarUrl = user.user_metadata?.avatar_url || null;

  // Function to get the first letter of the user's name
  const getInitial = () => {
    return fullName.charAt(0).toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full p-0 cursor-pointer"
        >
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${fullName}'s avatar`}
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full text-gray-700 font-medium">
              {getInitial()}
            </div>
          )}
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Welcome, {fullName}!</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
