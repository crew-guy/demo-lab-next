import React,{useEffect} from 'react'
import chevron from '@assets/images/chevron.png'
import {useCurrentDoctor} from '@contexts/DoctorContext'
import { useModal } from '@contexts/ModalContext'
import Image from 'next/image'

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
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    useEffect(() => {
        console.log(currentDoctor, modalIsOpen)
    },[currentDoctor, modalIsOpen])

    return (
        <>
            <div className="card"  onClick={openModal} >
                <div className="img-container">
                    <Image src={doctor.imgSrc} alt="" className="docImg" />
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
                            <Image src={chevron} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
