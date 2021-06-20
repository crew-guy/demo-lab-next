import React from 'react'
import callButton from '@assets/images/call-button.svg'
import Image from 'next/image'

const CallButton = ({contactNumber}) => {
    return (
        <a href={`tel:${contactNumber}`} className="call-button">
            <Image src={callButton} alt="primary-button" />
        </a>
    )
}

export default CallButton
