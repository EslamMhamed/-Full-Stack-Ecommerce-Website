import { cn } from "@/lib/utils"

type SubTitleProps = {
    children : React.ReactNode,
    className ?:string
}

function SubTitle({children, className}:SubTitleProps) {
  return (
    <p className={cn("font-semibold font-sans text-gray-90 ", className)}>
        {children}
    </p>
  )
}

export default SubTitle