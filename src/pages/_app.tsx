import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tempcast</title>
      </Head>

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>

      <style global jsx>{`
        font-family: ${inter.style.fontFamily};
      `}</style>
    </>
  )
}
