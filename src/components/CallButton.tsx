import React from 'react'
import callButton from '@assets/images/call-button.svg'
import Image from 'next/image'
import Link from 'next/link'

const CallButton = ({contactNumber}) => {
    return (
        <Link href={`tel:${contactNumber}`} className="call-button">
            <Image src={callButton} alt="primary-button" />
        </Link>
    )
}

export default CallButton
