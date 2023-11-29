import React from 'react'
import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '@/services/apiClient'
import { User } from '@/types/user'
import { getServerCookie } from '@/utils/getServerCookie'
import Logo from '../logo'
import { MenuButton } from './components'
import RightSide from './sections/RightSide'

const getUserInfo = async (): Promise<User | null> => {
  try {
    const token = getServerCookie()
    const res = await apiClient.get(
      ApiEndPoint.getValidateUser(),
      {},
      {
        Authorization: `${token}`,
      },
    )
    return res?.data?.userInfo
  } catch (e) {
    return null
  }
}

const Header = async () => {
  const userInfo = await getUserInfo()

  return (
    <header className="absolute top-0 left-0 z-10 grid items-center justify-between w-full grid-cols-3 px-2 h-nav shadow-bottom bg-background-color">
      <section className="flex items-center justify-start">
        <MenuButton isLoggedIn={!!userInfo} />
      </section>
      <section className="flex items-center justify-center">
        <Logo />
      </section>
      <section className="flex items-center justify-end gap-2">
        <RightSide isLoggedIn={!!userInfo} currentUser={userInfo} />
      </section>
    </header>
  )
}

export default Header
