import React from 'react'
import chevron from '@assets/images/chevron.svg'
import {Link} from 'react-router-dom'
import Image from 'next/image'

const CallToAction = ({linkText, destPath}) => {
    
    return (
        <Link to={destPath} className="cta link-text">
            <span className="call-to-action text" >
                {linkText}
            </span>
            <span className="cta-chevron" >
                <Image src={chevron} />
            </span>
        </Link>
    )
}

export default CallToAction
