import React from 'react'
import PageTitle from '@/components/domain/page-title'
import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '@/services/apiClient'
import { User } from '@/types/user'
import { getServerCookie } from '@/utils/getServerCookie'
import Links from './components/Links'
import UserInfo from './components/UserInfo'

const getUserInfo = async (): Promise<User> => {
  const token = getServerCookie()
  const res = await apiClient.get(
    ApiEndPoint.getValidateUser(),
    {},
    {
      Authorization: `${token}`,
    },
  )
  return res.data.userInfo
}

const MyPage = async () => {
  const userInfo = await getUserInfo()

  return (
    <main className="flex flex-col items-center gap-5 mt-5">
      <PageTitle title="마이페이지" />
      <section>
        <UserInfo user={userInfo} />
      </section>
      <section className="w-full">
        <Links />
      </section>
    </main>
  )
}

export default MyPage
