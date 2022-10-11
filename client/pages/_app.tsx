import type { AppProps } from 'next/app'
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css'
import './auth/Auth.scss'
import '../components/MainForm/MainForm.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
