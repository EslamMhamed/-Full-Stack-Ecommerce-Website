import { cn } from "@/lib/utils"

type TitleProps = {
    children : React.ReactNode,
    className ?:string
}

function Title({children, className}:TitleProps) {
  return (
    <h2 className={cn("text-3xl font-bold text-shop_dark_green capitalize tracking-wide font-sans ", className)}>
        {children}
    </h2>
  )
}

export default Title