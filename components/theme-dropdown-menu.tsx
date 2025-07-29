
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  FileText,
  Calendar,
  BarChart3,
  Zap,
  Shield,
  Database,
  Globe,
  LucideIcon,
} from "lucide-react";

interface NestedLinkItem {
  label: string;
  href: string;
}

interface MenuItemSubItem {
  id?: string; 
  label: string;
  icon?: LucideIcon; 
  href?: string; 
  items?: NestedLinkItem[]; 
}
interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  items: MenuItemSubItem[];
}

type MenuItemsArray = MenuItem[];


const NavigationMenu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(
    null
  );

  const menuItems: MenuItemsArray = [
    {
      id: "workspace",
      label: "Workspace",
      icon: Home,
      items: [
        {
          id: "overview",
          label: "Overview",
          icon: BarChart3,
          href: "#overview",
        },
        {
          id: "projects",
          label: "Projects",
          icon: FileText,
          items: [
            { label: "Active Projects", href: "#active" },
            { label: "Completed Projects", href: "#completed" },
            { label: "Templates", href: "#templates" },
            { label: "Archive", href: "#archive" },
          ],
        },
        {
          id: "calendar",
          label: "Calendar",
          icon: Calendar,
          href: "#calendar",
        },
        {
          id: "analytics",
          label: "Analytics",
          icon: BarChart3,
          items: [
            { label: "Performance", href: "#performance" },
            { label: "Time Tracking", href: "#time-tracking" },
            { label: "Reports", href: "#reports" },
          ],
        },
      ],
    },
    {
      id: "team",
      label: "Team",
      icon: Users,
      items: [
        {
          id: "members",
          label: "Team Members",
          icon: Users,
          href: "#members",
        },
        {
          id: "permissions",
          label: "Permissions",
          icon: Shield,
          items: [
            { label: "Roles", href: "#roles" },
            { label: "Access Control", href: "#access" },
            { label: "Guest Access", href: "#guests" },
          ],
        },
        {
          id: "integrations",
          label: "Integrations",
          icon: Zap,
          items: [
            { label: "Slack", href: "#slack" },
            { label: "GitHub", href: "#github" },
            { label: "Figma", href: "#figma" },
            { label: "Browse All", href: "#browse-integrations" },
          ],
        },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      items: [
        {
          id: "general",
          label: "General",
          icon: Settings,
          href: "#general",
        },
        {
          id: "data",
          label: "Data Management",
          icon: Database,
          items: [
            { label: "Import/Export", href: "#import-export" },
            { label: "Backup", href: "#backup" },
            { label: "API Keys", href: "#api-keys" },
          ],
        },
        {
          id: "workspace-settings",
          label: "Workspace Settings",
          icon: Globe,
          items: [
            { label: "Branding", href: "#branding" },
            { label: "Custom Fields", href: "#custom-fields" },
            { label: "Automation", href: "#automation" },
          ],
        },
      ],
    },
  ];

  const handleDropdownClick = (itemId: string) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
    setOpenNestedDropdown(null);
  };

  const handleNestedDropdownClick = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenNestedDropdown(openNestedDropdown === itemId ? null : itemId);
  };

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Navigating to:", href);
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  };

  return (
    <div className='w-full bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4'>
        <nav className='flex items-center space-x-8 h-16'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>C</span>
            </div>
            <span className='font-semibold text-gray-900'>ClickUp Style</span>
          </div>

          {menuItems.map(
            (
              item: MenuItem 
            ) => (
              <div key={item.id} className='relative'>
                <button
                  onClick={() => handleDropdownClick(item.id)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'>
                  <item.icon className='w-4 h-4' />
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === item.id && (
                  <div className='absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                    <div className='py-2'>
                      {item.items.map(
                        (
                          subItem: MenuItemSubItem 
                        ) => (
                          <div key={subItem.id || subItem.label}>
                            {subItem.items ? (
                              <div className='relative'>
                                <button
                                  onClick={(e) =>
                                    handleNestedDropdownClick(
                                      subItem.id as string,
                                      e
                                    )
                                  } 
                                  className='w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200'>
                                  <div className='flex items-center space-x-3'>
                                    {subItem.icon && (
                                      <subItem.icon className='w-4 h-4 text-gray-500' />
                                    )}
                                    <span>{subItem.label}</span>
                                  </div>
                                  <ChevronRight
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                      openNestedDropdown === subItem.id
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                  />
                                </button>

                                {openNestedDropdown === subItem.id && (
                                  <div className='ml-4 border-l-2 border-gray-100'>
                                    {subItem.items.map(
                                      (
                                        nestedItem: NestedLinkItem
                                      ) => (
                                        <a
                                          key={nestedItem.label}
                                          href={nestedItem.href}
                                          onClick={(e) =>
                                            handleLinkClick(nestedItem.href, e)
                                          }
                                          className='block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200'>
                                          {nestedItem.label}
                                        </a>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <a
                                href={subItem.href as string} 
                                onClick={(e) =>
                                  handleLinkClick(subItem.href as string, e)
                                } 
                                className='flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200'>
                                {subItem.icon && (
                                  <subItem.icon className='w-4 h-4 text-gray-500' />
                                )}
                                <span>{subItem.label}</span>
                              </a>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          )}

          <div className='flex-1 flex justify-end items-center space-x-4'>
            <button className='p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-50'>
              <Users className='w-5 h-5' />
            </button>
            <button className='p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-50'>
              <Settings className='w-5 h-5' />
            </button>
            <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
              <span className='text-white text-sm font-medium'>JD</span>
            </div>
          </div>
        </nav>
      </div>

      {(openDropdown || openNestedDropdown) && (
        <div
          className='fixed inset-0 z-40'
          onClick={() => {
            setOpenDropdown(null);
            setOpenNestedDropdown(null);
          }}
        />
      )}
    </div>
  );
};

export default NavigationMenu;
