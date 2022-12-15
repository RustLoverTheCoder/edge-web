'use client'

import React, { memo } from 'react'
import { usePathname } from 'next/navigation'
import { DocsNavigation } from 'config'

const ArticleHeader = () => {
  const pathname = usePathname()
  const section = DocsNavigation.find((section) => section.links.find((link) => link.href === pathname))
  const title = section?.links.find((link) => link.href === pathname)?.title

  return title || section ? (
    <header className="mb-9 space-y-1">
      {section && <p className="font-display text-sm font-medium text-sky-500">{section.title}</p>}
      {title && <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">{title}</h1>}
    </header>
  ) : null
}

export default memo(ArticleHeader)
