"use client"

import { X } from "lucide-react"
import Logo from "./Logo"
import { headerData } from "@/constants/data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SocialMedia from "./SocialMedia"

type SideMenuProps= {
    isOpen : boolean,
    onClose : ()=> void
}

function SideMenu({isOpen, onClose}: SideMenuProps) {

    const pathname = usePathname()

  return (
    <div className={`fixed inset-0 z-50 w-full h-screen bg-black/50 shadow-xl hoverEffect text-white/70 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}>
        <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6">
            <div className="flex justify-between items-center ">
                <Logo className="text-white" spanDesign= "group-hover:text-white" />
                <button onClick={onClose} className="hover:text-shop_light_green cursor-pointer hoverEffect">
                    <X />
                </button>
            </div>
            <div className="flex flex-col  space-y-3.5 font-semibold tracking-wide text-start">
                {headerData.map(item => (
                    <Link className={`hover:text-shop_light_green hoverEffect ${pathname === item.href && "text-white"}`} href={item.href} key={item.title} >{item.title}</Link>
                ))}
            </div>
            <SocialMedia />
        </div>
    </div>
  )
}

export default SideMenu