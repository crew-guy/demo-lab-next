import '../styles/globals/styles.css'
import {ModalProvider} from '@contexts/ModalContext'
import { CurrentDoctorProvider } from '@contexts/DoctorContext'
import { Header } from '../src/components/Header'

function MyApp({ Component, pageProps }) {

  return (
    <ModalProvider>
      <CurrentDoctorProvider>
        <Header/>
        <Component {...pageProps} />
      </CurrentDoctorProvider>
    </ModalProvider>
  )
}

export default MyApp