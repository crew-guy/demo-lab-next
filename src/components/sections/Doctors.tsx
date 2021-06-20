import React from 'react'
import imgSrc from '@assets/images/doc-icon.svg'
import CallToAction from '@components/CallToAction'
import Section from '@components/Section'
import Card from '@components/Card'
import {doctors} from '@data/doctors'


const Doctors = () => {
    return (
        <div>
            <Section
                imgSrc={imgSrc}
                title={"Doctors and Pathologists"}
            >
            </Section>
                <div className="section-body cards-container">
                    {doctors.map((doctor,i) => (
                        <Card key={i} doctor={doctor} /> 
                    ))}
            </div>
            <div className="section-cta" style={{display:"none"}} >
                <CallToAction destPath={'/doctors'} linkText={'All doctors'}/>
            </div>
        </div>
    )
}

export default Doctors
