import React from 'react'
// import chevron from '@assets/images/chevron.png'
import Chevron from '@assets/images/chevron.svg'
import Link from 'next/link'
import Image from 'next/image'

const CallToAction = ({linkText, destPath}) => {
    const chevronHeight = 10;

    return (
        <Link href={destPath} >
            <div className="cta-container" >
                <span className="call-to-action text" >
                    {linkText}
                </span>
                <span className="cta-chevron" >
                    {/* <Image src={chevron} height={chevronHeight} width={chevronHeight/2} /> */}
                    {/* <Image src={chevron} /> */}
                    <Chevron/>
                </span>
            </div>
        </Link>
    )
}

export default CallToAction
