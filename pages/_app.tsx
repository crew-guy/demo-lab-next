import '../styles/globals/styles.css'
import {ModalProvider} from '@contexts/ModalContext'
import { CurrentDoctorProvider } from '@contexts/DoctorContext'
import { CarouselContainer } from '../src/components/Carousel'

function MyApp({ Component, pageProps }) {

  // console.log(process.env.INSTI_TYPE)
  return (
    <ModalProvider>
      <CurrentDoctorProvider>
        <CarouselContainer/>
        <Component {...pageProps} />
      </CurrentDoctorProvider>
    </ModalProvider>
  )
}

export default MyApp