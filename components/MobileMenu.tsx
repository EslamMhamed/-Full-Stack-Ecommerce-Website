"use client"

import { AlignLeft } from "lucide-react"
import SideMenu from "./SideMenu"
import { useState } from "react"

function MobileMenu() {

    const [isSideMenuOpen, setIsSideMenuOpen]= useState(false)

  return (
    <>
        <div onClick={()=> setIsSideMenuOpen(!isSideMenuOpen)}>
            <AlignLeft className="hover:text-darkColor hoverEffect md:hidden cursor-pointer" />
            <div className="md:hidden">
                <SideMenu isOpen={isSideMenuOpen} onClose={()=> setIsSideMenuOpen(false)} />
            </div>
        </div>
    </>
  )
}

export default MobileMenu