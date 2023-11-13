import React from 'react'
import Link from 'next/link'
import AppPath from '@/config/appPath'

const Logo = () => {
  return (
    <nav>
      <Link className="text-text-color" href={AppPath.home()}>
        Logo
      </Link>
    </nav>
  )
}

export default Logo
