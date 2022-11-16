import '../styles/globals.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-C57GT3EVP5" />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C57GT3EVP5', {
            page_path: window.location.pathname,
          });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
    )
}
