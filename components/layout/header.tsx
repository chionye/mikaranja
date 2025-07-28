import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

export const Header = () => {
    return(
        <header className="bg-stone-50 fixed top-0 left-0 right-0 p-3 border-b border-black h-16">
            <div className="flex justify-between items-center">
                <div><Link href={'/tasks'}>TaskMaster</Link></div>
                <div className="flex gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button variant={'ghost'}>Log out</Button>
                </div>
            </div>
        </header>
    )
}