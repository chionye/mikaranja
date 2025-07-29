/** @format */

import Link from "next/link";
import { MenuItem } from "@/types";

export const SideMenuNextLink = ({
  url = "#",
  label,
  icon,
  endIcon,
}: MenuItem) => {
  return (
    <Link href={url} className='flex flex-row w-full items-center gap-2'>
      {icon}
      <span className='capitalize text-[16px]'>{label}</span>
      {endIcon}
    </Link>
  );
};
