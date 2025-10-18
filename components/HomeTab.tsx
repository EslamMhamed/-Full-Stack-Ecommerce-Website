import { productType } from "@/constants/data"
import Link from "next/link"

type HomeTabProps = {
    selectedTab: string,
    onTabSelected : (tab: string)=> void
}

function HomeTab({onTabSelected, selectedTab}:HomeTabProps) {
  return (
    <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex items-center gap-3 font-semibold text-sm">
            {productType.map(item=> (
                <button onClick={()=> onTabSelected(item?.title)} className={`border border-shop_light_green/20 px-4 py-1.5 rounded-full md:px-6 md:py-2 hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect cursor-pointer ${selectedTab === item.title ?'text-white bg-shop_light_green border-shop_light_green': 'bg-shop_light_green/20'}`} key={item.title}>{item.title}</button>
            ))}
        </div>
        <Link  className={`border border-shop_light_green/30 px-4 py-1.5 rounded-full md:px-6 md:py-2 hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect cursor-pointer`} href={"/shop"} >See all</Link>
    </div>
  )
}

export default HomeTab