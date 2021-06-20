import React from 'react'
import floatBack from '../assets/images/float-back.svg'
import { useHistory } from 'react-router-dom'
import Image from 'next/image'

const Backbutton = () => {
    const history = useHistory()
    return (
        <div onClick={()=>history.push('/')} className="floating-button">
            <Image src={floatBack} alt="" />
        </div>
    )
}

export default Backbutton
