import { AppProps } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'

import 'tailwindcss/tailwind.css'
// import '../styles/global.css'
import '@styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
