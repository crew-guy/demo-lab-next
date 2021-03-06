import React from 'react'
import imgSrc from '@assets/images/like-icon.svg'
import CallToAction from '@components/CallToAction'
import Section from '@components/Section'
import {services} from '@data/services'
import { doctors } from '@data/doctors'

//TODO Generate even these "some services lab offers" from data
// import services from '../../data/services'

const Facilities = () => {
    return (
        <>
            <Section
                imgSrc={imgSrc}
                // linkText={"All Timings"}
                title={process.env.INSTI_TYPE=="lab" ?  "Facilities and tests" : "Facilities" }
                >
            </Section>
            <div className="section-body">
                {services.map((service, i) => {
                    if (i > 1)
                        return
                    // console.log(service,i)
                    return (
                        <div key={i} >{service.name}</div>
                    )
                })}
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <span>...</span>
                    <span className="section-cta right-align">
                        <CallToAction destPath={'/services'} linkText={'All facilities'}/>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Facilities
