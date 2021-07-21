import HomeLayout from '@components/layouts/HomeLayout'
import {motion} from 'framer-motion'
import React from 'react'
import Modal from '@components/Modal'
import {useModal} from "@contexts/ModalContext"

const App = () => {
  const {modalIsOpen} = useModal()

  return (
    <>
      {/* <motion.div
        exit={{
          x:'-100vw'
        }}
        transition={{
          ease: 'easeInOut',
          duration:1.5
        }}
        className="layout-container"> */}
      <div
        className="layout-container">
        <HomeLayout/>
      </div>
      {/* </motion.div> */}
      {modalIsOpen && <Modal/>}
    </>
  )
}

export default App

