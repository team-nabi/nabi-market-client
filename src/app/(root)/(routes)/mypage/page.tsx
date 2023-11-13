import React from 'react'
import UserInfo from './components/UserInfo'

const MyPage = () => {
  return (
    <main className="flex flex-col items-center gap-5 mt-5">
      <header>
        <h1>마이페이지</h1>
      </header>
      <section>
        <UserInfo />
      </section>
      <section>{/* TODO: 각 내용에 대한 라우팅 추가 */}</section>
    </main>
  )
}

export default MyPage
