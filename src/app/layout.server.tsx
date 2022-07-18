// import { Html, Head, Main, NextScript } from 'next/document'
import { themeClass } from '@ds-pack/components'
import '@ds-pack/components/src/reset.css'
import '../global.css'

export default function Layout({ children }) {
  return (
    <html className={themeClass}>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>DS Pack</title>
      </head>
      <body>
        {children}
        {/* <Main />
        <NextScript /> */}
      </body>
    </html>
  )
}
