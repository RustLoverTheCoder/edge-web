import React from 'react'
import { DocsNavigation } from 'config'
import { Content } from 'components/docs'

export async function generateStaticParams() {
  let allLinks = DocsNavigation.flatMap((section) => section.links)

  return allLinks.map((link) => {
    return {
      name: [link.pathname],
    }
  })
}

const Page = () => {
  return <Content />
}

export default Page
