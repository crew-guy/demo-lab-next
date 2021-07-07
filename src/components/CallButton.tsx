import React from 'react'
import callButton from '@assets/images/call-button.png'
import Image from 'next/image'
import Link from 'next/link'

const CallButton = ({contactNumber}) => {
    return (
        <div className="call-button">
            <Link href={`tel:${contactNumber}`}>
                <Image src={callButton} alt="primary-button" />
            </Link>
        </div>
    )
}

export default CallButton
