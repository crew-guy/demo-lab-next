import React from 'react'
// import threeIcons from '@assets/images/three-circles.svg'
import ThreeIcons from '@assets/images/three-circles.svg'
import CallButton from '@components/CallButton'
import { lab } from '@data/lab'
import Image from 'next/image'

const HeadInfo = () => {
    return (
        <div className="head-info-box">
            <div className="test-and-book">
                <div className="book-appoint">
                    {process.env.INSTI_TYPE=="lab" ?  "Book tests & appointments" : "Book appointments" }
                </div>
                {/* <Image
                    src={threeIcons} className="three-icons" alt="more info"
                /> */}
                <ThreeIcons className="three-icons"/>
            </div>
            <CallButton contactNumber={lab.contactNumber}/>
        </div>
    )
}

export default HeadInfo