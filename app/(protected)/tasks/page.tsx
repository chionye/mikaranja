import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucidePlus } from "lucide-react"

import Link from "next/link"
import { Header, SideMenu } from "@/components/layout"
import { TaskModal } from "@/components/task/task-modal"

export default function TasksPage() {
    return(
        <div className="bg-blue-50 min-h-screen relative">
            <Header />
            <SideMenu />
            <main className="ml-56 mt-16">
            <div className="flex flex-col items-center justify-center text-center">
                <p>Hi Debs, <br/>what do you want to do today?</p>
                <TaskModal />
            </div>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>
            </main>
        </div>
    )
}