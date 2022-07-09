import '../styles/globals.css'
import { AppContextProvider } from '../store/app_context'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
