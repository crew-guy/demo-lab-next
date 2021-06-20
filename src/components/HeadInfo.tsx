import React from 'react'
import threeIcons from '@assets/images/three-circles.svg'
import CallButton from '@components/CallButton'
import { lab } from '@data/lab'
import Image from 'next/image'

const HeadInfo = () => {
    return (
        <>
            <div className="test-and-book">
                <p className="book-appoint">Book tests & appointments</p>
                <Image
                    src={threeIcons} className="three-icons" alt="more info"
                />
            </div>
            <CallButton contactNumber={lab.contactNumber}/>
        </>
    )
}

export default HeadInfo
