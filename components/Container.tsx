import { cn } from "@/lib/utils"

type ContainerProps = {
    children : React.ReactNode,
    className ?: string
}
function Container({children, className}: ContainerProps) {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4", className)}>{children}</div>
  )
}

export default Container