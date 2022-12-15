'use client'

import React, { memo } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DocsRight = () => {
  const pathname = usePathname()
  const tableOfContents: any[] = []
  const isActive = (section: any) => {
    return false
  }
  return (
    <>
      <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav aria-labelledby="on-this-page-title" className="w-56">
          {tableOfContents.length > 0 && (
            <>
              <h2 id="on-this-page-title" className="font-display text-sm font-medium text-slate-900 dark:text-white">
                On this page
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {tableOfContents.map((section) => (
                  <li key={section.id}>
                    <h3>
                      <Link href={`#${section.id}`}>
                        <div className={clsx(isActive(section) ? 'text-sky-500' : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300')}>
                          {section.title}
                        </div>
                      </Link>
                    </h3>
                    {section.children.length > 0 && (
                      <ul className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                        {section.children.map((subSection) => (
                          <li key={subSection.id}>
                            <Link href={`#${subSection.id}`}>
                              <a className={isActive(subSection) ? 'text-sky-500' : 'hover:text-slate-600 dark:hover:text-slate-300'}>{subSection.title}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>
      </div>
    </>
  )
}

export default memo(DocsRight)
