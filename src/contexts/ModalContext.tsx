import React, { useContext, useState } from 'react'

const ModalContext = React.createContext(null)

export const useModal = () => {
    return useContext(ModalContext)
}

export const ModalProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <ModalContext.Provider value={{modalIsOpen, setModalIsOpen}} >
            {children}
        </ModalContext.Provider>
    )
}