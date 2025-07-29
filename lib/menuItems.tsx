/** @format */

import { MenuItem } from "@/types";
import {
  LucideLayoutDashboard,
} from "lucide-react";
import { v4 as uuid4 } from "uuid";

export const menuItems: MenuItem[] = [
  {
    id: uuid4(),
    label: "My Tasks",
    icon: <LucideLayoutDashboard size={18} />,
    url: "/tasks",
    items: [],
  }
];
