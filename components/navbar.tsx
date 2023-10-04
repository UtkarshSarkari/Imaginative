import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center py-4 px-6">
        <MobileSidebar />
        <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/" />
        </div>
    </div>
  )
}
