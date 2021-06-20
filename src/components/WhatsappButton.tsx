import React from 'react'
import whatsappButton from '../assets/images/whatsapp-button.svg'
import Image from 'next/image'

const WhatsappButton = () => {
    return (
        <a href="https://wa.me/84448369102" className="whatsapp-button">
            <Image src={whatsappButton} alt="primary-button" />
        </a>
    )
}

export default WhatsappButton
