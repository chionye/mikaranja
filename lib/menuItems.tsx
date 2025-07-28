import { MenuItem } from "@/types";
import { LucideBookmark, LucideBriefcase, LucideHeartPulse, LucideLayoutDashboard, LucidePlus, LucideShoppingBasket, LucideStar, LucideUsers } from "lucide-react"
import { v4 as uuid4} from "uuid";

export const menuItems: MenuItem[] = [
    {
      id: uuid4(),
      label: 'My Tasks',
      icon: <LucideLayoutDashboard />,
      url: '/tasks',
      items: [],
     
    },
    {
      id: uuid4(),
      label: 'Categories',
      icon: <LucideBookmark />,
      url: '#',
      items: [
        { 
          id: uuid4(), 
          label: 'All Categories', 
          icon: <LucideStar />,
          url: '/categories',
          items: []
        },
        { 
          id: uuid4(), 
          label: 'Family & Friends', 
          icon: <LucideUsers/>,
          url: '/categories/family-and-friends',
          items: []
        },
        { 
          id: uuid4(), 
          label: 'Health & Fitness', 
          icon: <LucideHeartPulse/>,
          url: '/categories/health-and-fitness',
          items: []
        },
        { 
          id: uuid4(), 
          label: 'Shopping', 
          icon: <LucideShoppingBasket />,
          url: '/categories/shopping',
          items: []
        },
        { 
          id: uuid4(), 
          label: 'Work', 
          icon: <LucideBriefcase />,
          url: '/categories/work',
          items: []
        },
        
      ]
    }
  ];