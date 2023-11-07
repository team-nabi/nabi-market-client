// 'use client'
import React from 'react'
import { getTest } from '@/services/test/test'

async function getTestValue(): Promise<{ message: string } | null> {
  try {
    const res = await getTest()
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export default async function TestBlock() {
  const data = await getTestValue()

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getTest()
  //     console.log(await data.json())
  //   }
  //   fetchData()
  // }, [])

  return <div>{'index ' + data?.message}</div>
}
