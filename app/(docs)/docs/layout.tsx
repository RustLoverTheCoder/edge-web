import { Navigation, Prose, ArticleHeader, DocsRight } from 'components/docs'
import { Header } from 'components/pricing'
import { DocsNavigation } from 'config'
import './prism.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
            <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
            <Navigation navigation={DocsNavigation} className="w-64 pr-8 xl:w-72 xl:pr-16" />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article>
            <ArticleHeader />
            <Prose>{children}</Prose>
          </article>
        </div>
        <DocsRight />
      </div>
    </>
  )
}
