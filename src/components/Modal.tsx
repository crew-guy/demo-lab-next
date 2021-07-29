import React from 'react'
import CallButton from '@components/CallButton'
import WhatsappButton from '@components/WhatsappButton'
// import cross from '@assets/images/cross.svg'
import Cross from '@assets/images/cross.svg'
import {useCurrentDoctor} from '@contexts/DoctorContext'
import { useModal } from '@contexts/ModalContext'
// import Image from 'next/image'
import {motion} from 'framer-motion'

const Modal = () => {
    const { currentDoctor,setCurrentDoctor } = useCurrentDoctor()
    const { modalIsOpen, setModalIsOpen } = useModal()
    // console.log(currentDoctor)

    return (
    <div className="modal-container">
        <div className="blur-layer"></div>
            <div
                className="modal"
            >
                <button className="cross-button" onClick={
                    () => {
                        // console.log('I was clicked')
                        setModalIsOpen(false)
                        // console.log(modalIsOpen)
                        document.body.classList.remove('unfocus')
                        document.querySelector('.layout-container').classList.remove('blurred')
                        document.querySelector('.carousel-wrapper').classList.remove('blurred')
                    }
                } >
                {/* <Image src={cross} alt="close modal" /> */}
                <Cross/>
            </button>
            <div className="doc-info">
                <div className="img-cnr">
                    {/* <Image width={140} height={140} src={currentDoctor.imgSrc} className="doc-img"  /> */}
                    <img src={currentDoctor.imgSrc} className="doc-img"  />
                </div>
                <div className="text">
                    <p className="card-title">{ currentDoctor.name}</p> 
                    <p>{currentDoctor.qualification} </p>
                    <p>{currentDoctor.speciality}</p>
                </div>
            </div>
            <div className="interact">
                <a href={currentDoctor.consultOnline} className="row">Consult Online</a>
                <p className="row">
                    <CallButton contactNumber={currentDoctor.phoneNumber} />
                    <p>or</p>
                    <WhatsappButton/>
                </p>
            </div>
        </div>
    </div>
)}

export default Modal
