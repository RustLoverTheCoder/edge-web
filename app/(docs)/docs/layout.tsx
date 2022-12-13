import Link from 'next/link'
import { Navigation, Prose } from 'components/docs'
import { Header } from 'components/pricing'
import { DocsNavigation } from 'config'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
