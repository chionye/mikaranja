/** @format */

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useMemo } from "react";

export const Header = () => {
  const { logout, user } = useAuth();

  const userInitials = useMemo(() => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(
        0
      )}`.toUpperCase();
    } else if (user?.username) {
      return user.username.charAt(0).toUpperCase();
    }
    return "UN";
  }, [user]);

  const avatarUrl = useMemo(() => {
    if (userInitials !== "UN") {
      return `https://api.dicebear.com/8.x/api/svg?seed=${userInitials}`;
    }
    return "https://github.com/shadcn.png";
  }, [userInitials]);

  return (
    <header className='bg-stone-50 fixed top-0 left-0 right-0 p-3 border-b border-black h-16 z-10'>
      <div className='flex justify-between items-center h-full'>
        <div>
          <Link
            href={"/tasks"}
            className='text-xl font-bold text-gray-800 hover:text-gray-900 transition-colors'>
            Toodoles
          </Link>
        </div>
        <div className='flex gap-2 items-center'>
          <Avatar>
            <AvatarImage
              src={avatarUrl}
              alt={`${user?.firstName || user?.username}'s avatar`}
            />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          <Button
            variant={"ghost"}
            onClick={logout}
            className='text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'>
            Log out
          </Button>
        </div>
      </div>
    </header>
  );
};
