import { cn } from "@/lib/utils"
import Link from "next/link"

type LogoProps = {
    className?: string,
    spanDesign?: string
}


function Logo({className, spanDesign}: LogoProps) {
  return (
    <Link href={"/"} className={cn("text-2xl text-shop_dark_green font-black uppercase tracking-wider hover:text-shop_light_green group font-sans hoverEffect", className)} >
        <h2>
            Shopcar<span className={cn("text-shop_light_green group-hover:text-shop_dark_green hoverEffect", spanDesign)}>t</span>
        </h2>
    </Link>
  )
}

export default Logo