'use client'

import React, { useEffect, useState } from 'react'
import Markdoc from '@markdoc/markdoc'
import { Callout } from './helpers'
import { Fence } from './Fence'

const Content = () => {
  const [content, setContent] = useState(null)
  const init = async () => {
    const response = await fetch('/api/docs')
    const resContent = await response.json()
    setContent(resContent)
  }
  useEffect(() => {
    init()
  }, [])

  const components = {
    Callout,
    Fence,
  }

  return Markdoc.renderers.react(content, React, { components })
}

export default Content
