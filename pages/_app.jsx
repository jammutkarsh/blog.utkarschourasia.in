import Head from "next/head"
import Script from "next/script"
import "nextra-theme-blog/style.css"
import React from "react"
import "../styles/main.css"

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Head>
        <title>Utkarsh Chourasia</title>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/InterDisplay-roman.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-55182697-1"
        async
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer=window.dataLayer||[]
      function gtag(){dataLayer.push(arguments)}
      gtag('js',new Date)
      gtag('config','UA-55182697-1')
    `,
        }}
      /> */}
    </>
  )
}
