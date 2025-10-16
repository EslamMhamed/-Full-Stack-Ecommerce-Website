import { ShoppingBag } from "lucide-react"
import Link from "next/link"

function CartIcon() {
  return (
    <Link href="/cart" className="group relative" >
        <ShoppingBag className="w-5 h-5 group-hover:text-shop_light_green hoverEffect" /> 
        <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full text-xs flex items-center justify-center font-semibold ">0</span>
    </Link>
  )
}

export default CartIcon