import React,{useEffect} from 'react'
import Chevron from '@assets/images/chevron.svg'
// import chevron from '@images/chevron.png'
import {useCurrentDoctor} from '@contexts/DoctorContext'
import { useModal } from '@contexts/ModalContext'
import Image from 'next/image'
import Section from '@components/Section'
import imgSrc from '@assets/images/like-icon.svg'

interface Props{
    name: string,
    qualification: string,
    imgSrc: any,
    speciality: string,
    phoneNumber: string,
    whatsappNumber: string,
    consultOnline:string
}

const Card = ({ doctor }) => {
    const {currentDoctor, setCurrentDoctor} = useCurrentDoctor() 
    const { modalIsOpen, setModalIsOpen } = useModal()

    const openModal =() => {
        setModalIsOpen(true)
        setCurrentDoctor(doctor)
        document.body.classList.add('unfocus')
        document.querySelector('.layout-container').classList.add('blurred')
        document.querySelector('.carousel-wrapper').classList.add('blurred')
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    useEffect(() => {
    },[currentDoctor, modalIsOpen])

    return (
        <>
            <div className="card"  onClick={openModal} >
                <div className="img-container">
                    <Image width={70} height={70} src={doctor.imgSrc} alt="" className="docImg" />
                </div>
                <div className="text">
                    <div className="card-title">{ doctor.name}</div>
                    <div>{doctor.qualification} </div>
                    <div>{ doctor.speciality}</div>
                    <div className="consult-doc">
                        <span className="call-to-action text" style={{width:"auto"}} >
                            Consult Now
                        </span>
                        <span className="cta-chevron" >
                            {/* <Image src={chevron} /> */}
                            <Chevron/>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
