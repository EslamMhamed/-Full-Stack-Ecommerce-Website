"use client"

import { useState } from "react"
import HomeTab from "./HomeTab"
import { productType } from "@/constants/data"

function ProductGrid() {

    const [products, setProducts] = useState([])
    const [loading, setLodaing] = useState(false)
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "" )

  return (
    <div>
        <HomeTab selectedTab = {selectedTab} onTabSelected={setSelectedTab} />
    </div>
  )
}

export default ProductGrid