import HomeLayout from '@components/layouts/HomeLayout'

import React from 'react'
import Modal from '@components/Modal'
import {useModal} from "@contexts/ModalContext"

const App = () => {
  const {modalIsOpen} = useModal()

  return (
    <>
      <div>
        <HomeLayout/>
      </div>
      {modalIsOpen && <Modal/>}
    </>
  )
}

export default App

