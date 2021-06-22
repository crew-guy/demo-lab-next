import React from 'react'
import chevron from '@assets/images/chevron.svg'
import Link from 'next/link'
import Image from 'next/image'

const CallToAction = ({linkText, destPath}) => {
    
    return (
        <Link href={destPath} >
            <div className="cta-container" >
                <span className="call-to-action text" >
                    {linkText}
                </span>
                <span className="cta-chevron" >
                    <Image src={chevron} />
                </span>
            </div>
        </Link>
    )
}

export default CallToAction
