import React, { useContext, useState } from 'react'

const CurrentDoctorContext = React.createContext(null)

export const useCurrentDoctor = () => {
    return useContext(CurrentDoctorContext)
}

export const CurrentDoctorProvider = ({ children }) => {
    const [currentDoctor, setCurrentDoctor] = useState({})

    return (
        <CurrentDoctorContext.Provider value={{currentDoctor, setCurrentDoctor}} >
            {children}
        </CurrentDoctorContext.Provider>
    )
}