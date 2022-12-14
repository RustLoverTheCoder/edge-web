import './globals.css'
import Script from 'next/script';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <Script src='https://rsms.me/inter/inter.css' />
      <body>{children}</body>
    </html>
  )
}
