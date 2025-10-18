import { cn } from "@/lib/utils"
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react"
import Link from "next/link"

type SocialMediaProps = {
    className?: string,
    iconClassName?: string
}

const socialLink = [
    {title: "Youtube", icon: <Youtube className="w-5 h-5" />},
    {title: "Github", icon: <Github className="w-5 h-5" />},
    {title: "Linkedin", icon: <Linkedin className="w-5 h-5" />},
    {title: "Facebook", icon: <Facebook className="w-5 h-5" />},
    {title: "Slack", icon: <Slack className="w-5 h-5" />},
]

function SocialMedia({className, iconClassName}: SocialMediaProps) {
  return (
    <div className={cn("flex items-center gap-3.5 ", className)}>
            {socialLink.map(item => (
                <Link className={cn("p-2 border rounded-full text-white hover:border-shop_light_green hoverEffect", iconClassName)} href="#" key={item.title}>
                    {item.icon}
                </Link>
            ))}
    </div>
  )
}

export default SocialMedia