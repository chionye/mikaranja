/** @format */

import { MenuItem } from "@/types";
import {
  LucideBookmark,
  LucideBriefcase,
  LucideHeartPulse,
  LucideLayoutDashboard,
  LucidePlus,
  LucideShoppingBasket,
  LucideStar,
  LucideUsers,
} from "lucide-react";
import { v4 as uuid4 } from "uuid";

export const menuItems: MenuItem[] = [
  {
    id: uuid4(),
    label: "My Tasks",
    icon: <LucideLayoutDashboard size={18} />,
    url: "/tasks",
    items: [],
  },
  // {
  //   id: uuid4(),
  //   label: "Filters",
  //   icon: <LucideBookmark size={18} />,
  //   url: "#",
  //   items: [
  //     {
  //       id: uuid4(),
  //       label: "Completed",
  //       icon: <LucideStar size={18} />,
  //       url: "/categories",
  //       items: [],
  //     },
  //     {
  //       id: uuid4(),
  //       label: "Family & Friends",
  //       icon: <LucideUsers size={18} />,
  //       url: "/categories/family-and-friends",
  //       items: [],
  //     },
  //     {
  //       id: uuid4(),
  //       label: "Health & Fitness",
  //       icon: <LucideHeartPulse size={18} />,
  //       url: "/categories/health-and-fitness",
  //       items: [],
  //     },
  //     {
  //       id: uuid4(),
  //       label: "Shopping",
  //       icon: <LucideShoppingBasket size={18} />,
  //       url: "/categories/shopping",
  //       items: [],
  //     },
  //     {
  //       id: uuid4(),
  //       label: "Work",
  //       icon: <LucideBriefcase size={18} />,
  //       url: "/categories/work",
  //       items: [],
  //     },
  //   ],
  // },
];
