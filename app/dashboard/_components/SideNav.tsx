"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FileClock, Home, Icon, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import UsageTrack from './UsageTrack'

const SideNav = () => {

  {/* Menu Navigation */}
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history"
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing"
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings"
    },
  ]

  const path=usePathname()
  useEffect(() => {
    console.log(path)
  })
  return (
    
    <div className='h-screen relalative p-5 shadow-sm border bg-white'>
      {/* SideNav Logo */}
      <div className='flex justify-center'>
         <Image src={"/logo.svg"} alt='logo' width={120} height={120} />
      </div>
       <hr className='my-7 border' />
       <div className='mt-3'>
            {menuList.map((menu,index)=>(
                <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${path==menu.path&&'bg-primary text-white'}
                    `}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack/>
        </div>
    </div>
  )
}

export default SideNav