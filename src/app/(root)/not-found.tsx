import React from 'react'
import Link from 'next/link'
import AppPath from '@/config/appPath'

export default function NotFound() {
  return (
    <div className="flex flex-row mx-auto my-10">
      <span>Not Founded</span>
      <Link href={AppPath.home()}>홈페이지로 돌아가기</Link>
    </div>
  )
}
