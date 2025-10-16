import { cn } from "@/lib/utils"
import Link from "next/link"

type LogoProps = {
    clasName?: string
}


function Logo({clasName}: LogoProps) {
  return (
    <Link href={"/"} className={cn("text-2xl text-shop_dark_green font-black uppercase tracking-wider hover:text-shop_light_green group font-sans hoverEffect", clasName)} >
        <h2>
            Shopcar<span className="text-shop_light_green group-hover:text-shop_dark_green hoverEffect">t</span>
        </h2>
    </Link>
  )
}

export default Logo