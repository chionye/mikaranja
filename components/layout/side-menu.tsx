/** @format */

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SideMenuNextLink } from "../navigation/side-menu-next-link";
import { menuItems } from "@/lib/menuItems";
import { NavDropDown } from "../navigation";
import { TaskModal } from "../task/task-modal";
import { Button } from "../ui/button";
import { LucidePlus } from "lucide-react";

export const SideMenu = () => {
  return (
    <aside className='bg-stone-50 w-56 h-screen fixed top-16 bottom-0 left-0 py-3 border-r border-black px-4'>
      <nav className='w-full'>
        <NavigationMenu>
          <NavigationMenuList className='flex flex-col w-full items-start'>
            <TaskModal
            button={
              <Button size={"sm"} variant={"ghost"} className='cursor-pointer px-0'>
                <span className='bg-black p-1 rounded-full text-white'>
                  <LucidePlus />
                </span>{" "}
                <span className='capitalize text-[16px]'>Add Task</span>
              </Button>
            }
          />
            {menuItems.map((item) => {
              if (item.items?.length === 0) {
                return (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <SideMenuNextLink {...item} />
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              } else {
                return <NavDropDown key={item.id} parent={item} />;
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </aside>
  );
};
