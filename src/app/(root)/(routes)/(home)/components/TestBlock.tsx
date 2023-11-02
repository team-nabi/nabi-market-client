'use client'

import React, { useEffect } from 'react'
import { getTest } from '@/services/test/test'

// async function getTestValue() {
//   const res = await getTest()
//   const data = await res.json()
//   return data
// }

export default function TestBlock() {
  // const data = await getTestValue()
  // console.log(data.message)

  useEffect(() => {
    async function fetchData() {
      const data = await getTest()
      console.log(await data.json())
    }
    fetchData()
  }, [])

  return <div>{'index '}</div>
}
