import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
