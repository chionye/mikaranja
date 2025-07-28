import { ReactNode } from "react";

export type MenuItem = {
    id?: string;
    label: string;
    icon: ReactNode;
    endIcon?: ReactNode;
    url?: string
    items: MenuItem[];
}