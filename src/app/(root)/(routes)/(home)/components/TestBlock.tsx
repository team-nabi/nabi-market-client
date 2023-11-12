// 'use client'
import React from 'react'
import { getTest } from '@/services/test/test'

async function getTestValue() {
  const res = await getTest()
  return res
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
