import { Header, SideMenu } from "@/components/layout"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function ProtectedLayout({children}: Props) {
    return(
        <div className="bg-blue-50 min-h-screen relative">
            <Header />
            <SideMenu />
            <main className="ml-56 mt-16">
                {children}
            </main>
        </div>
            
    )
}



