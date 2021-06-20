import React from 'react'
import {services} from '../../data/services'
import Backbutton from '../Backbutton'

interface servicesObj {
    name: string,
    target:string
}


const ServicesLayout = () => {
    return (
        <>
            <div className="layout-heading">
                Services
            </div>
            <ul className="services-list">
                {
                    services.map((service:servicesObj) => (
                        <li>{service.name}</li>
                    ))
                }
            </ul>
            <Backbutton/>
        </>
    )
}

export default ServicesLayout
