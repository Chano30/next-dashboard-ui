import Menu from '@/components/Menu'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='h-screen flex overflow-hidden'>
      {/* Left */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] overflow-scroll md:overflow-auto'>
        <Link href="/" className='flex items-center justify-center gap-2'>
          <Image 
            src="/logo.png"
            alt='logo'
            width={32}
            height={32}
          />
          <span className='hidden lg:block font-bold'>SchoolLama</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll md:overflow-auto flex flex-col'>
        <NavBar />
        { children }
      </div>
    </div>
  )
}

export default DashboardLayout