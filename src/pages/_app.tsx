import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
import Head from 'next/head'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tempcast</title>
      </Head>

      <Component {...pageProps} />

      <style global jsx>{`
        font-family: ${inter.style.fontFamily};
      `}</style>
    </>
  )
}
