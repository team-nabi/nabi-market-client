import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'

const Logo = () => {
  return (
    <nav>
      <Link className="text-text-color" href={AppPath.home()}>
        <Image src={Assets.headerLogo} alt="logo" />
      </Link>
    </nav>
  )
}

export default Logo
