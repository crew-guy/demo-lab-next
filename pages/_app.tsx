import '../styles/globals/styles.css'
import {ModalProvider} from '@contexts/ModalContext'
import { CurrentDoctorProvider } from '@contexts/DoctorContext'
import { CarouselContainer } from '../src/components/Carousel'
import Meta from '@components/Meta'
// import {AnimateSharedLayout,AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {

  // console.log(process.env.INSTI_TYPE)
  return (
    <ModalProvider>
      <CurrentDoctorProvider>
        <CarouselContainer />
        {/* <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter> */}
            <Meta/>
            <Component {...pageProps} />
          {/* </AnimatePresence>
        </AnimateSharedLayout> */}
      </CurrentDoctorProvider>
    </ModalProvider>
  )
}

export default MyApp