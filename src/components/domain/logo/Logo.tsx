import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'

const Logo = () => {
  return (
    <nav>
      <Link className="text-text-color" href={AppPath.home()}>
        <Image
          className="xs:hidden"
          src={Assets.headerLogo}
          alt="logo"
          priority={true}
        />
        <Image
          className="hidden xs:block xs:w-10"
          src={Assets.logo}
          alt="logo"
          priority={true}
        />
      </Link>
    </nav>
  )
}

export default Logo
