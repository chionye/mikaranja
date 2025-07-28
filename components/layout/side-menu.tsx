import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import { SideMenuNextLink } from "../navigation/side-menu-next-link"
import { menuItems } from "@/lib/menuItems"
import { NavDropDown } from "../navigation"
export const SideMenu = () => {
    return(
        <aside className="bg-stone-50 w-56 h-screen fixed top-16 bottom-0 left-0 py-3 border-r border-black">
            <nav className="w-full ">
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col w-full">
                        {menuItems.map((item) => {
                            if(item.items?.length === 0) {
                                return (
                                    <NavigationMenuItem key={item.id}>
                                        <NavigationMenuLink asChild>
                                            <SideMenuNextLink {...item} />
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                )
                                
                            } else {
                                return <NavDropDown key={item.id} parent={item}  />
                            }
                        })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
            </aside>
    )
}