"use client"
import { headerData } from "@/constants/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

function HeaderMenu() {
    const pathname = usePathname()

  return (
    <div className=" hidden md:inline-flex items-center justify-between  w-1/3 text-sm  capitalize font-semibold text-lightColor ">
        {headerData.map(item =>(
            <Link className={`hover:text-shop_light_green hoverEffect relative group ${pathname === item.href && "text-shop_light_green"}`} key={item.title} href={item.href} >
                {item.title}
                <span className={`absolute w-0 h-0.5 bg-shop_light_green -bottom-0.5 right-1/2 group-hover:w-1/2 group-hover:right-0 hoverEffect ${pathname === item.href && "w-1/2"} `} />
                <span className={`absolute bg-shop_light_green h-0.5 w-0 -bottom-0.5 left-1/2 hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === item.href && "w-1/2"}`} />
            </Link>
        ))}
    </div>
  )
}

export default HeaderMenu