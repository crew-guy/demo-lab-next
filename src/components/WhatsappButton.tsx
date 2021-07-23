import React from 'react'
// import whatsappButton from '@images/whatsapp-button.png'
import WAButton from '@images/whatsapp-button.svg'
import Image from 'next/image'
import {lab} from '@data/lab'

const WhatsappButton = () => {
    const buttonHeight = 10
    const buttonWidth = 25

    return (
        <a href={`https://wa.me/${lab.contactNumber}`} className="whatsapp-button">
            {/* <Image height={buttonHeight} width={buttonWidth}   src={whatsappButton} alt="primary-button" /> */}
            <WAButton/>
        </a>
    )
}

export default WhatsappButton
