import React from 'react'
import CallToAction from '@components/CallToAction'
import Image from 'next/image'

interface ISection{
    // TODO : Fix this image type to include properly defined types as per use case to avoid type checkin errors 
    imgSrc: any,
    title:string,
    // linkText:string,
    // children:any,
}

const Section: React.FC<ISection> = ({
    imgSrc,
    title,
    // children,
    // linkText
}) => {
    // console.log(children)
    return (
        <section>
            <div className="section-heading">
                <Image src={imgSrc} height={10} width={10}  alt="" className = "section-logo" />
                <div className="section-title">{title}</div>
            </div>
        </section>
    )
}

export default Section
