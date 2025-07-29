/** @format */

import { MenuItem } from "@/types";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import { SideMenuNextLink } from "./side-menu-next-link";
import { Button } from "../ui/button";
import { LucidePlus } from "lucide-react";

interface Props {
  parent: MenuItem;
}

export const NavDropDown = ({ parent }: Props) => {
  return (
    <div>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <SideMenuNextLink {...parent} />
        </NavigationMenuLink>
      </NavigationMenuItem>
      <div className='border-l ml-3'>
        {parent.items.map((subitem) => {
          return (
            <NavigationMenuItem key={subitem.id}>
              <NavigationMenuLink asChild>
                <SideMenuNextLink {...subitem} />
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </div>
    </div>
  );
};
