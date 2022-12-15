'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const Page = () => {
  const pathname = usePathname()
  return (
    <div>
      <div>{pathname}</div>
    </div>
  )
}

export default Page
