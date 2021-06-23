import React from 'react'
import CallButton from './CallButton'
import WhatsappButton from './WhatsappButton'
import cross from '../assets/images/cross.svg'
import {useCurrentDoctor} from '../contexts/DoctorContext'
import { useModal } from '../contexts/ModalContext'
import Image from 'next/image'

const Modal = () => {
    const { currentDoctor,setCurrentDoctor } = useCurrentDoctor()
    const { modalIsOpen, setModalIsOpen } = useModal()
    console.log(currentDoctor)

    return (
    <div className="modal-container">
        <div className="modal">
                <button className="cross-button" onClick={
                    () => {
                        console.log('I was clicked')
                        setModalIsOpen(false)
                        console.log(modalIsOpen)
                        document.body.classList.remove('unfocus')
                    }
                } >
                <Image src={cross} alt="close modal" />
            </button>
            <div className="doc-info">
                <div className="img-cnr">
                    <img className="doc-img" src={currentDoctor.imgSrc} ></img>
                </div>
                <div className="text">
                    <div className="card-title">{ currentDoctor.name}</p>
                    <div>{currentDoctor.qualification} </p>
                    <div>{currentDoctor.speciality}</p>
                </div>
            </div>
            <div className="interact">
                <a href={currentDoctor.consultOnline} className="row">Consult Online</a>
                <div className="row">
                    <CallButton contactNumber={currentDoctor.phoneNumber} />
                    <WhatsappButton/>
                </p>
            </div>
        </div>
    </div>
)}

export default Modal
