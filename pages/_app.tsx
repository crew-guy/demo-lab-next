import '../styles/globals/styles.css'
import {ModalProvider} from '@contexts/ModalContext'
import { CurrentDoctorProvider } from '@contexts/DoctorContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <CurrentDoctorProvider>
        <Component {...pageProps} />
      </CurrentDoctorProvider>
    </ModalProvider>
  )
}

export default MyApp