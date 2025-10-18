import { cn } from "@/lib/utils"

type SubTextProps = {
    children : React.ReactNode,
    className ?:string
}

function SubText({children, className}:SubTextProps) {
  return (
    <p className={cn("text-gray-600 text-sm ", className)}>
        {children}
    </p>
  )
}

export default SubText